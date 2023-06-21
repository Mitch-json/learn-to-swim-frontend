import React, { useEffect, useState } from 'react'
import './BookSession.css'

import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookSession() {
    const [buttonLoading, setButtonLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [packageName, setPackageName] = useState("")
    const navigate = useNavigate()
    
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    
    useEffect(() => {
        if (searchParams.get('package')) {
            setPackageName(searchParams.get('package'))
        } else {
            navigate('/pricing')
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonLoading(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({fullName: fullName, email: email, package: packageName, phone: phone})
        };
        fetch(`${process.env.REACT_APP_BACKEND_URL}/book-session`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.msg){
                    console.log(data.msg)
                    toast.success(data.msg)
                    setButtonLoading(false)
				}else if(data.err){
                    console.log(data.err)
                    toast.error(data.err)
                    setButtonLoading(false)
				}else if(data.error){
                    console.log(data.error)
                    toast.error("connection problem. Please try again.")
                    setButtonLoading(false)
				} 
        }).catch(error =>{
            toast.error("Network connection error")
            setButtonLoading(false)
        })
    }
    return (
        <div className="backg">
            <ToastContainer 
                theme="dark"
            />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img" style={{"backgroundImage": `url(${require("../pages/assets2/img/bg-3.jpg")})`}}>
                        </div>
                                <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4 fgs">Book Session</h3>
                                </div>
                            </div>
                        <form onSubmit={handleSubmit} className="signin-form">
                            <div className="form-group mb-3">
                                <label className="label .fgs">Full Name</label>
                                <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="form-control" placeholder="Full Name" required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label .fgs">Selected Package</label>
                                <input type="text" style={{backgroundColor: '#e4eef1'}} value={packageName} onChange={(e)=>{}} className="form-control" placeholder="Email" required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label .fgs">Email</label>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)}  className="form-control" placeholder="Email" required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label .fgs">Phone Number</label>
                                <input type="text" value={phone} onChange={e => setPhone(e.target.value)}  className="form-control" placeholder="07XXXXXXXX" required />
                            </div>
                            <div className="form-group butto">
                                {
                                    buttonLoading ?
                                        <label  className="loader">
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
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3 sbmt fgs">Book Session</button>

                                }
                            </div>
                        </form>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )   
}

export default BookSession
