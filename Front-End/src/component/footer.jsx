// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Optional: Import a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My React App</p>
      {/* Add other links or information here */}
      <div className="footer-links">
        <a href="/about">About</a> | <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
