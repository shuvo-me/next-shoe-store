import { AppContainer } from "@/components";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <AppContainer>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Thanks for shopping with us!</div>
          <div className="text-lg font-bold mt-2">
            Your order has been placed successfully.
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <div className="underline">shoeshopcontact@shop.com</div>

          <Link href="/" className="font-bold mt-5">
            Continue Shopping
          </Link>
        </div>
      </AppContainer>
    </div>
  );
};

export default page;
