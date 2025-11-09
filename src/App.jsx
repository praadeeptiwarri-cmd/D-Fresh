

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 

import Layout from "./Layout";
import HeaderPage from "./assets/pages/HeaderPage";
import Ourproducts from "./assets/pages/Ourproducts";
import Productdetail from "./assets/pages/Productdetail";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}></Route>
          <Route path="/" element={<HeaderPage />} />
          <Route path="/products" element={<Ourproducts />} />
          <Route path="/product/:id" element={<Productdetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
