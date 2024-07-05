import React from "react";

const contact = () => {
  return (
    <div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n\t\t\n\t\t#breadcrumb{\n\tpadding: 120px 0px;\n\tposition: relative;\n\tbackground-image:url("./src/assets/images/contactus.jpg");\n\tbackground-size: cover;\n\tbackground-attachment: fixed;\n\tz-index: 1;\n}\n\t\n\t\n\t',
        }}
      />
      {/* START BREADCRUMB */}
      <div id="breadcrumb">
        <div className="container">
          <div className="mb-4">
            <h2 className="head-after">Contact Us</h2>
          </div>
          <nav>
            <ol>
              <li className="breadcrumb-item">
                <a href="index">
                  <i className="mdi mdi-home" /> Home
                </a>
              </li>
              <li className="breadcrumb-item active">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>{" "}
      <br /> <br />
      {/* END BREADCRUMB */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-4">
                <h4 className="head-after">US HEADQUARTERS</h4>{" "}
              </div>
              <p>
                4819 Emperor Boulevard, Suite 400, <br /> Durham, NC 27703.
              </p>
              <p>Tel: +1 919-999-0626</p>
              <p>info@lorvish.com</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.718327256979!2d-78.86444438473976!3d35.73314528018219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac93b513e8a0b1%3A0xd553f364b7d4db8d!2sLorvish%20Technologies!5e0!3m2!1sen!2sin!4v1594189874539!5m2!1sen!2sin"
                width={400}
                height={350}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="col-md-4">
              <div className="mb-4">
                <h4 className="head-after">Regional Office </h4>{" "}
              </div>
              <p>499 Ernston Rd Parlin, NJ 08859.</p>
              {/*<p><p>Tel: (312) 285-1044</p></p>
              <p>info@lorvish.com</p>*/}
              <br /> <br /> <br /> <br />
              {/*<img src="./assets/images/contactbg.jpg" />*/}
            </div>
            <div className="col-md-4">
              <div className="mb-4">
                <h4 className="head-after">INDIA Headquarters </h4>{" "}
              </div>
              <p>
                #502, Techno Residency, Near paradise Hotel, Raheja Mindspace
                Building, Madhapur, Hyderabad- 500081.
              </p>{" "}
              <br /> <br />
              {/*<p><p>Tel: (312) 285-1044</p></p>
              <p>info@lorvish.com</p>*/}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.362533792457!2d78.37960171487715!3d17.442353888045655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb931331ed0ad9%3A0x7f9ee352195107f5!2sLorvish%20Technologies!5e0!3m2!1sen!2sin!4v1594190960054!5m2!1sen!2sin"
                width={600}
                height={350}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>{" "}
      <br /> <br />
      {/* START CONTACT */}
      {/*<div class="ptb-80">
          <div class="container">
              <div class="row d-flex align-items-center">
  
                  
                  <div class="col-lg-5">
                      <div class="card">
                          <h5><i class="icon-map-marker"></i> <strong>US Headquarters</strong></h5>
                          <p><i class="fa fa-map-marker" aria-hidden="true"></i> 501, W Williams St, Suite 1327, APEX, NC 27523.</p> <br>
                          <p>Tel: (312) 285-1044</p>
                          <p>info@domain.com</p>
                      </div>
  
                      <div class="card">
                          <h5><i class="icon-phone"></i> <strong>INDIA Headquarters</strong></h5>
                          <p>#502, Techno Residency, Near paradise Hotel, Raheja Mindspace Building, Madhapur, Hyderabad- 500081.</p>
                      </div>
  
                      
                  </div>*/}
      {/* Map */}
      {/*<div class="col-lg-7">
                      <div class="mapouter">
                          <div class="gmap_canvas">
                              <iframe id="gmap_canvas" src="https://maps.google.com/maps?hl=en&amp;q=London%2C%20United%20Kingdom+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed">
                              </iframe>
                          </div>
                      </div>
                  </div>
  
              </div>
          </div>
      </div>*/}
      {/* END CONTACT */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-4">
                <div className="mb-4">
                  <h4 className="head-after">Get A Quote</h4>
                </div>
                <div className="w-card border-light-ccc">
                  <form
                    action="contact_form"
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
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            rows={4}
                            name="comment"
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
                            name="sub"
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
            <div className="col-md-6">
              <img src="./src/assets/images/contact.png" />
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
    </div>
  );
};

export default contact;
