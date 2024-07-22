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
            <div className="our-story">
              <h3>CLOUD OFFERINGS</h3>
              <p>
              A cloud service is any service made available to users on demand via the Internet from a cloud computing provider's servers as opposed to being provided from a company's own on-premises servers.
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
            <a href="lorvishOffers" className="btn btn-outline-primary mt-3 w-100">Read More</a>

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
            Managed services is the practice of outsourcing the responsibility for maintaining, and anticipating need for, a range of processes and functions in order to improve operations and cut expenses.
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
                The managed service provider assumes ongoing responsibility for monitoring, managing and/or problem resolution for selected IT systems and functions on your behalf. ... At the upper end of the spectrum, service providers offer fully managed services that cover everything from alerts through problem resolution
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
                Managed services are on-going and typically work off of a contract. They can cover many aspects of an organization's IT needs on a daily basis. Professional services are project-based and usually address a specific problem or challenge.
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
            <a href="managedservice" className="btn btn-outline-primary mt-3 w-100">Read More</a>
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
            Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations. A complete ERP suite also includes enterprise performance management, software that helps plan, budget, predict, and report on an organization’s financial results.
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
                ERP systems tie together a multitude of business processes and enable the flow of data between them. By collecting an organization’s shared transactional data from multiple sources, ERP systems eliminate data duplication and provide data integrity with a single source of truth.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            {/* <a href="ERP" className="btn btn-outline-primary mt-3 w-100">Read More</a> */}
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
                Today, ERP systems are critical for managing thousands of businesses of all sizes and in all industries. To these companies, ERP is as indispensable as the electricity that keeps the lights on.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <a href="/erp" className="btn btn-outline-primary mt-3 w-100">Read More</a>

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
            US Staffing is the process of hiring candidates for the US companies or clients by evaluating their skills, knowledge for a job position for which they are applying for. US IT Staffing Firm have a process of screening candidates by using tools to check candidates knowledge for a technology-specific role.
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
                Staffing is the process of hiring eligible candidates in the organization or company for specific positions. In management, the meaning of staffing is an operation of recruiting the employees by evaluating their skills, knowledge and then offering them specific job roles accordingly.
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
                “The Right Stuff”: Contract Employment/Short-Term Staffing. This strategy is generally used when demand exceeds the number of core positions needed to accommodate minimum production goals. ...
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
                “The Right Stuff”: Contract Employment/Short-Term Staffing. This strategy is generally used when demand exceeds the number of core positions needed to accommodate minimum production goals. ...
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
                “Lets Go Shopping”: Contract-to-Hire. It's kind of like buying a new car. ...
                “Busy Business”: Direct Placement Hire.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <a href="Itstaffing" className="btn btn-outline-primary mt-3 w-100">Read More</a>

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
            Outsourcing allows a company to subcontract a particular area within the organization. A company may outsource project management or any other task or department for one or more reasons. However, in general, organizations commonly choose to outsource to save money or make use of expertise outside the company.
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
                Outsourcing sites are best for finding people to do project based work. If you want a longer term full time person you might want to try hiring them directly. Target the country or area where you are most likely to find the right staff.
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
                Start out by talking with various companies and getting a feel for their needs and go from there. Take on an outsource project from them to start and see how the dynamic is. If you mesh well together, perhaps they will feed you more work.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <a href="projectoutsourcing" className="btn btn-outline-primary mt-3 w-100">Read More</a>

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
