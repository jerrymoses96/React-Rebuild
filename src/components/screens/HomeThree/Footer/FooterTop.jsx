import React from "react";
import { Button, Heading, Img, Input, Text } from "../../..";

export function FooterTop() {
  return (
    <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
      <div className="flex flex-col items-center justify-start w-[23%] md:w-full gap-[9px]">
        <Heading size="4xl" as="h5" className="tracking-[-0.40px]">
          Join our newsletter for £10 offs
        </Heading>
        <Text as="p" className="tracking-[-0.32px] !leading-[19px]">
          <>
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
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
  );
}
