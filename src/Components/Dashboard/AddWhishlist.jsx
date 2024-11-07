import React, { useContext } from "react";
import { WishlistContext } from "../Root/Root";

const AddWishlist = () => {
  const { whishCart,removeFromWishlist } = useContext(WishlistContext);
  

  return (
    <div className="container text-left py-20">
      <h2 className="text-2xl p-10 font-bold mb-6">Wishlist</h2>
      {whishCart.length === 0 ? (
        ''
      ) : (
        whishCart.map((item) => (
          <div key={item.product_id} className="flex justify-between mx-auto w-[95%] shadow-xl p-5 lg:mx-24 my-8 lg:w-[1366px] border rounded">
            
            
            
            <div className="flex items-center gap-6">
              <img
                className="border w-20 h-20 rounded-full"
                src={item.product_image} 
                alt={item.product_title}
              />
              <div>
                <h1 className="font-semibold lg:text-2xl">{item.product_title}</h1>
                <p className="font-semibold opacity-60">Price: ${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromWishlist(item)}
              className="btn bg-transparent text-white px-3 py-1 rounded"
            >
              <i className="fa-solid fa-trash-can fa-xl" style={{ color: "#e00b0b" }}></i>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default AddWishlist;
