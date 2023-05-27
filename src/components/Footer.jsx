import React from 'react'

function Footer() {
  return (
    <footer className="footer">

    <div className="section footer-top">
      <div className="container">

        <div className="footer-brand">

          <a href="#" className="logo">
            <img src="/public/logo.svg" width="150" height="73" loading="lazy" alt="Unigine logo" />
          </a>

          <p className="footer-text">
            Our success in creating business solutions is due in large part to our talented and highly committed team.
          </p>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <div className="footer-list">

          <p className="title footer-list-title has-after">Usefull Links</p>

          <ul>

            <li>
              <a href="#" className="footer-link">Tournaments</a>
            </li>

            <li>
              <a href="#" className="footer-link">Help Center</a>
            </li>

            <li>
              <a href="#" className="footer-link">Privacy and Policy</a>
            </li>

            <li>
              <a href="#" className="footer-link">Terms of Use</a>
            </li>

            <li>
              <a href="#" className="footer-link">Contact Us</a>
            </li>

          </ul>

        </div>

        <div className="footer-list">

          <p className="title footer-list-title has-after">Contact Us</p>

          <div className="contact-item">
            <span className="span">Location:</span>

            <address className="contact-link">
              153 Williamson Plaza, Maggieberg, MT 09514
            </address>
          </div>

          <div className="contact-item">
            <span className="span">Join Us:</span>

            <a href="mailto:Info@unigine.com" className="contact-link">Info@unigine.com</a>
          </div>

          <div className="contact-item">
            <span className="span">Phone:</span>

            <a href="tel:+12345678910" className="contact-link">+1 (234) 567-8910</a>
          </div>

        </div>

        <div className="footer-list">

          <p className="title footer-list-title has-after">Newsletter Signup</p>

          <form action="./index.html" method="get" className="footer-form">
            <input type="email" name="email_address" required placeholder="Your Email" autoComplete="off"
              className="input-field" />

            <button type="submit" className="btn" data-btn>Subscribe Now</button>
          </form>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2022 codewithsadee All Rights Reserved.
        </p>

      </div>
    </div>

  </footer>


  )
}

export default Footer