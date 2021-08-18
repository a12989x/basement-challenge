const getProducts = async () => {
  const res = await fetch("../product/mock.json");
  const data = res.json();

  return data;
};

export default getProducts;
