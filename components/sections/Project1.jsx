import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    
    
   
  loop: false,
  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
};


export default function Project1() {
  return (
    <>
      <section className="project-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="project-content">
                <div className="section-title white-title mb-30">
                  <span className="sub-title">Portfolio</span>
                  <h2 className="title">
                  Your Brand, Our Creativity! 
                  </h2>
                </div>
                <p>
                See how we’ve transformed ideas into powerful visuals and high-impact digital assets.
                </p>
                <p>Want to see more? Let’s create something amazing together</p>
                <div className="content-bottom">
                  <Link href="/about-me" className="btn">
                   Contact Us <span />
                  </Link>
                  <div className="project-nav">
                    <button className="swiper-button-prev" />
                    <button className="swiper-button-next" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="project-item-wrap">
                <div className="swiper-container project-active">
                  <Swiper {...swiperOptions} className="swiper-wrapper">

                  <SwiperSlide>
                      <div className="project-item">
                     
                          <img
                            src="/assets/img/project/slide 1.png"
                            alt=""
                          />
                           <div className="swiper-contents">
                          <div className="text-center">
                          <h5><b> Reel & Video Production</b></h5>
                          </div>
                          <ul>
                            <li><p><b>Promo Reels</b> – Perfect for product launches, events, and marketing.</p></li>
                            <li><p><b>Corporate Videos</b> – Professional storytelling for your brand.</p></li>
                            <li><p><b>Social Media Shorts</b> – Engaging edits that keep your audience hooked.</p></li>
                          </ul>
                         

                         </div>
                       
                      </div>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                      <div className="project-item">
                      <img
                            src="/assets/img/project/slide 2.png"
                            alt=""
                          />
                       
                         <div className="swiper-contents">
                          <div className="text-center">
                          <h5><b> Branding & Identity</b></h5>
                          </div>
                          <ul>
                            <li><p><b>Logos that Speak Volumes</b> – Unique, memorable, and tailored to your brand.</p></li>
                            <li><p><b>Business Cards & Brand Guidelines</b> – Professional, cohesive, and ready to impress.</p></li>
                          </ul>

                         </div>
                     
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                      <img
                            src="/assets/img/project/slide 3.png"
                            alt=""
                          />
                         <div className="swiper-contents">
                          <div className="text-center">
                          <h5><b> Graphic Design</b></h5>
                          </div>
                          <ul>
                            <li><p><b>Brochures & Flyers</b> – Designed to inform, engage, and convert.</p></li>
                            <li><p><b>Posters & Banners </b>– Eye-catching visuals that make an impact.</p></li>
                            <li><p><b>Social Media Creatives</b> – Scroll-stopping designs for your brand’s digital presence.</p></li>
                          </ul>

                         </div>
                       
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                      <img
                            src="/assets/img/project/slide 4.png"
                            alt=""
                          />
                         <div className="swiper-contents">
                          <div className="text-center">
                          <h5><b> Website Development</b></h5>
                          </div>
                          <ul>
                            <li><p><b>Custom Website Designs</b> – Sleek, fast, and conversion-driven.</p></li>
                            <li><p><b>Payment Gateway Integration </b>– Secure, seamless, and hassle-free.</p></li>
                            <li><p><b>SEO & Performance Optimization </b>– Websites built to rank and perform.</p></li>
                          </ul>

                         </div>
                      
                      </div>
                    </SwiperSlide>
                 
                    {/* <SwiperSlide>
                      <div className="project-item">
                        <Link href="/project-details">
                          <img
                            src="/assets/img/project/project_img03.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </SwiperSlide> */}
                    {/* Video Slide 1 */}
                  
                    {/* Video Slide 2 */}
                  
                    {/* Video Slide 3 */}
                    {/* <SwiperSlide>
                      <div className="project-item">
                        <Link href="/project-details">
                          <ReactPlayer
                            url={
                              "/assets/img/team/prestige_estate.mp4"
                            }
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="100%"
                            style={{ objectFit: "cover" }}
                          />
                        </Link>
                      </div>
                    </SwiperSlide> */}
                  </Swiper>
                </div>
              </div>
              <div className="mt-30">
                <div className="swiper-pagination2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-shape-wrap">
          <img
            src="/assets/img/project/project_shape01.png"
            alt=""
            className="shape-one ribbonRotate"
          />
          <img
            src="/assets/img/project/project_shape02.png"
            alt=""
            className="shape-two ribbonRotate"
          />
        </div>
      </section>
    </>
  );
}
