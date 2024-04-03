import React from "react";
import { Heading, Img, Input, Text } from "../..";
import { CloseSVG } from "../../../assets/images";
import "../../../styles/index.css"


export function HeaderBottom(props) {
  return (
    <div className=" wrapper flex flex-row justify-center  py-4 border-gray-200 border-b border-solid bg-white-A700">
      <div className="flex flex-row justify-center w-full md:px-5 max-w-[1360px]">
        <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
          <Img
            src="images/img_link_grogin_logo_dark_png.png"
            alt="linkgrogin_one"
            className="w-[11%] md:w-full md:h-[34px] object-cover"
          />
          <div className="flex flex-row justify-center w-[3%] md:w-full ml-[23px] p-[7px] md:ml-0 sm:ml-5 bg-deep_purple-600 rounded-[19px]">
            <Img
              src="images/img_link_black_900.svg"
              alt="link_one"
              className="h-[24px] w-[24px]"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[4%] md:w-full ml-[7px] md:ml-0">
            <a href="#" className="opacity-0.7">
              <Text
                size="s"
                as="p"
                className="!text-black-900_99 tracking-[-0.32px]"
              >
                Deliver to
              </Text>
            </a>
            <a href="#">
              <Text
                as="p"
                className="!text-black-900 tracking-[-0.32px] !font-medium"
              >
                all
              </Text>
            </a>
          </div>
          <Input
            color="gray_100"
            shape="round"
            name="search"
            placeholder="Search for products, categories or brands..."
            value={props.searchBarValue1}
            onChange={(e) => props.setSearchBarValue1(e)}
            suffix={
              props.searchBarValue1?.length > 0 ? (
                <CloseSVG
                  onClick={() => props.setSearchBarValue1("")}
                  height={26}
                  width={26}
                  fillColor="#000000ff"
                />
              ) : (
                <Img
                  src="images/img_search_button.svg"
                  alt="Search → Button"
                  className="cursor-pointer"
                />
              )
            }
            className="w-[64%] md:w-full ml-6 gap-[35px] md:ml-0 sm:ml-5 text-gray-600"
          />
          <div className="flex flex-col items-center justify-start w-[14%] md:w-full ml-[25px] gap-1 md:ml-0 sm:ml-5">
            <div className="flex flex-row justify-between items-center w-[91%] md:w-full">
              <Img
                src="images/img_link_black_900_26x26.svg"
                alt="link_three"
                className="h-[26px] w-[26px]"
              />
              <div className="flex flex-row w-[61%] gap-[39px]">
                <div className="h-[30px] w-[32%] sm:w-full relative">
                  <Img
                    src="images/img_link_26x26.svg"
                    alt="image"
                    className="h-[26px] w-[26px] bottom-0 left-0 m-auto absolute"
                  />
                  <a
                    href="#"
                    className="flex justify-center items-center h-[17px] w-[17px] right-0 top-0 p-[3px] m-auto bg-red-700 absolute rounded-lg"
                  >
                    <Heading
                      size="xs"
                      as="p"
                      className="!text-red-50 tracking-[-0.32px]"
                    >
                      0
                    </Heading>
                  </a>
                </div>
                <div className="h-[30px] w-[32%] sm:w-full relative">
                  <Img
                    src="images/img_link_1.svg"
                    alt="link_one"
                    className="h-[26px] w-[26px] bottom-0 left-0 m-auto absolute"
                  />
                  <a
                    href="#"
                    className="flex justify-center items-center h-[17px] w-[17px] right-0 top-0 p-[3px] m-auto bg-red-700 absolute rounded-lg"
                  >
                    <Heading
                      size="xs"
                      as="p"
                      className="!text-red-50 tracking-[-0.32px]"
                    >
                      0
                    </Heading>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <a href="#">
                <Text
                  size="md"
                  as="p"
                  className="!text-black-900 tracking-[-0.32px] !font-medium"
                >
                  Account
                </Text>
              </a>
              <a href="#">
                <Text
                  size="md"
                  as="p"
                  className="!text-black-900 tracking-[-0.32px] !font-medium"
                >
                  Wishlist
                </Text>
              </a>
              <a href="#">
                <Text
                  size="md"
                  as="p"
                  className="!text-black-900 tracking-[-0.32px] !font-medium"
                >
                  Your Cart
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
