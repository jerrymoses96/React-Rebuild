import React from "react";
import { Button, Heading, Img, Text } from "../..";

export function BannerImage1() {
  return (
    <div className="flex flex-row md:flex-col w-full mt-9 gap-[30px]">
      <div className="h-[220px] w-[32%] md:w-full relative">
        <Img
          src="images/img_banner_12_jpg.png"
          alt="only_this_week"
          className="justify-center h-[220px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[49%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Text
            size="md"
            as="p"
            className="!text-orange-900 tracking-[-0.24px] !font-medium"
          >
            Only This Week
          </Text>
          <Heading as="h5" className="mt-2.5 tracking-[-0.88px]">
            We provide you the
          </Heading>
          <Heading as="h5" className="tracking-[-0.88px]">
            best quality products
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
          src="images/img_banner_13_jpg.png"
          alt="banner13jpg_one"
          className="justify-center h-[220px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[55%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Text
            size="md"
            as="p"
            className="!text-orange-900 tracking-[-0.24px] !font-medium"
          >
            Only This Week
          </Text>
          <Heading as="h5" className="mt-2.5 tracking-[-0.88px]">
            We make your grocery
          </Heading>
          <Heading as="h5" className="mt-px tracking-[-0.88px]">
            shopping more exciting
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
      <div className="h-[220px] w-[32%] md:w-full relative">
        <Img
          src="images/img_banner_14_jpg.png"
          alt="banner14jpg_one"
          className="justify-center h-[220px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
        />
        <div className="flex flex-col items-start justify-start w-[54%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
          <Text
            size="md"
            as="p"
            className="!text-orange-900 tracking-[-0.24px] !font-medium"
          >
            Only This Week
          </Text>
          <Heading as="h5" className="mt-2.5 tracking-[-0.88px]">
            The one supermarket
          </Heading>
          <Heading as="h5" className="tracking-[-0.88px]">
            that saves your money
          </Heading>
          <Text as="p" className="mt-[7px] tracking-[-0.32px]">
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
    </div>
  );
}
