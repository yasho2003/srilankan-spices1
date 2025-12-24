import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";
import { FiSearch, FiUser, FiShoppingBag, FiX } from "react-icons/fi";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) setSearchQuery("");
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Spice Harvest Co." className="logo" />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/events">EVENTS</Link>
        <Link to="/locations">LOCATIONS</Link>
        <Link to="/products">PRODUCTS</Link>
      </nav>

      {/* Icons Section */}
      <div className="icon-group">
        <div className={`search-wrapper ${isSearchOpen ? "active" : ""}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search spices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          {isSearchOpen ? (
            <FiX className="icon close-search" onClick={toggleSearch} />
          ) : (
            <FiSearch className="icon search-trigger" onClick={toggleSearch} />
          )}
        </div>
        <Link to="/cart" title="Account"><FiUser className="icon" /></Link>
        <Link to="/cart" className="cart-icon-container" title="Cart">
          <FiShoppingBag className="icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
