import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gadget = ({ gadgets, selectedCategory }) => {
  const navigate = useNavigate();

  const handleClick = (productId) => {
    
    navigate(`/product/${productId}`);
  };

  const filteredGadgets = selectedCategory === "All Products"
    ? gadgets
    : gadgets.filter(gadget => gadget.category === selectedCategory);

  return (
    <>
      {filteredGadgets.map((gadget) => (
        <div key={gadget.product_id} className="card border bg-base-100 w-72 shadow-xl">
          <figure className="px-8 pt-8">
            <img
              src={gadget.product_image}
              alt={gadget.product_title}
              className="rounded-xl w-full border h-[200px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{gadget.product_title}</h2>
            <p className="text-left">Price: ${gadget.price}</p>
            <p className="text-left opacity-70">{gadget.description}</p>
            <div className="card-actions justify-start mt-3 items-start">
              <button
                className="btn border-[#9538E2] rounded-2xl font-bold text-[#9538E2]"
                onClick={() => handleClick(gadget.product_id)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Gadget;
