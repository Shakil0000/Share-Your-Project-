import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            
            <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>SERVICES</h3>
                        <ul>
                            <li><a href="#">A projects sharing Website</a></li>
                            
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>DEVELOPERS</h3>
                        <ul>
                            <li><a href="#">SHAKIAZZAMAN</a></li>
                            <li><a href="#">ROHANUR</a></li>
                            <li><a href="#">ARIFUL</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Our motivation</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic accusantium vitae. Voluptatem, delectus omnis necessitatibus, assumenda ipsum, natus minus inventore nisi iste eum corporis.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright">SHARE YOUR PROJECT © 2021</p>
            </div>
        </footer>
    </div>
        </div>
    );
};

export default Footer;