import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
        
       
        const jsonData = [
            { product_id: 1, product_title: "Samsung Galaxy S21", price: 750 },
            { product_id: 2, product_title: "Apple iPhone 13", price: 999 },
            { product_id: 3, product_title: "MacBook Pro 14", price: 1999 },
            { product_id: 4, product_title: "Dell XPS 13", price: 1200 },
            { product_id: 5, product_title: "Apple Watch Series 7", price: 399 },
            { product_id: 6, product_title: "Google Pixel 6", price: 700 },
            { product_id: 7, product_title: "HP Spectre x360", price: 1300 },
            { product_id: 8, product_title: "Galaxy Watch 4", price: 249 },
            { product_id: 9, product_title: "Apple MacBook Air M1", price: 999 },
            { product_id: 10, product_title: "Apple iPhone 14", price: 1099 },
            { product_id: 11, product_title: "Apple iPhone 12 Pro Max", price: 1099 },
            { product_id: 12, product_title: "Fitbit Sense Smartwatch", price: 299 }
        ];

        setData(jsonData);
    }, []);

    return (
        <section className='py-20  mx-auto text-center'>
            <div className="bg-[#9538E2]   ">
      <div className="pt-5 pb-5">
        <div className=" text-center">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl  text-white font-bold">Product Price Statistics</h1>
            <p className="py-6 text-white">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden lg:flex" /> the coolest accessories, we have it all!
            </p>
            
          </div>
        </div>
      </div>
    </div>




          
            <div className="chart-container my-5 lg:w-[90%] mx-auto">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_title" tick={{ fontSize: 12 }} />
                        <YAxis tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#9538E2" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default Statistics;
