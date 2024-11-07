import React, { useEffect, useState } from 'react';
import AddCart from './AddCart';
import AddWhishlist from './AddWhishlist';
import { useLoaderData } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const DashBoard = () => {



  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);


  const [isCart, setIsCart] = useState(true);


  const {} = useParams();
    
  const ProductData = useLoaderData();
  
  const handleCart = () => {
    setIsCart(true);
  };

  const handleWhish = () => {
    setIsCart(false);
  };




    return (
    <>
    <section className='py-20 text-center'>

    <div className="bg-[#9538E2]   ">
      <div className="pt-5 pb-5">
        <div className=" text-center">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl  text-white font-bold">Dashboard</h1>
            <p className="py-6 text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden lg:flex" /> the coolest accessories, we have it all!
            </p>
            <div className='space-x-5'>
            <button onClick={handleCart} className={`btn rounded-3xl font-bold bg-[#9538E2] text-xl   ${isCart ? 'bg-white text-[#9538E2]': "text-white" } `}>Cart</button>
            <button onClick={handleWhish} className={`btn rounded-3xl font-bold bg-[#9538E2] text-xl  ${isCart ? 'text-white': "text-[#9538E2] bg-white" } `}>Whishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {isCart? <AddCart ProductData={ProductData}> </AddCart> : <AddWhishlist ProductData={ProductData} ></AddWhishlist> }

    </section>
    
    </>
    );
};

export default DashBoard;