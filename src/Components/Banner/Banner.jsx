import React from "react";
import { NavLink } from "react-router-dom";


const Banner = () => {
  return (
    <>
    <section className="w-[93%] items-center  mx-auto ">
    <div className="bg-[#9538E2] min-h-[560px] rounded-2xl  my-3  ">
      <div className="pt-14 lg:min-h-[700px]">
        <div className="hero-content text-center pt-12 lg:pt-20">
          <div className="text-center">
            <h1 className="text-2xl lg:text-6xl text-white font-bold">Upgrade Your Tech Accessorize with <br className="hidden lg:flex" /> Gadget Heaven Accessories</h1>
            <p className="py-6 text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden lg:flex" /> the coolest accessories, we have it all!
            </p>
            <NavLink to='/dashboard'><button className="btn rounded-3xl font-bold text-xl text-[#9538E2] bg-white">Shop Now</button></NavLink>
          </div>
        </div>
      </div>
    </div>
    </section>



    </>

  );
};

export default Banner;
