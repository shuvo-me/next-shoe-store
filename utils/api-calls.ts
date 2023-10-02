import { ProdcutApiResponseType } from "@/types";

const API_BASE_URL = "http://localhost:1337/api";
export const getProducts = async (): Promise<ProdcutApiResponseType> => {
  const res = await fetch(`${API_BASE_URL}/products?populate=*`);
  const products = await res.json();
  console.log({ products });
  return products;
};
