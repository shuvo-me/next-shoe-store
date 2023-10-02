import { AppContainer, HeroBanner, ProductCard } from "@/components";
import { ProductTypes } from "@/types";
import { getProducts } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="">
      <HeroBanner />
      <AppContainer>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.map((product, index) => (
            <ProductCard product={product} key={product.attributes.slug} />
          ))}
        </div>
      </AppContainer>
    </main>
  );
}
