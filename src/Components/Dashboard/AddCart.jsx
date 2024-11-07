import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Root/Root";


const AddCart = () => {
  const { cart, removeFromCart, handlePurchase } = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);
  const [sortedCart, setSortedCart] = useState([]);
  const [isPurchaseClicked, setIsPurchaseClicked] = useState(false); // State to track purchase button click

  useEffect(() => {
    
    setSortedCart(cart);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalCost(total);
  }, [cart]);

  const handleSortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
    setIsPurchaseClicked(true); // Sort by Price button clicked, so set to false
  };

  const handlePurchaseClick = () => {
    handlePurchase();
    setIsPurchaseClicked(false); // Purchase button clicked, so set to true
  };

  return (
    <div className="container text-center py-20">
      <div className="flex flex-col lg:flex-row space-y-2 justify-between mx-auto w-[90%]">
        <h3 className="text-3xl font-bold px-5">Cart</h3>
        <h3 className="text-2xl font-semibold">Total cost: ${totalCost}</h3>
        <div className="space-x-3">
          <button 
            onClick={handleSortByPrice}
            className={`btn rounded-3xl font-bold bg-[#9538E2] border-[#9538E2] text-xl  ${isPurchaseClicked? 'text-white': "text-[#9538E2] bg-white" } `}
          >
            Sort By Price <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"/>
  </svg>
          </button>
          <button
            onClick={handlePurchaseClick}
            className={`btn rounded-3xl font-bold bg-[#9538E2] border-[#9538E2]  text-xl  ${isPurchaseClicked ? 'bg-white text-[#9538E2]': "text-white" } `}
          >
            Purchase
          </button>
        </div>
      </div>
      {sortedCart.length === 0 ? (
        ''
      ) : (
        sortedCart.map((item) => (
          <section key={item.product_id}>
            <div className="flex justify-between mx-auto w-[95%] shadow-xl p-5 lg:mx-24 my-8 lg:w-[1366px] border rounded">
              <div className="flex items-center gap-6">
                <img
                  className="border w-20 h-20 rounded-full"
                  src={item.product_image}
                  alt={item.product_title}
                />
                <div className="flex flex-col text-left">
                  <h1 className="font-semibold lg:text-2xl">{item.product_title}</h1>
                  <h1 className="opacity-80 text-sm">{item.description}</h1>
                  <p className="font-semibold opacity-60"><strong>Price: ${item.price}</strong> </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="btn bg-transparent text-white px-3 py-1 rounded"
              >
                <i className="fa-solid fa-trash-can fa-xl" style={{ color: "#e00b0b" }}></i>
              </button>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default AddCart;
