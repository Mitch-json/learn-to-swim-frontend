import React, { useEffect, useState } from 'react'
import './PricingPage.css'
import Navbar from '../components/Navbar2'

import { Link, useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PricingPage() {
    const [loading, setLoading] = useState(false)

    const [pricings, setPricings] = useState([])

    useEffect(() => {
        setLoading(true)
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
    }, [])
    return (
        <div >
            <Navbar navbarStick={{height: 100}} />
            <ToastContainer 
                theme="dark"
            />
            {loading ?
                <div className="row d-flex justify-content-center" style={{height: '80vh'}}>
                    <div className="col-md-18 flex-container2">
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
                <section className="pricing-section ">
                    <div className="pricing pricing--rabten">
                        {pricings.map(pricing => 
                            <div key={pricing._id} className="pricing__item">
                                <div className="icon icon--home"></div>
                                <h3 className="pricing__sentence" style={{color: 'black'}}>{pricing.classification.toLowerCase()}</h3>
                                <p className="pricing__sentence">{pricing.description} sessions</p>
                                <div className="pricing__price"> <span className="pricing__anim pricing__anim--1"> <span className="pricing__currency">Ksh</span>{pricing.price} </span>  </div>
                                <ul className="pricing__feature-list">
                                <li className="pricing__feature">One course</li>
                                <li className="pricing__feature">{pricing.classes} classes per course</li>
                                <li className="pricing__feature">All classes on Sunday</li>
                                </ul>
                                <Link className="pricing__action" to={`/book-a-session?package=${pricing.classification.toLowerCase()}`}>Choose plan</Link>
                            </div>
                        )}
                        
                    </div>
                </section>
            }
                        
        </div>
    )
}

export default PricingPage
