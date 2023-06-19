import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { Oval } from 'react-loader-spinner'

function Register() {
    const navigate = useNavigate();

    const [buttonLoading, setButtonLoading] = useState(false)

    const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	useEffect(() => {
		
	}, [])

    const handleSubmit = (e)=>{
		e.preventDefault()
        setButtonLoading(true)

		const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: username, email: email, password: password})
        };
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/admin-register`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.msg){
                    navigate("/login");
				}else if(data.err){
					setButtonLoading(false)
				} 
        });

		
	}



    return (
        <div className="backg">
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="img" style={{"backgroundImage": `url(${require("./assets2/img/bg-3.jpg")})`}}>
                        </div>
                                <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4 fgs">Sign Up</h3>
                                </div>
                            </div>
                        <form onSubmit={handleSubmit} className="signin-form">
                            <div className="form-group mb-3">
                                <label className="label .fgs">Username</label>
                                <input type="text" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" placeholder="Username" required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label .fgs">Email</label>
                                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Email" required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label fgs">Password</label>
                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Password" required />
                            </div>
                            <div className="form-group mb-3">
                                <label className="label fgs">Confirm Password</label>
                                <input type="password" value={confirmPassword} onChange={e=>{setConfirmPassword(e.target.value)}} className="form-control" placeholder="Confirm Password" required />
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
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3 sbmt fgs">Sign In</button>

                                }
                            </div>
                        </form>
                        <p className="text-left fgs nt-mber">Already have an account? <Link to="/login">Sign in</Link></p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register
