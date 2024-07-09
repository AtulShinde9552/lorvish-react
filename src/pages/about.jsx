import React from 'react';

const About = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
        #breadcrumb {
          padding: 120px 0px;
          position: relative;
          background-image: url("assets/images/about123.jpg");
          background-size: cover;
          background-attachment: fixed;
          z-index: 1;
        }
         .custom-card {
          background: #fff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .custom-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .card-content {
          flex: 1;
        }
        .bullet {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .bullet img {
          margin-right: 10px;
          width: 7px; /* Adjust size as needed */
          height: 7px; /* Adjust size as needed */
        }
      `}} />
      {/* START BREADCRUMB */}
      <div id="breadcrumb">
        <div className="container">
          <div className="mb-4">
            <h2 className="head-after">Who We Are</h2>
          </div>
          <nav>
            <ol>
              <li className="breadcrumb-item"><a href="index"><i className="mdi mdi-home" /> Home</a></li>
              <li className="breadcrumb-item active">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* END BREADCRUMB */}
      {/* START WHO WE ARE */}
      <div id="who-we-are">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* Right Side */}
            <div className="col-lg-8">
              <div className="about-us">
                <div className="about-us-content">
                  <h1>Best <b>Lorvish Technologies </b> Overview</h1>
                  <div className="bullet"><img src="assets/images/bullet.jpg" alt="bullet" /> Lorvish Technologies is a global consulting and technology services company with over a decade of experience in helping customers maximize their investment in Technology Services by delivering unmatched services and solutions.</div>
                  <div className="bullet"><img src="assets/images/bullet2.jpg" alt="bullet" /> Lorvish Technologies today is a company that has set itself on the fast track, offering advanced solutions in the realms of information technology and consultation, to a host of clients belonging to industry verticals as diverse as telecommunications, finance, retail, insurance, healthcare, gaming, entertainment and aerospace & defense besides a number of federal, state and local government agencies across crucial.</div>
                  <div className="bullet"><img src="assets/images/bullet3.jpg" alt="bullet" /> Lorvish Technologies’s full-service approach and unparalleled experience in all areas of Cloud Services, ERP Applications, IT Staffing and Managed Services has helped the Company build one of the strongest reference bases of Technology customers.</div>
                  <div className="bullet"><img src="assets/images/bullet.jpg" alt="bullet" /> With its proven ability to execute, Lorvish Technologies consistently helps clients ranging from small to midsize enterprises and Fortune 1000 companies achieve their goals today and advance beyond them.</div>
                </div>
              </div>
            </div>
            {/* Left Side */}
            <div className="col-lg-4">
              <div className="video-btn">
                <div className="img-bg">
                  <img className="w-100" src="assets/images/img-1.jpg" alt="" />
                </div>
                <button type="button" id="clickplay" className="btn btn-lg btn-primary" data-toggle="modal" data-target="#video">
                  <i className="mdi mdi-play-speed mdi-40px" />
                </button>
              </div>
            </div>
            {/* Video */}
            <div id="video" className="modal fade" role="dialog">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>  
                  </div>
                  <div className="modal-body">
                    <iframe width="100%" height={315} src="https://www.youtube.com/embed/Cx5aNwnZYDc" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END WHO WE ARE */}
      {/* START WHAT WE OFFER */}
      <div id="what-we-offer">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-4">
              <div className="custom-card">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-3">
                    <img src="assets/images/history.png" alt="history" />
                  </div>
                  <div className="col-sm-9">
                    <div className="pt-4 pb-4">
                      <h5><a href="#">History</a></h5>
                      <div className="bullet"><img src="assets/images/bullet1.jpg" alt="bullet" /> Headquartered in Apex, NC.</div>
                      <div className="bullet"><img src="assets/images/bullet12.jpg" alt="bullet" /> Founded by a team of experienced professionals with a solid base in Technology and Management.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="custom-card">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-3">
                    <img src="assets/images/experience.png" alt="experience" />
                  </div>
                  <div className="col-sm-9">
                    <div className="pt-4 pb-4">
                      <h5><a href="#">Experience</a></h5>
                      <div className="bullet"><img src="assets/images/bullet12.jpg" alt="bullet" /> Full-Time Employees, not Contractors.</div>
                      <div className="bullet"><img src="assets/images/bullet1.jpg" alt="bullet" /> Cloud Services, ERP Solutions, IT Staffing, Managed Services, Outsourcing.</div>
                      <div className="bullet"><img src="assets/images/bullet13.jpg" alt="bullet" /> Customers Across all Verticals.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="custom-card">
                <div className="row d-flex align-items-center">
                  <div className="col-sm-3">
                    <img src="assets/images/services.png" alt="services" />
                  </div>
                  <div className="col-sm-9">
                    <div className="pt-4 pb-4">
                      <h5><a href="#">Services</a></h5>
                      <div className="bullet"><img src="assets/images/bullet13.jpg" alt="bullet" /> Consulting - Implementations, Migrations, Design, Advisement.</div>
                      <div className="bullet"><img src="assets/images/bullet1.jpg" alt="bullet" /> Support - Functional & Technical, Managed & On-Demand.</div>
                      <div className="bullet"><img src="assets/images/bullet12.jpg" alt="bullet" /> Hybrid (SaaS, PaaS, IaaS) IT services.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END WHAT WE OFFER */}
      {/* START LATEST NEWS */}
      {/* START SUB FOOTER */}
      <div id="sub-footer">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-8">
              <div className="sub-foot-left">
                <ul>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li>© 2020 <span style={{color: '#0084ff'}}>Lorvish Technologies. </span> All Right Reseverd.</li>
                </ul>
              </div>
            </div>
            {/* Right Side */}
            <div className="col-lg-4">
              <div className="sub-foot-right">
                <ul>
                  <li>Designed By <a href="#">Fleet IT Solutions Pvt Ltd.</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SUB FOOTER */}
      {/* START BACK TO TOP BTN */}
      <div className="backto-top-btn">
        <a href="#body-top" className="top-btn btn btn-primary"><i className="mdi mdi-arrow-up mdi-24px" /></a>
      </div>
    </div>
  );
};

export default About;
