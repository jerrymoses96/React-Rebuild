import React from "react";
import { Button, Heading, Img, Text } from "../..";

export function CategoriesHead() {
  return (
    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-5 sm:mt-5">
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
