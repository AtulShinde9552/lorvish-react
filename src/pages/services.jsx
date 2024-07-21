import React from "react";
import About3 from '../assets/img/about-3.jpg'
import Lorvish from "../assets/img/services/Lovrish.jpg"
import Managed from "../assets/img/services/standard-quality-control-concept-m.jpg"
import ERPImg from "../assets/img/services/representation-user-experience-interface-design.jpg"
import ItStaf from "../assets/img/services/medium-shot-people-working-together-office.jpg"
const services = () => {
  return (
    <>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
            .nav-pills-custom .nav-link {
              color: #575784;
              background: #f0f0f5;
              border-radius: 5px;
              transition: background 0.3s, color 0.3s;
            }

            .nav-pills-custom .nav-link.active {
              color: #fff;
              background: #00c4ff;
            }

            .nav-pills-custom .nav-link:hover {
              background: #00a3cc;
              color: #fff;
            }

            @media (min-width: 992px) {
              .nav-pills-custom .nav-link::before {
                content: '';
                display: block;
                border-top: 8px solid transparent;
                border-left: 10px solid #fff;
                border-bottom: 8px solid transparent;
                position: absolute;
                top: 50%;
                right: -10px;
                transform: translateY(-50%);
                opacity: 0;
              }

              .nav-pills-custom .nav-link.active::before {
                opacity: 1;
              }
            }

            #breadcrumb {
              padding: 60px 0;
              background-image: url("assets/images/img-3.jpg");
              background-size: cover;
              background-attachment: fixed;
              position: relative;
              z-index: 1;
              color: #fff;
            }

            #breadcrumb h2 {
              font-size: 36px;
              margin-bottom: 10px;
            }

            #breadcrumb nav ol {
              background: none;
              padding: 0;
            }

            #breadcrumb nav ol li {
              display: inline;
              color: #fff;
              margin-right: 5px;
            }

            #breadcrumb nav ol li a {
              color: #00c4ff;
              text-decoration: none;
            }

            .header {
              background: #f9f9f9;
              padding: 60px 0;
            }

            .header .text-center h4 {
              font-size: 28px;
              margin-bottom: 20px;
              color: #333;
            }

            .header .text-center p {
              font-size: 18px;
              color: #666;
            }

            .nav-link span {
              display: block;
              text-align: center;
              font-size: 14px;
            }
          `,
        }}
      ></style>
      {/* START BREADCRUMB */}
      <main id="main">
      <div id="breadcrumb">
        <div className="container">
          <div className="mb-4">
            <h2>Our Services</h2>
          </div>
          <nav>
            <ol>
              <li className="breadcrumb-item">
                <a href="index">
                  <i className="mdi mdi-home" /> Home
                </a>
              </li>
              <li className="breadcrumb-item active">Services</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* END BREADCRUMB */}
      <br /> <br />
      <div class="col-lg-6 offset-lg-3">
          <div class="section-heading">
            <h6>Investment in Details</h6>
            <h4>Upgrade your knowledge</h4>
          </div>
        </div>
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row position-relative">
          <div
            className="col-lg-7 about-img"
            style={{ backgroundImage: `url(${Lorvish})` }}
          />
          <div className="col-lg-7">
            <h2>CLOUD OFFERINGS</h2>
            <div className="our-story">
              <h3>Lorvish offers</h3>
              <p>
              Lorvish offers full range of consultancy & training methods for data analysis, business consul tation, and strategic ways for business.
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
              <p>
                Watch creative process behind Our brand success
              </p>
              {/* <div className="watch-video d-flex align-items-center position-relative">
                <i className="bi bi-play-circle" />
                <a
                  href="/services/lorvishOffers"
                  className="glightbox stretched-link"
                >
                  Read More
                </a>
              </div> */}
            <a href="/services/lorvishOffers" className="btn btn-outline-primary mt-3 w-100">Read More</a>

            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}

    {/* End Stats Counter Section */}
    {/* ======= Alt Services Section ======= */}
    <section id="alt-services" className="alt-services">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-around gy-4">
          <div
            className="col-lg-6 img-bg"
            style={{ backgroundImage: `url(${Managed})` }}
            data-aos="zoom-in"
            data-aos-delay={100}
          />
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>MANAGED SERVICES</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam error ratione voluptatum repellendus ex doloribus accusamus suscipit quia sint. Qui perspiciatis aspernatur quo. Esse.
            </p>
            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <i className="bi bi-easel flex-shrink-0" />
              <div>
                <h4>
                  <a href="#" className="stretched-link">
                    Versatile Operation
                  </a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
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
                  <a href="#" className="stretched-link">
                    Skilled Manpower
                  </a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
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
                  <a href="#" className="stretched-link">
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
                  <a href="#" className="stretched-link">
                    Global Reach
                  </a>
                </h4>
                <p>
                  Est voluptatem labore deleniti quis a delectus et. Saepe
                  dolorem libero sit non aspernatur odit amet. Et eligendi
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <a href="/services/managedservice" className="btn btn-outline-primary mt-3 w-100">Read More</a>
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
            ERP TECHNOLOGIES
            </h3>
            <p>
              Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at
              non. Ducimus maxime minima iste magni sit praesentium assumenda
              minus. Amet rerum saepe tempora vero.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque minus quidem, quibusdam ipsam mollitia fuga voluptatum!
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            {/* <a href="/services/ERP" className="btn btn-outline-primary mt-3 w-100">Read More</a> */}
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
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
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
            <a href="/services/ERP" className="btn btn-outline-primary mt-3 w-100">Read More</a>

          </div>
          <div
            className="col-lg-6 img-bg"
            style={{ backgroundImage: `url(${ERPImg})` }}
            data-aos="zoom-in"
            data-aos-delay={100}
          />
        </div>
      </div>
    </section>
    {/* End Alt Services Section 2 */}
        {/* ======= Alt Services Section 2 ======= */}
        <section id="alt-services-2" className="alt-services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-around gy-4">
        <div
            className="col-lg-6 img-bg"
            style={{ backgroundImage: `url(${ItStaf})` }}
            data-aos="zoom-in"
            data-aos-delay={100}
          />
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>
            IT STAFFING
            </h3>
            <p>
              Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at
              non. Ducimus maxime minima iste magni sit praesentium assumenda
              minus. Amet rerum saepe tempora vero.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque minus quidem, quibusdam ipsam mollitia fuga voluptatum!
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
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
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
            <a href="/services/Itstaffing" className="btn btn-outline-primary mt-3 w-100">Read More</a>

          </div>
        </div>
      </div>
    </section>
    {/* End Alt Services Section 2 */}
        {/* ======= Alt Services Section 2 ======= */}
        <section id="alt-services-2" className="alt-services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-around gy-4">
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <h3>
            PROJECT OUTSOURCING
            </h3>
            <p>
              Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at
              non. Ducimus maxime minima iste magni sit praesentium assumenda
              minus. Amet rerum saepe tempora vero.
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque minus quidem, quibusdam ipsam mollitia fuga voluptatum!
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
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
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
            <a href="/services/projectoutsourcing" className="btn btn-outline-primary mt-3 w-100">Read More</a>

          </div>
          <div
            className="col-lg-6 img-bg"
            style={{ backgroundImage: `url(${About3})` }}
            data-aos="zoom-in"
            data-aos-delay={100}
          />
        </div>
      </div>
    </section>
    {/* End Alt Services Section 2 */}

      <br /> <br />
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
                    © 2020{" "}
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
      {/* END BACK TO TOP BTN */}
      </main>
    </>
  );
};

export default services;
