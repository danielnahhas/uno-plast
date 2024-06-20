"use client";
import React from "react";
import { categories } from "../constants";
import { useSearchParams } from "next/navigation";
import Product from "./Product";
import { FaLayerGroup } from "react-icons/fa";
import { BsLayers, BsLayersFill, BsLayersHalf } from "react-icons/bs";
import { SlLayers } from "react-icons/sl";


const Products = () => {
  const searchParams = useSearchParams();
  const paramsCategory = searchParams.get("category") || "";

  return (
    <section className="mb-10 w-full h-fit">
      <div className="px-4 lg:px-20 space-y-4 pt-10">
        <div className="flex flex-wrap gap-6 justify-between items-center">
          <h2 className="text-4xl font-extrabold">Our Products</h2>
          <div className="relative flex items-center justify-between w-full sm:w-auto">
            <div className="group pr-2 sm:pr-6">
              <button
                className="text-primaryBlue focus:outline-none transition duration-300 hover:text-primaryBlueDark flex items-center"
                aria-label="Layer 1"
              >
                <BsLayersHalf size={24} />
                <span className="ml-2">
                  Layer 1
                </span>
              </button>
              <div className="absolute bottom-0 translate-y-full z-10 left-0 w-full opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-[opacity] ease-in-out duration-300">
                <div className="p-4 bg-white mt-3 border">
                  <h4 className="text-lg font-semibold">
                    1st Layer (External)
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>UV stabilized</li>
                    <li>Excellent stress crack resistance</li>
                    <li>Ideal for outdoor use</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group pr-2 sm:pr-6">
              <button
                className="text-primaryBlue focus:outline-none transition duration-300 hover:text-primaryBlueDark flex items-center"
                aria-label="Layer 2"
              >
                <BsLayers size={24} />
                <span className="ml-2">
                  Layer 2
                </span>
              </button>
              <div className="absolute bottom-0 translate-y-full z-10 left-0 w-full opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-[opacity] ease-in-out duration-300">
                <div className="p-4 bg-white mt-3 border">
                  <h4 className="text-lg font-semibold">2nd Layer (Middle)</h4>
                  <ul className="list-disc list-inside">
                    <li>Foam insulation</li>
                    <li>Keeps water at the right temperature</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group">
              <button
                className="text-primaryBlue focus:outline-none transition duration-300 hover:text-primaryBlueDark flex items-center"
                aria-label="Layer 3"
              >
                <SlLayers size={24} />
                <span className="ml-2">
                  Layer 3
                </span>
              </button>
              <div className="absolute bottom-0 translate-y-full z-10 left-0 w-full opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-[opacity] ease-in-out duration-300">
                <div className="p-4 bg-white mt-3 border">
                  <h4 className="text-lg font-semibold">
                    3rd Layer (Internal)
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>No added colorants</li>
                    <li>Made from food-grade resin (FDA and EU approved)</li>
                    <li>Suitable for food and most chemicals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {categories
            .filter((category) => category.category.includes(paramsCategory))
            .map((category) => (
              <div
                id={category.category}
                key={category.category}
                className="space-y-4"
              >
                <h2 className="text-2xl text-white w-full bg-primaryBlue rounded-lg shadow-lg p-3 capitalize">
                  {category.category} Tanks
                </h2>
                {category.products.map((product, i) => (
                  <Product key={i} product={product} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
