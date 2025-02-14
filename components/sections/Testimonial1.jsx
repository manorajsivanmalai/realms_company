import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

const swiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default function AboutUs() {
  return (
    <>
      <section className="testimonial-area-three testimonial-area-four">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section-title title-style-two mb-45">
                <h2 className="title">What Our Client’s Say</h2>
                <p>
                  Real Reviews. Real Results. See what our happy clients have to
                  say about working with Realms MediaWorks!
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-nav">
                <button className="swiper-button-prev" />
                <button className="swiper-button-next" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper-container testimonial-active-three">
                <Swiper {...swiperOptions}>
                  <SwiperSlide>
                    <div className="testimonial-item-three">
                      <div className="testimonial-thumb-three">
                        <img
                          src="/assets/img/images/testimonial_avatar01.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-content-three">
                        <h4 className="title">
                          Amit Sharma, Founder of XYZ Brand
                        </h4>
                        <span>Brought Our Brand to Life!"</span>
                        <p>
                          “The team at Realms MediaWorks truly understood our
                          vision. Our logo and branding turned out better than
                          we imagined!"
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item-three">
                      <div className="testimonial-thumb-three">
                        <img
                          src="/assets/img/images/testimonial_avatar02.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-content-three">
                        <h4 className="title">
                          Priya Desai, Marketing Head at ABC Company
                        </h4>
                        <span>Professional & Creative!</span>
                        <p>
                          "Their brochures and social media designs helped us
                          attract more customers. Highly recommend for any
                          business looking to stand out!"
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item-three">
                      <div className="testimonial-thumb-three">
                        <img
                          src="/assets/img/images/testimonial_avatar03.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-content-three">
                        <h4 className="title">Rahul Mehta, Content Creator</h4>
                        <span>"Our Reels Went Viral!"</span>
                        <p>
                          "The video editing and reels they created for us
                          boosted our engagement like never before. These guys
                          know their stuff!"
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item-three">
                      <div className="testimonial-thumb-three">
                        <img
                          src="/assets/img/images/testimonial_avatar03.png"
                          alt=""
                        />
                      </div>
                      <div className="testimonial-content-three">
                        <h4 className="title">Rahul Mehta, Content Creator</h4>
                        <span>"Our Reels Went Viral!"</span>
                        <p>
                          "The video editing and reels they created for us
                          boosted our engagement like never before. These guys
                          know their stuff!"
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="text-center mt-5">
                <a href="" className="btn">
                  Let’s Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
