import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import * as jose from 'jose'

import AdminSidebar from '../../admin-components/AdminSidebar'
import { Oval } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminAddImage() {
    const [username, setUsername] = useState("")
    const [buttonLoading, setButtonLoading] = useState(false)    
    const [sections, setSections] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    const navigate = useNavigate()

    const [image, setImage] = useState("")
    const [imageName, setImageName] = useState("")
    const [secID, setSecID] = useState("")
    

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

            setSecID(searchParams.get('sec_id'))
            
        } else {
            navigate('/login')
        }
        

    }, [])

    const saveAboutSectionImage = (url) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({aboutSectionImage: url, section: secID })
        };
        fetch(`${process.env.REACT_APP_BACKEND_URL}/images/add-section-image`, requestOptions)
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

    const handleSubmit = (e)=>{
        e.preventDefault();
        setButtonLoading(true)
        if(image){
           const fd = new FormData()
           fd.append('file', image)
           fd.append("upload_preset", "ki9rv42j")
            axios.post('https://api.cloudinary.com/v1_1/dwxzlruyd/image/upload',fd).then(res => {
                if (res.status == 200) {
                    const Url = res.data.secure_url 
                    saveAboutSectionImage(Url)
                } else {
                    
                }
            }).catch(error =>{
                toast.error("Network connection error")
                setButtonLoading(false)
            })
        }else{
            
        }
    }

    const addAboutSectionImage = ()=>{
        const photo = document.getElementById("home-section-photo");
        document.getElementById("home-section-photo").click()
        photo.addEventListener('change', (e) => {
            if (e.target.files[0]) {
                
                const reader = new FileReader();
                    reader.onload = ()=>{
                        const img = document.querySelector('.home-section-image')
                        img.src = reader.result;
                    }
        
                reader.readAsDataURL(e.target.files[0])
        
                setImage(e.target.files[0])
                setImageName(e.target.files[0].name)
            }
            
        });
    }

    const goBack = ()=>{
        navigate(-1)
    }

    return (
        <div className="app-container">
            <AdminSidebar username={username} active={"home"}/>
            <ToastContainer 
                theme="dark"
            />
            <div className="app-content">
                <div className="app-content-header">
                <h1 className="app-content-headerText">About Section Add Image</h1>
                
                <button onClick={goBack} className="app-content-headerButton">Go Back</button>
                </div>
                
                <div className="products-area-wrapper gridView" style={{justifyContent: 'center'}}>
                        <div className="products-row no-pointer" style={{width: "calc(50% - 16px)"}}>
                            <button className="cell-more-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                            </button>
                            <div className="product-cell image">
                                <img className="home-section-image" style={{height: "auto"}} src="https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg" alt="product"></img>
                                <span style={{color: "#2869ff"}}>About Section new image</span>
                            </div>
                            <div className="center">
                                <div className="title">
                                    <span>Drop file to upload</span>
                                </div>

                                <div className="dropzone" onClick={addAboutSectionImage}>
                                    <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" />
                                    <input type="file" id="home-section-photo" style={{display: "none"}} className="upload-input" />
                                </div>
                                {
                                    buttonLoading ?
                                        <label  className="upload-btn">
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
                                        <button type="button" onClick={handleSubmit} className="upload-btn" name="uploadbutton">Upload file</button>
                                }

                            </div>
                        </div> 
                </div>
            </div>
        </div>
    
    )
}

export default AdminAddImage
