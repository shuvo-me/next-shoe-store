import {
  AppContainer,
  ProductDetailsCarousel,
  RelatedProducts,
} from "@/components";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div className="w-full py-20">
      <AppContainer>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-5">Jordan Retro</div>
            <div className="text-lg font-semibold mb-5">Product SubTitle</div>
            <div className="flex items-center">USD: $33.80</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...new Array(7)].map((_, i) => (
                  <div
                    className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"
                    key={_}
                  >
                    UK 6
                  </div>
                ))}
                <div className="border rounded-md text-center py-3 font-medium hover:border-black/[0.1] cursor-not-allowed opacity-50">
                  UK 6
                </div>
              </div>
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
            </div>
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add To Cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                fugit est voluptatem dicta harum provident molestias suscipit
                at. Voluptatem consequatur illo fugit unde consectetur nemo?
                Perspiciatis itaque facere accusantium maiores ex ab quaerat!
                Vitae accusantium minus maiores dolorum placeat atque omnis quod
                dolore repellat, possimus tenetur tempore temporibus amet non?
              </div>
              <div className="markdown text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                fugit est voluptatem dicta harum provident molestias suscipit
                at. Voluptatem consequatur illo fugit unde consectetur nemo?
                Perspiciatis itaque facere accusantium maiores ex ab quaerat!
                Vitae accusantium minus maiores dolorum placeat atque omnis quod
                dolore repellat, possimus tenetur tempore temporibus amet non?
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </AppContainer>
    </div>
  );
};

export default ProductDetails;
