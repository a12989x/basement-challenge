import React, {MouseEventHandler, useContext} from "react";

import ProductItem from "./product-item";

import {CartContext} from "@/contexts/CartProvider";
import {Product} from "@/product/types";

const Modal = ({
  products,
  closeModal,
}: {
  products: Product[];
  closeModal: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => {
  const {state} = useContext(CartContext);

  const prices =
    products.length > 0
      ? products.reduce(
          (accumulator: number[], currentValue: Product) =>
            accumulator.concat(currentValue.price * currentValue.qty!),
          [],
        )
      : [];
  const total =
    products.length > 0
      ? prices.reduce((accumulator, currentValue) => accumulator + currentValue)
      : 0;

  return (
    <div
      className="h-full w-full bg-black fixed top-0 bottom-0 right-0 left-0 z-10 bg-opacity-70"
      data-test-id="cart-modal"
    >
      <section className="fixed top-0 right-0 max-h-screen bg-black border border-t-0 border-r-0 overflow-y-auto z-10">
        <div className="py-10 px-8 flex flex-col content-end justify-end">
          <button className="mb-2 ml-auto text-4xl uppercase" onClick={closeModal}>
            → Close
          </button>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-x-10 uppercase text-9xl text-center font-bold">
            <p className="">Your</p>{" "}
            <p className="text-black" style={{WebkitTextStroke: "2px #fff"}}>
              Cart
            </p>
          </div>
          <div className="grid gap-4">
            {products.length > 0 &&
              products.map((product) => <ProductItem key={product.id} product={product} />)}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-modal text-4xl uppercase sm:border sm:border-r-0">
          <div className="px-8 py-6 grid grid-cols-2 border-b sm:border-r">
            <p>Total:</p>
            <p data-test-id="total-modal">${total}</p>
          </div>
          <button
            className="px-8 py-6 text-black uppercase transition transition-duration-150 ease-in-out hover:text-white hover:bg-white"
            style={{WebkitTextStroke: "2px #fff"}}
            // eslint-disable-next-line no-console
            onClick={() => console.log(state)}
          >
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
