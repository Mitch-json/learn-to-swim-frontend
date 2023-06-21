import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import * as jose from 'jose'
import { Helmet } from 'react-helmet'
import AdminSidebar from '../../admin-components/AdminSidebar'
import { Oval } from 'react-loader-spinner'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminAddPricing() {
    const [username, setUsername] = useState("")
    const [buttonLoading, setButtonLoading] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    const [classification, setClassification] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [classes, setClasses] = useState("")

    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()

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

            
            
        } else {
            navigate('/login')
        }
        

    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault();
        setButtonLoading(true)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({description: description, classification: classification, price: price, classes: classes})
        };
        fetch(`${process.env.REACT_APP_BACKEND_URL}/add-pricing`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.msg) {
                    toast.info(data.msg)
                    setButtonLoading(false)
                    navigate(-1)
                }else if(data.err){
                    toast.error(data.err)
                    setButtonLoading(false)
                } 
        }).catch(error =>{
            toast.error("Network connection error")
            setButtonLoading(false)
        })
        
    }

    const goBack = ()=>{
        navigate(-1)
    }

    return (
        <div className="app-container">
            <Helmet>
                <title>Admin - Pricing</title>
            </Helmet>
            <AdminSidebar username={username} active={"pricing"}/>
            <ToastContainer 
                theme="dark"
            />
            <div className="app-content">
                <div className="app-content-header">
                <h1 className="app-content-headerText">Add New Pricing</h1>
                
                <button onClick={goBack} className="app-content-headerButton">Go Back</button>
                </div>
                
                <div className="products-area-wrapper gridView" style={{justifyContent: 'center'}}>
                        <div className="products-row no-pointer" style={{width: "calc(50% - 16px)"}}>
                            <div className="center" style={{height: 'auto', paddingTop: '40px', paddingBottom: '40px'}}>
                                <div className="title" style={{marginBottom: '15px'}}>
                                    <span>Add New Pricing</span>
                                </div>
                                <form  className="signin-form">
                                    <div className="form-group mb-3">
                                        <label className="label .fgs">Classification</label>
                                        <input type="text" value={classification} onChange={e=>setClassification(e.target.value)} className="form-control" placeholder="Classification" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label .fgs">Description</label>
                                        <input type="text" value={description} onChange={e=>setDescription(e.target.value)} className="form-control" placeholder="Description" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label .fgs">Price</label>
                                        <input type="email" value={price} onChange={e=>setPrice(e.target.value)} className="form-control" placeholder="Price per course" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label .fgs">No of classes</label>
                                        <input type="text" value={classes} onChange={e=>setClasses(e.target.value)}  className="form-control" placeholder="No of classes" required />
                                    </div>
                                    
                                    {
                                        buttonLoading ?
                                            <label  className="upload-btn" style={{width: '100%'}}>
                                                <div className="center-btn">
                                                    <Oval
                                                        color="white"
                                                        height={20}
                                                        width={20}
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
                                            <button type="button" style={{width: '100%'}} onClick={handleSubmit} className="upload-btn" name="uploadbutton">Add Pricing</button>
                                    }
                                </form>

                                

                            </div>
                        </div> 
                </div>
            </div>
        </div>
    
    )
}

export default AdminAddPricing
