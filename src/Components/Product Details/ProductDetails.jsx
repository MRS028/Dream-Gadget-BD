import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext, WishlistContext } from "../Root/Root";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWhishList, whishCart } = useContext(WishlistContext);

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedRating, setSelectedRating] = useState(5);
  const [isWishListed, setIsWishListed] = useState(false); // State to manage wishlist button

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  useEffect(() => {
    fetch("/allgadgets.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.product_id === parseInt(productId)
        );
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error loading product data:", error));
  }, [productId]);

  const handleAddToWishlist = () => {
    if (!isWishListed) {
      addToWhishList(product);
      setIsWishListed(true); // Disable the button after adding
    } else {
      // Optionally show a message or toast here
      toast.error("Item already in the Wishlist!");
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-20 min-h-screen">
      <div className="pt-5 bg-[#9538E2] min-h-[400px]">
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl text-white font-bold">
            Product Details
          </h1>
          <p className="py-6 text-white w-[90%] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to 
            the coolest accessories, we have it all!
          </p>
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row justify-center lg:gap-20 p-6 mx-auto lg:p-2 bg-white border-2 shadow-2xl w-[90%] lg:w-[75%] rounded-lg relative top-[-200px]">
        <div>
          <img
            src={product.product_image}
            alt={product.product_title}
            className="rounded-xl w-80 h-full mx-auto mb-4"
          />
        </div>

        <div className="my-10">
          <h1 className="text-3xl font-bold mb-2">{product.product_title}</h1>
          <p className="mt-1">
            <strong>{product.category}</strong>
          </p>
          <p className="text-lg font-semibold">Price: ${product.price}</p>
          <p className="mt-1 opacity-75">{product.description}</p>
          <p className="mt-1 font-semibold text-green-700 bg-green-100 border-green-500 border w-20 text-center rounded-3xl">
            {product.availability ? "In Stock" : "Out of stock"}
          </p>

          <div>
            <h2 className="text-xl mb-2">
              <strong>Specifications:</strong>
            </h2>
            <ul className="list-disc list-inside">
              {Object.keys(product.Specification).map((key) => (
                <li key={key} className="mt-1">
                  {key}: {product.Specification[key]}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="pb-2 font-bold">Ratings</p>
            <div className="flex items-center">
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-orange-400"
                    onClick={() => handleRatingChange(star)}
                  />
                ))}
              </div>
              <span className="ml-3 text-black border px-5 rounded-lg bg-[#09080f0d] m-1">
                {selectedRating} star{selectedRating > 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-start">
            <button
              onClick={() => addToCart(product)}
              className={`${
                product.availability ? "" : "btn-disabled"
              } btn mr-2 my-2 bg-[#9538E2] lg:w-[193px] w-40 text-white rounded-xl`}
            >
              Add to cart 🛒
            </button>
            <button
              onClick={handleAddToWishlist}
              disabled={isWishListed} // Disable the button if already wishlisted
              className={`btn btn-outline w-32 border lg:w-[193px] rounded-full ${isWishListed ? "btn-disabled" : ""}`}
            >
              Add to Wishlist ♥
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
