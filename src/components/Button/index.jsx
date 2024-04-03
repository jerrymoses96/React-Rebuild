import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-tl-[14px] rounded-tr-[40px] rounded-bl-[14px] rounded-br-[40px]",
  circle: "rounded-[50%]",
};
const variants = {
  gradient: {
    green_700_7f_green_A700_00: "bg-gradient text-green-900",
    light_blue_100_light_blue_50: "bg-gradient1 text-cyan-700",
    lime_300_green_200: "bg-gradient2 text-green-900",
  },
  outline: {
    deep_purple_600: "border-deep_purple-600 border border-solid text-deep_purple-600",
  },
  fill: {
    green_700: "bg-green-700 text-white-A700",
    gray_100: "bg-gray-100 text-blue_gray-700",
    white_A700: "bg-white-A700 text-black-900_01",
    deep_purple_600: "bg-deep_purple-600 text-white-A700",
    red_700: "bg-red-700 text-red-50",
  },
};
const sizes = {
  sm: "h-[28px] px-2 text-xs",
  "2xl": "h-[42px] px-[18px] text-sm",
  "3xl": "h-[46px] pl-[18px] pr-[35px] text-sm",
  "4xl": "h-[50px] px-[17px] text-sm",
  xl: "h-[36px] px-2.5",
  lg: "h-[34px] px-[11px] text-xs",
  md: "h-[32px] px-px",
  xs: "h-[24px] px-2 text-[10px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["sm", "2xl", "3xl", "4xl", "xl", "lg", "md", "xs"]),
  variant: PropTypes.oneOf(["gradient", "outline", "fill"]),
  color: PropTypes.oneOf([
    "green_700_7f_green_A700_00",
    "light_blue_100_light_blue_50",
    "lime_300_green_200",
    "deep_purple_600",
    "green_700",
    "gray_100",
    "white_A700",
    "red_700",
  ]),
};

export { Button };
