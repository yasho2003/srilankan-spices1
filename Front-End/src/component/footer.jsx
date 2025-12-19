// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaPinterestP, FaInstagram, FaTiktok } from 'react-icons/fa'; // Requires: npm install react-icons

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* --- Top Section: Newsletter --- */}
      <div className="newsletter-section">
        <h3>Sign up for our newsletter for early access to releases, special offers, and a dash of spice-filled inspiration.</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter Your Email Address" required />
          <button type="button">Sign Up</button>
        </form>
      </div>

      <hr className="footer-divider" />

      {/* --- Bottom Section: Links Grid --- */}
      <div className="footer-links-container">
        
        {/* Column 1 */}
        <div className="footer-col">
          <h4>Let's Be Curious</h4>
          <ul>
            <li><a href="/films">Women in Spice Films</a></li>
            <li><a href="/blog">Our Blog</a></li>
            <li><a href="/journal">Claire's Journal</a></li>
            <li><a href="/press">Press Mentions</a></li>
            <li><a href="/refill">Cambridge Refill Program</a></li>
            <li><a href="/careers">Join Our Team</a></li>
            <li><a href="/account">My account</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Wholesale & Gifting</h4>
          <ul>
            <li><a href="/wholesale">Wholesale & Bulk</a></li>
            <li><a href="/gifts">Business Gifts</a></li>
            <li><a href="/favors">Party Favors</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Essential Info</h4>
          <ul>
            <li><a href="/locations">Locations & Hours</a></li>
            <li><a href="/locator">Store Locator</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/refund">Refund Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="footer-col">
          <h4>Get in touch</h4>
          <div className="contact-info">
            <p><FaPhoneAlt className="icon" /> (+94) 123-456-789</p>
            <p><FaEnvelope className="icon" /> <a href="mailto:help@example.com">Email us</a></p>
          </div>
          
          <h4 className="mt-4">Follow us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        {/* Column 5: Payments & Selectors */}
        <div className="footer-col">
          <h4>We accept</h4>
          <div className="payment-methods">
            {/* You can replace these spans with actual img tags later */}
            <span className="pay-icon">koko</span>
            <span className="pay-icon">ApplePay</span>
            <span className="pay-icon">Visa</span>
            <span className="pay-icon">master</span>
          </div>

          <h4>Currency</h4>
          <select className="footer-select">
            <option>United States (USD $)</option>
            <option>Sri Lanka (LKR Rs.)</option>
          </select>
        </div>

      </div>
      
      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
