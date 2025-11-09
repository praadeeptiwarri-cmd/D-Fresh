

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product, qty = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((p) => p.id === product.id);
//       if (existing) {
//         return prev.map((p) =>
//           p.id === product.id ? { ...p, qty: p.qty + qty } : p
//         );
//       } else {
//         return [...prev, { ...product, qty }];
//       }
//     });
//   };

//   const removeFromCart = (id) =>
//     setCartItems((prev) => prev.filter((p) => p.id !== id));

//   const updateQty = (id, qty) =>
//     setCartItems((prev) =>
//       prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
//     );

//   const clearCart = () => setCartItems([]);

//   const totalAmount = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
//   const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalAmount, totalQty }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }










import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQty, removeFromCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
