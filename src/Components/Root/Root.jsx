import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Home/Modal"; 

export const CartContext = React.createContext();
export const WishlistContext = React.createContext();

const Root = () => {
  const [cart, setCart] = useState([]);
  const [whishCart, setWhishCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [totalCost, setTotalCost] = useState(0); // Total cost state

  const addToWhishList = (item) => {
    if (!whishCart.some((i) => i.product_id === item.product_id)) {
      setWhishCart((prevCart) => [...prevCart, item]);
      toast.success(`${item.product_title} added to wishlist!`);
    } else {
      toast.error(`${item.product_title} already in the wishlist!`);
    }
  };

  const addToCart = (item) => {
    if (!cart.some((i) => i.product_id === item.product_id)) {
      setCart((prevCart) => [...prevCart, item]);
      toast.success(`${item.product_title} added to the cart!`);
    } else {
      toast.error(`${item.product_title} already in the cart!`);
    }
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.product_id !== item.product_id));
    toast.info(`${item.product_title} removed from Wishlist`);
  };

  const removeFromWishlist = (item) => {
    setWhishCart((prevCart) => prevCart.filter((i) => i.product_id !== item.product_id));
    toast.info(`${item.product_title} removed from Wishlist`);
  };

  const handlePurchase = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalCost(total); 
    setCart([]); 

    if (total > 0) {
      setShowModal(true); 
      
    } else {
      toast.warn("You have not selected any items.");
    }
  };

  return (
    <>
      <WishlistContext.Provider value={{ whishCart, addToWhishList, removeFromWishlist }}>
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, handlePurchase }}>
          <div>
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            
            {showModal && (
              <Modal
                message={`Total Amount: $${totalCost}`}
                onClose={() => setShowModal(false)}
              />
            )}
          </div>
        </CartContext.Provider>
      </WishlistContext.Provider>
    </>
  );
};

export default Root;
