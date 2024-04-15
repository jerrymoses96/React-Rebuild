import React, { useState, useEffect } from "react";
import { Img } from "../..";

const categoriesData = [
  {
    src: "images/img_link_fruits_vegetables_png.png",
    alt: "fruits",
    title: "Fruits & Vegetables",
  },
  {
    src: "images/img_link_baby_care_png.png",
    alt: "linkbabycare",
    title: "Baby & Pregnancy",
  },
  {
    src: "images/img_link_beverages_png.png",
    alt: "linkbeverages",
    title: "Beverages",
  },
  {
    src: "images/img_link_meat_fish_png.png",
    alt: "linkmeatfish",
    title: "Meats & Seafood",
  },
  {
    src: "images/img_link_organic_png.png",
    alt: "linkorganic_one",
    title: "Biscuits & Snacks",
  },
  {
    src: "images/img_link_bakery_png.png",
    alt: "linkbakerypng",
    title: "Breads & Bakery",
  },
  {
    src: "images/img_link_dairy_png.png",
    alt: "linkdairypng",
    title: "Breakfast & Diary",
  },
  {
    src: "images/img_link_frozen_foods_png.png",
    alt: "linkfrozen_one",
    title: "Frozen Foods",
  },
  {
    src: "images/img_link_grocery_png.png",
    alt: "linkgrocery_one",
    title: "Grocery & Staples",
  },
];

export function Categories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isAboveXL = windowWidth > 1279;

  return (
    <div
      className={`border border-[#E5E7EB] rounded-lg flex justify-center ${
        isAboveXL ? "" : "flex-wrap"
      }`}
    >
      {categoriesData.map((category) => (
        <div
          key={category.alt}
          className={`p-3 border-r border-[#E5E7EB] sm:border-none ${
            isAboveXL ? "w-auto" : "w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4"
          }`}
        >
          <div className="flex justify-center">
            <Img
              src={category.src}
              alt={category.alt}
              className="w-[122px] h-[122px] object-cover"
            />
          </div>
          <div className="text-center mt-2">
            <p className="text-sm">{category.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
