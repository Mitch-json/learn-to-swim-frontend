import React, { useEffect, useState } from 'react'
import './AdminClients.css'
import './AdminHome.css'
import { Helmet } from 'react-helmet'
import { useCookies } from 'react-cookie';
import * as jose from 'jose'
import { Link, useNavigate } from 'react-router-dom';

import AdminSidebar from './admin-components/AdminSidebar'
import { Oval } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminPricing() {
    const [loading, setLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)  
    const [pricings, setPricings] = useState([])

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
                    navigate('/login')
                }
            }
            verifyJWT()
            setLoading(true)
            fetchPricings()
        } else {
            navigate('/login')
        }
    }, [])

    const fetchPricings = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/pricings`)
            .then(response => response.json())
            .then(data => {
                if(data.pricings){
                    setPricings(data.pricings)
                    setLoading(false)
                }else if(data.alert){
                    setLoading(false)
                    
                }else if(data.err){
                    setLoading(false)

                }
        }).catch(error =>{
            toast.error("Network connection error")
            setLoading(false)
        })
    }

    const deletePricing = (id) =>{
        setDeleteLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/delete-pricing/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.msg) {
                    fetchPricings()
                    setDeleteLoading(false)
                }
        }).catch(error =>{
            toast.error("Network connection error")
            setDeleteLoading(false)
        })
    }
    return (
        <div className="app-container">
            <Helmet>
                <title>Admin - Pricing</title>
            </Helmet>
            <ToastContainer 
                theme="dark"
            />
            <AdminSidebar username={username} active={"pricing"} />
            <div className="app-content">
                <div className="app-content-header">
                    <h1 className="app-content-headerText">Pricing</h1>

                    <Link className="mode-switch add-image-btn" to={`/admin/pricing/add-pricing/`}>Add Pricing</Link>
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
                            {pricings.map(pricing => 
                                <div key={pricing._id} style={{width: 'auto', minWidth: '250px'}} className="products-row no-pointer">
                                    
                                    <div className="product-cell image">
                                        <h3>{pricing.classification}</h3>
                                    </div>
                                    <div className="product-cell sales">
                                        <span className="cell-label">Description:</span>
                                        {pricing.description}
                                    </div>
                                    <div className="product-cell price">
                                        <span className="cell-label">Price:</span>
                                        Ksh {pricing.price}
                                    </div>
                                    <div className="product-cell stock">
                                        <span className="cell-label">Classes:</span>
                                        {pricing.classes}
                                    </div>
                                    <div className="product-cell status-cell">
                                        <span className="cell-label">Action:</span>
                                        <Link className="status active" to={`/admin/pricing/edit-pricing?pricing_id=${pricing._id}`} >Edit</Link>
                                    </div>
                                    <div className="product-cell status-cell">
                                        <span className="cell-label">Action:</span>
                                        {
                                            deleteLoading ?
                                                <label  className="status active">
                                                    <div className="center-delete">
                                                        <Oval
                                                            color="black"
                                                            height={14}
                                                            width={14}
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                            visible={true}
                                                            ariaLabel='oval-loading'
                                                            secondaryColor="white"
                                                            strokeWidth={2}
                                                            strokeWidthSecondary={2}
                                                            
                                                        />

                                                    </div>

                                                </label>
                                            :
                                                <button onClick={(e) => {deletePricing(pricing._id)}} className="status active">Delete</button>
                                        }
                                    </div>
                                    
                                </div>    
                            )}
                            
                        </div>  
                    }
            </div>
        </div>
    
    )
}

export default AdminPricing
