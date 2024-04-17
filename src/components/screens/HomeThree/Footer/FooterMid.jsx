import React from "react";
import { Button, Heading, Img, Text } from "../../..";

export function FooterMid() {
  return (
    <div className="border-blue_gray-100 flex justify-between lg:flex-col lg:gap-10  border-t border-solid mt-[55px] py-[50px]">
      {/* 1st col  */}
      <div className="w-1/5 lg:w-full flex flex-col gap-5 ">
        <h3 className="text-sm font-semibold">Do You Need Help ?</h3>
        <p className="text-[#6B7280] text-xs">
          Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
          Pressa fåmoska.
        </p>
        <div className="flex gap-5 items-center">
          <Img
            src="images/img_list_item.svg"
            alt="listitem_one"
            className="h-[28px] w-[28px]"
          />
          <div>
            <p className="text-[#111827] text-xs mb-1">
              Monday-Friday: 08am-9pm
            </p>
            <p className="text-xl font-bold">0 800 300-353</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Img
            src="images/img_list_item_gray_900.svg"
            alt="listitem_three"
            className="h-[28px] w-[28px]"
          />
          <div>
            <p className="text-[#111827] text-xs mb-1">
              Need help with your order?
            </p>
            <p className="text-sm font-semibold">info@example.com</p>
          </div>
        </div>
      </div>
      {/* 2nd col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Make Money with Us</p>
        <ul className="flex flex-col items-start justify-start w-full gap-2">
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Sell on Grogin
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Sell Your Services on Grogin
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Sell on Grogin Business
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Sell Your Apps on Grogin
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Become an Affilate
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Advertise Your Products
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Sell-Publish with Us
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Become an Blowwe Vendor
              </Text>
            </a>
          </li>
        </ul>
      </div>
      {/* 3 rd col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Let Us Help You</p>
        <ul className="flex flex-col items-start justify-start w-full gap-2">
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Accessibility Statement
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Your Orders
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Returns & Replacements
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Shipping Rates & Policies
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Refund and Returns Policy
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Privacy Policy
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Terms and Conditions
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Cookie Settings
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Help Center
              </Text>
            </a>
          </li>
        </ul>
      </div>
      {/* 4 th col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Get to Know Us</p>
        <ul className="flex flex-col items-start justify-start mb-[35px] gap-2">
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Careers for Grogin
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                About Grogin
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Inverstor Relations
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Grogin Devices
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Customer reviews
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Social Responsibility
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text as="p" className="!text-blue_gray-700 tracking-[-0.32px]">
                Store Locations
              </Text>
            </a>
          </li>
        </ul>
      </div>
      {/* 5th col  */}
      <div className="w-1/5 lg:w-full">
        <p className="mb-5 font-semibold text-sm">Download our app</p>
        <div className="flex items-center gap-5 mb-2">
          <Img
            src="images/img_link_google_p.png"
            alt="linkgooglep_one"
            className="w-[55%] lg:w-[15%] sm:w-[20%] mobileM:w-[35%]"
          />
          <p className="text-[#6B7280] text-xs">
            Download App Get -10% Discount
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Img
            src="images/img_link_apple_st.png"
            alt="linkapplest_one"
            className="w-[55%] lg:w-[15%] sm:w-[20%] mobileM:w-[35%]"
          />
          <p className="text-[#6B7280] text-xs">
            Download App Get -20% Discount
          </p>
        </div>
        <div className="mt-10">
          <p className="text-sm font-semibold">Follow us on social media:</p>
          <div className="flex flex-row justify-start gap-1">
            <Button size="xl" className="w-[36px]  rounded-md ">
              <Img className="mt-2" src="images/img_list_item_link.svg" />
            </Button>
            <Button size="xl" className="w-[36px] rounded-md">
              <Img
                className="mt-2"
                src="images/img_list_item_link_blue_500.svg"
              />
            </Button>
            <Button size="xl" className="w-[36px] rounded-md">
              <Img
                className="mt-2"
                src="images/img_list_item_link_red_a400.svg"
              />
            </Button>
            <Button size="xl" className="w-[36px] rounded-md">
              <Img
                className="mt-2"
                src="images/img_list_item_link_light_blue_800.svg"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
