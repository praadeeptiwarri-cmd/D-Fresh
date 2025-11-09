// // src/assets/content/Shoppingcart.jsx
// import React, { useState } from "react";
// import "../styles/Shoppingcart.css";
// import cartImg1 from "../images/veg-Beans.jpeg";
// import cartImg2 from "../images/veg-Garlic.jpeg";
// import cartImg3 from "../images/veg-Lemon.jpeg";

// function Shoppingcart({ onClose }) {
//   const [items, setItems] = useState([
//     { id: 1, img: cartImg1, name: "Green Beans", price: 5.99, qty: 1 },
//     { id: 2, img: cartImg2, name: "Garlic", price: 5.99, qty: 1 },
//     { id: 3, img: cartImg3, name: "Lemon", price: 5.99, qty: 1 },
//   ]);

//   const changeQty = (id, delta) => {
//     setItems((prev) =>
//       prev.map((i) =>
//         i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
//       )
//     );
//   };

//   const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
//   const total = items.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2);

//   return (
//     <div
//       className="overlay-panel"
//       role="dialog"
//       aria-modal="true"
//       onClick={(e) =>
//         e.target.classList.contains("overlay-panel") && onClose()
//       }
//     >
//       <button className="popup-close" onClick={onClose}>
//         ×
//       </button>

//       <div className="cart-popup">


//         <h3>Your Cart</h3>

//         <div className="cart-list">
//           {items.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.img} alt={item.name} />
//               <div className="cart-meta">
//                 <h4>{item.name}</h4>
//                 <span className="price">
//                   Rs. {(item.price * item.qty).toFixed(2)}
//                 </span>
//                 <div className="cart-controls">
//                   <button onClick={() => changeQty(item.id, -1)}>-</button>
//                   <span>{item.qty}</span>
//                   <button onClick={() => changeQty(item.id, 1)}>+</button>
//                 </div>
//               </div>
//               <button className="trash" onClick={() => removeItem(item.id)}>
//                 🗑️
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="cart-total">Total: Rs. {total}</div>

//         <div className="cart-actions">
//           <button className="all-btn">Edit Cart</button>
//           <button
//             className="all-btn checkout"
//             onClick={() => alert("Proceed to checkout")}
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shoppingcart;








// import React from "react";
// import "../styles/Shoppingcart.css";
// import { useCart } from "../context/CartContext";

// function Shoppingcart({ onClose }) {
//   const { cartItems, updateQty, removeFromCart, totalAmount } = useCart();

//   return (
//     <div className="overlay-panel" role="dialog" aria-modal="true">
//       <div className="cart-popup">
//         <button className="popup-close" onClick={onClose}>×</button>
//         <h3>Your Cart</h3>

//         <div className="cart-list">
//           {cartItems.length === 0 ? (
//             <p className="empty">Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.img} alt={item.name} />
//                 <div className="cart-meta">
//                   <h4>{item.name}</h4>
//                   <div className="cart-controls">
//                     <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
//                   </div>
//                   <span className="price">₹{(item.price * item.qty).toFixed(2)}</span>
//                 </div>
//                 <button className="trash" onClick={() => removeFromCart(item.id)}>🗑️</button>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="cart-total">Total: ₹{totalAmount.toFixed(2)}</div>
//         <div className="cart-actions">
//           <button className="all-btn" onClick={onClose}>Continue Shopping</button>
//           <button className="all-btn checkout">Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shoppingcart;








import React from "react";
import "../styles/Shoppingcart.css";
import { useCart } from "../../context/CartContext";

function Shoppingcart({ onClose }) {
  const { cartItems, updateQty, removeFromCart, totalAmount } = useCart();

  return (
    <div className="overlay-panel" role="dialog" aria-modal="true" onClick={(e) => e.target.classList.contains("overlay-panel") && onClose()}>
      <div className="cart-popup">
        <button className="popup-close" onClick={onClose}>×</button>
        <h3>Your Cart</h3>

        <div className="cart-list">
          {cartItems.length === 0 ? (
            <p className="empty">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-meta">
                  <h4>{item.name}</h4>
                  <div className="cart-controls">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <span className="price">₹{(item.price * item.qty).toFixed(2)}</span>
                </div>
                <button className="trash" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">Total: ₹{totalAmount.toFixed(2)}</div>
        <div className="cart-actions">
          <button className="all-btn" onClick={onClose}>Continue Shopping</button>
          <button className="all-btn checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;




