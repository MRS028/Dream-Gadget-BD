import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import BannerImg from '../Banner/BannerImg';
import AllGadgets from '../All-Gadget/AllGadgets';



const Home = () => {
    useEffect(() => {
        document.title = "Home | Gadget Heaven";
      }, []);

    return (
        <>
       <div>
       <div className='absolute top-[410px] md:top-[280px] lg:left-[20%] lg:top-[480px]'>
                <BannerImg></BannerImg>
            </div>
            <div className=''>
            <Banner></Banner>
            </div>
       </div>
           <div className='my-40 lg:my-0'> <AllGadgets></AllGadgets>
           </div>
       
        
        </>
    );
};

export default Home;