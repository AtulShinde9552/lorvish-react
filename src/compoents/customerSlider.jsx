import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CustomerSays.css";

const CustomerSays = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div id="customer-says">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h5 className="head-after mb-4" data-aos="fade-up">CUSTOMER
            </h5>
            <h1 data-aos="fade-up">
            What They  <b>Say</b>
            </h1>
          </div>

          <div className="col-lg-12 m-auto justify-content-center d-flex">
            <div className="col-7" data-aos="fade-up">
              <Slider {...settings}>
                <div>
                  <div className="c-says-img mb-4" data-aos="zoom-in">
                    <img src="assets/images/icons/icon-1.jpg" alt="Mike" />
                  </div>
                  <div className="card" data-aos="fade-up">
                    <div className="c-says-warp">
                      <h3>Mike</h3>
                      <div className="c-says-content">
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-left"></span>
                        <p>
                          Thank you so very much, I appreciate you and your team’s
                          dedication and hard work in making this project successful
                          and delivering such great Services.
                        </p>
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-right"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="c-says-img mb-4" data-aos="zoom-in">
                    <img src="assets/images/icons/icon-1.jpg" alt="Sophia" />
                  </div>
                  <div className="card" data-aos="fade-up">
                    <div className="c-says-warp">
                      <h3>Sophia</h3>
                      <div className="c-says-content">
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-left"></span>
                        <p>
                          I truly appreciate all the great work you have done for me
                          thus far. You have been highly honest and upfront and we
                          have developed a great working relationship and that is
                          something I sincerely hope to be able to continue doing in
                          the future on other projects.
                        </p>
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-right"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="c-says-img mb-4" data-aos="zoom-in">
                    <img src="assets/images/icons/icon-2.jpg" alt="Oliver" />
                  </div>
                  <div className="card" data-aos="fade-up">
                    <div className="c-says-warp">
                      <h3>Oliver</h3>
                      <div className="c-says-content">
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-left"></span>
                        <p>
                          Very exciting! Your team did an excellent job of creating
                          a page that tells the story of the collection(s) with
                          beautiful imagery, while carefully considering the target
                          audience.
                        </p>
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-right"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add more testimonials here */}
                <div>
                  <div className="c-says-img mb-4" data-aos="zoom-in">
                    <img src="assets/images/icons/icon-3.jpg" alt="Emily" />
                  </div>
                  <div className="card" data-aos="fade-up">
                    <div className="c-says-warp">
                      <h3>Emily</h3>
                      <div className="c-says-content">
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-left"></span>
                        <p>
                          Your team exceeded my expectations with their attention
                          to detail and commitment to quality. I couldn't be happier
                          with the results.
                        </p>
                        <span className="mdi mdi-format-quote-open mdi-60px mdi-right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSays;
