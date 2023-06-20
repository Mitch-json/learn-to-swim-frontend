import { useCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react'
import './AdminClients.css'
import { Helmet } from 'react-helmet'
import AdminSidebar from './admin-components/AdminSidebar'
import * as jose from 'jose'
import { Link, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'
function AdminClients() {
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)
    const [clients, setClients] = useState([])
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
                    navigate('/login')
                }
            }
            verifyJWT()
            setLoading(true)
            fetch(`${process.env.REACT_APP_BACKEND_URL}/clients`)
            .then(response => response.json())
            .then(data => {
                if(data.clients){
                    setClients(data.clients)
                    setLoading(false)
                }else if(data.err){
                    console.log(data.err)
                    setLoading(false)
                }
            })
        } else {
            navigate('/login')
        }
    }, [])

    const getDate = (createdAt)=>{
        var date = new Date(createdAt)
        return date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})
    }

    return (
        <div className="app-container">
            <Helmet>
                <title>Admin - Clients</title>
            </Helmet>
            <AdminSidebar username={username} active={"clients"} />
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Clients</h1>
                
                </div>
                <div className="products-area-wrapper tableView">
                    <div className="products-header">
                        <div className="product-cell image">
                            Full Name
                        </div>
                        <div className="product-cell category">
                            Email
                        </div>
                        <div className="product-cell status-cell">
                            Package
                        </div>
                        <div className="product-cell sales">
                            Phone
                        </div>
                        <div className="product-cell stock">
                            Date
                        </div>
                    </div>
                    {
                        loading ?
                            <div className="row d-flex justify-content-center" style={{height: '80vh', width: '100%'}}>
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
                        
                            clients.map(client => 
                                <div key={client._id} className="products-row">
                                    <div className="product-cell image">
                                        <span>{client.fullName}</span>
                                    </div>
                                    <div className="product-cell category">
                                        {client.email}
                                    </div>
                                    <div className="product-cell status-cell">
                                        <span className="status active">{client.package}</span>
                                    </div>
                                    <div className="product-cell sales">
                                        {client.phone}
                                    </div>
                                    <div className="product-cell stock">
                                        {getDate(client.createdAt)}
                                    </div>
                                </div>
                            )
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminClients
