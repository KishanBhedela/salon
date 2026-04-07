import React from 'react'

function Footer() {
  return (
    <>
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-widget">
              <h3>About Us</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="services.html">Procedures</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3>Contact Info</h3>
              <ul>
                <li><i className="fa fa-send" aria-hidden="true" /> 3481 Rabana Place, 2090</li>
                <li><i className="fa fa-phone" aria-hidden="true" /> +880 17980XXXXX</li>
                <li><i className="fa fa-envelope-o" aria-hidden="true" /> info@example.com</li>
                <li><i className="fa fa-fax" aria-hidden="true" /> Fax : 02 9635 0247</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3>Business hour</h3>
              <ul className="bussiness-hour">
                <li>Monday-Friday: <span className="pull-right">9am - 5pm.</span></li>
                <li>Saturday: <span className="pull-right">10am - 2pm.</span></li>
                <li>Sunday: <span className="pull-right">Closed.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="copyright">
              <p>Copyright © 2018. All rights reserved.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <ul className="social-icons pull-right">
              <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer