import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/style.css';
// import './css/ionicons.min.css';
// import logo from './images/logo.png'


function Footer() {
    return (
        <div>
            <footer className="footer-05" >
                <div className="container">
                    <div className="row border-bottom mb-5 pb-4 align-items-center">
                        <div className="col-md-6 mb-md-0 mb-4">
                            <img style={{ borderRadius: '50%' }} src={} height="100" alt="CoolBrand" /><h2 className="logo"><a href="#">foodies.com <span>One stop for all your cravings</span></a></h2>
                        </div>
                        <div className="col-md-6 mb-md-0 mb-4 text-md-right">
                            <ul className="ftco-footer-social p-0 mb-0">
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                            <h2 className="footer-heading">foodies</h2>
                            <div className="block-23 mb-3"   style={{textAlign:'center'}}>
                                <ul>
                                    <li><span className="icon ion-ios-pin"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                    <li><a href="#"><span className="icon ion-ios-call"></span><span className="text">+2 392 3929 210</span></a></li>
                                    <li><a href="#"><span className="icon ion-ios-send"></span><span className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
                                        <button type="submit" className="form-control submit rounded-right"><span className="sr-only">Submit</span><i className="ion-ios-send"></i></button>
                                </div>
                            </form>
                        </div>                       
                    </div>
                    <div className="row mt-5 pt-4 border-top">
                        <div className="col-md-6 col-lg-8">
                            <p className="copyright">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.</p>
                        </div>
                        <div className="col-md-6 col-lg-4 text-md-right">
                            <p className="copyright">Website developed with <i className="ion-ios-heart" aria-hidden="true"></i> <a href="#" target="_blank"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>



            <script src="js/jquery.min.js"></script>
            <script src="js/popper.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/main.js"></script>
        </div>
    )
}

export default Footer;