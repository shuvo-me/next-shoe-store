"use client";
import React, { useEffect, useState } from "react";
import { AppContainer } from ".";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [showCatMenu, setShowCatMenu] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
          console.log({ Y: window.scrollY });
          setShow("-transalte-y-[80px]");
        } else {
          setShow("shadow-sm");
        }
      } else {
        setShow("translate-y-0");
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-10 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <AppContainer>
        <div className="flex items-center justify-between">
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
          <div>
            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
          </div>
          {/* desktop icons */}
          <div className="hidden md:flex items-center gap-2 text-black">
            <span className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full hover:bg-black/[0.05] cursor-pointer relative">
              <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
              <small className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                8
              </small>
            </span>
            <span className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              <small className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </small>
            </span>
          </div>

          {/* mobile menu */}
          <div
            className="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 rounded-full hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]" />
            ) : (
              <BiMenuAltRight className="text-[20px]" />
            )}
          </div>
          {mobileMenu && (
            <MobileMenu
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
              setShowMobileMenu={setMobileMenu}
            />
          )}
        </div>
      </AppContainer>
    </header>
  );
};

export default Header;
