import React, { useEffect, useState } from 'react'
import './AdminClients.css'
import './AdminHome.css'
import { Helmet } from 'react-helmet'
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

    const sectionImages = {
        "Home": "https://diggiweb.com/wp-content/uploads/2021/03/video-animation.png",
        "About": "https://img.freepik.com/free-vector/laptop-computer-with-academic-icon-white-background_1308-70256.jpg",
        "Contact": "https://i.pinimg.com/736x/4a/ff/d8/4affd89a9f1bef68eaddc24a749fa532.jpg",
        "Gallery": "https://www.thepostingtree.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-20-at-5.38.21-AM.jpeg"
    }

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
            <Helmet>
                <title>Admin - Home</title>
            </Helmet>
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
                                        {
                                            section.name === "Home" ?
                                                <img src={sectionImages.Home} alt="product"></img>
                                            :
                                                section.name === "About" ?
                                                    <img src={sectionImages.About} alt="product"></img>
                                                :
                                                    section.name === "Contact" ?
                                                        <img src={sectionImages.Contact} alt="product"></img>
                                                    :
                                                        section.name === "Gallery" ?
                                                            <img src={sectionImages.Gallery} alt="product"></img>
                                                        :
                                                            <img src="https://greenway.com.vn/wp-content/uploads/2020/02/z2296537155291_031df31c0bf85c7bc1de48699cb3c814.jpg" alt="product"></img>
                                                            
                                        }
                                        <span>{section.name} Section</span>
                                    </div>
                                    <div className="product-cell status-cell">
                                        <span className="cell-label">Status:</span>
                                        <span className="status active">Active</span>
                                    </div>
                                    
                                </Link>   
                            )}
                        </div>  
                    }
            </div>
        </div>
    )
}

export default AdminHome
