import React from "react";

const sizes = {
  xs: "text-[10px] font-medium leading-[15px]",
  lg: "text-[13px] font-normal leading-4",
  s: "text-[11px] font-normal",
  "2xl": "text-base font-medium leading-5",
  "3xl": "text-[19px] font-medium leading-6",
  "4xl": "text-[23px] font-medium leading-[29px]",
  xl: "text-sm font-medium leading-[18px]",
  md: "text-xs font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
