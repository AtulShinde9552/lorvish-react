import React from "react";

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

            .tab-pane h4 {
              font-size: 24px;
              margin-bottom: 15px;
              color: #f7941d;
            }

            .tab-pane img {
              max-width: 100%;
              height: auto;
              margin-bottom: 20px;
            }

            
          `,
        }}
      ></style>
      {/* START BREADCRUMB */}
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
      {/* START WHO WE ARE */}
      <section className="py-5 header">
        <div className="container py-4">
          <header className="text-center mb-5 pb-5">
            {/* Optional Header Content */}
          </header>
          <div className="row">
            <div className="col-md-3">
              {/* Tabs nav */}
              <div
                className="nav flex-column nav-pills nav-pills-custom"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link mb-3 p-3 shadow active"
                  id="v-pills-1-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <i className="fa fa-cloud mr-2" />
                  <span>Cloud Offerings</span>
                </a>
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <i className="fa fa-cogs mr-2" />
                  <span>Managed Services</span>
                </a>
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <i className="fa fa-briefcase mr-2" />
                  <span>ERP Technologies</span>
                </a>
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-it-tab"
                  data-toggle="pill"
                  href="#v-pills-it"
                  role="tab"
                  aria-controls="v-pills-it"
                  aria-selected="false"
                >
                  <i className="fa fa-users mr-2" />
                  <span>IT Staffing</span>
                </a>
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-project-tab"
                  data-toggle="pill"
                  href="#v-pills-project"
                  role="tab"
                  aria-controls="v-pills-project"
                  aria-selected="false"
                >
                  <i className="fa fa-tasks mr-2" />
                  <span>Project Outsourcing</span>
                </a>
              </div>
            </div>
            <div className="col-md-9">
              {/* Tabs content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade shadow rounded bg-white show active p-5"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h4>Cloud Offerings</h4>
                  <img src="assets/images/line.png" alt="line" /> <br />
                  <p>
                    A cloud service is any service made available to users on
                    demand via the Internet from a cloud computing provider's
                    servers as opposed to being provided from a company's own
                    on-premises servers.
                  </p>
                  <p>
                    Cloud computing is the on-demand availability of computer
                    system resources, especially data storage and computing
                    power, without direct active management by the user. The
                    term is generally used to describe data centers available to
                    many users over the Internet.
                  </p>
                  <p>
                    Simply put, cloud computing is the delivery of computing
                    services—including servers, storage, databases, networking,
                    software, analytics, and intelligence—over the Internet
                    (“the cloud”) to offer faster innovation, flexible
                    resources, and economies of scale. You typically pay only
                    for cloud services you use, helping lower your operating
                    costs, run your infrastructure more efficiently and scale as
                    your business needs change.
                  </p>
                  <br /> <br />
                  <img src="assets/images/cloud.png" alt="cloud" />
                  <img src="assets/images/cloud12.png" alt="cloud" />
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <h4>Managed Services</h4>
                  <img src="assets/images/line.png" alt="line" /> <br />
                  <p>
                    Managed services is the practice of outsourcing the
                    responsibility for maintaining, and anticipating need for, a
                    range of processes and functions in order to improve
                    operations and cut expenses.
                  </p>
                  <p>
                    The managed service provider assumes ongoing responsibility
                    for monitoring, managing and/or problem resolution for
                    selected IT systems and functions on your behalf. MSPs offer
                    a range of services, including but not limited to,
                    monitoring and managing networks, servers, desktops and
                    other endpoints, as well as providing security services and
                    disaster recovery.
                  </p>
                  <br /> <br />
                  <img src="assets/images/mangedservices.png" />
                  <img src="assets/images/mangedservices1.png" />
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <h4>ERP Technologies</h4>
                  <img src="assets/images/line.png" alt="line" /> <br />
                  <p>
                    ERP (Enterprise Resource Planning) refers to a type of
                    software that organizations use to manage day-to-day
                    business activities such as accounting, procurement, project
                    management, risk management and compliance, and supply chain
                    operations.
                  </p>
                  <p>
                    A complete ERP suite also includes enterprise performance
                    management, software that helps plan, budget, predict, and
                    report on an organization’s financial results. ERP systems
                    tie together a multitude of business processes and enable
                    the flow of data between them. By collecting an
                    organization’s shared transactional data from multiple
                    sources, ERP systems eliminate data duplication and provide
                    data integrity with a single source of truth.
                  </p>
                  <br /> <br />
                  <img src="assets/images/erp.png" />
                  <img src="assets/images/erp1.png" />
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-it"
                  role="tabpanel"
                  aria-labelledby="v-pills-it-tab"
                >
                  <h4>IT Staffing</h4>
                  <img src="assets/images/line.png" alt="line" /> <br />
                  <p>
                    IT staffing services provide businesses with skilled IT
                    professionals on a short-term or long-term basis to fill
                    gaps in their workforce, support IT projects, and address
                    specific business needs.
                  </p>
                  <p>
                    Our IT staffing solutions offer you access to highly
                    qualified and experienced IT professionals who can help your
                    business stay competitive in today’s fast-paced technological
                    landscape.
                  </p>
                  <br /> <br />
                  <img src="assets/images/itsaffing.png" />
                  <img src="assets/images/itsaffing1.png" />
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-project"
                  role="tabpanel"
                  aria-labelledby="v-pills-project-tab"
                >
                  <h4>Project Outsourcing</h4>
                  <img src="assets/images/line.png" alt="line" /> <br />
                  <p>
                    Project outsourcing involves hiring an external service
                    provider to carry out a project on behalf of an
                    organization. This strategy can help businesses to save
                    costs, access specialized skills, and improve efficiency.
                  </p>
                  <p>
                    Outsourcing allows businesses to focus on their core
                    competencies while leveraging the expertise of external
                    providers to complete specific projects successfully.
                  </p>
                  <br /> <br />
                  <img src="assets/images/outsourcing.png" />
                  <img src="assets/images/outsourcing1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default services;
