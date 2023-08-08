import { ReactNode } from "react";

export interface AppContainerPropTypes {
  children: ReactNode;
  className?: string;
}

export interface MenuItemTypes {
  id: number;
  name: string;
  url?: string;
  subMenu: string;
}
export interface SubmenuItemTypes {
  id: number;
  name: string;
  doc_count: number;
}
