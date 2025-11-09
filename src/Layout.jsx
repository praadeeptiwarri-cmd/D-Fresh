// src/Layout.jsx
import React from "react";
import Header from "./assets/content/Header"; // ✅ adjust if your Header path differs
import Footer from "./assets/component/Footer"; // ✅ adjust if your Footer is elsewhere
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 👈 this is where page content (like Products, Home, etc.) will load */}
      </main>
      <Footer />
    </>
  );
}
