

import React, { useState } from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";
import Searchform from "./Searchform";
import Shoppingcart from "./Shoppingcart";
import Contact from "./Contact";
import AuthModal from "./AuthModal"; // ✅ Use unified login/signup modal

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const closeAll = () => {
    setShowSearch(false);
    setShowCart(false);
    setShowLogin(false);
    setShowContact(false);
  };

  const toggleSearch = () => {
    setShowSearch((s) => !s);
    setShowCart(false);
    setShowLogin(false);
    setShowContact(false);
  };

  const toggleCart = () => {
    setShowCart((s) => !s);
    setShowSearch(false);
    setShowLogin(false);
    setShowContact(false);
  };

  const toggleLogin = () => {
    setShowLogin((s) => !s);
    setShowSearch(false);
    setShowCart(false);
    setShowContact(false);
  };

  const toggleContact = () => {
    setShowContact((s) => !s);
    setShowSearch(false);
    setShowCart(false);
    setShowLogin(false);
  };

  return (
    <header className="header">
      {/* 🔝 Topbar */}
      <div className="topbar">
        <div className="top-info">
          <a href="/" className="add-info">
            <i className="fa-solid fa-location-dot"></i>
            Vrindavan, Telibagh, Lucknow, UP, India - 226029
          </a>
          <a href="/" className="add-info">
            <i className="fa-solid fa-envelope"></i>
            merabussiness2021@gmail.com
          </a>
        </div>

        <div className="top-list h-top">
          <a href="/" className="p-top">Privacy Policy</a> <span className="p-top">\</span>
          <a href="/" className="p-top">Terms of Use</a> <span className="p-top">\</span>
          <a href="/" className="p-top">Sales and Refunds</a>
        </div>
      </div>

      {/* 🧭 Navbar */}
      <Navbar
        onSearch={toggleSearch}
        onCart={toggleCart}
        onLogin={toggleLogin}
        onContact={toggleContact}
      />

      {/* 🪄 Modals */}
      {showSearch && <Searchform onClose={closeAll} />}
      {showCart && <Shoppingcart onClose={closeAll} />}
      {showLogin && <AuthModal onClose={() => setShowLogin(false)} />}
      {showContact && <Contact isVisible={showContact} onClose={() => setShowContact(false)} />}
    </header>
  );
}
