import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(props) {
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

    const handleClick = (e) =>{
        document.body.getElementsByClassName('navbar')[0].classList.toggle('navbar-mobile')
        document.body.getElementsByClassName('nav-btn')[0].classList.toggle('bi-list')
        document.body.getElementsByClassName('nav-btn')[0].classList.toggle('bi-x')
        
    }
    const handleClick2 = (e) =>{
        if(document.body.getElementsByClassName('navbar-mobile')[0]){
            document.body.getElementsByClassName('navbar-mobile')[0].classList.remove('navbar-mobile')
            document.body.getElementsByClassName('nav-btn')[0].classList.toggle('bi-list')
            document.body.getElementsByClassName('nav-btn')[0].classList.toggle('bi-x')
        }
        
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
                    <li><a onClick={handleClick2} className="nav-link scrollto hero-x" href="#hero">Home</a></li>
                    <li><a onClick={handleClick2} className="nav-link scrollto about-x" href="#about">About</a></li>
                    <li><a onClick={handleClick2} className="nav-link scrollto features-x" href="#features">Gallery</a></li>
                    <li><a onClick={handleClick2} className="nav-link scrollto services-x" href="#services">Curriculum</a></li>
                    <li><a onClick={handleClick2} className="nav-link scrollto contact-us-x" href="#contact-us">Contact Us</a></li>
                    <li><Link to='/login' className="nav-link scrollto">Login</Link></li>
                    
                    </ul>
                    <i className="bi nav-btn bi-list mobile-nav-toggle" onClick={handleClick}></i>
                </nav>

                </div>
            </header>

      
        </div>
    )
}

export default Navbar
