import React from "react";
import { Button, Heading, Img, Text } from "../..";
import renderStars from "../../helpers/RenderStars";

export function DealsOfTheDay() {
  return (
    <div className="flex flex-row md:flex-col justify-start items-center w-full mt-5 gap-[30px] md:gap-5">
      <div className="flex flex-col w-[33%] md:w-full pt-5 gap-5 md:gap-[19px] border-gray-200 border border-solid rounded-lg">
        <div className="flex flex-row justify-center w-[91%] md:w-full mx-auto">
          <div className="flex flex-col items-start justify-start w-full gap-2.5">
            <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-5 sm:gap-5">
              <div className="h-[185px] w-[185px] mt-[5px] sm:mt-0 relative">
                <div className="justify-center h-[170px] w-[170px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Img
                    src="images/img_link_1_2_500x500_jpg.png"
                    alt="image"
                    className="justify-center h-[170px] w-[170px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_link_black_900_02.svg"
                    alt="add_to_cart_one"
                    className="h-[14px] w-[15%] bottom-[2%] right-[2%] m-auto rounded-[50%] absolute"
                  />
                </div>
                <Button
                  color="red_700"
                  shape="round"
                  className="left-0 top-[2%] m-auto !rounded-tr-[50%] !rounded-br-[50%] tracking-[-0.32px] uppercase font-extrabold min-w-[38px] absolute"
                >
                  75%
                </Button>
                <Button
                  variant="gradient"
                  color="lime_300_green_200"
                  leftIcon={<Img src="images/img_svg.svg" alt="SVG" />}
                  className="gap-[5px] bottom-[-5px] left-0 m-auto rounded-2xl   tracking-[-0.32px] uppercase font-extrabold min-w-[80px] absolute"
                >
                  Organic
                </Button>
                <Button
                  size="md"
                  shape="circle"
                  className="w-[32px] right-0 top-0 m-auto absolute"
                >
                  <Img src="images/img_link.svg" />
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-[48%] sm:w-full">
                <a href="#" className="w-[99%]">
                  <Text
                    size="xl"
                    as="p"
                    className="!text-black-900 tracking-[-0.28px]"
                  >
                    <>
                      100 Percent Apple Juice – 64
                      <br />
                      fl oz Bottle
                    </>
                  </Text>
                </a>
                <div className="flex flex-row justify-start items-center mt-1.5 gap-[7px]">
                  {renderStars(3)}

                  <Text size="md" as="p" className="tracking-[-0.32px]">
                    3
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-center mt-[13px] gap-1.5">
                  <Heading as="h5" className="!text-red-700 tracking-[-0.44px]">
                    $0.50
                  </Heading>
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-gray-900 tracking-[-0.44px] !font-barlow !text-[16.1px] line-through"
                  >
                    $1.99
                  </Text>
                </div>
                <div className="flex flex-row justify-between w-full mt-2.5 p-2 border-deep_purple-600 border border-solid rounded-[17px]">
                  <a href="#" className="ml-1.5">
                    <Text
                      as="p"
                      className="!text-deep_purple-600 tracking-[-0.26px] !font-medium"
                    >
                      Add to cart
                    </Text>
                  </a>
                  <Img
                    src="images/img_i_klb_icon_plus.svg"
                    alt="add_to_cart"
                    className="h-[16px] mr-0.5"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-[80%] md:w-full gap-1">
              <Button
                color="gray_100"
                className="tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
              >
                84
              </Button>
              <Button
                color="gray_100"
                className="tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
              >
                06
              </Button>
              <div className="flex flex-row justify-start w-[81%]">
                <div className="flex flex-col items-end justify-start w-full">
                  <div className="flex flex-row justify-start w-full">
                    <Button
                      color="gray_100"
                      className="tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
                    >
                      59
                    </Button>
                  </div>
                  <div className="flex flex-row justify-end items-center w-[87%] md:w-full mt-[-26px]">
                    <Text
                      size="2xl"
                      as="p"
                      className="!text-black-900 tracking-[-0.32px] !font-normal"
                    >
                      :
                    </Text>
                    <Button
                      color="gray_100"
                      className="ml-2 tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
                    >
                      59
                    </Button>
                    <Text
                      size="s"
                      as="p"
                      className="ml-4 !text-blue_gray-300 tracking-[-0.32px]"
                    >
                      Remains until the end of the offer
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full p-5 border-gray-200 border-t border-solid">
          <div className="flex flex-col items-start justify-start w-full gap-2.5">
            <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-5 sm:gap-5">
              <div className="h-[185px] w-[185px] mt-[5px] sm:mt-0 relative">
                <div className="justify-center h-[170px] w-[170px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Img
                    src="images/img_link_1_34_500x500_jpg.png"
                    alt="link1thirtyfour"
                    className="justify-center h-[170px] w-[170px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_link_black_900_02.svg"
                    alt="link_one"
                    className="h-[14px] w-[15%] bottom-[2%] right-[2%] m-auto rounded-[50%] absolute"
                  />
                </div>
                <Button
                  color="red_700"
                  shape="round"
                  className="left-0 top-[2%] m-auto !rounded-tr-[50%] !rounded-br-[50%] tracking-[-0.32px] uppercase font-extrabold min-w-[37px] absolute"
                >
                  14%
                </Button>
                <Button
                  variant="gradient"
                  color="light_blue_100_light_blue_50"
                  leftIcon={<Img src="images/img_svg_cyan_700.svg" alt="SVG" />}
                  className="gap-[5px] bottom-0 left-0 rounded-2xl m-auto tracking-[-0.32px] uppercase font-extrabold min-w-[88px] absolute"
                >
                  Cold Sale
                </Button>
                <Button
                  size="md"
                  shape="circle"
                  className="w-[32px] right-0 top-0 m-auto absolute"
                >
                  <Img src="images/img_link.svg" />
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-[48%] sm:w-full gap-[11px]">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-[97%] gap-1.5">
                    <a href="#">
                      <Text
                        size="xl"
                        as="p"
                        className="!text-black-900 tracking-[-0.28px]"
                      >
                        <>
                          USDA Choice Angus Beef T-
                          <br />
                          Bone Steak – 0.70-1.50 lbs …
                        </>
                      </Text>
                    </a>
                    <div className="flex flex-row justify-start items-center gap-[7px]">
                      {renderStars(3)}
                      <Text size="md" as="p" className="tracking-[-0.32px]">
                        3
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-1.5">
                  <Heading as="h5" className="!text-red-700 tracking-[-0.44px]">
                    $12.89
                  </Heading>
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-gray-900 tracking-[-0.44px] !font-barlow !text-[16.1px] line-through"
                  >
                    $14.89
                  </Text>
                </div>
                <Button
                  color="deep_purple_600"
                  size="lg"
                  variant="outline"
                  rightIcon={
                    <Img
                      src="images/img_i_klb_icon_plus.svg"
                      alt="i.klb-icon-plus"
                    />
                  }
                  className="w-full gap-[35px] tracking-[-0.26px] font-medium rounded-[17px]"
                >
                  Add to cart
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-start w-[80%] md:w-full gap-1">
              <Button
                color="gray_100"
                className="tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
              >
                46
              </Button>
              <Button
                color="gray_100"
                className="tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
              >
                06
              </Button>
              <div className="flex flex-row justify-start w-[81%]">
                <div className="flex flex-col items-end justify-start w-full">
                  <div className="flex flex-row justify-start w-full">
                    <Button
                      color="gray_100"
                      className="tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
                    >
                      59
                    </Button>
                  </div>
                  <div className="flex flex-row justify-end items-center w-[87%] md:w-full mt-[-26px]">
                    <Text
                      size="2xl"
                      as="p"
                      className="!text-black-900 tracking-[-0.32px] !font-normal"
                    >
                      :
                    </Text>
                    <Button
                      color="gray_100"
                      className="ml-2 tracking-[-0.32px] font-semibold border-gray-200 border border-solid min-w-[26px] rounded-md"
                    >
                      59
                    </Button>
                    <Text
                      size="s"
                      as="p"
                      className="ml-4 !text-blue_gray-300 tracking-[-0.32px]"
                    >
                      Remains until the end of the offer
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-[66%] md:w-full p-[33px] sm:p-5 border-red-700 border-4 border-solid rounded-lg">
        <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[5px] gap-[25px] md:gap-5">
          <div className="h-[465px] w-[465px] sm:w-full sm:h-auto relative">
            <Img
              src="images/img_link_1_87_500x500_jpg.png"
              alt="link1eightyseve"
              className="justify-center h-[450px] w-[450px] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <Button
              color="red_700"
              shape="round"
              className="left-0 top-[1%] m-auto !rounded-tr-[50%] !rounded-br-[50%] tracking-[-0.32px] uppercase font-extrabold min-w-[35px] absolute"
            >
              11%
            </Button>
            <Button
              variant="gradient"
              color="light_blue_100_light_blue_50"
              leftIcon={<Img src="images/img_svg_cyan_700.svg" alt="SVG" />}
              className="gap-[5px] bottom-0 left-0 rounded-2xl m-auto tracking-[-0.32px] uppercase font-extrabold min-w-[88px] absolute"
            >
              Cold Sale
            </Button>
            <Button
              size="md"
              shape="circle"
              className="w-[32px] right-0 top-0 m-auto absolute"
            >
              <Img src="images/img_link.svg" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-[41%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row justify-start items-center gap-[7px]">
                {renderStars(3)}
                <Text size="md" as="p" className="tracking-[-0.32px]">
                  3
                </Text>
              </div>
              <a href="#" className="w-[89%] mt-[7px] leading-[26px]">
                <Heading
                  size="4xl"
                  as="h5"
                  className="!text-black-900 tracking-[-0.40px] !font-semibold"
                >
                  <>
                    Great Value Rising Crust Frozen
                    <br />
                    Pizza, Supreme
                  </>
                </Heading>
              </a>
              <div className="flex flex-row justify-start items-center mt-3.5 gap-1.5">
                <Heading
                  size="7xl"
                  as="h2"
                  className="!text-red-700 tracking-[-0.64px]"
                >
                  $8.99
                </Heading>
                <Text
                  size="4xl"
                  as="p"
                  className="!text-gray-900 tracking-[-0.64px] !font-barlow !text-[23.4px] line-through"
                >
                  $9.99
                </Text>
              </div>
              <Text
                as="p"
                className="  mt-[5px] !text-blue_gray-700 tracking-[-0.32px] !leading-[19px]"
              >
                <>
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent Vivamus adipiscing nisl ut dolor dignissim
                  semper.
                </>
              </Text>
              <div className="flex flex-row justify-start w-full mt-[19px] border-gray-200 border-t border-solid">
                <div className="flex flex-col items-start justify-start w-full mt-5 gap-[7px]">
                  <Text
                    size="s"
                    as="p"
                    className="!text-blue_gray-300 tracking-[-0.32px]"
                  >
                    This product is about to run out
                  </Text>
                  <div class="w-full h-[5px] bg-gradient-to-r from-yellow-400 to-red-600"></div>
                  <div className="flex flex-row justify-start bg-gray-200 rounded-[3px]">
                    <div className="h-[6px] w-full bg-gradient4 rounded-[3px]" />
                  </div>
                  <div className="flex flex-row justify-start items-center gap-[5px]">
                    <Text
                      size="md"
                      as="p"
                      className="tracking-[-0.32px] text-center"
                    >
                      available only:
                    </Text>
                    <Heading
                      size="2xl"
                      as="h6"
                      className="!text-black-900 tracking-[-1.00px] text-center"
                    >
                      18
                    </Heading>
                  </div>
                </div>
              </div>
              <Button
                color="green_700"
                size="3xl"
                leftIcon={<Img src="images/img_icon.svg" alt="Icon" />}
                className="w-full mt-5 gap-1.5 sm:pr-5 tracking-[-0.28px] font-bold rounded-lg"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
