import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserReview = () => {
  useEffect(() => {
    document.title = "Review | Gadget Heaven";
  }, []);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success(`Thanks for  \ngiving ${rating} star \n & Review: ${review}`);
  
    setReview('');
    setRating(1);
  };

  return (
    <div className=" mx-auto py-24 ">
      <div className='bg-[#9538E2] p-5' ><h1 className="text-3xl font-bold text-center text-white mb-5">User Review</h1>
      <p className="text-xl text-center text-white mb-5">We'd love to hear your feedback! Please leave your review below.</p></div>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg lg:w-[90%] mx-auto ">
        <div className="mb-4">
          <label htmlFor="rating" className="block text-lg">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={handleRatingChange}
            className="w-full p-3 border rounded-md bg-white"
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="review" className="block text-lg">Your Review</label>
          <textarea
            id="review"
            value={review} required
            onChange={handleReviewChange}
            placeholder="Write your review here..."
            rows="5"
            className="w-full p-3 border rounded-md bg-white"
          ></textarea>
        </div>

        <button type="submit" className="w-full  bg-[#9538E2] text-white p-3 rounded-md">Submit Review</button>
      </form>

      <ToastContainer 
        position="top-center" 
        autoClose={5000} 
        hideProgressBar 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
      />
    </div>
  );
};

export default UserReview;
