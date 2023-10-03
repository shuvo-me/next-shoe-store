import { MenuItemTypes, MenuPropTypes, SubmenuItemTypes } from "@/types";
import React, { FC, Fragment } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const menuItems: Array<MenuItemTypes> = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true, url: "/" },
  { id: 4, name: "Contact", url: "/" },
];

const subMenuItems: Array<SubmenuItemTypes> = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const Menu: FC<MenuPropTypes> = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden md:flex gap-8 font-medium text-black items-center">
      {menuItems?.map((menu) => (
        <Fragment key={menu.id}>
          {!!menu.subMenu ? (
            <li
              className=" cursor-pointer flex items-center gap-2 relative"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {menu.name}
              <BsChevronDown size={14} />
              {showCatMenu && (
                <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg">
                  {subMenuItems.map((subMenu) => {
                    return (
                      <Link href={"/"} key={subMenu.id}>
                        <li
                          className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                          onClick={() => setShowCatMenu(false)}
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
            <li className="cursor-pointer">
              <Link href={menu.url}>{menu.name}</Link>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default Menu;
