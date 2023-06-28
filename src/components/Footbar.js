import React from 'react'

function Footbar() {
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="footer-content">
                <div className="container">
                    <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="index.html" className="logo d-flex align-items-center">
                        <span>Learn-to-swim</span>
                        </a>
                        <p>We provide swimming lessons for individuals of all ages and abilities, from beginners to advanced swimmers. Our expert instructors will guide you through a structured program tailored to your skill level and goals.</p>
                        <div className="social-links d-flex  mt-3">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>location</h4>
                        <p>
                        Chester House <br></br>
                        Nairobi, CBD<br></br>
                        Kenya <br></br><br></br>
                        </p>

                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>contact info</h4>
                        <p>
                        <strong>Email:</strong> info@learntoswim.co.ke<br></br>
                        <strong>Mobile:</strong> +254792789618<br></br>
                        <strong>Whatsapp:</strong> +254792789618<br></br>
                        <strong>Instagram:</strong> @Learntoswimke<br></br>
                        </p>

                    </div>

                    </div>
                </div>
                </div>

                
            </footer>   
        </div>
    )
}

export default Footbar
