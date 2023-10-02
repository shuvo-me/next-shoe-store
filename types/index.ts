import { Dispatch, ReactNode, SetStateAction } from "react";
import { Formates } from "./enum";

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

export interface SizeTypes {
  size: string;
  enabled: boolean;
}

export interface ImageTypes {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: null | any;
    width: number;
    height: number;
    formats: {
      [key in Formates]: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null | any;
        size: number;
        width: number;
        height: number;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | any;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface ProductTypes {
  id: number;
  attributes: {
    name: string;
    subtitle: string;
    price: string;
    description: string;
    size: {
      data: Array<SizeTypes>;
    };
    original_price: number;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: Array<ImageTypes>;
    };
    thumbnail: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: null | any;
          caption: null | any;
          width: number;
          height: number;
          formats: {
            [key in Formates]: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: null | any;
              size: number;
              width: number;
              height: number;
              provider_metadata: {
                public_id: string;
                resource_type: string;
              };
            };
          };

          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: null | any;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    categories: any;
  };
}

export interface ProdcutApiResponseType {
  data: Array<ProductTypes>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
