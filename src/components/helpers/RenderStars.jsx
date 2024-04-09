import React from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <IoMdStar
          size={14}
          key={i}
          className="text-yellow-500"
          style={{ marginRight: "-4px" }} // Adjust the margin between stars
        />
      );
    } else if (i - rating <= 0.5) {
      stars.push(
        <IoMdStarHalf
          size={14}
          key={i}
          className="text-yellow-500"
          style={{ marginRight: "-4px" }} // Adjust the margin between stars
        />
      );
    } else {
      stars.push(
        <IoMdStar
          size={14}
          key={i}
          className="text-gray-400"
          style={{ marginRight: "-4px" }} // Adjust the margin between stars
        />
      );
    }
  }
  return stars;
};

export default renderStars;
