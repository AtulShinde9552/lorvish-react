import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const contact = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Array of background images
    const backgroundImages = [
      "url('assets/images/contactus.jpg')",
      "url('assets/images/about_banner.jpg')",
      "url('assets/images/banner_service.jpg')",
    ];

    // Set a random background image
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    setBackgroundImage(randomImage);
  }, []);

  return (
    <div>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `
            #breadcrumb {
              padding: 120px 0;
              position: relative;
              background-image: ${backgroundImage};
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
            .form-container {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
            }
            .form-item {
              flex: 1;
              min-width: 300px;
            }
            .contact-details {
              padding: 20px;
              background: rgba(255, 255, 255, 0.8); /* Transparent background */
              border: 1px solid #ddd;
              border-radius: 5px;
            }
            .contact-details h5 {
              margin-bottom: 20px;
            }
            .contact-details p {
              margin: 10px 0;
            }
            .contact-details i {
              margin-right: 10px;
              color: #007bff;
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
      <section className="contact-us-form py-5">
        <div className="container">
          <motion.div
            className="row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="col-lg-8">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <h4>Feel free to message us</h4>
              </div>
              <div className="form-container">
                <div className="form-item">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name *"
                    className="form-control"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name *"
                    className="form-control"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-item">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    placeholder="E-mail *"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone *"
                    className="form-control"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company *"
                    className="form-control"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-item">
                  <select name="location" id="location" className="form-control" required>
                    <option value="">Location *</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                  </select>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City *"
                    className="form-control"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-item" style={{ flexBasis: "100%" }}>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    placeholder="Position *"
                    className="form-control"
                    autoComplete="on"
                    required
                  />
                </div>
                <div className="form-item" style={{ flexBasis: "100%" }}>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Inquiry or Comments *"
                    className="form-control"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="form-item" style={{ flexBasis: "100%", textAlign: "center" }}>
                  <button type="submit" id="form-submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <motion.div
                className="contact-details"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <h5>Get in Touch</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate laborum vitae! Quod eaque autem, porro adipisci mollitia quasi nulla libero et cupiditate laboriosam. Consectetur eligendi tempore est cumque doloremque.</p>
                <h5>The Office</h5>
                <p><i className="fa fa-map-marker"></i> Address: 4819 Emperor Boulevard, Suite 400, Durham, NC 27703.</p>
                <p><i className="fa fa-phone"></i> Phone: +1 919-999-0626</p>
                <p><i className="fa fa-envelope"></i> Email: info@lorvish.com</p>
                <h5>Business Hours</h5>
                <p>Monday - Friday: 9am to 5pm</p>
                <p>Saturday: 9am to 2pm</p>
                <p>Sunday: Closed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
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
      <div id="sub-footer">
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Support</a></li>
            <li className="list-inline-item"><a href="#">Terms & Conditions</a></li>
            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li className="list-inline-item">© 2020 <span style={{ color: "#0084ff" }}>Lorvish Technologies.</span> All Rights Reserved.</li>
          </ul>
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
