import React from "react";
import { Img } from "../..";

export function Categories() {
  return (
    <div className="border border-[#E5E7EB] rounded-lg flex">
      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_fruits_vegetables_png.png"
            alt="fruits"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Fruits & Vegetables</p>
        </div>
      </div>
      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_baby_care_png.png"
            alt="linkbabycare"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Baby & Pregnancy</p>
        </div>
      </div>
      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_beverages_png.png"
            alt="linkbeverages"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Beverages</p>
        </div>
      </div>

      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_meat_fish_png.png"
            alt="linkmeatfish"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Meats & Seafood</p>
        </div>
      </div>

      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_organic_png.png"
            alt="linkorganic_one"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Biscuits & Snacks</p>
        </div>
      </div>

      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_bakery_png.png"
            alt="linkbakerypng"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Breads & Bakery</p>
        </div>
      </div>

      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_dairy_png.png"
            alt="linkdairypng"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Breakfast & Diary</p>
        </div>
      </div>

      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_frozen_foods_png.png"
            alt="linkfrozen_one"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Frozen Foods</p>
        </div>
      </div>

      <div className="p-3 border-r border-[#E5E7EB]">
        <div>
          <Img
            src="images/img_link_grocery_png.png"
            alt="linkgrocery_one"
            className="w-[122px] object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-sm">Grocery & Staples</p>
        </div>
      </div>
    </div>
  );
}
