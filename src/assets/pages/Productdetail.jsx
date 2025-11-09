
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/Productdetail.css";
import { useCart } from "../../context/CartContext";

export default function Productdetail() {
  const { state } = useLocation();
  const { addToCart } = useCart();
  const product = state?.product;

  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  return (
    <section className="product-detail">
      <div className="detail-container">
        <img src={product.img} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            voluptatum dolore.
          </p>
          <div className="actions">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to="/products" className="btn-back">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
































































































// src/pages/Productdetail.jsx
// import React from "react";
// import { useParams, useLocation } from "react-router-dom";
// import "../styles/Productdetail.css";

// function Productdetail() {
//   const { id } = useParams();
//   const location = useLocation();
//   // If you navigated with state (navigate(..., { state: product })), product is in location.state

//   return (
//     <>
//       <section class="mainproduct-container">
//         <!-- DISPLAY HEADER STARTS -->
//         <div class="pd-container">
//           <div class="pd-detail bg-1">
//             <h1 class="d-heading">Products Detail</h1>
//             <div class="top-item">
//               <a href="#" class="top-list">Home</a> <span class="top-list">&#8726</span>
//               <a href="#" class="top-list">Pages</a> <span class="top-list">&#8726</span>
//               <a href="#" class="top-list">Product Details</a>
//             </div>
//           </div>
//         </div>
//         <!-- DISPLAY HEADER ENDS -->

//         <!-- PRODUCT DETAIL STARTS -->
//         <div class="productshop">

//           <div class="shop-maincontainer">

//             <div class="shop-subcontainer">

//               <!-- SHOP DISPLAY AREA STARTS -->
//               <div class="shop-container">

//                 <div class="shop-head">

//                   <!-- PRODUCT DISPLAY STARTS -->
//                   <div class="pro-display">
//                     <div class="pro-img">
//                       <div class="pd-img">
//                         <a class="d-image" href="#">
//                           <img src="/Frontend/Images/veg-Tomato.jpg" alt="Tomato">
//                         </a>
//                       </div>
//                     </div>

//                     <div class="pro-detail">
//                       <h4 class="pro-name">Tomato</h4>
//                       <p class="pro-cat">Category: Vegetables</p>
//                       <h5 class="pro-price">35. Rs</h5>
//                       <div class="pro-star rating">
//                         <i class="fa fa-star"></i>
//                         <i class="fa fa-star"></i>
//                         <i class="fa fa-star"></i>
//                         <i class="fa fa-star"></i>
//                         <i class="fa fa-star"></i>
//                       </div>
//                       <p class="pro-para">The generated Lorem Ipsum is therefore always free from
//                         repetition
//                         injected
//                         humour, or non-characteristic words etc.</p>
//                       <p class="pro-para">Susp endisse ultricies nisi vel quam suscipit. Sabertooth
//                         peacock
//                         flounder;
//                         chain pickerel hatchetfish, pencilfish snailfish</p>
//                       <div class="pro-qty">
//                         <div class="qty-btn">
//                           <button class="q-btn">
//                             <i class="fa fa-minus"></i>
//                           </button>
//                         </div>
//                         <input type="text" class="input-qty" value="1">
//                           <div class="qty-btn">
//                             <button class="q-btn">
//                               <i class="fa fa-plus"></i>
//                             </button>
//                           </div>
//                       </div>
//                       <a href="#" class="cart-btn" onclick="displayTable()"><i class="fa fa-shopping-bag"></i>Add to Cart</a>
//                     </div>
//                   </div>
//                   <!-- PRODUCT DISPLAY ENDS -->

//                   <!-- PRODUCT DESCEIPTION STARTS -->
//                   <div class="pro-desc">
//                     <nav>
//                       <div class="des-navbar">
//                         <button class="nav-tab active " type="button" role="tab" id="nav-about-tab"
//                           data-bs-toggle="tab" data-bs-target="#nav-about" aria-controls="nav-about"
//                           aria-selected="true">Description</button>
//                         <button class="nav-tab" type="button" role="tab" id="nav-mission-tab"
//                           data-bs-toggle="tab" data-bs-target="#nav-mission"
//                           aria-controls="nav-mission" aria-selected="false">Reviews</button>
//                       </div>
//                     </nav>
//                     <div class="tab-content">
//                       <div class="tab-pane active" id="nav-about" role="tabpanel"
//                         aria-labelledby="nav-about-tab">
//                         <p class="mb-0">The generated Lorem Ipsum is therefore always free from
//                           repetition injected
//                           humour, or non-characteristic words etc.
//                           Susp endisse ultricies nisi vel quam suscipit </p>
//                         <p class="mb-0">Sabertooth peacock flounder; chain pickerel hatchetfish,
//                           pencilfish snailfish
//                           filefish Antarctic
//                           icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish,
//                           electric
//                           ray sweeper.</p>
//                         <div class="c-pan">
//                           <div class="d-tab">
//                             <div class="ct-detail">
//                               <div class="d-tab">
//                                 <p class="mb-1">Weight</p>
//                               </div>
//                               <div class="d-tab">
//                                 <p class="mb-2">1 kg</p>
//                               </div>
//                             </div>
//                             <div class="ct-detail">
//                               <div class="d-tab">
//                                 <p class="mb-1">Country of Origin</p>
//                               </div>
//                               <div class="d-tab">
//                                 <p class="mb-2">Agro Farm</p>
//                               </div>
//                             </div>
//                             <div class="ct-detail">
//                               <div class="d-tab">
//                                 <p class="mb-1">Quality</p>
//                               </div>
//                               <div class="d-tab">
//                                 <p class="mb-2">Organic</p>
//                               </div>
//                             </div>
//                             <div class="ct-detail">
//                               <div class="d-tab">
//                                 <p class="mb-1">Check</p>
//                               </div>
//                               <div class="d-tab">
//                                 <p class="mb-2">Healthy</p>
//                               </div>
//                             </div>
//                             <div class="ct-detail">
//                               <div class="d-tab">
//                                 <p class="mb-1">Min Weight</p>
//                               </div>
//                               <div class="d-tab">
//                                 <p class="mb-2">250 Kg</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div class="tab-pane" id="nav-mission" role="tabpanel"
//                         aria-labelledby="nav-mission-tab">
//                         <div class="review">
//                           <div class="r-tab">
//                             <img src="/Frontend/Images/avatar.jpg" class="avatar" alt="avatar">
//                               <div class="customer-detail">
//                                 <p class="c-date">April 12, 2024</p>
//                                 <div class="cust-detail">
//                                   <h5 id="myName">Dileep Tiwari</h5>
//                                   <h6 id="myMail">xyz@web.com</h6>
//                                   <div class="rating">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                   </div>
//                                 </div>
//                                 <p class="c-text" id="myMassage">The generated Lorem Ipsum is therefore always free
//                                   from repetition
//                                   injected humour, or non-characteristic
//                                   words etc. Susp endisse ultricies nisi vel quam suscipit </p>
//                               </div>
//                           </div>

//                           <div class="r-tab">
//                             <img src="/Frontend/Images/avatar.jpg" class="avatar" alt="avatar">
//                               <div class="customer-detail">
//                                 <p class="c-date">April 12, 2024</p>
//                                 <div class="cust-detail">
//                                   <h5>Ishank Tiwari</h5>
//                                   <div class="rating">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                   </div>
//                                 </div>
//                                 <p class="c-text">The generated Lorem Ipsum is therefore always free
//                                   from repetition
//                                   injected humour, or non-characteristic
//                                   words etc. Susp endisse ultricies nisi vel quam suscipit </p>
//                               </div>
//                           </div>

//                           <div class="r-tab">
//                             <img src="/Frontend/Images/avatar.jpg" class="avatar" alt="avatar">
//                               <div class="customer-detail">
//                                 <p class="c-date">April 12, 2024</p>
//                                 <div class="cust-detail">
//                                   <h5>Dileep Tiwari</h5>
//                                   <div class="rating">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                   </div>
//                                 </div>
//                                 <p class="c-text">The generated Lorem Ipsum is therefore always free
//                                   from repetition
//                                   injected humour, or non-characteristic
//                                   words etc. Susp endisse ultricies nisi vel quam suscipit </p>
//                               </div>
//                           </div>

//                           <div class="r-tab">
//                             <img src="/Frontend/Images/avatar.jpg" class="avatar" alt="avatar">
//                               <div class="customer-detail">
//                                 <p class="c-date">April 12, 2024</p>
//                                 <div class="cust-detail">
//                                   <h5>Dileep Tiwari</h5>
//                                   <div class="rating">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                   </div>
//                                 </div>
//                                 <p class="c-text">The generated Lorem Ipsum is therefore always free
//                                   from repetition
//                                   injected humour, or non-characteristic
//                                   words etc. Susp endisse ultricies nisi vel quam suscipit </p>
//                               </div>
//                           </div>

//                           <div class="r-tab">
//                             <img src="/Frontend/Images/avatar.jpg" class="avatar" alt="avatar">
//                               <div class="customer-detail">
//                                 <p class="c-date">April 12, 2024</p>
//                                 <div class="cust-detail">
//                                   <h5>Dileep Tiwari</h5>
//                                   <div class="rating">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                   </div>
//                                 </div>
//                                 <p class="c-text">The generated Lorem Ipsum is therefore always free
//                                   from repetition
//                                   injected humour, or non-characteristic
//                                   words etc. Susp endisse ultricies nisi vel quam suscipit </p>
//                               </div>
//                           </div>



//                           <div class="r-tab">
//                             <img src="/Frontend/Images/avatar.jpg" class="avatar" alt="avatar">
//                               <div class="customer-detail">
//                                 <p class="c-date">April 12, 2024</p>
//                                 <div class="cust-detail">
//                                   <h5 class="name" id="name">Dileep Tiwari</h5>
//                                   <div class="rating" id="rating">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                   </div>
//                                 </div>
//                                 <p class="c-text">The generated Lorem Ipsum is therefore always free
//                                   from repetition
//                                   injected humour, or non-characteristic
//                                   words etc. Susp endisse ultricies nisi vel quam suscipit </p>
//                               </div>
//                           </div>





//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                   <!-- PRODUCT DESCRIPTION ENDS -->

//                   <!-- COMMENT FORM STARTS -->
//                   <div class="form-container">
//                     <form action="#">
//                       <h4 class="c-heading">Leave a Reply</h4>
//                       <div class="comment">
//                         <div class="input-box">
//                           <div class="c-box">
//                             <div class="c-box-text">
//                               <input type="text" id="x" class="form-control" placeholder="Your Name *">
//                             </div>
//                             <div class="c-box-text">
//                               <input type="email" id="i" class="form-control" placeholder="Your Email *">
//                             </div>
//                           </div>
//                         </div>
//                         <div class="c-massage">
//                           <div class="massage-text">
//                             <textarea name="" id="z" class="form-control" cols="30" rows="8"
//                               placeholder="Your Review *" spellcheck="false"></textarea>
//                           </div>
//                         </div>
//                         <div class="c-massage">
//                           <div class="d-flex">
//                             <div class="d-flex">
//                               <p class="c-text">Please rate:</p>
//                               <div class="d-flex star">
//                                 <i class="fa fa-star star"></i>
//                                 <i class="fa fa-star star"></i>
//                                 <i class="fa fa-star star"></i>
//                                 <i class="fa fa-star star"></i>
//                                 <i class="fa fa-star star"></i>
//                               </div>
//                             </div>
//                             <a href="#" class="btn" id="post-btn" onclick="postComment ()">
//                               Post Comment</a>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                   <!-- COMMENT FORM ENDS -->

//                 </div>
//               </div>
//               <!-- SHOP DISPLAY AREA ENDS -->

//               <!-- SIDE AREA STARTS -->
//               <div class="side-area">
//                 <div class="area-container">

//                   <!-- SIDE CATEGORY STARTS -->
//                   <div class="side-cat">
//                     <div class="side-input">
//                       <input type="search" class="form-control" placeholder="Search Product"
//                         aria-describedby="search-icon-1">
//                         <span id="search-icon-1" class="input-group-text"><i
//                           class="fa fa-search"></i></span>
//                     </div>
//                     <div class="cat-area">
//                       <h4 class="cat-heading">Categories</h4>
//                       <ul class="cat-list">
//                         <li>
//                           <div class="d-item">
//                             <a href="#"><i class="fas fa-apple-alt me-2"></i>Apples</a>
//                             <span>(3)</span>
//                           </div>
//                         </li>
//                         <li>
//                           <div class="d-item">
//                             <a href="#"><i class="fas fa-apple-alt me-2"></i>Oranges</a>
//                             <span>(5)</span>
//                           </div>
//                         </li>
//                         <li>
//                           <div class="d-item">
//                             <a href="#"><i class="fas fa-apple-alt me-2"></i>Strawbery</a>
//                             <span>(2)</span>
//                           </div>
//                         </li>
//                         <li>
//                           <div class="d-item">
//                             <a href="#"><i class="fas fa-apple-alt me-2"></i>Banana</a>
//                             <span>(8)</span>
//                           </div>
//                         </li>
//                         <li>
//                           <div class="d-item">
//                             <a href="#"><i class="fas fa-apple-alt me-2"></i>Pumpkin</a>
//                             <span>(5)</span>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <!-- SIDE CATEGORY ENDS -->

//                   <!-- SIDE PRODUCT STARTS -->
//                   <div class="side-product">
//                     <h4 class="cat-heading">Featured products</h4>

//                     <div class="pro-container">
//                       <!-- product 1 -->
//                       <div class="side-pro">
//                         <div class="img-box">
//                           <img src="/Frontend/Images/veg-greenPeas.jpeg" class="img-fluid" alt="Image">
//                         </div>
//                         <div>
//                           <h6 class="p-name">Fresh Peas</h6>
//                           <div class="pro-rating rating">
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star-half"></i>
//                           </div>
//                           <div class="sp-price prod-price">
//                             <h5 class="sp-price1">2.99 $</h5>
//                             <h5 class="sp-price2">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>

//                       <!-- product 2 -->
//                       <div class="side-pro">
//                         <div class="img-box">
//                           <img src="/Frontend/Images/veg-Carrot.jpg" class="img-fluid" alt="Image">
//                         </div>
//                         <div>
//                           <h6 class="p-name">Fresh Carrot</h6>
//                           <div class="pro-rating rating">
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star-half"></i>
//                           </div>
//                           <div class="sp-price prod-price">
//                             <h5 class="sp-price1">2.99 $</h5>
//                             <h5 class="sp-price2">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>

//                       <!-- product 3 -->
//                       <div class="side-pro">
//                         <div class="img-box">
//                           <img src="/Frontend/Images/veg-Garlic.jpeg" class="img-fluid" alt="Image">
//                         </div>
//                         <div>
//                           <h6 class="p-name">Garlic</h6>
//                           <div class="pro-rating rating">
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star-half"></i>
//                           </div>
//                           <div class="sp-price prod-price">
//                             <h5 class="sp-price1">2.99 $</h5>
//                             <h5 class="sp-price2">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>

//                       <!-- product 4 -->
//                       <div class="side-pro">
//                         <div class="img-box">
//                           <img src="/Frontend/Images/veg-capsicum.jpeg" class="img-fluid" alt="Image">
//                         </div>
//                         <div>
//                           <h6 class="p-name">Capsicum</h6>
//                           <div class="pro-rating rating">
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star-half"></i>
//                           </div>
//                           <div class="sp-price prod-price">
//                             <h5 class="sp-price1">2.99 $</h5>
//                             <h5 class="sp-price2">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>

//                       <!-- product 5 -->
//                       <div class="side-pro">
//                         <div class="img-box">
//                           <img src="/Frontend/Images/veg-Banana.jpeg" class="img-fluid" alt="Image">
//                         </div>
//                         <div>
//                           <h6 class="p-name">Big Banana</h6>
//                           <div class="pro-rating rating">
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star"></i>
//                             <i class="fa fa-star-half"></i>
//                           </div>
//                           <div class="sp-price prod-price">
//                             <h5 class="sp-price1">2.99 $</h5>
//                             <h5 class="sp-price2">4.11 $</h5>
//                           </div>
//                         </div>
//                       </div>
//                     </div>


//                     <div class="d-flex cat-btn">
//                       <a href="#" class="btn">Vew
//                         More</a>
//                     </div>
//                   </div>
//                   <!-- SIDE PRODUCT ENDS -->

//                   <!-- SIDE BANNER STARTS -->
//                   <div class="side-banner">
//                     <div class="img-position">
//                       <img src="/Frontend/Images/banner1.jpg" class="img-fluid" alt="Banner Image">
//                         <div class="ban-pos">
//                           <h3 class="banner-text">Fresh <br> Fruits <br> Banner</h3>
//                           </div>
//                         </div>
//                     </div>
//                     <!-- SIDE BANNER ENDS -->

//                   </div>
//                 </div>
//               </div>

//               <!-- RELATED PRODUCT STARTS -->
//               <div class="related-product">
//                 <div class="rel-heading">
//                   <h1 class="r-heading">Related products</h1>

//                   <div class="carousel-top-controls">
//                     <button class="carousel-btn prev"><i class="fa fa-arrow-left"></i></button>
//                     <button class="carousel-btn next"><i class="fa fa-arrow-right"></i></button>
//                   </div>
//                 </div>

//                 <div class="veg-carousel">

//                   <div class="veg-slider">
//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-greenPumpkin.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Pumpkin</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>
//                     <!-- more .veg-item cards -->

//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-Lemon.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Lemon</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>


//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-cullyFlower.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Cully flower</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>


//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-YellowBellPepper2.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Yellow Bell Pepper</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>


//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-Potato1.jpg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Potato</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-Tomato.jpg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Tomato</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-Ginger.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Ginger</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-Beetroot.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Beetroots</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>


//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-Beans.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Fresh Beans</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>


//                     <div class="veg-item">
//                       <div class="veg-cont">
//                         <img src="/Frontend/Images/veg-Banana.jpeg" class="img-fluid" alt="Vegetable1">
//                           <div class="veg-name">Vegetable</div>
//                       </div>
//                       <div class="veg-content">
//                         <h4>Banana</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
//                           incididunt</p>
//                         <div class="v-flex">
//                           <p class="veg-price">$4.99 /kg</p>
//                           <a href="#" class="rel-btn"><i class="fa fa-shopping-bag"></i> Add to cart</a>
//                         </div>
//                       </div>
//                     </div>

//                   </div>
//                 </div>

//               </div>
//               <!-- RELATED PRODUCT ENDS -->

//             </div>

//           </div>

//       </section>
//     </>
//   );
// }

// export default Productdetail;
