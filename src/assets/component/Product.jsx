
// import "../styles/Product.css";


// function Product() {
//     return(
//         <></>
//     );
// }

// export default Product;




// import React from "react";
// import '../styles/product.css';

// // Import images from src/Images
// import Tomato from "../Images/veg-Tomato.jpg";
// import Carrot from "../Images/veg-Carrot.jpg";
// import Broccoli from "../Images/veg-Brokely.jpeg";
// import Spinach from "../Images/veg-Spinach.jpeg";
// import Cauliflower from "../Images/veg-cullyFlower.jpeg";
// import RedBellPepper from "../Images/veg-redBellPepper.jpeg";
// import Raddish from "../Images/veg-Raddis1.jpeg";
// import Beetroot from "../Images/veg-Beetroot.jpeg";



// const products = [
//   { img: Tomato, name: "Fresh Tomato", price: "₹30 / kg", rating: 4.5 },
//   { img: Carrot, name: "Fresh Carrot", price: "₹40 / kg", rating: 4 },
//   { img: Broccoli, name: "Fresh Broccoli", price: "₹80 / kg", rating: 4.5 },
//   { img: Spinach, name: "Green Spinach", price: "₹50 / bunch", rating: 4 },
//   { img: Cauliflower, name: "Fresh Cullyflower", price: "₹35 / piece", rating: 4 },
//   { img: RedBellPepper, name: "Red Bell Pepper", price: "₹40 / 250g", rating: 4 },
//   { img: Raddish, name: "Leafy Raddis", price: "₹20 / 5(piece)", rating: 4 },
//   { img: Beetroot, name: "Leafy Beetroot", price: "₹60 / kg", rating: 4 },
//   { img: Broccoli, name: "Fresh Broccoli", price: "₹80 / kg", rating: 4.5 },
//   { img: Spinach, name: "Green Spinach", price: "₹50 / bunch", rating: 4 },
//   { img: Cauliflower, name: "Fresh Cullyflower", price: "₹35 / piece", rating: 4 },
//   { img: RedBellPepper, name: "Red Bell Pepper", price: "₹40 / 250g", rating: 4 },
// ];

// function Products() {
//   return (
//     <section className="products" id="products">
//       <h1 className="heading">
//         Our <span>Products</span>
//       </h1>

//       <div className="product-container">
//         {products.map((product, index) => (
//           <div className="product-card" key={index}>
//             <img src={product.img} alt={product.name} />
//             <h3>{product.name}</h3>
//             <div className="price">{product.price}</div>
//             <div className="stars">
//               {[...Array(5)].map((_, i) => {
//                 const ratingValue = i + 1;
//                 return (
//                   <i
//                     key={i}
//                     className={
//                       ratingValue <= Math.floor(product.rating)
//                         ? "fa fa-star"
//                         : ratingValue - product.rating < 1
//                         ? "fa fa-star-half"
//                         : "fa fa-star-o"
//                     }
//                   ></i>
//                 );
//               })}
//             </div>
//             <button className="btn all-btn">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;






import React from "react";
import "../styles/product.css";

// ✅ Import product images
import Tomato from "../images/veg-Tomato.jpg";
import Carrot from "../images/veg-Carrot.jpg";
import Broccoli from "../images/veg-Brokely.jpeg";
import Spinach from "../images/veg-Spinach.jpeg";
import Cauliflower from "../images/veg-cullyFlower.jpeg";
import RedBellPepper from "../images/veg-redBellPepper.jpeg";
import Raddish from "../images/veg-Raddis1.jpeg";
import Beetroot from "../images/veg-Beetroot.jpeg";

const products = [
    { img: Tomato, name: "Fresh Tomato", price1: "₹30 / kg", price2: "₹35 / kg", rating: 4.5 },
    { img: Carrot, name: "Fresh Carrot", price1: "₹40 / kg", price2: "₹35 / kg", rating: 4 },
    { img: Broccoli, name: "Fresh Broccoli", price1: "₹80 / kg", price2: "₹35 / kg", rating: 4.5 },
    { img: Spinach, name: "Green Spinach", price1: "₹50 / bunch", price2: "₹35 / kg", rating: 4 },
    { img: Cauliflower, name: "Fresh Cauliflower", price1: "₹35 / piece", price2: "₹35 / kg", rating: 4 },
    { img: RedBellPepper, name: "Red Bell Pepper", price1: "₹40 / 250g", price2: "₹35 / kg", rating: 4 },
    { img: Raddish, name: "Leafy Radish", price1: "₹20 / 5 pcs", price2: "₹35 / kg", rating: 4 },
    { img: Beetroot, name: "Leafy Beetroot", price1: "₹60 / kg", price2: "₹35 / kg", rating: 4 },
    { img: Broccoli, name: "Organic Broccoli", price1: "₹80 / kg", price2: "₹35 / kg", rating: 4.5 },
    { img: Spinach, name: "Organic Spinach", price1: "₹50 / bunch", price2: "₹35 / kg", rating: 4.5 },
    { img: Cauliflower, name: "Fresh Cauliflower", price1: "₹35 / piece", price2: "₹35 / kg", rating: 4 },
    { img: RedBellPepper, name: "Bell Pepper", price1: "₹40 / 250g", price2: "₹35 / kg", rating: 4.5 },
];


function Products() {
    return (

        <section className="products-section" id="products">
            <h1 className="products-heading heading">
                Our <span>Products</span>
            </h1>

            <div className="product-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-img">
                            <img src={product.img} alt={product.name} />
                        </div>

                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price1">{product.price1}</p>
                            <p className="price2">{product.price2}</p>

                            <div className="stars">
                                {[...Array(5)].map((_, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <i
                                            key={i}
                                            className={
                                                ratingValue <= Math.floor(product.rating)
                                                    ? "fa fa-star"
                                                    : ratingValue - product.rating < 1
                                                        ? "fa fa-star-half-o"
                                                        : "fa fa-star-o"
                                            }
                                        ></i>
                                    );
                                })}
                            </div>

                            <button className="btn-b">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default Products;
