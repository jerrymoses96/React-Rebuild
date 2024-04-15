import React from "react";
import { Heading, Img, Text } from "../..";

export function DealsBanner() {
  return (
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
                <Text as="p" className="tracking-[-0.32px] !leading-[18px]">
                  <>
                    Tasigförsamhet beteendedesign. Mobile checkout. Ylig
                    kärrtorpa.
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
                <Text as="p" className="tracking-[-0.32px] !leading-[18px]">
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
                <Text as="p" className="tracking-[-0.32px] !leading-[18px]">
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
          <Text as="p" className="tracking-[-0.32px] !leading-[18px]">
            <>
              Tasigförsamhet beteendedesign. Mobile
              <br />
              checkout. Ylig kärrtorpa.
            </>
          </Text>
        </div>
      </div>
    </div>
  );
}
