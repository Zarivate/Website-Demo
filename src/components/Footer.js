import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { WiAlien } from "react-icons/wi";
import { IconContext } from "react-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Us and receive our newsletter for vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Ivestors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Ivestors</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">View</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Ivestors</Link>
            <Link to="/">Submit</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Medias</h2>
            <Link to="/">Facebook</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <IconContext.Provider
                value={{
                  size: 45,
                  color: "yellow",
                  className: "global-class-name",
                }}
              >
                TEST <WiAlien />
              </IconContext.Provider>
            </Link>
          </div>
          <small className="website-rights">TRVL © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              // Allows link to be opened in a new window
              target="_blank"
              aria-label="Facebook"
            >
              <AiOutlineFacebook />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <AiFillYoutube />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              // Allows link to be opened in a new window
              target="_blank"
              aria-label="LinkedIn"
            >
              <AiOutlineLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
