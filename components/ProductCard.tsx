import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link
      href="/"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <div>
        <Image
          src={"/assets/product-1.webp"}
          width={500}
          height={500}
          alt="product image"
        />
      </div>
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$20.45</p>
          <p className="text-base  font-medium line-through">$4</p>
          <p className="ml-auto text-base font-medium text-green-500">$3</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
