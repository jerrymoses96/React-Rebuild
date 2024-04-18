import React from "react";
import { Heading, Img } from "../../..";
import "../../../../styles/index.css";

export function HeaderDown() {
  return (
    <div className="wrapper flex flex-row md:flex-col md:hidden justify-between  bg-white-A700">
      <div className="flex flex-row md:flex-col justify-center items-center  md:gap-5 ">
        <a href="#">
          <Heading
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.30px]"
          >
            Home
          </Heading>
        </a>
        <Img
          src="images/img_arrow_up.svg"
          alt="arrowup_five"
          className="h-[48px] ml-1.5 md:ml-0"
        />
        <a href="#" className="ml-[25px] md:ml-0 sm:ml-5">
          <Heading
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.30px]"
          >
            Shop
          </Heading>
        </a>
        <Img
          src="images/img_arrow_up.svg"
          alt="arrowup_seven"
          className="h-[48px] ml-1.5 md:ml-0"
        />
        <a href="#" className="ml-[25px] md:ml-0 sm:ml-5">
          <Heading
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.30px]"
          >
            Fruits & Vegetables
          </Heading>
        </a>
        <a href="#" className="ml-6 md:ml-0 sm:ml-5">
          <Heading
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.30px]"
          >
            Beverages
          </Heading>
        </a>
        <a href="#" className="ml-6 md:ml-0 sm:ml-5">
          <Heading
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.30px]"
          >
            Blog
          </Heading>
        </a>
        <a href="#" className="ml-6 md:ml-0 sm:ml-5">
          <Heading
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.30px]"
          >
            Contact
          </Heading>
        </a>
      </div>
      <div className="flex flex-row md:flex-col justify-center items-center  md:gap-5">
        <a href="#">
          <Heading
            size="xl"
            as="p"
            className="!text-black-900 tracking-[-0.30px]"
          >
            Trending Products
          </Heading>
        </a>
        <Img
          src="images/img_arrow_up.svg"
          alt="arrowup_nine"
          className="h-[48px] ml-[9px] md:ml-0"
        />
        <a href="#" className="ml-[25px] md:ml-0 sm:ml-5">
          <Heading
            size="xl"
            as="p"
            className="!text-red-700 tracking-[-0.30px]"
          >
            Almost Finished
          </Heading>
        </a>
        <a href="#" className="ml-[7px] p-1 md:ml-0 bg-gradient5 rounded">
          <Heading
            size="xs"
            as="p"
            className="!text-white-A700 tracking-[-0.30px] text-center !font-bold"
          >
            SALE
          </Heading>
        </a>
        <Img
          src="images/img_arrow_up_red_700.svg"
          alt="arrowup_eleven"
          className="h-[48px] ml-2.5 md:ml-0"
        />
      </div>
    </div>
  );
}
