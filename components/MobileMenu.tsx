import { MenuItemTypes, MobileMenuPropTypes, SubmenuItemTypes } from "@/types";
import React, { FC, Fragment } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const menuItems: Array<MenuItemTypes> = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true, url: "" },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuItems: Array<SubmenuItemTypes> = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MobileMenu: FC<MobileMenuPropTypes> = ({
  showCatMenu,
  setShowCatMenu,
  setShowMobileMenu,
}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {menuItems?.map((menu) => (
        <Fragment key={menu.id}>
          {!!menu.subMenu ? (
            <li
              className=" cursor-pointer flex flex-col border-b py-4 px-5 relative"
              onClick={() => setShowCatMenu(!showCatMenu)}
            >
              <div className="flex items-center justify-between">
                {menu.name}
                <BsChevronDown
                  size={14}
                  className={`transition-all ${
                    showCatMenu ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {showCatMenu && (
                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                  {subMenuItems.map((subMenu) => {
                    return (
                      <Link href={"/"} key={subMenu.id}>
                        <li
                          className="py-4 px-8 border-t flex justify-between"
                          onClick={() => {
                            setShowCatMenu(false);
                            setShowMobileMenu(false);
                          }}
                        >
                          {subMenu.name}
                          <span className="opacity-50 text-sm">78</span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              )}
            </li>
          ) : (
            <li
              className="cursor-pointer py-4 px-5 border-b"
              onClick={() => setShowMobileMenu(false)}
            >
              <Link href={menu.url}>{menu.name}</Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default MobileMenu;
