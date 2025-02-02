import React, { useEffect } from "react";
import AboutCArd1 from "../assets/img/about-3.jpg";
import AboutCArd2 from "../assets/img/about-2.jpg";
import AboutCArd3 from "../assets/img/about1.jpg";
import About1 from "../assets/img/pexels-a-darmel-7710141.jpg";
import About2 from "../assets/img/pexels-thecoachspace-2977581.jpg";
import About3 from "../assets/img/entrepreneur-593371_1280.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Team1 from "../assets/img/team/team-1.jpg";
import Team2 from "../assets/img/team/team-2.jpg";
import Team3 from "../assets/img/team/team-3.jpg";
import Team4 from "../assets/img/team/team-4.jpg";
import Team5 from "../assets/img/team/team-5.jpg";
import Team6 from "../assets/img/team/team-6.jpg";

import Testimonials1 from "../assets/img/testimonials/testimonials-1.jpg";
import Testimonials2 from "../assets/img/testimonials/testimonials-2.jpg";
import Testimonials3 from "../assets/img/testimonials/testimonials-3.jpg";
import Testimonials4 from "../assets/img/testimonials/testimonials-4.jpg";
import Testimonials5 from "../assets/img/testimonials/testimonials-5.jpg";

const about = () => {
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
    autoplaySpeed: 2000,
    arrows: true,
    width: 100,
    
  };
  return (
    <>
      {/* End Header */}
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <Slider {...settings}>
          <div className="position-relative">
            <img src={About1} alt="" className="img-fluid w-100" />
            <div className="centered-content">
              <h1 className="text-white">About <span className="text-primary">Lorvish</span></h1>
              <h5 className="text-white">
                We empower clients with world-class technology products,
                services, and solutions
              </h5>
            </div>
          </div>

          <div className="position-relative">
            <img src={About2} alt="" className="img-fluid w-100" />
            <div className="centered-content">
              <h1 className="text-white">About <span className="text-primary">Lorvish</span></h1>
              <h5 className="text-white">
                We empower clients with world-class technology products,
                services, and solutions
              </h5>
            </div>
          </div>

          <div className="position-relative">
            <img src={About3} alt="" className="img-fluid w-100" />
            <div className="centered-content">
              <h1 className="text-white">About <span className="text-primary">Lorvish</span></h1>
              <h5 className="text-white">
                We empower clients with world-class technology products,
                services, and solutions
              </h5>
            </div>
          </div>
        </Slider>

        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row position-relative">
              <div
                className="col-lg-7 about-img"
                style={{ backgroundImage: `url(${AboutCArd1})` }}
              />
              <div className="col-lg-7">
                <h2>20 Years Of Experience</h2>
                <div className="our-story">
                  <h4>Est 1999</h4>
                  <h3>Our Story</h3>
                  <p>
                    Lorvish offers full range of consultancy & training methods
                    for data analysis, business consul tation, and strategic
                    ways for business.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      <span>Business Development</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      <span>Idea Innovation</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle" />{" "}
                      <span>Investment Analysis</span>
                    </li>
                  </ul>
                  <p>Watch creative process behind Our brand success</p>
                  <div className="watch-video d-flex align-items-center position-relative">
                    <i className="bi bi-play-circle" />
                    <a
                      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      className="glightbox stretched-link"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Stats Counter Section ======= */}
        <section id="stats-counter" className="stats-counter section-bg">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={232}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-journal-richtext color-orange flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={521}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Projects</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-headset color-green flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={1463}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item d-flex align-items-center w-100 h-100">
                  <i className="bi bi-people color-pink flex-shrink-0" />
                  <div>
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={15}
                      data-purecounter-duration={1}
                      className="purecounter"
                    />
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
              {/* End Stats Item */}
            </div>
          </div>
        </section>
        {/* End Stats Counter Section */}
        {/* ======= Alt Services Section ======= */}
        <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: `url(${AboutCArd2})` }}
                data-aos="zoom-in"
                data-aos-delay={100}
              />
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Our skills are the main reasons why clients choose us</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                  veniam error ratione voluptatum repellendus ex doloribus
                  accusamus suscipit quia sint. Qui perspiciatis aspernatur quo.
                  Esse.
                </p>
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <i className="bi bi-easel flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Versatile Operation
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-patch-check flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Skilled Manpower
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Research Technology
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        global Reach
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
          </div>
        </section>
        {/* End Alt Services Section */}
        {/* ======= Alt Services Section 2 ======= */}
        <section id="alt-services-2" className="alt-services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>
                  Non quasi officia eum nobis et rerum epudiandae rem voluptatem
                </h3>
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint
                  at non. Ducimus maxime minima iste magni sit praesentium
                  assumenda minus. Amet rerum saepe tempora vero.
                </p>
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <i className="bi bi-easel flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Culpa itaque minus quidem, quibusdam ipsam mollitia fuga
                      voluptatum!
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-patch-check flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: `url(${AboutCArd3})` }}
                data-aos="zoom-in"
                data-aos-delay={100}
              />
            </div>
          </div>
        </section>
        {/* End Alt Services Section 2 */}
        {/* ======= Our Team Section ======= */}
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>OUR TEAM MEMBERS</h2>
              <p className="fs-3">
                Meet our core team members whore amazing leaders
              </p>
            </div>
            <div className="row gy-5">
              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="member-img">
                  <img src={Team1} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Lorem Lipsum</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa itaque minus quidem, quibusdam ipsam mollitia fuga
                    voluptatum!
                  </p>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="member-img">
                  <img src={Team2} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Lorem Lipsum</h4>
                  <span>Product Manager</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa itaque minus quidem, quibusdam ipsam mollitia fuga
                    voluptatum!
                  </p>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="member-img">
                  <img src={Team3} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Lorem Lipsum</h4>
                  <span>CTO</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa itaque minus quidem, quibusdam ipsam mollitia fuga
                    voluptatum!
                  </p>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="member-img">
                  <img src={Team4} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Lorem Lipsum</h4>
                  <span>Accountant</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa itaque minus quidem, quibusdam ipsam mollitia fuga
                    voluptatum!
                  </p>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="member-img">
                  <img src={Team5} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Lorem Lipsum</h4>
                  <span>Marketing</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa itaque minus quidem, quibusdam ipsam mollitia fuga
                    voluptatum!
                  </p>
                </div>
              </div>
              {/* End Team Member */}
              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="member-img">
                  <img src={Team6} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Lorem Lipsum</h4>
                  <span>Operation</span>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa itaque minus quidem, quibusdam ipsam mollitia fuga
                    voluptatum!
                  </p>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* End Our Team Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Testimonials</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                itaque minus quidem, quibusdam ipsam mollitia fuga voluptatum!
              </p>
            </div>
            <div className="slides-2 swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src={Testimonials1}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Lorem Lipsum</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Culpa itaque minus quidem, quibusdam ipsam
                        mollitia fuga voluptatum!
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src={Testimonials2}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src={Testimonials3}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src={Testimonials4}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src={Testimonials5}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}
        {/* START SUB FOOTER */}
        <div id="sub-footer">
          <div className="container">
            <div className="row">
              {/* Left Side */}
              <div className="col-lg-8">
                <div className="sub-foot-left">
                  <ul>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      © 2020
                      <span style={{ color: "#0084ff" }}>
                        Lorvish Technologies.{" "}
                      </span>{" "}
                      All Right Reseverd.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Right Side */}
              <div className="col-lg-4">
                <div className="sub-foot-right">
                  <ul>
                    <li>
                      Designed By <a href="#">Fleet IT Solutions Pvt Ltd.</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END SUB FOOTER */}
        {/* START BACK TO TOP BTN */}
        <div className="backto-top-btn">
          <a href="#body-top" className="top-btn btn btn-primary">
            <i className="mdi mdi-arrow-up mdi-24px" />
          </a>
        </div>
      </main>
      {/* End #main */}
    </>
  );
};

export default about;
