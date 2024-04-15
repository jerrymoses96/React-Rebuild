import React from "react";
import { Img, Text } from "../../..";

export function FooterBottom() {
  return (
    <div className="flex flex-row md:flex-col justify-center items-start w-full py-[50px] md:gap-5 md:py-5 border-blue_gray-100 border-t border-solid">
      <div className="flex flex-row justify-start w-[50%] md:w-full py-0.5">
        <div className="flex flex-col items-start justify-start w-[100%] gap-[22px]">
          <Text size="md" as="p" className="tracking-[-0.32px] !font-medium">
            <span className="text-gray-600">
              Copyright 2024 © Grogin WooCommerce WordPress Theme. All right
              reserved. Powered by{" "}
            </span>
            <span className="text-deep_purple-600 font-semibold">
              KLBTheme.
            </span>
          </Text>
          <div className="flex flex-row justify-start items-center gap-2.5">
            <Img
              src="images/img_list_item_svg.png"
              alt="listitemsvg_one"
              className="w-[14%] md:h-auto sm:w-full object-cover"
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
      </div>
      <ul className="flex flex-row justify-end w-[50%] md:w-full gap-2 sm:gap-2">
        <li>
          <a href="#">
            <Text
              size="md"
              as="p"
              className="!text-gray-900 tracking-[-0.32px] underline"
            >
              Terms and Conditions
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text
              size="md"
              as="p"
              className="!text-gray-900 tracking-[-0.32px] underline"
            >
              Privacy Policy
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text
              size="md"
              as="p"
              className="!text-gray-900 tracking-[-0.32px] underline"
            >
              Order Tracking
            </Text>
          </a>
        </li>
      </ul>
    </div>
  );
}
