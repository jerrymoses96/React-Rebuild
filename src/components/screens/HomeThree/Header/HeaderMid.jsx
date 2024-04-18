import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Text } from "../../..";
import "../../../../styles/index.css";

export function HeaderMid() {
  return (
    <div className="wrapper flex tablet:hidden flex-row justify-center py-3 border-gray-200 border-b border-solid bg-white-A700">
      <div className="flex flex-row  md:flex-col justify-between items-center w-full md:gap-5 md:px-5 max-w-[1360px]">
        <div className="flex flex-row  justify-start gap-3.5 sm:gap-5">
          <a href="#">
            <Text size="md" as="p" className="tracking-[-0.32px] !font-medium">
              About Us
            </Text>
          </a>
          <a href="#">
            <Text size="md" as="p" className="tracking-[-0.32px] !font-medium">
              My account
            </Text>
          </a>
          <a href="#">
            <Text size="md" as="p" className="tracking-[-0.32px] !font-medium">
              Wishlist
            </Text>
          </a>
          <Text
            size="md"
            as="p"
            className="pl-[15px] tracking-[-0.32px] border-gray-200 border-l border-solid"
          >
            <span className="text-gray-600">
              We deliver to you every day from{" "}
            </span>
            <span className="text-orange-900 font-bold">7:00 to 23:00</span>
          </Text>
        </div>
        <div className="flex flex-row justify-center items-center">
          <a href="#" className="mt-px">
            <Text size="md" as="p" className="tracking-[-0.32px] !font-medium">
              English
            </Text>
          </a>
          <MdOutlineKeyboardArrowDown />

          <a href="#" className="ml-[15px]">
            <Text size="md" as="p" className="tracking-[-0.32px] !font-medium">
              USD
            </Text>
          </a>
          <MdOutlineKeyboardArrowDown />

          <a href="#" className="mt-px ml-[15px]">
            <Text size="md" as="p" className="tracking-[-0.32px] !font-medium">
              Order Tracking
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
