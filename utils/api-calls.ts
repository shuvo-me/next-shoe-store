const API_BASE_URL = "http://localhost:1337/api";
export const getProducts = async () => {
  let loading, err, products;
  try {
    loading = true;
    const res = await fetch(`${API_BASE_URL}/products?populate=*`);
    products = res.json();
    loading = false;
  } catch (errors) {
    loading = false;
    err = errors;
  }

  return { products, err, loading };
};
