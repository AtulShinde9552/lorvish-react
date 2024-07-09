import React from "react";

const Careers = () => {
  return (
    <div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            `
            #breadcrumb {
              padding: 100px 0;
              background-image: url("assets/images/career.jpg");
              background-size: cover;
              background-attachment: fixed;
              text-align: center;
              color: white;
            }
            .breadcrumb-nav {
              display: flex;
              justify-content: center;
              gap: 10px;
            }
            .breadcrumb-nav a, .breadcrumb-nav span {
              color: white;
              text-decoration: none;
            }
            .breadcrumb-nav a:hover {
              text-decoration: underline;
            }
            .form-group input, .form-group textarea, .form-group button {
              width: 100%;
              padding: 10px;
              margin: 5px 0;
            }
            .form-group input, .form-group textarea {
              border: 1px solid #ccc;
              border-radius: 5px;
            }
            .form-group button {
              background-color: #0084ff;
              border: none;
              color: white;
              border-radius: 5px;
              cursor: pointer;
            }
            .form-group button:hover {
              background-color: #005bb5;
            }
            .job-opening {
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 5px;
              margin-bottom: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .job-opening h5 {
              color: #0084ff;
            }
            .job-opening img {
              width: 100%;
              margin: 10px 0;
            }
            .job-description, .job-qualifications {
              margin: 20px 0;
            }
            `
        }}
      />
      <div id="breadcrumb">
        <div className="container">
          <h2>Careers</h2>
          <nav className="breadcrumb-nav">
          <ol>
              <li className="breadcrumb-item">
                <a href="index">
                  <i className="mdi mdi-home" /> Home
                </a>
              </li>
              <li className="breadcrumb-item active">Careers</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="w-card border-light-ccc">
                <form
                  action="careers_form"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-lg-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        maxLength={10}
                        placeholder="Mobile"
                        required
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="EmailId"
                        required
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        placeholder="resume"
                        required
                      />
                      <span className="filename">Upload Resume</span>
                    </div>
                    <div className="col-lg-12 form-group">
                      <textarea
                        rows={4}
                        name="message"
                        placeholder="Messages"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12 form-group">
                      <button
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-3">
              <img src="assets/images/c1.png" alt="Careers" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="head-after mb-4">Current Openings</h5>
          </div>
          <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                JAVA DEVELOPER
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                WEB DESIGNER
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="job-opening">
                <h5>Location: APEX, NC</h5>
                <img src="assets/images/line3.png" alt="Line" />
                <div className="job-description">
                  <strong>Job description:</strong>
                  <p>
                    Ideal candidate should have analytical skills, extensive
                    experience in Java-based software development and design, and
                    additional investment management domain knowledge...
                  </p>
                  <strong>Primary Responsibilities:</strong>
                  <ul>
                    <li>Work as a member of a team of analysts/developers partnered with business users.</li>
                    <li>Design, develop, maintain and support analytic tools used by Active Equity Portfolio Managers, Researchers and Strategists.</li>
                    <li>Communicate with Portfolio Managers, Researchers, Strategists and other QUIP members frequently.</li>
                  </ul>
                  <strong>Tools/Skills/Technologies/Experience:</strong>
                  <ul>
                    <li>5-7 Years of IT experience.</li>
                    <li>3+ Years of experience in Java Application.</li>
                    <li>Strong analytical, quantitative, and problem-solving skills...</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="job-opening">
                <h5>Location: APEX, NC</h5>
                <img src="assets/images/line.png" alt="Line" />
                <div className="job-description">
                  <strong>Job description:</strong>
                  <p>
                    We are looking for a resource that designs and constructs web
                    pages for enterprise level ecommerce site including...
                  </p>
                  <strong>Qualifications:</strong>
                  <ul>
                    <li>2-5+ years of experience in front end web development or web architecture...</li>
                    <li>2+ years in an eCommerce/Consumer Transactional company.</li>
                    <li>Expert in HTML, strong working knowledge of Cascading Style Sheets.</li>
                  </ul>
                  <strong>Preferred Qualifications:</strong>
                  <ul>
                    <li>BA in Graphic Design, Computer Science, Communications...</li>
                    <li>Experience with consumer-focused transactional websites...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Careers;
