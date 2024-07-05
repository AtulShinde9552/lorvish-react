import React from 'react'

const about = () => {
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
                    {/*<div class="yr-exp">
                              <h5 class="head-after mb-5">20 Years Experience</h5>
                          </div>*/}
                    <div className="about-us-content">
                      <h1>Best <b>Lorvish Technologies </b> Overview</h1>
                      <p><img src="assets/images/bullet.jpg" /> &nbsp; Lorvish Technologies is a global consulting and technology services company with over a decade of experience in dedicated helping customers maximize their investment in Technology Services by delivering unmatched services and solutions.</p>
                      <p><img src="assets/images/bullet2.jpg" /> &nbsp; Lorvish Technologies today is a company that has set itself on the fast track, offering advanced solutions in the realms of information technology and consultation, to a host of clients belonging to industry verticals as diverse as telecommunications, finance, retail, insurance, healthcare, gaming, entertainment and aerospace
                        &amp; defense besides a number of federal, state and local government agencies across crucial. </p>
                      <p><img src="assets/images/bullet3.jpg" /> &nbsp; Lorvish Technologies’s full-service approach and unparalleled experience in all areas of Cloud Services, ERP Applications, IT Staffing and Managed Services has helped the Company build one of the strongest reference bases of Technology customers. </p>
                      <p><img src="assets/images/bullet.jpg" />&nbsp;  With its proven ability to execute, Lorvish Technologies consistently helps clients ranging from small to midsize enterprises and Fortune 1000 companies achieve their goals today and advance beyond them. </p>
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
                        <button type="button" className data-dismiss="modal">×</button>	
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
                  <div className="card">
                    <div className="row d-flex align-items-center">
                      <div className="col-sm-3">
                        {/*<i class="mdi mdi-eye mdi-bg"></i>*/}
                        <img src="assets/images/history.png" />
                      </div>
                      <div className="col-sm-9">
                        <div className="pt-4 pb-4">
                          <h5><a href="#">History</a></h5>
                          <p><img src="assets/images/bullet1.jpg" /> &nbsp;  Headquartered in Apex, NC.</p>
                          <p><img src="assets/images/bullet12.jpg" /> &nbsp;  Founded by a team of experienced professionals with a solid base in Technology and Management.</p>
                          <br /> <br /> <br /> <br /> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="row d-flex align-items-center">
                      <div className="col-sm-3">
                        {/*<i class="mdi mdi-bullseye-arrow mdi-bg"></i>*/}
                        <img src="assets/images/experience.png" />
                      </div>
                      <div className="col-sm-9">
                        <div className="pt-4 pb-4">
                          <h5><a href="#">Experience</a></h5>
                          <p><img src="assets/images/bullet12.jpg" /> &nbsp;  Full-Time Employees, not Contractors.</p>
                          <p><img src="assets/images/bullet1.jpg" /> &nbsp; Cloud Services, ERP Solutions, IT Staffing, Managed Services, Outsourcing. </p>
                          <p><img src="assets/images/bullet13.jpg" /> &nbsp;  Customers Across all Verticals.</p>
                          <br /> <br /> 									
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="row d-flex align-items-center">
                      <div className="col-sm-3">
                        {/*<i class="mdi mdi-trophy-variant mdi-bg"></i>*/}
                        <img src="assets/images/services.png" />
                      </div>
                      <div className="col-sm-9">
                        <div className="pt-4 pb-4">
                          <h5><a href="#">Services</a></h5>
                          <p><img src="assets/images/bullet13.jpg" /> &nbsp;  Consulting - Implementations, Migrations, Design, Advisement.</p>
                          <p><img src="assets/images/bullet1.jpg" /> &nbsp;  Support - Functional &amp; Technical, Managed &amp; On-Demand.</p>
                          <p><img src="assets/images/bullet12.jpg" /> &nbsp;  Hybrid (SaaS, PaaS, IaaS) IT services.</p>							
                          <br /> 
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
  )
}

export default about
