import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, RatingBar, Text } from "../..";
import data from "../../../components/general/data.json";
import { BannerImage1 } from "./BannerImage1";
import { Categories } from "./Categories";
import { Header } from "./Header/Header";
import { Promo } from "./Promo";
import { Slider2 } from "./Slider/Slider2";
import { Footer } from "./Footer/Footer";
import { DealsOfTheDay } from "./DealsOfTheDay";
import { DealsHead } from "./DealsHead";
import { DealsBanner } from "./DealsBanner";
import { FeaturedBanner } from "./FeaturedBanner";
import { FeaturedProducts } from "./FeaturedProducts";
import { FeaturedHead } from "./FeaturedHead";
import { NewArrivalsBanner } from "./NewArrivalsBanner";
import { NewArrivals } from "./NewArrivals";
import { NewArrivalsHead } from "./NewArrivalsHead";
import { NewProductSlider } from "./NewProductSlider";
import { NewProductsHead } from "./NewProductsHead";

function CategoriesHead() {
  return (
    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
      <div className="flex flex-row justify-start items-baseline gap-[15px]">
        <Heading
          size="3xl"
          as="h3"
          className="!text-black-900 tracking-[-0.36px]"
        >
          Top Categories
        </Heading>
        <Text as="p" className="!text-blue_gray-300 tracking-[-0.32px]">
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
  );
}

export default function HomeThreePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

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
                  <CategoriesHead />

                  {/* categories rebuild */}

                  <Categories />
                </div>

                {/* promo */}

                <Promo />

                <NewProductsHead />

                {/* new produts slider  */}

                <NewProductSlider />

                {/*BANNER IMAGES 1 */}

                <BannerImage1 />

                {/* new arrivals  */}

                <NewArrivalsHead />
                {/* new arrivals slider */}
                <NewArrivals />

                <NewArrivalsBanner />

                <div className="flex flex-col items-center justify-start w-full mt-[26px] gap-5">
                  <FeaturedHead />

                  {/* featured products  */}

                  <FeaturedProducts />
                </div>

                {/* featured banner images  */}

                <FeaturedBanner />

                {/* deals of the day  */}

                <DealsHead />

                <DealsOfTheDay />

                <DealsBanner />
              </div>
            </div>
          </div>
        </div>
        {/* footer  */}
        <Footer />
      </div>
    </>
  );
}
