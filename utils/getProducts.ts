import {IProduct} from "@/product/types";

const getProducts: () => Promise<IProduct[]> = async () => {
  const res = await fetch("../product/mock.json");
  const data = res.json();

  return data;
};

export default getProducts;
