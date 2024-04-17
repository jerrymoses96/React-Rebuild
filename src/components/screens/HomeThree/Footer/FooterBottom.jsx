import React from "react";
import { Img, Text } from "../../..";

export function FooterBottom() {
  return (
    <div className="flex justify-between py-[50px] border-blue_gray-100 border-t border-solid sm:flex-col sm:gap-5">
      <div className="w-1/2">
        <div className="text-xs  mb-5 ">
          <span className="text-gray-600">
            Copyright 2024 © Grogin WooCommerce WordPress Theme. All right
            reserved. Powered by{" "}
          </span>
          <span className="text-deep_purple-600 font-semibold">KLBTheme.</span>
        </div>
        <div className="flex items-center gap-3">
          <Img
            src="images/img_list_item_svg.png"
            alt="listitemsvg_one"
            className="h-[15px] "
          />
          <Img
            src="images/img_list_item_svg_black_900_02.svg"
            alt="listitemsvg"
            className="h-[15px]"
          />
          <Img
            src="images/img_list_item_svg_black_900_02_15x53.svg"
            alt="listitemsvg"
            className="h-[15px]"
          />
          <Img
            src="images/img_list_item_svg_black_900_02_15x41.svg"
            alt="listitemsvg"
            className="h-[15px]"
          />
          <Img
            src="images/img_list_item_svg_black_900_02_15x64.svg"
            alt="listitemsvg"
            className="h-[15px]"
          />
        </div>
      </div>
      <div>
        <ul className="text-xs text-[#111827] underline flex gap-2 mobileM:flex-col">
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Order Tracking</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
