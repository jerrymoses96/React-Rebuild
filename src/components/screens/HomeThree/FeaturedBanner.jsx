import React from "react";
import { Button, Heading, Img, Text } from "../..";

export function FeaturedBanner() {
  return (
    <div className="flex flex-row md:flex-col w-full mt-9 gap-[30px]">
      <div className="h-[220px] w-[32%] md:w-full relative">
        <Img
          src="images/img_banner_17_jpg.png"
          alt="only_this_week"
          className="justify-center h-[220px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[38%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Text
            size="md"
            as="p"
            className="!text-orange-900 tracking-[-0.24px] !font-medium"
          >
            Only This Week
          </Text>
          <Heading as="h5" className="mt-2 tracking-[-0.88px]">
            We are here for
          </Heading>
          <Heading as="h5" className="mt-px tracking-[-0.88px]">
            shopping lovers
          </Heading>
          <Text as="p" className="mt-2 tracking-[-0.32px]">
            Eat one every day
          </Text>
          <Button
            size="lg"
            rightIcon={
              <Img
                src="images/img_iklbiconmoveright_gray_900_02.svg"
                alt="i.klb-icon-move-right"
              />
            }
            className="mt-4 gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[108px] rounded-[17px] sm:min-w-full"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="h-[220px] w-[32%] md:w-full relative">
        <Img
          src="images/img_banner_18_jpg.png"
          alt="banner18jpg_one"
          className="justify-center h-[220px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[46%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Text
            size="md"
            as="p"
            className="!text-orange-900 tracking-[-0.24px] !font-medium"
          >
            Only This Week
          </Text>
          <Heading as="h5" className="mt-2.5 tracking-[-0.88px]">
            Get pocket-friendly
          </Heading>
          <Heading as="h5" className="tracking-[-0.88px]">
            products with us
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
      <div className="h-[220px] w-[32%] md:w-full relative">
        <Img
          src="images/img_banner_19_jpg.png"
          alt="banner19jpg_one"
          className="justify-center h-[220px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[46%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Text
            size="md"
            as="p"
            className="!text-orange-900 tracking-[-0.24px] !font-medium"
          >
            Only This Week
          </Text>
          <Heading as="h5" className="mt-2.5 tracking-[-0.88px]">
            Grocery store at the
          </Heading>
          <Heading as="h5" className="tracking-[-0.88px]">
            center of the city
          </Heading>
          <Text as="p" className="mt-2 tracking-[-0.32px]">
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
    </div>
  );
}
