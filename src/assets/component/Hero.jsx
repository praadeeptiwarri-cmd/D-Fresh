

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

// 🪄 Automatically import all images from /Images folder
// (Vite feature — works for your D-Fresh project)
const importAllImages = import.meta.glob("../Images/slider/*.{jpg,jpeg,png,gif,webp}", {
  eager: true,
});

const images = Object.values(importAllImages).map((img) => img.default);

export default function Hero() {
  const [index, setIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // 🔁 Add clones dynamically for seamless infinite loop
  const slides = [images[images.length - 1], ...images, images[0]];

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransitioning(true);
    }, 5000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const handleTransitionEnd = () => {
      if (index === slides.length - 1) {
        // at the last clone → jump to 1st real
        setTransitioning(false);
        setIndex(1);
      } else if (index === 0) {
        // at the first clone → jump to last real
        setTransitioning(false);
        setIndex(slides.length - 2);
      }
    };
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, slides.length]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) stopAutoSlide();
      else startAutoSlide();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const nextSlide = () => {
    setIndex((i) => i + 1);
    setTransitioning(true);
  };

  const prevSlide = () => {
    setIndex((i) => i - 1);
    setTransitioning(true);
  };

  const goToSlide = (i) => {
    setIndex(i + 1);
    setTransitioning(true);
  };

  const activeDot =
    index === 0
      ? images.length - 1
      : index === slides.length - 1
      ? 0
      : index - 1;

  if (images.length === 0) return <div>No images found.</div>;

  return (
    <section className="home hero" id="home">
      <div className="content">
        <h3 className="head">100% Fresh & Natural Vegetables</h3>
        <div className="ban-text">
          <h2>
            Fresh And <span>Organic</span> Products For You
          </h2>
          <p>High quality fresh produce delivered daily. High quality fresh produce delivered daily. High quality fresh produce delivered daily.</p>
          {/* <a href="#ourproducts" className="btn-a">
            Shop Now
          </a> */}
          <Link to="/products" className="btn-a">Shop Now</Link>
        </div>
      </div>

      <div className="hero-slider">
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: transitioning ? "transform 0.8s ease-in-out" : "none",
            }}
            onTransitionEnd={() => {
              if (!transitioning) setTimeout(() => setTransitioning(true), 50);
            }}
          >
            {slides.map((src, i) => (
              <div className="slide" key={i}>
                <img src={src} alt={`slide-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeDot ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}


