import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <div className="logo">
                                            <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-social">
                                            <ul className="list-wrap">
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li className="active"><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>

                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                            </ul>
                                        </div>
                                      
                                    </div>
                                </div>
                              
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Pages</h4>
                                        <div className="fw-link">
                                            <ul className="list-wrap">
                                                <li><Link href="#about">About</Link></li>
                                                <li><Link href="#contact">Pricing</Link></li>
                                                <li><Link href="#contact">Contact</Link></li>
                                                <li><Link href="#contact">Request for Demo</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">About Us</h4>
                                        <div className="footer-about">
                                            <ul className="list-wrap">
                                                <li><img src="/assets/img/icon/phone_icon.svg" alt="" /><Link href="tel:7338224950">+91 733 822 4950</Link></li>
                                                <li><img src="/assets/img/icon/mail_icon.svg" alt="" /><Link href="mailto:contact@realmsmediaworks.com">contact@realmsmediaworks.com</Link></li>
                                                <li><img src="/assets/img/icon/loction_icon.svg" alt="" /><span>Hormavu, Bengaluru</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                {/* <div className="col-md-6">
                                    <div className="cart-img">
                                        <img src="/assets/img/images/cart_img.png" alt="" />
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="copyright-text text-end">
                                        <p>Ground Floor, Site no.60, Silver Clouds Layout, Kalkere Road, Opposite Sunshine School, Hormavu, Bengaluru, Bengaluru Urban, Karnataka,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
