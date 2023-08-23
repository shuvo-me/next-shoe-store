import { Dispatch, ReactNode, SetStateAction } from "react";

export interface AppContainerPropTypes {
  children: ReactNode;
  className?: string;
}

export interface MenuItemTypes {
  id: number;
  name: string;
  url: string;
  subMenu?: boolean;
}
export interface SubmenuItemTypes {
  id: number;
  name: string;
  doc_count: number;
}

export interface MenuPropTypes {
  showCatMenu: boolean;
  setShowCatMenu: Dispatch<SetStateAction<boolean>>;
}

export interface MobileMenuPropTypes extends MenuPropTypes {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}
