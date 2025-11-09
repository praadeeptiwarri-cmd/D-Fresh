
// import React from "react";
// import "../styles/Ourproducts.css";


// function Ourproducts() {
//     return(
//         <>
//         <div className="productpage" id="ourproducts">
//             <h1>This is our Products page.</h1>
//         </div>
//         </>
//     );
// }

// export default Ourproducts;





// src/pages/Ourproducts.jsx
// import React, { useState } from "react";
// import "../styles/Ourproducts.css";
// import { useNavigate } from "react-router-dom";

// // ✅ Import product images
// import Beetroot from "../images/veg-Beetroot.jpeg";
// import Raddish from "../images/veg-Raddis1.jpeg";
// import RedBellPepper from "../images/veg-redBellPepper.jpeg";
// import Potato from "../images/veg-Potato1.jpg";
// import Mushroom from "../images/veg-Mashroom.jpeg";
// import Beans from "../images/veg-Beans.jpeg";
// import Banana from "../images/veg-Banana.jpeg";
// import Lemon from "../images/veg-Lemon.jpeg";
// import Spinach from "../images/veg-Spinach.jpeg";

// function Ourproducts() {
//   const navigate = useNavigate();
//   const [priceRange, setPriceRange] = useState(100); // corrected max limit
//   const [filter, setFilter] = useState("All");

//   const products = [
//     { id: 1, name: "Beetroot", category: "Root", price: 58, img: Beetroot },
//     { id: 2, name: "Fresh Raddish", category: "Root", price: 5, img: Raddish },
//     { id: 3, name: "Red Bell Pepper", category: "Veg", price: 85, img: RedBellPepper },
//     { id: 4, name: "Fresh Potato", category: "Root", price: 37, img: Potato },
//     { id: 5, name: "Mushroom", category: "Veg", price: 30, img: Mushroom },
//     { id: 6, name: "Fresh Beans", category: "Green", price: 30, img: Beans },
//     { id: 7, name: "Fresh Banana", category: "Fruit", price: 28, img: Banana },
//     { id: 8, name: "Lemon", category: "Juicy", price: 38, img: Lemon },
//     { id: 9, name: "Spinach", category: "Leafy", price: 35, img: Spinach },
//   ];

//   // ✅ Apply filters dynamically
//   const filtered = products.filter(
//     (p) =>
//       (filter === "All" || p.category === filter) &&
//       p.price <= priceRange
//   );

//   return (
//     <section className="product-page" id="products">
//       {/* 🧭 Page Header */}
//       <div className="page-header">
//         <h1>Our Products</h1>
//         <div className="breadcrumb">
//           <a href="/">Home</a> <span>/</span>
//           <a href="#">Pages</a> <span>/</span>
//           <span>Products</span>
//         </div>
//       </div>

//       {/* 🛍️ Layout Wrapper */}
//       <div className="main-layout">
//         {/* 🔍 Sidebar Filters */}
//         <aside className="sidebar">
//           <h3>Filters</h3>

//           <div className="filter-box">
//             <h4>Category</h4>
//             <ul>
//               {["All", "Root", "Veg", "Fruit", "Green", "Leafy", "Juicy"].map((c) => (
//                 <li key={c}>
//                   <label>
//                     <input
//                       type="radio"
//                       name="category"
//                       checked={filter === c}
//                       onChange={() => setFilter(c)}
//                     />
//                     {c}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="filter-box">
//             <h4>Price Range</h4>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={priceRange}
//               onChange={(e) => setPriceRange(Number(e.target.value))}
//             />
//             <span>Up to ₹{priceRange}</span>
//           </div>
//         </aside>

//         {/* 🛒 Product Grid */}
//         <div className="product-grid">
//           {filtered.length > 0 ? (
//             filtered.map((p) => (
//               <div key={p.id} className="product-card">
//                 <img src={p.img} alt={p.name} />
//                 <div className="product-info">
//                   <h4>{p.name}</h4>
//                   <p>₹{p.price}</p>
//                   <button
//                     className="btn all-btn"
//                     onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="no-items">No products found.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Ourproducts;







// src/pages/Ourproducts.jsx
// import React, { useState, useMemo } from "react";
// import "../styles/Ourproducts.css";
// import { useNavigate, Link } from "react-router-dom";

// // ✅ Import product images
// import Beetroot from "../images/veg-Beetroot.jpeg";
// import Raddish from "../images/veg-Raddis1.jpeg";
// import RedBellPepper from "../images/veg-redBellPepper.jpeg";
// import Potato from "../images/veg-Potato1.jpg";
// import Mushroom from "../images/veg-Mashroom.jpeg";
// import Beans from "../images/veg-Beans.jpeg";
// import Banana from "../images/veg-Banana.jpeg";
// import Lemon from "../images/veg-Lemon.jpeg";
// import Spinach from "../images/veg-Spinach.jpeg";

// function Ourproducts() {
//   const navigate = useNavigate();
//   const [priceRange, setPriceRange] = useState(100);
//   const [filter, setFilter] = useState("All");

//   const products = useMemo(
//     () => [
//       { id: 1, name: "Beetroot", category: "Root", price: 58, img: Beetroot },
//       { id: 2, name: "Fresh Raddish", category: "Root", price: 5, img: Raddish },
//       { id: 3, name: "Red Bell Pepper", category: "Veg", price: 85, img: RedBellPepper },
//       { id: 4, name: "Fresh Potato", category: "Root", price: 37, img: Potato },
//       { id: 5, name: "Mushroom", category: "Veg", price: 30, img: Mushroom },
//       { id: 6, name: "Fresh Beans", category: "Green", price: 30, img: Beans },
//       { id: 7, name: "Fresh Banana", category: "Fruit", price: 28, img: Banana },
//       { id: 8, name: "Lemon", category: "Juicy", price: 38, img: Lemon },
//       { id: 9, name: "Spinach", category: "Leafy", price: 35, img: Spinach },
//     ],
//     []
//   );

//   const filtered = useMemo(
//     () =>
//       products.filter(
//         (p) => (filter === "All" || p.category === filter) && p.price <= priceRange
//       ),
//     [products, filter, priceRange]
//   );

//   return (
//     <section className="product-page" id="products">
//       {/* 🧭 Header Section */}
//       <header className="page-header">
//         <h1>Our Products</h1>
//         <nav className="breadcrumb">
//           <Link to="/">Home</Link> <span>/</span>
//           <span>Products</span>
//         </nav>
//       </header>

//       {/* 🧱 Layout */}
//       <div className="main-layout">
//         {/* 🔍 Sidebar Filters */}
//         <aside className="sidebar">
//           <h3>Filters</h3>

//           <div className="filter-box">
//             <h4>Category</h4>
//             <ul>
//               {["All", "Root", "Veg", "Fruit", "Green", "Leafy", "Juicy"].map((c) => (
//                 <li key={c}>
//                   <label>
//                     <input
//                       type="radio"
//                       name="category"
//                       checked={filter === c}
//                       onChange={() => setFilter(c)}
//                     />
//                     {c}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="filter-box">
//             <h4>Price Range</h4>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               step="1"
//               value={priceRange}
//               onChange={(e) => setPriceRange(Number(e.target.value))}
//             />
//             <span>Up to ₹{priceRange}</span>
//           </div>
//         </aside>

//         {/* 🛍 Product Grid */}
//         <div className="product-grid">
//           {filtered.length > 0 ? (
//             filtered.map((p) => (
//               <div key={p.id} className="product-card">
//                 <img src={p.img} alt={p.name} />
//                 <div className="product-info">
//                   <h4>{p.name}</h4>
//                   <p className="price">₹{p.price}</p>
//                   <button
//                     className="btn all-btn"
//                     onClick={() =>
//                       navigate(`/product/${p.id}`, { state: { product: p } })
//                     }
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="no-items">No products found.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Ourproducts;



















// src/pages/Ourproducts.jsx
// import React, { useState, useMemo } from "react";
// import "../styles/Ourproducts.css";
// import { useNavigate, Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// // ✅ Import product images
// import Beetroot from "../images/veg-Beetroot.jpeg";
// import Raddish from "../images/veg-Raddis1.jpeg";
// import RedBellPepper from "../images/veg-redBellPepper.jpeg";
// import Potato from "../images/veg-Potato1.jpg";
// import Mushroom from "../images/veg-Mashroom.jpeg";
// import Beans from "../images/veg-Beans.jpeg";
// import Banana from "../images/veg-Banana.jpeg";
// import Lemon from "../images/veg-Lemon.jpeg";
// import Spinach from "../images/veg-Spinach.jpeg";

// function Ourproducts() {
//     const navigate = useNavigate();
//     const [priceRange, setPriceRange] = useState(100);
//     const [filter, setFilter] = useState("All");
//     const [sortBy, setSortBy] = useState("default");
//     const [search, setSearch] = useState("");
//     const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

//     const products = useMemo(
//         () => [
//             { id: 1, name: "Beetroot", category: "Root", price: 58, img: Beetroot },
//             { id: 2, name: "Fresh Raddish", category: "Root", price: 5, img: Raddish },
//             { id: 3, name: "Red Bell Pepper", category: "Veg", price: 85, img: RedBellPepper },
//             { id: 4, name: "Fresh Potato", category: "Root", price: 37, img: Potato },
//             { id: 5, name: "Mushroom", category: "Veg", price: 30, img: Mushroom },
//             { id: 6, name: "Fresh Beans", category: "Green", price: 30, img: Beans },
//             { id: 7, name: "Fresh Banana", category: "Fruit", price: 28, img: Banana },
//             { id: 8, name: "Lemon", category: "Juicy", price: 38, img: Lemon },
//             { id: 9, name: "Spinach", category: "Leafy", price: 35, img: Spinach },
//         ],
//         []
//     );

//     // 🧮 Filter + Search + Sort logic
//     const filtered = useMemo(() => {
//         let list = products.filter(
//             (p) =>
//                 (filter === "All" || p.category === filter) &&
//                 p.price <= priceRange &&
//                 p.name.toLowerCase().includes(search.toLowerCase())
//         );

//         if (sortBy === "lowToHigh") list.sort((a, b) => a.price - b.price);
//         if (sortBy === "highToLow") list.sort((a, b) => b.price - a.price);
//         if (sortBy === "az") list.sort((a, b) => a.name.localeCompare(b.name));
//         if (sortBy === "za") list.sort((a, b) => b.name.localeCompare(a.name));

//         return list;
//     }, [products, filter, priceRange, sortBy, search]);


//     const { addToCart } = useCart();

//     return (
//         <section className="product-page" id="products">
//             {/* 🧭 Header */}
//             <header className="page-header">
//                 <h1>Our Products</h1>
//                 <nav className="breadcrumb">
//                     <Link to="/">Home</Link> <span>/</span>
//                     <span>Products</span>
//                 </nav>
//             </header>

//             {/* 🧰 Top Controls */}
//             <div className="top-controls">
//                 <div className="search-box">
//                     <input
//                         type="text"
//                         placeholder="Search for products..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                     <i className="fa fa-search"></i>
//                 </div>

//                 <select
//                     className="sort-select"
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value)}
//                 >
//                     <option value="default">Default Sorting</option>
//                     <option value="lowToHigh">Price: Low → High</option>
//                     <option value="highToLow">Price: High → Low</option>
//                     <option value="az">Name: A → Z</option>
//                     <option value="za">Name: Z → A</option>
//                 </select>

//                 <button
//                     className="filter-toggle"
//                     onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
//                 >
//                     <i className="fa fa-sliders"></i> Filters
//                 </button>
//             </div>

//             {/* 🧱 Layout */}
//             <div className="main-layout">
//                 {/* 🔍 Sidebar Filters */}
//                 <aside
//                     className={`sidebar ${mobileFilterOpen ? "open" : ""}`}
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     <h3>Filters</h3>

//                     <div className="filter-box">
//                         <h4>Category</h4>
//                         <ul>
//                             {["All", "Root", "Veg", "Fruit", "Green", "Leafy", "Juicy"].map((c) => (
//                                 <li key={c}>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="category"
//                                             checked={filter === c}
//                                             onChange={() => setFilter(c)}
//                                         />
//                                         {c}
//                                     </label>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="filter-box">
//                         <h4>Price Range</h4>
//                         <input
//                             type="range"
//                             min="0"
//                             max="100"
//                             step="1"
//                             value={priceRange}
//                             onChange={(e) => setPriceRange(Number(e.target.value))}
//                         />
//                         <span>Up to ₹{priceRange}</span>
//                     </div>
//                 </aside>

//                 {/* 🛍 Product Grid */}
//                 <div className="product-grid">
//                     {filtered.length > 0 ? (
//                         filtered.map((p) => (
//                             <div key={p.id} className="product-card">
//                                 <div className="img-wrapper">
//                                     <img src={p.img} alt={p.name} />
//                                     <div className="overlay">

//                                         <div className="card-actions">
//                                             <button
//                                                 className="btn all-btn"
//                                                 onClick={() =>
//                                                     navigate(`/product/${p.id}`, { state: { product: p } })
//                                                 }
//                                             >
//                                                 View Details
//                                             </button>
//                                             <button
//                                                 className="btn add-btn"
//                                                 onClick={() => addToCart(p)}
//                                             >
//                                                 Add to Cart
//                                             </button>
//                                         </div>










//                                         {/* <button
//                       className="btn view-btn"
//                       onClick={() =>
//                         navigate(`/product/${p.id}`, { state: { product: p } })
//                       }
//                     >
//                       View Details
//                     </button> */}
//                                     </div>
//                                 </div>
//                                 <div className="product-info">
//                                     <h4>{p.name}</h4>
//                                     <p className="price">₹{p.price}</p>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="no-items">No products found.</p>
//                     )}
//                 </div>
//             </div>

//             {/* 🧤 Overlay for mobile filter */}
//             {mobileFilterOpen && (
//                 <div className="overlay-bg" onClick={() => setMobileFilterOpen(false)}></div>
//             )}
//         </section>
//     );
// }

// export default Ourproducts;
















// import React, { useState, useMemo } from "react";
// import "../styles/Ourproducts.css";
// import { useNavigate, Link } from "react-router-dom";
// import { useCart } from "../../context/CartContext";

// // ✅ Import product images
// import Beetroot from "../images/veg-Beetroot.jpeg";
// import Raddish from "../images/veg-Raddis1.jpeg";
// import RedBellPepper from "../images/veg-redBellPepper.jpeg";
// import Potato from "../images/veg-Potato1.jpg";
// import Mushroom from "../images/veg-Mashroom.jpeg";
// import Beans from "../images/veg-Beans.jpeg";
// import Banana from "../images/veg-Banana.jpeg";
// import Lemon from "../images/veg-Lemon.jpeg";
// import Spinach from "../images/veg-Spinach.jpeg";

// function Ourproducts() {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const [priceRange, setPriceRange] = useState(100);
//   const [filter, setFilter] = useState("All");
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("default");

//   const products = useMemo(
//     () => [
//       { id: 1, name: "Beetroot", category: "Root", price: 58, img: Beetroot },
//       { id: 2, name: "Fresh Raddish", category: "Root", price: 5, img: Raddish },
//       { id: 3, name: "Red Bell Pepper", category: "Veg", price: 85, img: RedBellPepper },
//       { id: 4, name: "Fresh Potato", category: "Root", price: 37, img: Potato },
//       { id: 5, name: "Mushroom", category: "Veg", price: 30, img: Mushroom },
//       { id: 6, name: "Fresh Beans", category: "Green", price: 30, img: Beans },
//       { id: 7, name: "Fresh Banana", category: "Fruit", price: 28, img: Banana },
//       { id: 8, name: "Lemon", category: "Juicy", price: 38, img: Lemon },
//       { id: 9, name: "Spinach", category: "Leafy", price: 35, img: Spinach },
//     ],
//     []
//   );

//   const filtered = useMemo(() => {
//     let list = products.filter(
//       (p) =>
//         (filter === "All" || p.category === filter) &&
//         p.price <= priceRange &&
//         p.name.toLowerCase().includes(search.toLowerCase())
//     );

//     if (sortBy === "lowToHigh") list.sort((a, b) => a.price - b.price);
//     if (sortBy === "highToLow") list.sort((a, b) => b.price - a.price);

//     return list;
//   }, [products, filter, priceRange, search, sortBy]);

//   return (
//     <section className="product-page">
//       <header className="page-header">
//         <h1>Our Products</h1>
//         <nav className="breadcrumb">
//           <Link to="/">Home</Link> <span>/</span>
//           <span>Products</span>
//         </nav>
//       </header>

//       <div className="controls">
//         <input
//           type="search"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//           <option value="default">Sort By</option>
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//         </select>
//       </div>

//       <div className="main-layout">
//         <aside className="sidebar">
//           <h3>Filter</h3>
//           <div>
//             {["All", "Root", "Veg", "Fruit", "Green", "Leafy", "Juicy"].map((cat) => (
//               <label key={cat}>
//                 <input
//                   type="radio"
//                   name="category"
//                   checked={filter === cat}
//                   onChange={() => setFilter(cat)}
//                 />
//                 {cat}
//               </label>
//             ))}
//           </div>

//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={priceRange}
//             onChange={(e) => setPriceRange(Number(e.target.value))}
//           />
//           <span>Up to ₹{priceRange}</span>
//         </aside>

//         <div className="product-grid">
//           {filtered.map((p) => (
//             <div key={p.id} className="product-card">
//               <img src={p.img} alt={p.name} />
//               <h4>{p.name}</h4>
//               <p>₹{p.price}</p>
//               <div className="actions">
//                 <button onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}>
//                   View Details
//                 </button>
//                 <button onClick={() => addToCart(p)}>Add to Cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Ourproducts;

















import React, { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../content/Header";
import Footer from "../component/Footer";
import { useCart } from "../../context/CartContext";
import "../styles/Ourproducts.css";

// product images (adjust paths if yours differ)
import Beetroot from "../images/veg-Beetroot.jpeg";
import Raddish from "../images/veg-Raddis1.jpeg";
import RedBellPepper from "../images/veg-redBellPepper.jpeg";
import Potato from "../images/veg-Potato1.jpg";
import Mushroom from "../images/veg-Mashroom.jpeg";
import Beans from "../images/veg-Beans.jpeg";
import Banana from "../images/veg-Banana.jpeg";
import Lemon from "../images/veg-Lemon.jpeg";
import Spinach from "../images/veg-Spinach.jpeg";

export default function Ourproducts() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // UI state
  const [priceRange, setPriceRange] = useState(100);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  // product list (kept as your data)
  const products = useMemo(
    () => [
      { id: 1, name: "Beetroot", category: "Root", price: 58, img: Beetroot },
      { id: 2, name: "Fresh Raddish", category: "Root", price: 5, img: Raddish },
      { id: 3, name: "Red Bell Pepper", category: "Veg", price: 85, img: RedBellPepper },
      { id: 4, name: "Fresh Potato", category: "Root", price: 37, img: Potato },
      { id: 5, name: "Mushroom", category: "Veg", price: 30, img: Mushroom },
      { id: 6, name: "Fresh Beans", category: "Green", price: 30, img: Beans },
      { id: 7, name: "Fresh Banana", category: "Fruit", price: 28, img: Banana },
      { id: 8, name: "Lemon", category: "Juicy", price: 38, img: Lemon },
      { id: 9, name: "Spinach", category: "Leafy", price: 35, img: Spinach },
    ],
    []
  );

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (filter === "All" || p.category === filter) &&
        p.price <= priceRange &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "lowToHigh") list.sort((a, b) => a.price - b.price);
    if (sortBy === "highToLow") list.sort((a, b) => b.price - a.price);

    return list;
  }, [products, filter, priceRange, search, sortBy]);

  return (
    <>
      <Header />

      <main className="ourproducts-page">
        <div className="container">
          {/* page header */}
          <div className="page-top">
            <div className="title-group">
              <h1 className="page-title">Our Products</h1>
              <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Products</span>
              </nav>
            </div>

            {/* controls */}
            <div className="top-controls">
              <div className="search-wrap">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="select-wrap">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="default">Sort By</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>

              <button
                className="filter-toggle"
                onClick={() => setShowFiltersMobile((s) => !s)}
                aria-expanded={showFiltersMobile}
                aria-controls="filters-panel"
              >
                Filters
              </button>
            </div>
          </div>

          <div className="layout">
            {/* sidebar - hidden behind toggle on mobile */}
            <aside
              id="filters-panel"
              className={`sidebar ${showFiltersMobile ? "open" : ""}`}
              aria-hidden={!showFiltersMobile}
            >
              <div className="filters-inner">
                <h3>Filters</h3>

                <div className="filter-section">
                  <h4>Category</h4>
                  <div className="category-list">
                    {["All", "Root", "Veg", "Fruit", "Green", "Leafy", "Juicy"].map((cat) => (
                      <label key={cat} className="cat-label">
                        <input
                          type="radio"
                          name="category"
                          checked={filter === cat}
                          onChange={() => setFilter(cat)}
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-section">
                  <h4>Price (max)</h4>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                  />
                  <div className="range-value">Up to ₹{priceRange}</div>
                </div>

                <button className="clear-filters" onClick={() => { setFilter("All"); setPriceRange(100); }}>
                  Clear Filters
                </button>
              </div>
            </aside>

            {/* product grid */}
            <section className="products-area" aria-live="polite">
              {filtered.length === 0 ? (
                <div className="empty-state">No products found.</div>
              ) : (
                <div className="grid">
                  {filtered.map((p) => (
                    <article className="product-card" key={p.id}>
                      <div className="media" onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })} role="button" tabIndex={0}>
                        <img src={p.img} alt={p.name} />
                      </div>

                      <div className="info">
                        <h3>{p.name}</h3>
                        <div className="price">₹{p.price}</div>
                        <div className="card-actions">
                          <button className="btn detail" onClick={() => navigate(`/product/${p.id}`, { state: { product: p } })}>
                            View Details
                          </button>
                          <button className="btn add" onClick={() => addToCart(p)}>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
