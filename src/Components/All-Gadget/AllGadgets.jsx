import React, { useEffect, useState } from "react";
import Gadget from "./Gadget";

const AllGadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("/allgadgets.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);

        const uniqueCategories = [
          "All Products",
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  return (
    <section className="lg:my-[300px] text-center lg:w-[85%] mx-auto">
      <h1 className="text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>

      <section className="my-10 flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-center lg:space-x-5 items-center lg:items-start">
        <div className="flex justify-center items-center space-y-2 border rounded-lg card-actions flex-col w-72 pt-3 h-[510px] shadow-xl">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn w-[192px] ${selectedCategory === category ? "bg-[#9538E2] text-white" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gadget Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
       
          <Gadget gadgets={gadgets} selectedCategory={selectedCategory} />
        </div>
      </section>
    </section>
  );
};

export default AllGadgets;
