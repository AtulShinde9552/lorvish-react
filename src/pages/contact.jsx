import React from "react";

const contact = () => {
  return (
    <div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
            #breadcrumb {
              padding: 120px 0;
              position: relative;
              background-image: url("assets/images/contactus.jpg");
              background-size: cover;
              background-attachment: fixed;
              z-index: 1;
              color: white;
            }
            .form-control, .btn {
              border-radius: 0.25rem;
            }
            .form-control {
              border: 1px solid #ced4da;
              padding: 0.75rem 1rem;
            }
            .form-control:focus {
              border-color: #80bdff;
              box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
            }
            .btn-primary {
              background-color: #007bff;
              border-color: #007bff;
              padding: 0.5rem 1rem;
              font-size: 1rem;
              transition: background-color 0.3s;
            }
            .btn-primary:hover {
              background-color: #0056b3;
              border-color: #004085;
            }
            .card {
              padding: 1rem;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border: none;
            }
          `
        }}
      />
      <div id="breadcrumb">
        <div className="container">
          <div className="mb-4">
            <h2 className="head-after">Contact Us</h2>
          </div>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index">
                  <i className="mdi mdi-home" /> Home
                </a>
              </li>
              <li className="breadcrumb-item active">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="map mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.362533792457!2d78.37960171487715!3d17.442353888045655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb931331ed0ad9%3A0x7f9ee352195107f5!2sLorvish%20Technologies!5e0!3m2!1sen!2sin!4v1594190960054!5m2!1sen!2sin"
                  width="100%"
                  height="450px"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: "5px", position: "relative", zIndex: 2 }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="row">
                <div className="col-lg-4">
                  <div className="info-item">
                    <i className="fa fa-envelope"></i>
                    <h4>Email Address</h4>
                    <a href="">info@lorvish.com</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item">
                    <i className="fa fa-phone"></i>
                    <h4>Phone Number</h4>
                    <a href="">+1 919-999-0626</a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item">
                    <i className="fa fa-map-marked-alt"></i>
                    <h4>Address</h4>
                    <a href="#">4819 Emperor Boulevard, Suite 400,
                    Durham, NC 27703.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="contact-us-form py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h4>Feel free to message us</h4>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Your Phone..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your E-mail..."
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject..."
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div id="sub-footer" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="#">Support</a></li>
                <li className="list-inline-item"><a href="#">Terms & Conditions</a></li>
                <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                <li className="list-inline-item">© 2020 <span style={{ color: "#0084ff" }}>Lorvish Technologies.</span> All Rights Reserved.</li>
              </ul>
            </div>
            <div className="col-lg-4 text-lg-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">Designed By <a href="#">Fleet IT Solutions Pvt Ltd.</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="backto-top-btn">
        <a href="#body-top" className="top-btn btn btn-primary">
          <i className="mdi mdi-arrow-up mdi-24px" />
        </a>
      </div>
    </div>
  );
};

export default contact;
