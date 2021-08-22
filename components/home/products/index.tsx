import ProductItem from "./ProductItem";

import {Product} from "product/types";

const Products = ({products}: {products: Product[]}): JSX.Element => {
  return (
    <section
      className="px-4 mt-24 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      id="products-home"
    >
      {products.map((productItem) => (
        <ProductItem key={productItem.id} productItem={productItem} />
      ))}
    </section>
  );
};

export default Products;
