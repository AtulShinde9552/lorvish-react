import React from 'react'
import CustomerSays from '../compoents/customerSlider'

const Home = () => {
  return (
    <div>
    <div id="main-slider">
  <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-interval={5000}>
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner" role="listbox">
      {/* Slider 1 */}
      <div className="carousel-item active" style={{backgroundImage: 'url("./public/assets/images/slider/img-1.jpg")'}}>
        <div className="carousel-caption">
          <div className="container">
            <h3>Project Management <span className="color-primary">Services</span></h3>
          </div>
        </div>
      </div>
      {/* Slider 2 */}
      <div className="carousel-item" style={{backgroundImage: 'url("./public/assets/images/slider/img-2.jpg")'}}>
        <div className="carousel-caption">
          <div className="container">
            <h3>Implementation, Upgrade, Support Services <span className="color-primary">&amp; 24X7 Infra Support Services </span></h3>
          </div>
        </div>
      </div>
      {/* Slider 3 */}
      <div className="carousel-item" style={{backgroundImage: 'url("./public/assets/images/slider/img-3.jpg")'}}>
        <div className="carousel-caption">
          <div className="container">
            <h3>Testing Services - Test Planning/Execution, <span className="color-primary">Automation, Perf Testing </span></h3>
          </div>
        </div>
      </div>
    </div>
    {/* Previous Btn */}
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    {/* Next Btn */}
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
    {/* END SLIDER */}
    {/* START COUNTER */}
    <div id="counter">
      <div className="container">
        <div className="row">
          {/* Counter */}
          <div className="col-lg-3 counter-col">
            <div className="row">
              <div className="col-sm-4">
                <i className="mdi mdi-briefcase-check mdi-60px color-primary" />
              </div>
              <div className="col-sm-8">
                <div className="count-timer">
                  <div><span className="timer" data-to={100} data-speed={1000} /> <i className="mdi mdi-plus mdi-24px" /></div>
                  <p>Work Completed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 counter-col">
            <div className="row">
              <div className="col-sm-4">
                <i className="mdi mdi-briefcase-account-outline mdi-60px color-primary" />
              </div>
              <div className="col-sm-8">
                <div className="count-timer">
                  <div><span className="timer" data-to={100} data-speed={1000} /> <i className="mdi mdi-plus mdi-24px" /></div>
                  <p>Expert Workers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 counter-col">
            <div className="row">
              <div className="col-sm-4">
                <i className="mdi mdi-human-greeting mdi-60px color-primary" />
              </div>
              <div className="col-sm-8">
                <div className="count-timer">
                  <div><span className="timer" data-to={50} data-speed={500} /> <i className="mdi mdi-plus mdi-24px" /></div>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 counter-col">
            <div className="row">
              <div className="col-sm-4">
                <i className="mdi mdi-trophy-variant-outline mdi-60px color-primary" />
              </div>
              <div className="col-sm-8">
                <div className="count-timer">
                  <div><span className="timer" data-to={40} data-speed={400} /> <i className="mdi mdi-plus mdi-24px" /></div>
                  <p>Award Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* END COUNTER */}
    {/* START WHAT WE OFFER */}
    <div id="what-we-offer">
      <div className="container">
        <div className="row">
          {/* What We Offer */}
          <div className="col-lg-12">
            <div className="text-center mb-5">
              <h5 className="head-after mb-4">What We Offer</h5>
              <h1>Our <b>Services</b></h1>
              {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <i className="mdi mdi-account-tie mdi-bg" />
                </div>
                <div className="col-sm-9">
                  <div className="pt-4 pb-4">
                    <h5><a href="services">Cloud offerings</a></h5>
                    {/*<p>xxxx</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <i className="mdi mdi-cursor-default-click-outline mdi-bg" />
                </div>
                <div className="col-sm-9">
                  <div className="pt-4 pb-4">
                    <h5><a href="services">Managed Services</a></h5>
                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <i className="mdi mdi-chart-line mdi-bg" />
                </div>
                <div className="col-sm-9">
                  <div className="pt-4 pb-4">
                    <h5><a href="services">ERP Technologies</a></h5>
                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <i className="mdi mdi-podcast mdi-bg" />
                </div>
                <div className="col-sm-9">
                  <div className="pt-4 pb-4">
                    <h5><a href="services">IT Staffing</a></h5>
                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="row d-flex align-items-center">
                <div className="col-sm-3">
                  <i className="mdi mdi-lightbulb-on-outline mdi-bg" />
                </div>
                <div className="col-sm-9">
                  <div className="pt-4 pb-4">
                    <h5><a href="services">Project Outsourcing</a></h5>
                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* END WHAT WE OFFER */}
    {/* START WHO WE ARE */}
    <div id="who-we-are">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* Left Side */}
          <div className="col-lg-4">
            <div className="video-btn">
              <div className="img-bg">
                <img className="w-100" src="./public/assets/images/img-1.jpg" alt="" />
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
                  <input type="hidden" defaultValue="https://www.youtube.com/embed/O33uuBh6nXA?autoplay=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" id="videoinput" />
                  <iframe id="vidframe" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-lg-8">
            <div className="about-us">
              {/*<div class="yr-exp">
          <h5 class="head-after mb-5">20 Years Experience</h5>
        </div>*/}
              <div className="about-us-content">
                <h1>Lorvish Technologies Difference </h1>
                <p> <img src="./public/assets/images/bullet.jpg" /> &nbsp; &nbsp; Pioneered a 24 x 7 ASSEMBLY LINE GLOBAL RECRUITING MODEL that can be quickly adopted to individual client needs</p>
                <p> <img src="./public/assets/images/bullet2.jpg" /> &nbsp; &nbsp; Focus on "PROACTIVE" project staffing/consulting model and POOLING STRATEGIES to better serve customers and create a competitive edge</p>
                <p> <img src="./public/assets/images/bullet3.jpg" /> &nbsp; &nbsp; Adopt a seamless onsite-offshore model for improved "EFFICIENCY", quicker "SCALABILITY" and better "CUSTOMER EXPERIENCE" </p>
                <p> <img src="./public/assets/images/bullet4.jpg" /> &nbsp; &nbsp; Align across VERTICALS through a CLUSTER MODEL as opposed to skills, technologies and geographies </p>
                <p> <img src="./public/assets/images/bullet2.jpg" /> &nbsp; &nbsp; Create an entrepreneurial and passionate work environment that helps in high "CUSTOMER SATISFACTION" and "RETENTION"</p>
                <p><img src="./public/assets/images/bullet.jpg" /> &nbsp; &nbsp; Implement METRIC-DRIVEN tools, FRAMEWORKS and PROCESS to maintain the highest quality of work and accountability.</p>
                <p> <img src="./public/assets/images/bullet3.jpg" /> &nbsp; &nbsp; Committed to a passion of EXCELLENCE and exceeding CUSTOMER EXPECTATION.</p>
                {/*<a href="about-us.html" class="btn btn-primary">Read More</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* END WHO WE ARE */}
    {/* START REQUEST CALL BACK */}
    <div id="call-back">
      <div className="container">
        <div className="row">
          {/* Call Back */}
          <div className="col-lg-12">
            <div className="mb-5">
              <div>
                <h3 className="head-after mb-4">Call Back</h3>
                {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>*/}
              </div>
              <div className="mt-5">
                <h1 className="call-back-phone mb-0">+(312) 285-1044</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form action="call_back" method="post" encType="multipart/form-data">
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Name" className="form-control" required />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Email" className="form-control" required />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div className="select-scroll">
                      <select className="form-control" name="service" required>
                        <option>Select Services</option>
                        <option value="Cloud offerings">Cloud offerings</option>
                        <option value="Talent Acquisition Services">Talent Acquisition Services</option>
                        <option value="Managed Services">Managed Services</option>
                        <option value="ERP Technologies">ERP Technologies</option>
                        <option value="IT Staffing">IT Staffing</option>
                        <option value="Project Outsourcing">Project Outsourcing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea rows={4} name="comment" placeholder="Messages" className="form-control" defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="form-group">
                    <button type="submit" name="submit" className="btn btn-primary bg-btn">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> <br /> <br />
    {/* END REQUEST CALL BACK */}
    {/* START CUSTOMER SAYS */}
    <CustomerSays />
    {/* END CUSTOMER SAYS */}
    {/* START CLIENTS */}
    <div id="clients">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="head-after mb-4">Our Clients</h5> <br />
          <img src="./public/assets/images/title.png" />
          <h1 />
        </div>
        {/* Clients */}
        <div id="clients-carousel" className="owl-carousel d-flex">
          <div className="item">
            <div className="card">
              <a href="#"><img src="./public/assets/images/clients/img-1.png" alt=""  /></a>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <a href="#"><img src="./public/assets/images/clients/img-2.png" alt="" /></a>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <a href="#"><img src="./public/assets/images/clients/img-3.png" alt="" /></a>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <a href="#"><img src="./public/assets/images/clients/img-4.png" alt="" /></a>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <a href="#"><img src="./public/assets/images/clients/img-5.png" alt="" /></a>
            </div>
          </div>
          <div className="item">
            <div className="card">
              <a href="#"><img src="./public/assets/images/clients/img-6.png" alt="" /></a>
            </div>
          </div>
    
        </div>
      </div>
    </div>
    {/* END CLIENTS */}
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
    {/* END BACK TO TOP BTN */}
 
  </div>
  )
}

export default Home