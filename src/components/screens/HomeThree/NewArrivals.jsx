import React from "react";
import { Heading, Img, Text } from "../..";
import data2 from "../../../components/general/data2.json";
import renderStars from "../../helpers/RenderStars";
import ProductCard2 from "./Productcard2";

export function NewArrivals() {
  return (
    <div className="flex mt-7 xl:flex-col  ">
      {/* review section  */}
      <div className="border border-[#E5E7EB] rounded-lg  ">
        <div className="flex items-center gap-5 border-b border-[#E5E7EB] p-5 ">
          <img className="rounded-lg" src="images\person.png" alt="" />
          <div className="">
            <p className="font-bold">Machic</p>
            <p className="text-[#6B7280]">Featured</p>
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(3)}</div>
              <span className="text-xs">41</span>
            </div>
          </div>
        </div>
        <div className="px-5 my-5">
          <p className="text-sm">
            Good quality product can only be found in good stores
          </p>
        </div>

        <div className="h-[200px] w-full relative">
          <Img
            src="images/img_banner_15_jpg.png"
            alt="image"
            className="justify-center h-[200px] rounded-b-lg w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto rounded-bl-md object-cover absolute"
          />
          <div className="flex flex-col items-start justify-start w-[50%] gap-2 left-[6%] top-[12%] m-auto absolute">
            <Text
              size="md"
              as="p"
              className="!text-orange-900 tracking-[-0.24px] !font-medium"
            >
              Only This Week
            </Text>
            <Heading
              size="3xl"
              as="h6"
              className="tracking-[-0.72px] leading-[22px]"
            >
              <>Where flavor meets affordability.</>
            </Heading>
            <Text
              size="md"
              as="p"
              className="w-[72%] tracking-[-0.32px] leading-[18px]"
            >
              <>Only this week. Don’t miss...</>
            </Text>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="flex w-full justify-center border rounded-lg border-[#E5E7EB] flex-wrap">
        {data2.map((item) => {
          return (
            <ProductCard2
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
