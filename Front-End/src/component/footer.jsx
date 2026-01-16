import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaPinterestP, FaInstagram, FaTiktok } from 'react-icons/fa'; // Requires: npm install react-icons
import { useCurrency } from '../context/useCurrency';
import { useAuth } from '../context/useAuth';

const Footer = () => {
  const { currency, setCurrency } = useCurrency();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSignupRedirect = (e) => {
    e.preventDefault();
    navigate('/login', { state: { mode: 'signup', email } });
  };

  return (
    <footer className="footer">

      {/* --- Top Section: Newsletter --- */}
      {!user && (
        <div className="newsletter-section">
          <h3>Sign up for our newsletter for early access to releases, special offers, and a dash of spice-filled inspiration.</h3>
          <form className="newsletter-form" onSubmit={handleSignupRedirect}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}

      <hr className="footer-divider" />

      {/* --- Bottom Section: Links Grid --- */}
      <div className="footer-links-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h4>Let's Be Curious</h4>
          <ul>
            <li><Link to="/women-with-spices">Women with spices </Link></li>
            <li><Link to="/blog">Our Blog</Link></li>
            <li><Link to="/spice-journal">Spice Journal</Link></li>
            <li><Link to="/careers">Join Our Team</Link></li>
            <li><Link to={user ? "/profile" : "/login"}>My account</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Wholesale & Gifting</h4>
          <ul>
            <li><Link to="/wholesale">Wholesale & Bulk</Link></li>
            <li><Link to="/gifts">Business Gifts</Link></li>
            <li><Link to="/favors">Essential Favors</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Essential Info</h4>
          <ul>
            <li><Link to="/locations">Location & Hours</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
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
          <select
            className="footer-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">United States (USD $)</option>
            <option value="LKR">Sri Lanka (LKR Rs.)</option>
          </select>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Spice Harvest Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
