import React from "react";
import { Button, Img } from "../..";
import data3 from "../../../components/general/data3.json";
import ProductCard3 from "./ProductCard3";

export function FeaturedProducts() {
  return (
    <div className="border border-[#E5E7EB] rounded-lg flex md:flex-col md:gap-2  justify-start">
      {/* image div  */}

      <div className="h-[364px] md:w-full w-80 rounded-lg border-gray-200 border-r border-solid relative">
        <div className="absolute top-5 left-5 z-10 flex flex-col  gap-2">
          <p className=" text-red-700 tracking-[-0.24px] ">Only This Week</p>
          <p className="text-black-900 tracking-[-0.24px] text-xl font-bold">
            A smart store for <br /> every people
          </p>
          <p className="text-[#6B7280 tracking-[-0.24px text-xs]">
            Feed your family the best
          </p>

          <Button
            size="lg"
            rightIcon={
              <Img
                src="images/img_iklbiconmoveright_gray_900_02.svg"
                alt="i.klb-icon-move-right"
              />
            }
            className="mt-[10px] gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid w-[110px] rounded-[17px] "
          >
            Shop Now
          </Button>
        </div>
        <Img
          src="images/img_banner_16_jpg.png"
          alt="only_this_week"
          className="justify-center h-[364px] rounded-lg w-full  left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
        />
      </div>
      <div className="flex flex-wrap justify-center flex-row w-full md:border-t md:border-[#E5E7EB] border-r border-[#E5E7EB]">
        {data3.map((item) => {
          return (
            <ProductCard3
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              discount_price={item.discount_price}
              average_rating={item.average_rating}
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
