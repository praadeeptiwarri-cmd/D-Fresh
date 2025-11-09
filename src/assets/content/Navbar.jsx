
// src/assets/content/Navbar.jsx
import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function scrollToId(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Navbar({ onSearch, onCart, onLogin, onContact }) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="head-nav">
      <div className="logo">
        <a href="#home" className="mylogo" onClick={(e) => scrollToId(e, 'home')}>
          <i className="fa-solid fa-basket-shopping"></i> Grocery
        </a>
      </div>

      <div className={`navigation ${menuActive ? "active" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="nav-list">

            <Link className="nav-link" to="/">Home</Link>
            


            <li className="nav-item"><a className="nav-link" href="#features" onClick={(e) => scrollToId(e, 'features')}>Features</a></li>

           

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#products" onClick={(e) => e.preventDefault()}>
                Products
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/products">All Products</Link></li>
                {/* Example detail link - you would typically generate these dynamically from data */}
                <li><Link className="dropdown-item" to="/product/1">Product Detail (example)</Link></li>
                <li><Link className="dropdown-item" to="/shoppingcart">Shopping Cart</Link></li>
                <li><Link className="dropdown-item" to="/abc">abc</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#categories" onClick={(e) => e.preventDefault()}>Categories</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#leafy-vegetables" onClick={(e) => scrollToId(e, 'leafy-vegetables')}>Leafy Vegetables</a></li>
                <li><a className="dropdown-item" href="#root-vegetables" onClick={(e) => scrollToId(e, 'root-vegetables')}>Root Vegetables</a></li>
                <li><a className="dropdown-item" href="#other-vegetables" onClick={(e) => scrollToId(e, 'other-vegetables')}>Other</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="#review" onClick={(e) => scrollToId(e, 'review')}>Review</a></li>
            <li className="nav-item"><a className="nav-link" href="#blogs" onClick={(e) => scrollToId(e, 'blogs')}>Blogs</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact" onClick={(e) => { e.preventDefault(); if (onContact) onContact(); }}>Contact</a></li>
          </ul>
        </nav>
      </div>


      <div className="icons">
        <div className="fa fa-bars" id="menu-btn" onClick={() => setMenuActive((s) => !s)} />
        <div className="fa fa-search" id="search-btn" onClick={() => onSearch && onSearch()} />
        <div className="fa fa-shopping-cart" id="cart-btn" onClick={() => onCart && onCart()} />
        <div className="fa fa-user" id="login-btn" onClick={() => onLogin && onLogin()} />
      </div>
    </div>
  );
}

export default Navbar;
