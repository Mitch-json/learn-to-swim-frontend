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
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                        <div className="social-links d-flex  mt-3">
                        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                        <li><i className="bi bi-dash"></i> <a href="#">Web Design</a></li>
                        <li><i className="bi bi-dash"></i> <a href="#">Web Development</a></li>
                        <li><i className="bi bi-dash"></i> <a href="#">Product Management</a></li>
                        <li><i className="bi bi-dash"></i> <a href="#">Marketing</a></li>
                        <li><i className="bi bi-dash"></i> <a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
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
        </div>
    )
}

export default Footbar
