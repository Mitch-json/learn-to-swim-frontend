import React, { useEffect, useState } from 'react'
import './AdminClients.css'
import './AdminHome.css'

import { useCookies } from 'react-cookie';
import * as jose from 'jose'
import { Link, useNavigate } from 'react-router-dom';

import AdminSidebar from './admin-components/AdminSidebar'
import { Oval } from 'react-loader-spinner'

function AdminHome() {
    const [loading, setLoading] = useState(false)

    const [username, setUsername] = useState("")

    const [sections, setSections] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const navigate = useNavigate()

    useEffect(() => {
        if (cookies.userToken) {
            const secret = new TextEncoder().encode(process.env.REACT_APP_JWT_SECRET,)
            async function verifyJWT(){
                try {
                    const { payload, protectedHeader } = await jose.jwtVerify(cookies.userToken.token,secret)
                    setUsername(payload.user.username) 
                } catch (error) {
                    console.log(error)
                    navigate('/login')
                }
            }
            verifyJWT()
            setLoading(true)
            fetch(`${process.env.REACT_APP_BACKEND_URL}/sections`)
            .then(response => response.json())
            .then(data => {
                if(data.sections){
                    setSections(data.sections)
                    setLoading(false)
                }else if(data.alert){
                    setLoading(false)
                    
                }else if(data.err){
                    setLoading(false)

                }
            })
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <div className="app-container">
            <AdminSidebar username={username} active={"home"} />
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Display Sections</h1>
                
                </div>
                {
                    loading ?
                        <div className="row d-flex justify-content-center" style={{height: '100vh', width: '100%'}}>
                            <div className="col-md-18 flex-container4">
                                <Oval
                                    color="#106eea"
                                    height={50}
                                    width={50}
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="black"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                    backgroundColor="#fcf9f9"
                                />

                            </div>
                        </div> 
                    :  
                        <div className="products-area-wrapper gridView">
                            {sections.map(section => 
                                <Link key={section._id} className="products-row" to={`/admin/home/${section.name}/section?sec_id=${section._id}`}>
                                    <button className="cell-more-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                                    </button>
                                    <div className="product-cell image">
                                        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product"></img>
                                        <span>{section.name}</span>
                                    </div>
                                    <div className="product-cell category"><span className="cell-label">Category:</span>Furniture</div>
                                    <div className="product-cell status-cell">
                                    <span className="cell-label">Status:</span>
                                    <span className="status active">Active</span>
                                    </div>
                                    <div className="product-cell sales"><span className="cell-label">Sales:</span>11</div>
                                    <div className="product-cell stock"><span className="cell-label">Stock:</span>36</div>
                                    <div className="product-cell price"><span className="cell-label">Price:</span>$560</div>
                                </Link>   
                            )}
                        </div>  
                    }
            </div>
        </div>
    )
}

export default AdminHome
