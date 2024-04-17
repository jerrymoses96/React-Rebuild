import React from "react";
import { FooterTop } from "./FooterTop";
import { FooterMid } from "./FooterMid";
import { FooterBottom } from "./FooterBottom";

export function Footer() {
  return (
    <footer className="flex justify-center items-center w-full mt-[60px] pt-12 px-12 md:pt-5 md:px-5 bg-gray-100">
      <div className="flex flex-row justify-center w-full mx-auto max-w-[1360px]">
        <div className="flex flex-col justify-center w-full">
          {/* footer top  */}
          <FooterTop />
          {/* footer Mid */}
          <FooterMid />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
