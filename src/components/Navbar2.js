import React, { useEffect } from 'react'
import './Navbar.css'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

function Navbar(props) {
    const navigate = useNavigate()

    useEffect(() => {
        if (props.navbarStick) {
            window.addEventListener("scroll", makeNavbarStick);
        }
        return function cleanup() {
            if (props.navbarStick) {
              window.removeEventListener("scroll", makeNavbarStick);
            }
        };
    }, [])

    const makeNavbarStick = () => {
        const { navbarStick } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > navbarStick.height) {
            // document.body.getElementsByTagName("nav")[0].classList.remove(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.add("sticky")
        } else {
            document.body.getElementsByTagName("header")[0].classList.remove("sticky")
            
        }
    };

    const goBack = ()=>{
        navigate(-1)
    }

    return (
        <div>
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo"><Link to="/">Learn-to-swim<span>.</span></Link></h1>
                {/* Uncomment below if you prefer to use an image logo
                <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></img></a> */}

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Link className="nav-link scrollto hero-x" onClick={goBack}>Go Back</Link></li>
                    
                    </ul>
                    <i className="bi bi-arrow-left-circle-fill mobile-nav-toggle" onClick={goBack}></i>
                </nav>

                </div>
            </header>

      
        </div>
    )
}

export default Navbar
