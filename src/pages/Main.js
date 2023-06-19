import React, { useEffect, useRef, useState } from 'react'
import './Main.css'

import "./assets2/vendor/bootstrap/css/bootstrap.min.css"
import "./assets2/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets2/vendor/aos/aos.css"
import "./assets2/vendor/glightbox/css/glightbox.min.css"
import "./assets2/vendor/swiper/swiper-bundle.min.css"
import "./assets2/vendor/remixicon/remixicon.css"
import Slider from '../components/Slider'
import useIntersection from '../helpers/useIntersection'

import { Link } from "react-router-dom";

import { Gallery } from "react-grid-gallery";
import { Oval } from 'react-loader-spinner'

function Main() {
    const [loading, setLoading] = useState(false)

    const [heroImageLink, setHeroImageLink] = useState("")
    const [contactImageLink, setContactImageLink] = useState("")
    const [galleryImages, setGalleryImages] = useState([])
    const [sliderImages, setSliderImages] = useState([])
    let sliderImage = [];

    let image = []

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
    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/images/section-images`)
        .then(response => response.json())
        .then(data => {
            if(data.pictures){
                data.pictures.map(img =>{
                    if(img.section === '6484efb8a876c783cac0a348'){
                        setHeroImageLink(img.link)
                    }
                    if(img.section === '6484f32c64ab1e085fc494c7'){
                        setContactImageLink(img.link)
                    }
                    if(img.section === '6484f35e64ab1e085fc494ca'){
                        image.push({src: img.link, width: 320, height: 212})
                        setGalleryImages(image)
                    }
                    if(img.section === '6484f2ff64ab1e085fc494c4'){
                        sliderImage.push({original: img.link, thumbnail: img.link})
                        setSliderImages(sliderImage)
                    }
                })
                setLoading(false)
                
            }
      });
    }, [])
    return (
        loading ?
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
                <div id="hero" style={{display: 'none'}} ref={ref0}></div>
                <div id="about" style={{display: 'none'}} ref={ref1}></div>
                <div id="features" style={{display: 'none'}} ref={ref4}></div>
                <div id="services" style={{display: 'none'}} ref={ref2}></div>
                <div id="contact-us" style={{display: 'none'}} ref={ref3}></div>
            </div>
        :
            <div>
                <section id="hero" ref={ref0} style={{background: `url(${heroImageLink}) top left`}} className="d-flex align-items-center section1">
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1>Welcome to <span>Learn-To-Swim</span></h1>
                        <h2>We are team of talented swimmers teaching our swimming skills to all ages</h2>
                        <h5>Book a lesson by filling a form</h5>
                        <p style={{"color": "Red"}}>*No credit card required*</p>
                        <div className="d-flex">
                            <Link to='/pricing' className="btn-get-started scrollto">Book a Lesson</Link>
                            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                        </div>
                    </div>
                </section>
                <main id="main">
                    <section id="about" ref={ref1} className="why-us section2">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Why Choose Us</h2>

                        </div>

                        <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-xl-5 img-bg">
                            <Slider images={sliderImages} />
                        </div>
                        <div className="col-xl-7 slides  position-relative">

                            <div className="slides-1 swiper">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                <div className="item">
                                    <h3 className="mb-3">Let's grow your business together</h3>
                                    <h4 className="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                                </div>
                                </div>

                                <div className="swiper-slide">
                                <div className="item">
                                    <h3 className="mb-3">Unde perspiciatis ut repellat dolorem</h3>
                                    <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                                    <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
                                </div>
                                </div>

                                <div className="swiper-slide">
                                <div className="item">
                                    <h3 className="mb-3">Aliquid non alias minus</h3>
                                    <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                                    <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
                                </div>
                                </div>

                                <div className="swiper-slide">
                                <div className="item">
                                    <h3 className="mb-3">Necessitatibus suscipit non voluptatem quibusdam</h3>
                                    <h4 className="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.</h4>
                                    <p>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</p>
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

                        </div>

                        <div className="row gy-5">

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon flex-shrink-0"><i className="bi bi-1-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Day 1</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon flex-shrink-0"><i className="bi bi-2-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Day 2</a></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon flex-shrink-0"><i className="bi bi-3-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Day 3</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon flex-shrink-0"><i className="bi bi-4-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Day 4</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon flex-shrink-0"><i className="bi bi-5-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Day 5</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                            <div className="icon flex-shrink-0"><i className="bi bi-6-square-fill" style={{"color": "#0d6efd", fontSize: '23px'}}></i></div>
                            <div>
                            <h4 className="title"><a href="#" className="stretched-link">Day 6</a></h4>
                            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>

                        </div>

                    </div>
                    </section>


                    <section id="contact-us" ref={ref3} style={{background: `linear-gradient(rgba(27, 47, 69, 0.8), rgba(27, 47, 69, 0.8)), url(${contactImageLink}) center center`}} className="call-to-action section2">
                        <div className="container" data-aos="fade-up">
                            <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h3>Ut fugiat aliquam aut non</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <a className="cta-btn" href="#">Contact Us</a>
                            </div>
                            </div>

                        </div>
                    </section>

                    <footer id="footer" class="footer">
                            <div class="footer-content">
                            <div class="container">
                                <div class="row gy-4">
                                <div class="col-lg-5 col-md-12 footer-info">
                                    <a href="index.html" class="logo d-flex align-items-center">
                                    <span>Learn-to-swim</span>
                                    </a>
                                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                    <div class="social-links d-flex  mt-3">
                                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>

                                <div class="col-lg-2 col-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                    <li><i class="bi bi-dash"></i> <a href="#">Web Design</a></li>
                                    <li><i class="bi bi-dash"></i> <a href="#">Web Development</a></li>
                                    <li><i class="bi bi-dash"></i> <a href="#">Product Management</a></li>
                                    <li><i class="bi bi-dash"></i> <a href="#">Marketing</a></li>
                                    <li><i class="bi bi-dash"></i> <a href="#">Graphic Design</a></li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                                    <h4>location & contact info</h4>
                                    <p>
                                    Chester House <br></br>
                                    Nairobi, CBD<br></br>
                                    Kenya <br></br><br></br>
                                    <strong>Phone:</strong> 0792789618<br></br>
                                    <strong>Email:</strong> learntoswim@gmail.com<br></br>
                                    </p>

                                </div>

                                </div>
                            </div>
                            </div>

                            
                        </footer>

                    </main>
            </div>
    )
}

export default Main
