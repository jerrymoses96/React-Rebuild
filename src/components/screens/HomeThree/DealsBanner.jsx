import React from "react";
import { Heading, Img, Text } from "../..";

export function DealsBanner() {
  return (
    <div className="flex gap-5 justify-between mt-10 lg:flex-wrap md:flex-col md:w-full  ">
      <div className="flex gap-4 w-1/4 md:w-full md:justify-center items-center">
        <div>
          <Img
            src="images/img_svg_white_a700.svg"
            alt="payment_only"
            className="w-[60px] max-w-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold tracking-[-0.32px]">Payment only online</h3>
          <p className="text-xs text-[#6B7280]">
            Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
          </p>
        </div>
      </div>
      <div className="flex w-1/4 md:w-full md:justify-center gap-4 items-center">
        <div>
          <Img
            src="images/img_svg_black_900_02.svg"
            alt="svg_one"
            className="w-[60px] max-w-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold tracking-[-0.32px]">Payment only online</h3>
          <p className="text-xs text-[#6B7280]">
            Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
          </p>
        </div>
      </div>
      <div className="flex w-1/4 md:w-full md:justify-center gap-4 items-center">
        <div>
          <Img
            src="images/img_svg_deep_purple_600.svg"
            alt="svg_one"
            className=" w-[60px] max-w-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold tracking-[-0.32px]">Payment only online</h3>
          <p className="text-xs text-[#6B7280]">
            Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
          </p>
        </div>
      </div>
      <div className="flex w-1/4 md:w-full md:justify-center gap-4 items-center">
        <div>
          <Img
            src="images/img_svg_white_a700_57x57.svg"
            alt="svg_one"
            className=" w-[60px] max-w-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold tracking-[-0.32px]">Payment only online</h3>
          <p className="text-xs text-[#6B7280]">
            Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.
          </p>
        </div>
      </div>
    </div>
  );
}
