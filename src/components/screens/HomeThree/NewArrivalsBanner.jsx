import React from "react";
import { Button, Heading, Img, Text } from "../..";

export function NewArrivalsBanner() {
  return (
    <div className="flex flex-row md:flex-col w-full mt-[27px] gap-[30px]">
      <div className="h-[280px] w-[49%] md:w-full relative">
        <Img
          src="images/img_banner_08_jpg.png"
          alt="image"
          className="justify-center h-[280px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[46%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Heading
            size="md"
            as="p"
            className="flex justify-center items-center w-[102px] h-[22px] px-[7px] py-[3px] !text-red-900 tracking-[-0.24px] text-center bg-orange-50 rounded-[11px]"
          >
            Only This Week
          </Heading>
          <Heading size="6xl" as="h3" className="mt-[17px] tracking-[-1.12px]">
            Provides you the quality
          </Heading>
          <Heading size="6xl" as="h3" className="mt-px tracking-[-1.12px]">
            that’s you expected
          </Heading>
          <Text as="p" className="mt-[7px] tracking-[-0.32px]">
            Feed your family the best
          </Text>
          <Button
            size="lg"
            rightIcon={
              <Img
                src="images/img_iklbiconmoveright_gray_900_02.svg"
                alt="i.klb-icon-move-right"
              />
            }
            className="mt-[17px] gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[108px] rounded-[17px] sm:min-w-full"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="h-[280px] w-[49%] md:w-full relative">
        <Img
          src="images/img_banner_09_jpg.png"
          alt="banner09jpg_one"
          className="justify-center h-[280px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[38%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Heading
            size="md"
            as="p"
            className="flex justify-center items-center w-[102px] h-[22px] px-[7px] py-[3px] !text-red-900 tracking-[-0.24px] text-center bg-orange-50 rounded-[11px]"
          >
            Only This Week
          </Heading>
          <Heading size="6xl" as="h3" className="mt-[17px] tracking-[-1.12px]">
            Grocery store at the
          </Heading>
          <Heading size="6xl" as="h3" className="tracking-[-1.12px]">
            center of the city
          </Heading>
          <Text as="p" className="mt-2 tracking-[-0.32px]">
            Only this week. Don’t miss...
          </Text>
          <Button
            size="lg"
            rightIcon={
              <Img
                src="images/img_iklbiconmoveright_gray_900_02.svg"
                alt="i.klb-icon-move-right"
              />
            }
            className="mt-[17px] gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[108px] rounded-[17px] sm:min-w-full"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
