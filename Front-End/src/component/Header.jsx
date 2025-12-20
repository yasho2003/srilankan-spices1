// src/Header.js
import React from 'react';
import './Header.css'; // Optional: for styling

function Header() {
  return (
    <header className="app-header">
      <h1>My Website</h1>
      <nav>
        <a href="/">HOME</a> | 
        <a href="/about">ABOUT</a> | 
        <a href="/contact">CONTACT</a> |
        <a href="/events">EVENTS</a>
        

      </nav>
    </header>
  );
}

export default Header;
