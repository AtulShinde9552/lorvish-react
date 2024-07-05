import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        {/* START TOP HEADER */}
        <div id="top-header">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* Left Side */}
          <div className="col-lg-6">
            <div className="t-left-side">
              <ul>
                <li><i className="mdi mdi-phone mdi-24px" /> +1 919-999-0626</li>
                <li><i className="mdi mdi-email-open mdi-24px" /> info@lorvish.com </li>
              </ul>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-lg-6">
            <div className="t-right-side">
              {/* Icons */}
              <div className="social-icons ml-3">
                <ul>
                  <li><a href="https://www.linkedin.com/company/lorvish-technologies-inc" target="_blank">
                      <i className="mdi mdi-linkedin" /></a></li>
                  <li><a href="https://www.facebook.com/lorvish.tek" target="_blank"><i className="mdi mdi-facebook" /></a></li>
                  <li><a href="https://sites.google.com/view/lorvishtechnologies" target="_blank"><i className="mdi mdi-google-plus" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* END TOP HEADER */}
    
    <div id="header">
    <div className="container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src="assets/images/logo.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="mdi mdi-menu mdi-24px" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            {/*<li class="menu-btn"><a class="btn btn-primary" href="#">Get a Quote <i class="mdi mdi-phone"></i></a>
      </li>*/}
          </ul>
        </div>
      </nav>
    </div>
  </div>
      </>
  )
}

export default Header