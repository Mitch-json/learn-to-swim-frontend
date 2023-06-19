import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as jose from 'jose'

import AdminSidebar from '../admin-components/AdminSidebar'
import { Oval } from 'react-loader-spinner'
function AdminGallerySection() {
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)    
    const [deleteLoading, setDeleteLoading] = useState(false)    
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    const navigate = useNavigate()

    const [secID, setSecID] = useState("")
    const [images, setImages] = useState([])
    
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
            setLoading(true)
            setSecID(searchParams.get('sec_id'))
            fetchImages(searchParams.get('sec_id'))

            
        } else {
            navigate('/login')
        }

    }, [])

    const fetchImages = (sectionID) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/images/section-images/${sectionID}`)
            .then(response => response.json())
            .then(data => {
                if(data.pictures){
                    setImages(data.pictures)
                    setLoading(false)
                }
        });
    }

    const deleteImage = (image_id, section_id) => {
        setDeleteLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/images/delete-image/${image_id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.msg) {
                    fetchImages(section_id)
                    setDeleteLoading(false)
                }
        });
    }

    const goBack = ()=>{
        navigate(-1)
    }
    return (
        <div className="app-container">
            <AdminSidebar username={username} active={"home"} />
            <div className="app-content">
                <div className="app-content-header">
                <h1 className="app-content-headerText">Gallery Section</h1>

                <Link className="mode-switch add-image-btn" to={`/admin/home/add-image/section?sec_id=${secID}`}>Add Image</Link>
                <button onClick={goBack} className="app-content-headerButton">Go Back</button>
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
                        <div className="products-area-wrapper gridView" >
                            {images.map(image => 
                                <div key={image._id} className="products-row no-pointer">
                                    <button className="cell-more-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                                    </button>
                                    <div className="product-cell image">
                                        <img src={image.link} alt="product"></img>
                                    </div>
                                    <div className="product-cell status-cell">
                                        <span className="cell-label">Action:</span>
                                        <Link className="status active" to={`/admin/home/section/edit-image/image?image_id=${image._id}&sec_id=${secID}`} >Edit</Link>
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
                                                <button onClick={(e) => {deleteImage(image._id, image.section)}} className="status active">Delete</button>
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

export default AdminGallerySection
