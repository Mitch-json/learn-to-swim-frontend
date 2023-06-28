import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import './Main.css'

import "./assets2/vendor/bootstrap/css/bootstrap.min.css"
import "./assets2/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets2/vendor/aos/aos.css"
import "./assets2/vendor/glightbox/css/glightbox.min.css"
import "./assets2/vendor/swiper/swiper-bundle.min.css"
import "./assets2/vendor/remixicon/remixicon.css"
import Slider from '../components/Slider'
import useIntersection from '../helpers/useIntersection'
import YouTube, { YouTubeProps } from 'react-youtube';

import { Link } from "react-router-dom";

import { Gallery } from "react-grid-gallery";


function Main(props) {
    const [heroImageLink, setHeroImageLink] = useState("")
    const [contactImageLink, setContactImageLink] = useState("")
    const [galleryImages, setGalleryImages] = useState([])
    const [sliderImages, setSliderImages] = useState([])

    const ref0= useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const inViewport0 = useIntersection(ref0, '0px'); // Trigger as soon as the element becomes visible
    const inViewport1 = useIntersection(ref1, '-300px'); // Trigger as soon as the element becomes visible
    const inViewport2 = useIntersection(ref2, '-300px'); // Trigger as soon as the element becomes visible
    const inViewport3 = useIntersection(ref3, '-300px'); // Trigger as soon as the element becomes visible
    const inViewport4 = useIntersection(ref4, '-300px'); // Trigger as soon as the element becomes visible

    useEffect(() => {
        setHeroImageLink(props.heroImageLink)
        setContactImageLink(props.contactImageLink)
        setGalleryImages(props.galleryImages)
        setSliderImages(props.sliderImages)
    }, [])
    
    if (inViewport0) {
        document.body.getElementsByClassName(`hero-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`about-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`services-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`contact-us-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`features-x`)[0].classList.remove("active")
        
        document.body.getElementsByClassName(`${ref0.current.id}-x`)[0].classList.add("active")
    }

    if (inViewport1) {
        document.body.getElementsByClassName(`hero-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`about-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`services-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`contact-us-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`features-x`)[0].classList.remove("active")
        
        document.body.getElementsByClassName(`${ref1.current.id}-x`)[0].classList.add("active")
    }
    if (inViewport2) {
        document.body.getElementsByClassName(`hero-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`about-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`services-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`contact-us-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`features-x`)[0].classList.remove("active")
        
        document.body.getElementsByClassName(`${ref2.current.id}-x`)[0].classList.add("active")
    }
    if (inViewport3) {
        document.body.getElementsByClassName(`hero-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`about-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`services-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`contact-us-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`features-x`)[0].classList.remove("active")
        
        document.body.getElementsByClassName(`${ref3.current.id}-x`)[0].classList.add("active")
    }
    if (inViewport4) {
        document.body.getElementsByClassName(`hero-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`about-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`services-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`contact-us-x`)[0].classList.remove("active")
        document.body.getElementsByClassName(`features-x`)[0].classList.remove("active")
        
        document.body.getElementsByClassName(`${ref4.current.id}-x`)[0].classList.add("active")
    }
    
    
    return (
            <div>
                <main id="main">
                    <Helmet>
                        <title>Learn to Swim</title>
                    </Helmet>
                    <section id="hero" ref={ref0} style={{background: `url(${heroImageLink}) top left`}} className="d-flex align-items-center section1 bg100">
                        <div className="container" data-aos="zoom-out" data-aos-delay="100">
                            <h1 style={{color: 'white'}}>Welcome to <span style={{color: 'rgb(0 31 251)'}}>Learn-To-Swim</span></h1>
                            <h2 style={{color: '#f8f9fa'}}>We are team of talented swimmers teaching our swimming skills to all ages</h2>
                            <h2 style={{color: '#f8f9fa'}}>We provide swimming lessons for individuals of all ages and abilities, from beginners to advanced swimmers.</h2>
                            <h5 style={{color: '#f8f9fa'}}>Book a lesson by filling a form</h5>
                            <div className="d-flex">
                                <Link to='/pricing' className="btn-get-started scrollto">Book a Lesson</Link>
                                <a className="btn-get-started scrollto" href="#contact-info" style={{marginLeft: '10px'}}>Contact Us</a>
                            </div>
                        </div>
                    </section>
                    <section id="about" ref={ref1} className="why-us section2">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Why Choose Us</h2>

                        </div>

                        <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-xl-5 img-bg minW1200">
                            <Slider images={props.sliderImages} />
                        </div>
                        <div className="col-xl-7 slides  position-relative">

                            <div className="slides-1 swiper">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                <div className="item">
                                    <h3 className="mb-3">Here at Learn-to-swim Kenya </h3>
                                    <h4 className="mb-3">we believe that we stand out for several reasons. </h4>
                                    <p>Firstly, our team is composed of professional swimmers who have dedicated countless hours throughout their entire lives honing their skills in the water.</p>
                                    <p>This means you will be learning from individuals who truly understand the intricacies of swimming and can guide you every step of the way. Additionally, our personalized approach ensures that each lesson is tailored to your specific needs and goals, allowing for optimal progress and success. </p>
                                    <p>Furthermore, we prioritize safety above all else, providing a secure and supportive environment where you can comfortably learn and grow. Whether you're a beginner or an advanced swimmer, Learn to swim Kenya offers a comprehensive range of lessons suitable for you. </p>
                                    <p>We are dedicated to providing an exceptional swimming experience that will leave you feeling confident, capable, and ready to make a splash in any body of water!</p>
                                </div>
                                </div>

                                

                            </div>
                            <div className="swiper-pagination"></div>
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>

                        </div>

                    </div>
                    </section>

                    <section id="features" ref={ref4} className="features section2">
                        <div className="container" data-aos="fade-up">

                            <div className="section-header">
                                <h2>Gallery</h2>

                            </div>
                            <Gallery images={galleryImages} />
                        </div>
                    </section>

                    <section id="services" ref={ref2} className="services-list section2">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Our Curriculum</h2>

                            <p>Please note that these outlines are a general representation of what we intend to teach each class for complete beginners. The actual content and progress may vary based on individual and group needs, as well as the instructor's professional judgment.</p>

                        </div>

                        <div className="row gy-5">

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon flex-shrink-0"><i className="bi bi-1-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Lesson 1</a></h4>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to the aquatic environment, including pool rules and safety guidelines.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Proper body positioning for floating and basic breath control.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to flutter kick and its importance in swimming.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon flex-shrink-0"><i className="bi bi-2-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Lesson 2</a></h4>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Building upon the flutter kick from the previous class.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to the front crawl arm movements and coordination with breathing.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Focus on body rotation and maintaining a streamlined position.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon flex-shrink-0"><i className="bi bi-3-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Lesson 3</a></h4>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to the backstroke arm movements and coordination with breathing.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Practice floating on the back and building confidence in the water.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Emphasis on body position and maintaining a relaxed and stable backstroke technique.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon flex-shrink-0"><i className="bi bi-4-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Lesson 4</a></h4>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to the breaststroke kick and its timing.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Practice coordinated breathing with the breaststroke technique.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to breaststroke arm movements and coordination with the kick.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon flex-shrink-0"><i className="bi bi-5-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Lesson 5</a></h4>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Gradual progression to deeper water to build confidence and comfort.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to treading water and different techniques for staying afloat.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Focus on water safety skills, such as recognizing and avoiding hazards in deep water.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                            <div className="icon flex-shrink-0"><i className="bi bi-6-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Lesson 6</a></h4>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Review of previously learned strokes and techniques.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Introduction to basic water safety skills, including rescue techniques and self-preservation strategies.</p>
                            <p className="description"><a href="#" style={{color: "#0d6efd", paddingRight: '10px'}}>●</a> Recap of pool rules and emergency procedures to ensure a safe swimming experience.</p>
                            </div>
                        </div>

                        </div>

                    </div>
                    </section>

                    <section id="contact-us" ref={ref3} className="features">

                        <div className="container" data-aos="fade-up">
                            <div className="row">
                            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                                <h3>Our Services </h3>

                                <div className="row gy-4">

                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
                                    <span>	Stroke Development</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
                                    <span>	Deep Water Confidence</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
                                    <span>	Water Safety and Survival Skills</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
                                    <span>	Fitness Swimming</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
                                    <span>	Specialized Training</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
                                    <span>	Aqua Aerobics</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
                                    <span>	Private Lessons & Group Lessons</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="icon-list d-flex">
                                    <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
                                    <span>	Lifeguard Training</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-5 position-relative mw-768" data-aos="fade-up" data-aos-delay="200">
                                <div className="phone-wrap">
                                <img src={require('./assets2/img/iphone2.jpg')} alt="Image" className="img-fluid"></img>
                                </div>
                            </div>
                            </div>

                        </div>

                        <div className="details">
                            <div className="container" data-aos="fade-up" data-aos-delay="300">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>Learn to Swim Programs</h4>
                                    <p>We provide swimming lessons for individuals of all ages and abilities, from beginners to advanced swimmers. Our expert instructors will guide you through a structured program tailored to your skill level and goals</p>
                                    
                                </div>
                            </div>

                            </div>
                        </div>

                        </section>


                    <section id="contact-info"  style={{background: `linear-gradient(rgba(27, 47, 69, 0.8), rgba(27, 47, 69, 0.8)), url(${contactImageLink}) center center`}} className="call-to-action section2">
                        <div className="container" data-aos="fade-up">
                            <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h3>Contact US</h3>
                                <p>Email: info@learntoswim.co.ke</p>
                                <p>Whatsapp: +254 792 789618</p>
                                <p>Mobile: +254 792 789618</p>
                                <p>Instagram: @Learntoswimke</p>
                                
                            </div>
                            </div>

                        </div>
                    </section>

                </main>    
            </div>
    )
}

export default Main
