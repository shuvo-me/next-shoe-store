"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px]  w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/assets/p2.png" />
        <img src="/assets/p3.png" />
        <img src="/assets/p4.png" />
        <img src="/assets/p5.png" />
        <img src="/assets/p6.png" />
        <img src="/assets/p7.png" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
