import React from "react";
import data from "../../../components/general/data.json";
import ProductCard from "./ProductCard";

export function NewProductSlider() {
  return (
    <div className="border border-[#E5E7EB] rounded-lg mt-5 w-full ">
      <div className="flex flex-wrap justify-center">
        {/* product cards */}
        {data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              discount_price={item.discount_price}
              average_rating={item.average_rating}
              available={item.available}
              cold_sale={item.cold_sale}
              organic={item.organic}
              discount={item.discount}
              image_url={item.image_url}
            />
          );
        })}
      </div>
    </div>
  );
}
