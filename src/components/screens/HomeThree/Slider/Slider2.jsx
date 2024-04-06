import React from "react";
import { Img, Slider } from "../../..";

export function Slider2(props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center wrapper md:gap-10 md:pr-5 relative">
      <Slider
        autoPlay
        autoPlayInterval={2000}
        responsive={{
          0: {
            items: 1,
          },
          550: {
            items: 1,
          },
          1050: {
            items: 1,
          },
        }}
        disableDotsControls
        activeIndex={props.sliderState1}
        onSlideChanged={(e) => props.setSliderState1(e?.item)}
        ref={props.sliderRef1}
        className="w-full relative"
        items={[
          <div key="slider_content" className="relative">
            <div className="absolute top-[50%] left-14 transform -translate-y-1/2 w-[50%]">
              <p
                className="text-lg font-bold rounded-xl px-2 py-1 w-[200px] mb-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(22, 163, 74, 0.5) 0%, rgba(34, 197, 94, 0) 60%)",
                }}
              >
                Weekend Discount
              </p>
              <h2 className="text-4xl font-bold mb-2">
                Get the best quality <br /> products at the lowest <br /> prices
              </h2>
              <p className="">
                We have prepared special discounts for you on organic breakfast
              </p>

              <p>products.</p>
              <div className="flex gap-3 items-center mt-4">
                <button className="bg-[#634C9F] w-[130px] h-[40px] rounded-xl mt-2 text-[#FFFFFF]">
                  Shop Now
                </button>
                <div>
                  <div className="flex items-baseline gap-1 ">
                    <p className="text-[#DC2626] text-xl font-bold">$21.67</p>
                    <p className="text-[#111827] font-medium line-through">
                      $59.99
                    </p>
                  </div>
                  <div>
                    <p className="text-[#030712] text-xs">
                      Don't miss this limited time offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_slider_03_jpg.png"
              alt="slider03jpg_one"
              className="md:h-auto mx-auto object-cover rounded-md"
            />
          </div>,
        ]}
      />
      <div className="flex justify-start w-[3%] md:w-full mt-[-10px] gap-[5px] p-[7px] bg-white-A700 rounded-[10px] z-10">
        <div className="h-[7px] w-[7px] bg-deep_purple-600 rounded-[3px]" />
        <div className="h-[7px] w-[7px] bg-gray-200 rounded-[3px]" />
      </div>
    </div>
  );
}
