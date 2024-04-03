import React from "react";

const sizes = {
  "3xl": "text-lg font-bold",
  "2xl": "text-base font-bold leading-5",
  "5xl": "text-[22px] font-bold",
  "4xl": "text-xl font-bold",
  "7xl": "text-[32px] font-bold leading-[39px]",
  "6xl": "text-[28px] font-bold leading-[34px]",
  "9xl": "text-[130px] font-bold leading-[158px]",
  "8xl": "text-5xl font-bold leading-[62px]",
  xl: "text-[15px] font-semibold leading-[19px]",
  s: "text-[11px] font-bold",
  md: "text-xs font-semibold",
  xs: "text-[10px] font-semibold leading-[13px]",
  lg: "text-sm font-semibold leading-[17px]",
};

const Heading = ({ children, className = "", size = "5xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-barlow ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
