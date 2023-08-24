import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItems = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b items-start">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px] relative">
        <Image
          src={"/assets/product-1.webp"}
          alt="cart img"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex w-full flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            JorDan Retro 6 6
          </div>
          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Product Subtitle
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            USD : $40
          </div>
        </div>
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          Product Subtitle
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                // onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                // onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
                <option>1</option>
              </select>
            </div>
          </div>
          <button className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]">
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
