"use client";
import React, { useState } from "react";
import { AppContainer } from ".";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  return (
    <header className="w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-10 sticky top-0 transition-transform duration-300">
      <AppContainer>
        <div>
          <Link href={"/"}>
            <div className="relative w-[40px] md:w-[60px] h-[40px] md:h-[60px]">
              <Image
                src={"/assets/logo.svg"}
                fill
                className="object-contain"
                alt="logo"
              />
            </div>
          </Link>
        </div>
      </AppContainer>
    </header>
  );
};

export default Header;
