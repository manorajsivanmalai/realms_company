import Link from "next/link"

export default function Services1() {
    return (
        <>
            <section className="services-area pt-35 pb-95">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon01.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Graphic Design </Link></h4>
                                    <p>Transform ideas into stunning visuals with our cutting-edge design solutions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon02.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Short-Form Video Editing</Link></h4>
                                    <p>Create captivating and trendy videos to engage your audience across platforms</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon03.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Product Shoot and Design</Link></h4>
                                    <p>Showcase your products with stunning visuals and creative design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="services-icon">
                                    <img src="/assets/img/icon/services_icon04.png" alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link href="/services-details">Social Media Management</Link></h4>
                                    <p>Build an Organic following and enhance your online presence across all social platforms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
