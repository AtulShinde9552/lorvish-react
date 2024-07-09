import React from "react";
import CustomerSays from "../compoents/customerSlider";

const Home = () => {
  return (
    <div>
      {/* Main Slider */}
      <div id="main-slider" className="mb-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval={5000}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
               className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{
                backgroundImage: 'url("assets/images/slider/header-1.jpg")',
              }}
            >
              <div className="carousel-caption">
                <div className="container">
                  <h3>
                    Project Management{" "}
                    <span className="color-primary">Services</span>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: 'url("assets/images/slider/header-2.jpg")',
              }}
            >
              <div className="carousel-caption">
                <div className="container">
                  <h3>
                    Implementation, Upgrade, Support Services{" "}
                    <span className="color-primary">
                      &amp; 24X7 Infra Support Services
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: 'url("assets/images/slider/header-3.jpg")',
              }}
            >
              <div className="carousel-caption">
                <div className="container">
                  <h3>
                    Testing Services - Test Planning/Execution,{" "}
                    <span className="color-primary">
                      Automation, Perf Testing
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Counter */}
      {/* Counter */}
      <div id="counter" className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="counter-box p-4 bg-white rounded shadow">
                <i className="mdi mdi-briefcase-check mdi-60px color-primary mb-3" />
                <div className="count-timer">
                  <h2 className="mb-0">
                    <span className="timer" data-to={100} data-speed={1000} />{" "}
                    <i className="mdi mdi-plus mdi-24px" />
                  </h2>
                  <p className="mt-2">Work Completed</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="counter-box p-4 bg-white rounded shadow">
                <i className="mdi mdi-briefcase-account-outline mdi-60px color-primary mb-3" />
                <div className="count-timer">
                  <h2 className="mb-0">
                    <span className="timer" data-to={100} data-speed={1000} />{" "}
                    <i className="mdi mdi-plus mdi-24px" />
                  </h2>
                  <p className="mt-2">Expert Workers</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="counter-box p-4 bg-white rounded shadow">
                <i className="mdi mdi-human-greeting mdi-60px color-primary mb-3" />
                <div className="count-timer">
                  <h2 className="mb-0">
                    <span className="timer" data-to={50} data-speed={500} />{" "}
                    <i className="mdi mdi-plus mdi-24px" />
                  </h2>
                  <p className="mt-2">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="counter-box p-4 bg-white rounded shadow">
                <i className="mdi mdi-trophy-variant-outline mdi-60px color-primary mb-3" />
                <div className="count-timer">
                  <h2 className="mb-0">
                    <span className="timer" data-to={40} data-speed={400} />{" "}
                    <i className="mdi mdi-plus mdi-24px" />
                  </h2>
                  <p className="mt-2">Award Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div id="what-we-offer" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="head-after mb-4">What We Offer</h5>
            <h1>
              Our <b>Services</b>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-account-tie mdi-60px color-primary mb-3" />
                  <h5 className="card-title">
                    <a href="services">Cloud Offerings</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-cursor-default-click-outline mdi-60px color-primary mb-3" />
                  <h5 className="card-title">
                    <a href="services">Managed Services</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-chart-line mdi-60px color-primary mb-3" />
                  <h5 className="card-title">
                    <a href="services">ERP Technologies</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-podcast mdi-60px color-primary mb-3" />
                  <h5 className="card-title">
                    <a href="services">IT Staffing</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-lightbulb-on-outline mdi-60px color-primary mb-3" />
                  <h5 className="card-title">
                    <a href="services">Project Outsourcing</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div id="who-we-are" className="py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="video-btn position-relative">
                <img className="w-100" src="assets/images/img-1.jpg" alt="" />
                <button
                  type="button"
                  id="clickplay"
                  className="btn btn-lg btn-primary position-absolute"
                  data-toggle="modal"
                  data-target="#video"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <i className="mdi mdi-play-speed mdi-40px" />
                </button>
              </div>
            </div>
            <div id="video" className="modal fade" role="dialog">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <input
                      type="hidden"
                      defaultValue="https://www.youtube.com/embed/O33uuBh6nXA?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"
                      id="videoinput"
                    />
                    <iframe id="vidframe" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-us">
                <h1>LORVISH TECHNOLOGIES DIFFERENCE</h1>
                <p>
                  {" "}
                  Pioneered a 24 x 7 ASSEMBLY LINE GLOBAL RECRUITING MODEL that
                  can be quickly adopted to individual client needs Focus on
                  "PROACTIVE" project staffing/consulting model and POOLING
                  STRATEGIES to better serve customers and create a competitive
                  edge Adopt a seamless onsite-offshore model for improved
                  "EFFICIENCY", quicker "SCALABILITY" and better "CUSTOMER
                  EXPERIENCE" Align across VERTICALS through a CLUSTER MODEL as
                  opposed to skills, technologies and geographies Create an
                  entrepreneurial and passionate work environment that helps in
                  high "CUSTOMER SATISFACTION" and "RETENTION" Implement
                  METRIC-DRIVEN tools, FRAMEWORKS and PROCESS to maintain the
                  highest quality of work and accountability. Committed to a
                  passion of EXCELLENCE and exceeding CUSTOMER EXPECTATION.
                </p>
                <a href="about" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div id="why-us" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="head-after mb-4">Why Choose Us</h5>
            <h1>
              Reasons to <b>Work With Us</b>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-shield-check mdi-60px color-primary mb-3" />
                  <h5 className="card-title">Reliable</h5>
                  <p className="card-text">
                    We provide reliable services ensuring the best outcomes for
                    our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-account-multiple-check mdi-60px color-primary mb-3" />
                  <h5 className="card-title">Experienced Team</h5>
                  <p className="card-text">
                    Our team of experts brings years of experience to the table.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-speedometer mdi-60px color-primary mb-3" />
                  <h5 className="card-title">Fast Delivery</h5>
                  <p className="card-text">
                    We ensure timely delivery of our services without
                    compromising on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Says */}
      <div id="customer-says" className="py-5">
        <div className="container">
          <CustomerSays />
        </div>
      </div>

      {/* Contact Us */}
      <div id="contact-us" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="head-after mb-4">Get In Touch</h5>
            <h1>
              Contact <b>Us</b>
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-email mdi-60px color-primary mb-3" />
                  <h5 className="card-title">Email Us</h5>
                  <p className="card-text">info@lorvish.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="mdi mdi-phone mdi-60px color-primary mb-3" />
                  <h5 className="card-title">Call Us</h5>
                  <p className="card-text">+(312) 285-1044</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div id="call-back" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-5">
                <h5 className="head-after mb-4 text-white">Call Back</h5>
              </div>
            </div>
            <div className="col-lg-8 d-flex m-auto">
              <form
                action="call_back"
                method="post"
                encType="multipart/form-data"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select className="form-control" name="service" required>
                        <option>Select Service</option>
                        <option value="Cloud offerings">Cloud offerings</option>
                        <option value="Talent Acquisition Services">
                          Talent Acquisition Services
                        </option>
                        <option value="Managed Services">
                          Managed Services
                        </option>
                        <option value="ERP Technologies">
                          ERP Technologies
                        </option>
                        <option value="IT Staffing">IT Staffing</option>
                        <option value="Project Outsourcing">
                          Project Outsourcing
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        rows={4}
                        name="comment"
                        placeholder="Your Message"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-primary px-5"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
};
export default Home;
