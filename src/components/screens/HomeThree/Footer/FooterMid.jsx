import React from "react";
import { Button, Heading, Img, Text } from "../../..";

export function FooterMid() {
  return (
    <div className="flex flex-row md:flex-col justify-start w-full mt-[55px] gap-[30px] py-[50px] md:gap-5 md:py-5 border-blue_gray-100 border-t border-solid">
      <div className="flex flex-row justify-start w-[24%] md:w-full">
        <div className="flex flex-col items-start justify-start w-[100%] mb-[26px]">
          <Heading size="lg" as="p" className="tracking-[-0.28px]">
            Do You Need Help ?
          </Heading>
          <Text as="p" className="mt-5 tracking-[-0.32px] !leading-[19px]">
            <>
              Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
              Pressa fåmoska.
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
                <Heading size="lg" as="p" className="tracking-[-0.32px]">
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
        <div className="flex flex-col items-start justify-start gap-[21px]">
          <Heading size="lg" as="p" className="tracking-[-0.28px]">
            Let Us Help You
          </Heading>
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
              <Heading size="lg" as="p" className="tracking-[-0.28px]">
                Download our app
              </Heading>
              <div className="flex flex-row justify-start items-center mt-[18px] gap-[15px]">
                <Img
                  src="images/img_link_google_p.png"
                  alt="linkgooglep_one"
                  className="w-[55%] md:h-auto sm:w-full object-cover"
                />
                <Text size="xs" as="p" className="w-[39%] tracking-[-0.32px]">
                  <>Download App Get -10% Discount</>
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center mt-2.5 gap-[15px]">
                <Img
                  src="images/img_link_apple_st.png"
                  alt="linkapplest_one"
                  className="w-[55%] md:h-auto sm:w-full object-cover"
                />
                <Text size="xs" as="p" className="w-[39%] tracking-[-0.32px]">
                  <>Download App Get -20% Discount</>
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[72%] md:w-full mt-[50px]">
                <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                  <p className="font-semibold text-xs w-[151px]">
                    Follow us on social media:
                  </p>
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
  );
}
