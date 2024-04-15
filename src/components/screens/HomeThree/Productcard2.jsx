import { Button, Img } from "../..";
import renderStars from "../../helpers/RenderStars";

const ProductCard2 = ({
  id,
  name,
  price,
  discount_price,
  cold_sale,
  organic,
  image_url,
  discount,
  average_rating,
}) => {
  return (
    <div className="p-3 w-1/5 md:w-1/3 mobileL:w-1/2 mobileM:w-full md:border-b md:border-[#E5E7EB] border-r border-[#E5E7EB]">
      <div>
        <Button
          color="red_700"
          shape="round"
          className="mt-1 !rounded-tr-[50%] !rounded-br-[50%] tracking-[-0.32px] uppercase font-extrabold z-[1] min-w-[38px]"
        >
          {discount}%
        </Button>
        <div className="flex justify-center">
          <Img
            src={image_url}
            alt="link1two_one"
            className="justify-center h-[170px] w-[170px] object-center "
          />
        </div>

        <div className="flex items-center justify-between mb-2 ">
          <div>
            {organic && <img src="images/span.badge.png" alt="organic" />}
            {cold_sale && <img src="images/span.badge2.jpg" alt="cold sale" />}
            {!organic && !cold_sale && (
              <div style={{ width: "20px", height: "20px" }}></div>
            )}
          </div>
          <div className="counter flex">
            <div className="bg-[#F4F2F8] w-5 border border-l-[#E5E7EB] flex justify-center items-center h-5 rounded-l-full">
              -
            </div>
            <div className="bg-[#FFFFFF] border border-t-[#E5E7EB] border-b-[#E5E7EB] flex justify-center items-center text-sm w-5 h-5">
              1
            </div>
            <div className="bg-[#634C9F] border border-r-[#E5E7EB] flex justify-center items-center w-5 h-5 rounded-r-full text-white-A700">
              +
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* average rating */}
        <div className="flex items-center gap-1 mb-2">
          {renderStars(average_rating)}
          <span className="text-[#9CA3AF] text-xs ml-1">{average_rating}</span>
        </div>
        <p className="text-[#030712] text-sm font-medium mb-1 h-[55px] ">
          {name}
        </p>
        <div className="flex items-center gap-1 pb-2  ">
          <p className="text-[#DC2626] text-xl font-bold">${discount_price}</p>
          <p className="text-[#111827] text-sm font-normal line-through">
            ${price}
          </p>
        </div>
        <div>
          <p className="text-[#16A34A] font-bold text-xs">IN STOCK</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
