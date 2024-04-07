import React from "react";
import { Button, Img } from "../..";

const ProductCard = ({
  id,
  name,
  price,
  discount_price,
  available,
  cold_sale,
  organic,
  image_url,
  discount,
  average_rating,
}) => {
  return (
    <div className="p-3 w-1/6 border-r border-[#E5E7EB]">
      <div>
        <Button
          color="red_700"
          shape="round"
          className="mt-1 !rounded-tr-[50%] !rounded-br-[50%] tracking-[-0.32px] uppercase font-extrabold z-[1] min-w-[38px]"
        >
          {discount}%
        </Button>
        <Img
          src="images/img_link_1_2_500x500_jpg.png"
          alt="link1two_one"
          className="justify-center h-[170px] w-[170px] object-center "
        />
        {organic && <img src="images/span.badge.png" alt="organic" />}
        {cold_sale && <img src="images/span.badge2.jpg" alt="cold sale" />}
      </div>
      <div>
        {/* average rating */}
        
        <p className="text-[#030712] text-sm font-medium">{name}</p>
        <div className="flex items-center gap-1 ">
          <p className="text-[#DC2626] text-xl font-bold">${discount_price}</p>
          <p className="text-[#111827] text-sm font-normal line-through">
            ${price}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-[#9CA3AF] font-normal">
            This product is about to run out
          </p>
          <p className="text-[12px] text-[#6B7280] font-normal">
            available only:{" "}
            <span className="text-base font-bold text-[#030712]">
              {available}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
