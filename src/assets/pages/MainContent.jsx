import React from "react";
import Hero from "../component/Hero";
import Feature from "../component/Feature";
import Products from "../component/Product";
import Category from "../component/Category";
import Review from "../component/Review";
import Blog from "../component/Blog";
import Footer from "../component/Footer";

function MainContent() {
  return (
    <>
      <Hero />
      <Feature />
      <Products />
      <Category />
      <Review />
      <Blog />
      <Footer />
    </>
  );
}

export default MainContent;
