import { ProdcutApiResponseType } from "@/types";
import { API_BASE_URL } from "./constants";
export const getProducts = async (): Promise<ProdcutApiResponseType> => {
  const res = await fetch(`${API_BASE_URL}/products?populate=*`);
  const products = await res.json();
  console.log({ products });
  return products;
};

export const getCategories = async () => {};
