import React from 'react'
import './Footer.css'
import footerLogo from '../assets/images/logo.svg'
import creditCards from '../assets/images/footer/credit-cards-footer.png'

function Footer() {
    return (
        <>
            {/* <!-- Start Footer Area --> */}
            <footer className="footer site-footer">
                {/* <!-- Start Footer Top --> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="footer-logo">
                                        <a href="/">
                                            <img src={footerLogo} alt="#" className="footer-image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8 col-12">
                                    <div className="footer-newsletter">
                                        <h4 className="title">
                                            Subscribe to our Newsletter
                                            <span
                                            >Get all the latest information, Sales and Offers.</span
                                            >
                                        </h4>
                                        <div className="newsletter-form-head">
                                            <form
                                                action="#"
                                                method="get"
                                                target="_blank"
                                                className="newsletter-form"
                                            >
                                                <input
                                                    name="EMAIL"
                                                    placeholder="Email address here..."
                                                    type="email"
                                                />
                                                <div className="button">
                                                    <button className="btn">
                                                        Subscribe<span className="dir-part"></span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Top --> */}
                {/* <!-- Start Footer Bottom --> */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-12">
                                    <div className="payment-gateway">
                                        <span>We Accept:</span>
                                        <img
                                            src={creditCards}
                                            alt="#"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="copyright">
                                        <p>

                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <ul className="socila">
                                        <li>
                                            <span>Follow Us On:</span>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-facebook-filled"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-twitter-original"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-instagram"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="/"
                                            ><i className="lni lni-google"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Bottom --> */}
            </footer>
            {/* <!--/ End Footer Area --> */}

            {/* <!-- ========================= scroll-top ========================= --> */}
            <a href="/#" className="scroll-top">
                <i className="lni lni-chevron-up"></i>
            </a>
        </>
    )
}

export default Footer
