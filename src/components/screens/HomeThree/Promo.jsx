import React from "react";

export function Promo() {
  return (
    <div className="h-[85px] tablet:h-[100px] mobileM:h-[150px]  w-full mt-7 px-[31px]  flex items-center text-center bg-[#FFF7ED] border border-[#FFEDD5] overflow-hidden relative z-10 ">
      <div className="z-20 md:w-full md:flex md:flex-col md:items-center ">
        <h4 className="text-[#EA580C] font-bold text-xl">
          In store or online your health & safety is our top priority
        </h4>
        <p className="text-xs ">
          The only supermarket that makes your life easier, makes you enjoy life
          and makes it better
        </p>
      </div>
      <p className="font-bold text-[110px] lg:hidden absolute top-[-40px] left-[519px] bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-transparent">
        %50
      </p>

      <div className="banner  ml-56 h-[85px] md:hidden"></div>
    </div>
  );
}
