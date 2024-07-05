import React from "react";

const services = () => {
  return (
    <>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\n\t.nav-pills-custom .nav-link {\n    color:#FFFFFF; /*#aaa;*/\n    background:#575784; /*#fff;*/\n    position: relative;\n}\n\n.nav-pills-custom .nav-link.active {\n    color:#000000;\n    background:#00c4ff; /*#fff;*/\n}\n\n\n/* Add indicator arrow for the active tab */\n@media (min-width: 992px) {\n    .nav-pills-custom .nav-link::before {\n        content: '';\n        display: block;\n        border-top: 8px solid transparent;\n        border-left: 10px solid #fff;\n        border-bottom: 8px solid transparent;\n        position: absolute;\n        top: 50%;\n        right: -10px;\n        transform: translateY(-50%);\n        opacity: 0;\n    }\n}\n\n.nav-pills-custom .nav-link.active::before {\n    opacity: 1;\n\t\n\t\n\t#breadcrumb{\n\tpadding: 120px 0px;\n\tposition: relative;\n\tbackground-image:url(\"assets/images/services.jpg\");\n\tbackground-size: cover;\n\tbackground-attachment: fixed;\n\tz-index: 1;\n}\n\n\n}\n\n\n\n/*\n*\n* ==========================================\n* FOR DEMO PURPOSE\n* ==========================================\n*/\n/*body {\n    min-height: 100vh;\n    background: linear-gradient(to left, #dce35b, #45b649);\n}*/\n\t\n\t",
        }}
      ></style>
      {/* START BREADCRUMB */}
      <div id="breadcrumb">
        <div className="container">
          <div className="mb-4">
            <h2 className="head-after">Our Services</h2>
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
          <header className="text-center mb-5 pb-5 text-white">
            {/*<h1 class="display-4">Services</h1>*/}
            {/*<p class="font-italic mb-1">Making advantage of Bootstrap 4 components, easily build an awesome tabbed interface.</p>*/}
            {/*<p class="font-italic">Snippet by
                  <a class="text-white" href="https://bootstrapious.com/">
                      <u>Bootstrapious</u>
                  </a>
              </p>*/}
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
                  <i className="fa fa-user-circle-o mr-2" />
                  <span className="font-weight-bold small text-uppercase">
                    Cloud offerings
                  </span>
                </a>
                {/*----<a class="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                          <i class="fa fa-calendar-minus-o mr-2"></i>
                          <span class="font-weight-bold small text-uppercase">Talent Acquisition Services</span></a> --*/}
                <a
                  className="nav-link mb-3 p-3 shadow"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <i className="fa fa-star mr-2" />
                  <span className="font-weight-bold small text-uppercase">
                    Managed Services
                  </span>
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
                  <i className="fa fa-check mr-2" />
                  <span className="font-weight-bold small text-uppercase">
                    ERP Technologies
                  </span>
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
                  <i className="fa fa-check mr-2" />
                  <span className="font-weight-bold small text-uppercase">
                    IT Staffing
                  </span>
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
                  <i className="fa fa-check mr-2" />
                  <span className="font-weight-bold small text-uppercase">
                    Project Outsourcing
                  </span>
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
                  <h4 className="font-italic mb-4">
                    <span style={{ color: "#f7941d" }}>Cloud offerings</span>
                  </h4>
                  <img src="assets/images/line.png" /> <br />
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
                  <img src="assets/images/cloud.png" />
                  <img src="assets/images/cloud12.png" />
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <h4 className="font-italic mb-4">
                    <span style={{ color: "#f7941d" }}>Managed Services</span>
                  </h4>
                  <img src="assets/images/line.png" /> <br />
                  <p>
                    Managed services is the practice of outsourcing the
                    responsibility for maintaining, and anticipating need for, a
                    range of processes and functions in order to improve
                    operations and cut expenses.
                  </p>
                  <p>
                    The managed service provider assumes ongoing responsibility
                    for monitoring, managing and/or problem resolution for
                    selected IT systems and functions on your behalf. ... At the
                    upper end of the spectrum, service providers offer fully
                    managed services that cover everything from alerts through
                    problem resolution
                  </p>
                  <p>
                    Managed services are on-going and typically work off of a
                    contract. They can cover many aspects of an organization's
                    IT needs on a daily basis. Professional services are
                    project-based and usually address a specific problem or
                    challenge.
                  </p>{" "}
                  <br /> <br />
                  <img src="assets/images/mangedservices.png" />
                  <img src="assets/images/mangedservices1.png" />
                  <br />
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <h4 className="font-italic mb-4">
                    <span style={{ color: "#f7941d" }}>ERP Technologies</span>
                  </h4>
                  <img src="assets/images/line.png" /> <br />
                  <p>
                    Enterprise resource planning (ERP) refers to a type of
                    software that organizations use to manage day-to-day
                    business activities such as accounting, procurement, project
                    management, risk management and compliance, and supply chain
                    operations. A complete ERP suite also includes enterprise
                    performance management, software that helps plan, budget,
                    predict, and report on an organization’s financial results.
                  </p>
                  <p>
                    ERP systems tie together a multitude of business processes
                    and enable the flow of data between them. By collecting an
                    organization’s shared transactional data from multiple
                    sources, ERP systems eliminate data duplication and provide
                    data integrity with a single source of truth.
                  </p>
                  <p>
                    Today, ERP systems are critical for managing thousands of
                    businesses of all sizes and in all industries. To these
                    companies, ERP is as indispensable as the electricity that
                    keeps the lights on.
                  </p>
                  <img src="assets/images/erp.png" />
                  <img src="assets/images/erp1.png" />
                </div>
                <div
                  className="tab-pane fade shadow rounded bg-white p-5"
                  id="v-pills-it"
                  role="tabpanel"
                  aria-labelledby="v-pills-it-tab"
                >
                  <h4 className="font-italic mb-4">
                    <span style={{ color: "#f7941d" }}>IT Staffing</span>
                  </h4>
                  <img src="assets/images/line.png" /> <br />
                  <p>
                    US Staffing is the process of hiring candidates for the US
                    companies or clients by evaluating their skills, knowledge
                    for a job position for which they are applying for. US IT
                    Staffing Firm have a process of screening candidates by
                    using tools to check candidates knowledge for a
                    technology-specific role.
                  </p>
                  <p>
                    Staffing is the process of hiring eligible candidates in the
                    organization or company for specific positions. In
                    management, the meaning of staffing is an operation of
                    recruiting the employees by evaluating their skills,
                    knowledge and then offering them specific job roles
                    accordingly.
                  </p>
                  <p>
                    <img src="assets/images/bullet12.jpg" />
                    &nbsp; “The Right Stuff”: Contract Employment/Short-Term
                    Staffing. This strategy is generally used when demand
                    exceeds the number of core positions needed to accommodate
                    minimum production goals. ...
                  </p>
                  <p>
                    <img src="assets/images/bullet1.jpg" />
                    &nbsp; “The Right Stuff”: Contract Employment/Short-Term
                    Staffing. This strategy is generally used when demand
                    exceeds the number of core positions needed to accommodate
                    minimum production goals. ...
                  </p>
                  <p>
                    <img src="assets/images/bullet13.jpg" />
                    &nbsp; “Lets Go Shopping”: Contract-to-Hire. It's kind of
                    like buying a new car. ...
                  </p>
                  <p>
                    <img src="assets/images/bullet12.jpg" />
                    &nbsp; “Busy Business”: Direct Placement Hire.
                  </p>{" "}
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
                  <h4 className="font-italic mb-4">
                    <span style={{ color: "#f7941d" }}>
                      Project Outsourcing
                    </span>
                  </h4>
                  <img src="assets/images/line.png" /> <br />
                  <p>
                    Outsourcing allows a company to subcontract a particular
                    area within the organization. A company may outsource
                    project management or any other task or department for one
                    or more reasons. However, in general, organizations commonly
                    choose to outsource to save money or make use of expertise
                    outside the company.
                  </p>
                  <p>
                    Outsourcing sites are best for finding people to do project
                    based work. If you want a longer term full time person you
                    might want to try hiring them directly. Target the country
                    or area where you are most likely to find the right staff.
                  </p>
                  <p>
                    Start out by talking with various companies and getting a
                    feel for their needs and go from there. Take on an outsource
                    project from them to start and see how the dynamic is. If
                    you mesh well together, perhaps they will feed you more
                    work.
                  </p>
                  <img src="assets/images/outsourcing.png" />
                  <img src="assets/images/outsourcing1.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br />
      {/* END WHO WE ARE */}
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
