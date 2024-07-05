import React from "react";

const careers = () => {
  return (
    <div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      #breadcrumb {\n        padding: 120px 0px;\n        position: relative;\n background-image:url("\"assets\images\career.jpg");\n        background-size: cover;\n        background-attachment: fixed;\n        z-index: 1;\n      }\n    ',
        }}
      />
      {/* START BREADCRUMB */}
      <div id="breadcrumb">
        <div className="container">
          <div className="mb-4">
            <h2 className="head-after">Careers</h2>
          </div>
          <nav>
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
      {/* END BREADCRUMB */}
      <br />
      <br />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="mb-4">
                {/*<div class="mb-4">
                        <h4 class="head-after">Get A Quote</h4>
                    </div>*/}
                <div className="w-card border-light-ccc">
                  <form
                    action="careers_form"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                            maxLength={10}
                            placeholder="Mobile"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="EmailId"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="file"
                            name="image"
                            className="form-control"
                            placeholder="resume"
                            required
                          />
                          <span className="filename">Upload Resume</span>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            rows={4}
                            name="message"
                            placeholder="Messages"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-0">
                          <button
                            type="submit"
                            name="submit"
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <img src="./src/assets/images/c1.png" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="text-center mb-5">
            <h5 className="head-after mb-4">Current Openings</h5>
            {/*<h1>Our <b>Services</b></h1>*/}
            {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
          </div>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
            {/*<li class="nav-item">
<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
</li>*/}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <br />
              <h5>
                <strong>
                  <span style={{ color: "#0084ff" }}>Location: APEX, NC</span>
                </strong>
              </h5>
              <img src="./src/assets/images/line3.png" /> <br />
              <p>
                <strong>Job description:</strong> <br />
                <img src="./src/assets/images/line3.png" /> <br />
                <br />
                Ideal candidate should have analytical skills, extensive
                experience in Java-based software development and design, and
                additional investment management domain knowledge. The candidate
                should be curious, passionate about solving business problems
                with high-quality solutions and flexible in meeting the needs of
                a dynamic business environment. Client is seeking Quantitative
                Investment Process (QUIP) Analyst/Developer in the Active
                Equities Group to work with Research and Portfolio Management,
                to develop and maintain tools and processes used in managing
                portfolios, performing quantitative analyses, and modeling the
                effects of proposed changes in investment strategies. Candidate
                will work closely with end users of varying technical
                sophistication, as well as technologists throughout the firm.
              </p>
              <br />
              <strong>
                <span style={{ color: "#0084ff" }}>
                  Primary Responsibilities:
                </span>
              </strong>
              <br />
              <img src="./src/assets/images/line3.png" />
              <br />
              <br />
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Work as a member of a
                team of analysts/developers partnered with business users.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Design, develop,
                maintain and support analytic tools used by Active Equity
                Portfolio Managers, Researchers and Strategists.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Communicate with
                Portfolio Managers, Researchers, Strategists and other QUIP
                members frequently
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; This position requires
                a person capable of assuming responsibility, and taking
                initiatives for the key analytic tools used in our investment
                process.
              </p>
              <br />
              <br />
              <strong>
                <span style={{ color: "#0084ff" }}>
                  Tools/Skills/Technologies/Experience:
                </span>
              </strong>
              <br />
              <img src="./src/assets/images/line3.png" />
              <br />
              <br />
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; 5-7 Years of IT
                experience.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; 3+ Years of experience
                in Java Application.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Strong analytical,
                quantitative, and problem-solving skills coupled with
                thoroughness and attention to detail.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Proven experience with
                Java production environment.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Experience with a
                statistical software package is a plus.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Experience with Swing
                GUI is a big plus.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Excellent
                communication and interpersonal skills, including ability to
                interact efficiently via email, phone and teleconference, with
                business and technical users within the firm.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Ability to work
                independently and efficiently in a fast-paced and team-oriented
                environment.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <br />
              <h5>
                <strong>
                  <span style={{ color: "#0084ff" }}>Location: APEX, NC</span>
                </strong>
              </h5>
              <br />
              <img src="./src/assets/images/line3.png" />
              <p>
                <strong>Job description:</strong> <br />
                <img src="./src/assets/images/line3.png" />
                <br />
                We are looking for a resource that designs and constructs web
                pages for enterprise level ecommerce site including
                incorporating graphic user interface (GUI) features and other
                techniques appropriate for multi-channel communications. <br />
                <br />
                Ideal candidate will possess technical expertise or have a
                strong working knowledge in the areas of front end web
                development, markup languages, client-side scripting, best
                practices, accessibility. He/she must be presently working with
                HTML, CSS, Javascript, XHTML, DHTML, AJAX, XML or similar
                technologies.
              </p>
              <br />
              <strong>
                <span style={{ color: "#0084ff" }}>Qualifications:</span>
              </strong>
              <br />
              <img src="./src/assets/images/line3.png" />
              <br />
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; 2-5+ years of
                experience in front end web development or web architecture
                utilizing user-centric design models, the ability to design
                compelling and consistent visuals, code markup languages,
                implement changing or dynamic content, test and document web
                applications with awareness of best practices throughout various
                points of development and facilitate change requests.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; 2+ years in an
                eCommerce/Consumer Transactional company.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; 1+ ActionScript 2.0
                (Object-Oriented Programming/FLASH) is a plus.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Expert Knowledge for
                Macromedia Platforms including Dreamweaver: 2+ years
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Expert Knowledge for
                Adobe Platforms including Photoshop: 2+ years
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Expert in HTML, strong
                working knowledge of Cascading Style Sheets.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Ability to work with
                an information architect to continually enhance overall customer
                experience.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Motivated self-learner
                who likes to advance skill sets, stay abreast of changing trends
                in technology, applications and ecommerce industry as a whole.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Strong English written
                and verbal communication skills.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Multi-tasking
                abilities, good troubleshooting skills, a creative thinker who
                identifies with customer experience.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Flexible and adaptable
                to changing corporate strategies and deadlines. Relies on
                experience and judgment to plan and accomplish goals within
                evolving web methodologies.
              </p>
              <br />
              <br />
              <strong>
                <span style={{ color: "#0084ff" }}>
                  Preferred Qualifications:
                </span>
              </strong>
              <br />
              <img src="./src/assets/images/line3.png" />
              <br />
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; BA in Graphic Design,
                Computer Science, Communications or equivalent from a credited
                University or Technical/Vocational school/or successful
                experience of equal level in the field.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Candidate must
                demonstrate a strong creative portfolio with relative arc of
                work.
              </p>
              <p>
                <img src="./src/assets/images/cb.png" /> &nbsp; Experience with
                consumer-focused transactional websites, gaming, surveys and
                Interactive banner advertising with FLASH is a PLUS.
              </p>
            </div>
            {/*<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>*/}
          </div>
        </div>
      </section>
      <br />
      <br />
      {/* START WHO WE ARE */}
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

export default careers;
