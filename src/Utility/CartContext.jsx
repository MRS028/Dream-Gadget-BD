// // src/contexts/CartContext.js
// import React, { createContext, useState } from 'react';

// // Create Context
// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const addToWishlist = (item) => {
//     setWishlistItems((prevItems) => [...prevItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, wishlistItems, addToCart, addToWishlist }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
