import React from "react";
import { Text, Heading } from "../..";
import "../../../styles/index.css";

export function HeaderTop() {
  return (
    <div className="w-[100%] bg-deep_purple-600">
      <div className="wrapper flex flex-row md:flex-col justify-center  w-full gap-[194px] p-[9px] md:gap-10">
        <Heading
          size="md"
          as="p"
          className="mt-px md:mt-0 !text-white-A700 tracking-[-0.32px] text-center"
        >
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </Heading>
        <div className="flex flex-row sm:flex-col justify-center items-center md:w-full sm:gap-5">
          <Text
            size="md"
            as="p"
            className="!text-white-A700_99 tracking-[-0.32px] !font-medium opacity-0.7"
          >
            Until the end of the sale:
          </Text>
          <Heading
            size="3xl"
            as="h6"
            className="h-[22px] ml-[13px] sm:ml-0 !text-white-A700 tracking-[-0.32px] flex justify-center items-center"
          >
            47
          </Heading>
          <Text
            size="s"
            as="p"
            className="ml-1 sm:ml-0 !text-white-A700_99 tracking-[-0.32px] opacity-0.7"
          >
            days
          </Text>
          <Heading
            size="3xl"
            as="h6"
            className="h-[22px] ml-[7px] sm:ml-0 !text-white-A700 tracking-[-0.32px] flex justify-center items-center"
          >
            06
          </Heading>
          <Text
            size="s"
            as="p"
            className="ml-[3px] sm:ml-0 !text-white-A700_99 tracking-[-0.32px] opacity-0.7"
          >
            hours
          </Text>
          <Heading
            size="3xl"
            as="h6"
            className="h-[22px] ml-[7px] sm:ml-0 !text-white-A700 tracking-[-0.32px] flex justify-center items-center"
          >
            59
          </Heading>
          <Text
            size="s"
            as="p"
            className="ml-[3px] sm:ml-0 !text-white-A700_99 tracking-[-0.32px] opacity-0.7"
          >
            minutes
          </Text>
          <Heading
            size="3xl"
            as="h6"
            className="h-[22px] ml-[7px] sm:ml-0 !text-white-A700 tracking-[-0.32px] flex justify-center items-center"
          >
            59
          </Heading>
          <Text
            size="s"
            as="p"
            className="ml-[3px] sm:ml-0 !text-white-A700_99 tracking-[-0.32px] opacity-0.7"
          >
            sec.
          </Text>
        </div>
      </div>
    </div>
  );
}
