import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Input, RatingBar, Text } from "../..";
import data from "../../../components/general/data.json";
import data2 from "../../../components/general/data2.json";
import data3 from "../../../components/general/data3.json";
import renderStars from "../../helpers/RenderStars";
import { BannerImage1 } from "./BannerImage1";
import { Categories } from "./Categories";
import { Header } from "./Header/Header";
import ProductCard from "./ProductCard";
import ProductCard3 from "./ProductCard3";
import ProductCard2 from "./Productcard2";
import { Promo } from "./Promo";
import { Slider2 } from "./Slider/Slider2";

export default function HomeThreePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Grogin</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        {/* header  */}
        <Header
          searchBarValue1={searchBarValue1}
          setSearchBarValue1={setSearchBarValue1}
        />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row justify-end w-full py-3.5 mx-auto md:px-5 max-w-[10689px]">
            <div className="flex flex-col items-center justify-start w-full mt-[9px] gap-2">
              {/* slider  */}
              <Slider2
                sliderState1={sliderState1}
                setSliderState1={setSliderState1}
                sliderRef1={sliderRef1}
              />

              <div className="flex flex-col items-center justify-start wrapper md:w-full">
                {/* top categories  */}
                <div className="flex flex-col items-center justify-start w-full gap-5">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                    <div className="flex flex-row justify-start items-baseline gap-[15px]">
                      <Heading
                        size="3xl"
                        as="h3"
                        className="!text-black-900 tracking-[-0.36px]"
                      >
                        Top Categories
                      </Heading>
                      <Text
                        as="p"
                        className="!text-blue_gray-300 tracking-[-0.32px]"
                      >
                        New products with updated stocks.
                      </Text>
                    </div>
                    <Button
                      size="lg"
                      rightIcon={
                        <Img
                          src="images/img_iklbiconmoveright_gray_900_02.svg"
                          alt="i.klb-icon-move-right"
                        />
                      }
                      className="gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[97px] rounded-[17px]"
                    >
                      View All
                    </Button>
                  </div>

                  {/* categories rebuild */}

                  <Categories />
                </div>

                {/* promo */}

                <Promo />

                <div className="flex flex-row sm:flex-col justify-between items-center w-full mt-[26px] sm:gap-10">
                  <div className="flex flex-row sm:flex-col justify-start items-center gap-[15px] sm:gap-5">
                    <Heading
                      size="3xl"
                      as="h6"
                      className="!text-black-900 tracking-[-0.36px]"
                    >
                      NEW PRODUCTS
                    </Heading>
                    <Text
                      as="p"
                      className="!text-blue_gray-300 tracking-[-0.32px]"
                    >
                      Some of the new products arriving this weeks
                    </Text>
                  </div>
                  <Button
                    size="lg"
                    rightIcon={
                      <Img
                        src="images/img_iklbiconmoveright_gray_900_02.svg"
                        alt="i.klb-icon-move-right"
                      />
                    }
                    className="gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[97px] rounded-[17px]"
                  >
                    View All
                  </Button>
                </div>
                {/* new produts slider  */}

                <div className="border border-[#E5E7EB] rounded-lg mt-5 w-full ">
                  <div className="flex">
                    {/* product cards */}
                    {data.map((item) => {
                      return (
                        <ProductCard
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          price={item.price}
                          discount_price={item.discount_price}
                          average_rating={item.average_rating}
                          available={item.available}
                          cold_sale={item.cold_sale}
                          organic={item.organic}
                          discount={item.discount}
                          image_url={item.image_url}
                        />
                      );
                    })}
                  </div>
                </div>

                {/*BANNER IMAGES 1 */}

                <BannerImage1 />

                {/* new arrivals  */}

                <div className="flex flex-row sm:flex-col justify-between items-center w-full mt-[26px] sm:gap-10">
                  <div className="flex flex-row sm:flex-col justify-start items-center gap-[15px] sm:gap-5">
                    <Heading
                      size="3xl"
                      as="h6"
                      className="!text-black-900 tracking-[-0.36px]"
                    >
                      New Arrivals
                    </Heading>
                    <Text
                      as="p"
                      className="!text-blue_gray-300 tracking-[-0.32px]"
                    >
                      Do not miss the current offers until the end of month.
                    </Text>
                  </div>
                  <Button
                    size="lg"
                    rightIcon={
                      <Img
                        src="images/img_iklbiconmoveright_gray_900_02.svg"
                        alt="i.klb-icon-move-right"
                      />
                    }
                    className="gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[97px] rounded-[17px]"
                  >
                    View All
                  </Button>
                </div>
                {/* new arrivals slider */}
                <div className="flex mt-7 ">
                  {/* review section  */}
                  <div className="border border-[#E5E7EB] rounded-lg  ">
                    <div className="flex items-center gap-5 border-b border-[#E5E7EB] p-5 ">
                      <img
                        className="rounded-lg"
                        src="images\person.png"
                        alt=""
                      />
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
                  <div className="flex w-full border rounded-lg border-[#E5E7EB]">
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
                      <Heading
                        size="6xl"
                        as="h3"
                        className="mt-[17px] tracking-[-1.12px]"
                      >
                        Provides you the quality
                      </Heading>
                      <Heading
                        size="6xl"
                        as="h3"
                        className="mt-px tracking-[-1.12px]"
                      >
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
                      <Heading
                        size="6xl"
                        as="h3"
                        className="mt-[17px] tracking-[-1.12px]"
                      >
                        Grocery store at the
                      </Heading>
                      <Heading
                        size="6xl"
                        as="h3"
                        className="tracking-[-1.12px]"
                      >
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

                <div className="flex flex-col items-center justify-start w-full mt-[26px] gap-5">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                    <div className="flex flex-row sm:flex-col justify-start items-center gap-[15px] sm:gap-5">
                      <Heading
                        size="3xl"
                        as="h6"
                        className="!text-black-900 tracking-[-0.36px]"
                      >
                        Featured Products
                      </Heading>
                      <Text
                        as="p"
                        className="!text-blue_gray-300 tracking-[-0.32px]"
                      >
                        Do not miss the current offers until the end of month.
                      </Text>
                    </div>
                    <Button
                      size="lg"
                      rightIcon={
                        <Img
                          src="images/img_iklbiconmoveright_gray_900_02.svg"
                          alt="i.klb-icon-move-right"
                        />
                      }
                      className="gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[97px] rounded-[17px]"
                    >
                      View All
                    </Button>
                  </div>

                  {/* featured products  */}

                  <div className="border border-[#E5E7EB] rounded-lg flex justify-start">
                    {/* image div  */}

                    <div className="h-[364px] w-80 rounded-lg border-gray-200 border-r border-solid relative">
                      <div className="absolute top-5 left-5 z-10 flex flex-col  gap-2">
                        <p className=" text-red-700 tracking-[-0.24px] ">
                          Only This Week
                        </p>
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
                        className="justify-center h-[364px] rounded-lg w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                    </div>
                    <div className="flex flex-row md:flex-col w-full">
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
                
                </div>

                {/* 3 banner images  */}

                <div className="flex flex-row md:flex-col w-full mt-9 gap-[30px]">
                  <div className="h-[220px] w-[32%] md:w-full relative">
                    <Img
                      src="images/img_banner_17_jpg.png"
                      alt="only_this_week"
                      className="justify-center h-[220px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-md"
                    />
                    <div className="flex flex-col items-start justify-start w-[37%] h-max left-[5%] bottom-0 top-0 m-auto absolute">
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
                <div className="flex flex-row sm:flex-col justify-between items-center w-full mt-[26px] sm:gap-10">
                  <div className="flex flex-row sm:flex-col justify-start items-center gap-[15px] sm:gap-5">
                    <Heading
                      size="3xl"
                      as="h6"
                      className="!text-black-900 tracking-[-0.36px]"
                    >
                      Deals Of The Day
                    </Heading>
                    <Text
                      as="p"
                      className="!text-blue_gray-300 tracking-[-0.32px]"
                    >
                      The freshest greengrocer products are waiting for you
                    </Text>
                  </div>
                  <Button
                    size="lg"
                    rightIcon={
                      <Img
                        src="images/img_iklbiconmoveright_gray_900_02.svg"
                        alt="i.klb-icon-move-right"
                      />
                    }
                    className="gap-[5px] !text-gray-900_02 tracking-[-0.24px] font-bold border-gray-200 border border-solid min-w-[97px] rounded-[17px]"
                  >
                    View All
                  </Button>
                </div>
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
                              shape="round"
                              color="lime_300_green_200"
                              leftIcon={
                                <Img src="images/img_svg.svg" alt="SVG" />
                              }
                              className="gap-[5px] bottom-0 left-0 m-auto !rounded-tr-[50%] !rounded-br-[50%] tracking-[-0.32px] uppercase font-extrabold min-w-[80px] absolute"
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
                              <RatingBar
                                value={2}
                                isEditable={true}
                                size={11}
                                starCount={2}
                                className="flex justify-between w-[66px]"
                              />
                              <Text
                                size="md"
                                as="p"
                                className="tracking-[-0.32px]"
                              >
                                3
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start items-center mt-[13px] gap-1.5">
                              <Heading
                                as="h5"
                                className="!text-red-700 tracking-[-0.44px]"
                              >
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
                              shape="round"
                              color="light_blue_100_light_blue_50"
                              leftIcon={
                                <Img
                                  src="images/img_svg_cyan_700.svg"
                                  alt="SVG"
                                />
                              }
                              className="gap-[5px] bottom-0 left-0 m-auto tracking-[-0.32px] uppercase font-extrabold min-w-[88px] absolute"
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
                                  <RatingBar
                                    value={2}
                                    isEditable={true}
                                    size={11}
                                    starCount={2}
                                    className="flex justify-between w-[66px]"
                                  />
                                  <Text
                                    size="md"
                                    as="p"
                                    className="tracking-[-0.32px]"
                                  >
                                    3
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row justify-start items-center gap-1.5">
                              <Heading
                                as="h5"
                                className="!text-red-700 tracking-[-0.44px]"
                              >
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
                          shape="round"
                          color="light_blue_100_light_blue_50"
                          leftIcon={
                            <Img src="images/img_svg_cyan_700.svg" alt="SVG" />
                          }
                          className="gap-[5px] bottom-0 left-0 m-auto tracking-[-0.32px] uppercase font-extrabold min-w-[88px] absolute"
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
                            <RatingBar
                              value={2}
                              isEditable={true}
                              size={11}
                              starCount={2}
                              className="flex justify-between w-[66px]"
                            />
                            <Text
                              size="md"
                              as="p"
                              className="tracking-[-0.32px]"
                            >
                              3
                            </Text>
                          </div>
                          <a
                            href="#"
                            className="w-[89%] mt-[7px] leading-[26px]"
                          >
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
                            className="w-[97%] mt-[5px] !text-blue_gray-700 tracking-[-0.32px] !leading-[19px]"
                          >
                            <>
                              Vivamus adipiscing nisl ut dolor dignissim semper.
                              Nulla
                              <br />
                              luctus malesuada tincidunt. Class aptent taciti
                              sociosqu
                              <br />
                              ad litora torquent Vivamus adipiscing nisl ut
                              dolor
                              <br />
                              dignissim semper.
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
                            leftIcon={
                              <Img src="images/img_icon.svg" alt="Icon" />
                            }
                            className="w-full mt-5 gap-1.5 sm:pr-5 tracking-[-0.28px] font-bold rounded-lg"
                          >
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full mt-10">
                  <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[19px] md:gap-5">
                    <div className="flex flex-row md:flex-col w-[82%] md:w-full gap-9">
                      <div className="flex flex-row justify-center w-[29%] md:w-full">
                        <div className="flex flex-row justify-start items-start w-full gap-5">
                          <Img
                            src="images/img_svg_white_a700.svg"
                            alt="payment_only"
                            className="h-[57px] w-[56px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-1">
                            <Heading
                              size="2xl"
                              as="h6"
                              className="!text-black-900 tracking-[-0.32px]"
                            >
                              Payment only online
                            </Heading>
                            <Text
                              as="p"
                              className="tracking-[-0.32px] !leading-[18px]"
                            >
                              <>
                                Tasigförsamhet beteendedesign. Mobile
                                <br />
                                checkout. Ylig kärrtorpa.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[29%] md:w-full">
                        <div className="flex flex-row justify-start items-start w-full gap-[19px]">
                          <Img
                            src="images/img_svg_black_900_02.svg"
                            alt="svg_one"
                            className="h-[57px] w-[57px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-[5px]">
                            <Heading
                              size="2xl"
                              as="h6"
                              className="!text-black-900 tracking-[-0.32px]"
                            >
                              New stocks and sales
                            </Heading>
                            <Text
                              as="p"
                              className="tracking-[-0.32px] !leading-[18px]"
                            >
                              <>
                                Tasigförsamhet beteendedesign. Mobile
                                <br />
                                checkout. Ylig kärrtorpa.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-[29%] md:w-full">
                        <div className="flex flex-row justify-start items-start w-full gap-5">
                          <Img
                            src="images/img_svg_deep_purple_600.svg"
                            alt="svg_one"
                            className="h-[57px] w-[56px]"
                          />
                          <div className="flex flex-col items-start justify-start w-[76%] gap-1">
                            <Heading
                              size="2xl"
                              as="h6"
                              className="!text-black-900 tracking-[-0.32px]"
                            >
                              Quality assurance
                            </Heading>
                            <Text
                              as="p"
                              className="tracking-[-0.32px] !leading-[18px]"
                            >
                              <>
                                Tasigförsamhet beteendedesign. Mobile
                                <br />
                                checkout. Ylig kärrtorpa.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_svg_white_a700_57x57.svg"
                        alt="svg_one"
                        className="h-[57px] w-[6%] mb-[5px]"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full gap-1">
                      <Heading
                        size="2xl"
                        as="h6"
                        className="!text-black-900 tracking-[-0.32px]"
                      >
                        Delivery from 1 hour
                      </Heading>
                      <Text
                        as="p"
                        className="tracking-[-0.32px] !leading-[18px]"
                      >
                        <>
                          Tasigförsamhet beteendedesign. Mobile
                          <br />
                          checkout. Ylig kärrtorpa.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[60px] pt-12 px-12 md:pt-5 md:px-5 bg-gray-100">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1360px]">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-col items-center justify-start w-[22%] md:w-full gap-[9px]">
                  <Heading size="4xl" as="h5" className="tracking-[-0.40px]">
                    Join our newsletter for £10 offs
                  </Heading>
                  <Text as="p" className="tracking-[-0.32px] !leading-[19px]">
                    <>
                      Register now to get latest updates on promotions &<br />
                      coupons.Don’t worry, we not spam!
                    </>
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-[31%] md:w-full mt-1.5 md:mt-0">
                  <div className="flex flex-col items-center justify-start w-full gap-3">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-row sm:flex-col justify-center items-center w-full sm:gap-5">
                        <Input
                          shape="round"
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          prefix={<Img src="images/img_form.svg" alt="Form" />}
                          className="w-full sm:w-full gap-[5px] border-blue_gray-100 border border-solid"
                        />
                        <Button
                          color="deep_purple_600"
                          size="4xl"
                          className="ml-[-72px] sm:ml-0 rounded-tr-lg rounded-br-lg tracking-[-0.28px] font-bold min-w-[73px]"
                        >
                          SEND
                        </Button>
                      </div>
                    </div>
                    <Text size="s" as="p" className="tracking-[-0.32px]">
                      <span className="text-gray-600">
                        By subscribing you agree to our{" "}
                      </span>
                      <span className="text-deep_purple-600 font-medium">
                        Terms & Conditions and Privacy & Cookies Policy.
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start w-full mt-[55px] gap-[30px] py-[50px] md:gap-5 md:py-5 border-blue_gray-100 border-t border-solid">
                <div className="flex flex-row justify-start w-[24%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[80%] mb-[26px]">
                    <Heading size="lg" as="p" className="tracking-[-0.28px]">
                      Do You Need Help ?
                    </Heading>
                    <Text
                      as="p"
                      className="mt-5 tracking-[-0.32px] !leading-[19px]"
                    >
                      <>
                        Autoseligen syr. Nek diarask fröbomba. Nör
                        <br />
                        antipol kynoda nynat. Pressa fåmoska.
                      </>
                    </Text>
                    <div className="flex flex-row justify-start items-center w-[79%] md:w-full mt-8 gap-[22px]">
                      <div className="flex flex-col items-center justify-start w-[15%] gap-[51px]">
                        <Img
                          src="images/img_list_item.svg"
                          alt="listitem_one"
                          className="h-[28px] w-[28px]"
                        />
                        <Img
                          src="images/img_list_item_gray_900.svg"
                          alt="listitem_three"
                          className="h-[28px] w-[28px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[75%]">
                        <Text
                          size="md"
                          as="p"
                          className="!text-gray-900_90 tracking-[-0.32px] opacity-0.6"
                        >
                          Monday-Friday: 08am-9pm
                        </Text>
                        <Heading
                          size="4xl"
                          as="h5"
                          className="mt-[3px] tracking-[-1.00px]"
                        >
                          0 800 300-353
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="mt-[35px] !text-gray-900_90 tracking-[-0.32px] opacity-0.6"
                        >
                          Need help with your order?
                        </Text>
                        <a href="#" className="mt-1">
                          <Heading
                            size="lg"
                            as="p"
                            className="tracking-[-0.32px]"
                          >
                            info@example.com
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-center w-[75%] md:w-full pl-[15px] md:gap-10">
                  <div className="flex flex-col items-start justify-start gap-[21px]">
                    <Heading size="lg" as="p" className="tracking-[-0.28px]">
                      Make Money with Us
                    </Heading>
                    <ul className="flex flex-col items-start justify-start w-full gap-2">
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Sell on Grogin
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Sell Your Services on Grogin
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Sell on Grogin Business
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Sell Your Apps on Grogin
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Become an Affilate
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Advertise Your Products
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Sell-Publish with Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Become an Blowwe Vendor
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[21px]">
                    <Heading size="lg" as="p" className="tracking-[-0.28px]">
                      Let Us Help You
                    </Heading>
                    <ul className="flex flex-col items-start justify-start w-full gap-2">
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Accessibility Statement
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Your Orders
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Returns & Replacements
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Shipping Rates & Policies
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Refund and Returns Policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Privacy Policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Terms and Conditions
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Cookie Settings
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text
                            as="p"
                            className="!text-blue_gray-700 tracking-[-0.32px]"
                          >
                            Help Center
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-center w-[51%] md:w-full sm:gap-5">
                    <div className="flex flex-col items-start justify-start h-[252px] w-[252px] pb-[15px] gap-[22px] px-[15px]">
                      <Heading size="lg" as="p" className="tracking-[-0.28px]">
                        Get to Know Us
                      </Heading>
                      <ul className="flex flex-col items-start justify-start mb-[35px] gap-2">
                        <li>
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-blue_gray-700 tracking-[-0.32px]"
                            >
                              Careers for Grogin
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-blue_gray-700 tracking-[-0.32px]"
                            >
                              About Grogin
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-blue_gray-700 tracking-[-0.32px]"
                            >
                              Inverstor Relations
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-blue_gray-700 tracking-[-0.32px]"
                            >
                              Grogin Devices
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-blue_gray-700 tracking-[-0.32px]"
                            >
                              Customer reviews
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-blue_gray-700 tracking-[-0.32px]"
                            >
                              Social Responsibility
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text
                              as="p"
                              className="!text-blue_gray-700 tracking-[-0.32px]"
                            >
                              Store Locations
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-row justify-center items-start h-[252px] w-[252px]">
                      <div className="flex flex-col items-start justify-start w-[87%] mb-[15px]">
                        <Heading
                          size="lg"
                          as="p"
                          className="tracking-[-0.28px]"
                        >
                          Download our app
                        </Heading>
                        <div className="flex flex-row justify-start items-center mt-[18px] gap-[15px]">
                          <Img
                            src="images/img_link_google_p.png"
                            alt="linkgooglep_one"
                            className="w-[55%] md:h-auto sm:w-full object-cover"
                          />
                          <Text
                            size="xs"
                            as="p"
                            className="w-[39%] tracking-[-0.32px]"
                          >
                            <>
                              Download App Get
                              <br />
                              -10% Discount
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start items-center mt-2.5 gap-[15px]">
                          <Img
                            src="images/img_link_apple_st.png"
                            alt="linkapplest_one"
                            className="w-[55%] md:h-auto sm:w-full object-cover"
                          />
                          <Text
                            size="xs"
                            as="p"
                            className="w-[39%] tracking-[-0.32px]"
                          >
                            <>
                              Download App Get
                              <br />
                              -20% Discount
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-[72%] md:w-full mt-[50px]">
                          <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                            <Text
                              size="md"
                              as="p"
                              className="!text-gray-900 tracking-[-0.32px]"
                            >
                              Follow us on social media:
                            </Text>
                            <div className="flex flex-row justify-start gap-1">
                              <Button size="xl" className="w-[36px] rounded-md">
                                <Img src="images/img_list_item_link.svg" />
                              </Button>
                              <Button size="xl" className="w-[36px] rounded-md">
                                <Img src="images/img_list_item_link_blue_500.svg" />
                              </Button>
                              <Button size="xl" className="w-[36px] rounded-md">
                                <Img src="images/img_list_item_link_red_a400.svg" />
                              </Button>
                              <Button size="xl" className="w-[36px] rounded-md">
                                <Img src="images/img_list_item_link_light_blue_800.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-center items-start w-full py-[50px] md:gap-5 md:py-5 border-blue_gray-100 border-t border-solid">
                <div className="flex flex-row justify-start w-[50%] md:w-full py-0.5">
                  <div className="flex flex-col items-start justify-start w-[83%] gap-[22px]">
                    <Text
                      size="md"
                      as="p"
                      className="tracking-[-0.32px] !font-medium"
                    >
                      <span className="text-gray-600">
                        Copyright 2024 © Grogin WooCommerce WordPress Theme. All
                        right reserved. Powered by{" "}
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
                    <a href="#" className="mt-0.5">
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
