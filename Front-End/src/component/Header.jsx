// src/Header.js
import React from 'react';
import './Header.css'; // Optional: for styling

function Header() {
  return (
    <header className="app-header">
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
