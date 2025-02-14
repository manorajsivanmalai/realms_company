import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area " id="about">
                <div className="container custom-container">
                    <div className="about-inner">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-46 order-0 order-lg-2">
                                <div className="about-img text-end">
                                    <img src="/assets/img/images/about_img.png" alt="" />
                                </div>
                            </div>
                            <div className="col-54">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">About Company</span>
                                        <h2 className="title">Creativity Meets Strategy | Design Meets Impact</h2>
                                    </div>
                                    <p>At <b>Realms MediaWorks,</b> we don’t just create visuals—we craft experiences. Whether it’s a logo that speaks volumes, a website that converts, or a reel that grabs eyeballs, we bring brands to life with designs that <b>stand out and sell</b>.</p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon01.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Bold Branding</h4>
                                                <p>Logos, business cards & brand identities that make a statement</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/Scroll-Stopping Visuals.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Scroll-Stopping Visuals</h4>
                                                <p>Brochures, posters & social media creatives that demand attention.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/Reel & Video Magic.png" alt="" />
                                            </div>
                                            <div className="content">
                                            <h4 className="title">Reel & Video Magic</h4>
                                            <p>High-quality edits that turn views into engagement</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/Smart Websites.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Smart Websites</h4>
                                                <p>Sleek, user-friendly, and built to convert.</p>
                                            </div>
                                        </li>
                                    </ul>
                                  

                                  
                                </div>
                            </div>
                        </div>


                        <h2 className="text-center">Why Choose Realms?</h2>
                    <div className="about-below-content">
                          
                            <div className="about-below-images">
                            <img src="/assets/img/images/about_img 2.png" alt="" />

                            </div>
                                
                                <div className="details-below-abt">
                                <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/our-designs.png" alt="" />
                                            </div>
                                            <div className="content">
                                                <p>We <b>don’t do boring—our designs</b> are fresh, modern & impactful.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/marketer.png" alt="" />
                                            </div>
                                            <div className="content">
                                               
                                                <p>We <b>think like marketers</b>, so every visual drives results.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src="/assets/img/icon/deleivery.png" alt="" />
                                            </div>
                                            <div className="content">
                                         
                                            <p>We <b>deliver on time—no overpromising</b>, just stunning work.</p>
                                            </div>
                                        </li>
                                      
                                    </ul>
                                    <div className="about-content-bottom">
                                        <span>Let’s make something amazing together</span>
                                        <div className="read-more-btn">
                                            <Link href="#contact" className="btn"> Contact Us <span /></Link>
                                        </div>
                                    </div>

                                    

                                </div>
                            </div> 
                           


                        
                    </div>

                   

                </div>
            </section>

        </>
    )
}
