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
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <div className="card">
                <h4 className="head-after">US HEADQUARTERS</h4>
                <p>4819 Emperor Boulevard, Suite 400, <br /> Durham, NC 27703.</p>
                <p>Tel: +1 919-999-0626</p>
                <p>info@lorvish.com</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.718327256979!2d-78.86444438473976!3d35.73314528018219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac93b513e8a0b1%3A0xd553f364b7d4db8d!2sLorvish%20Technologies!5e0!3m2!1sen!2sin!4v1594189874539!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h4 className="head-after">Regional Office</h4>
                <p>499 Ernston Rd Parlin, NJ 08859.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h4 className="head-after">INDIA Headquarters</h4>
                <p>#502, Techno Residency, Near paradise Hotel, Raheja Mindspace Building, Madhapur, Hyderabad- 500081.</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.362533792457!2d78.37960171487715!3d17.442353888045655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb931331ed0ad9%3A0x7f9ee352195107f5!2sLorvish%20Technologies!5e0!3m2!1sen!2sin!4v1594190960054!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>
                <h4 className="head-after">Get A Quote</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <form action="contact_form" method="post" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <input type="text" name="name" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <input type="text" name="phone" className="form-control" maxLength={10} placeholder="Mobile" required />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <input type="email" name="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <input type="text" name="subject" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <textarea rows={4} name="comment" placeholder="Messages" className="form-control" />
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" name="sub" className="btn btn-primary w-100">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <img src="assets/images/contact3.png" className="img-fluid" alt="Contact"  />
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
