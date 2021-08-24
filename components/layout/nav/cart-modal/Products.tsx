import {useContext} from "react";
import {AnimatePresence} from "framer-motion";

import ProductItem from "./product-item";

import {CartContext} from "@/contexts/CartProvider";

const Products = () => {
  const {cartState} = useContext(CartContext);

  return (
    <div className="grid gap-4">
      <AnimatePresence>
        {cartState.length > 0 ? (
          cartState.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <p className="text-4xl sm:text-2xl text-center">Your cart is empty</p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
