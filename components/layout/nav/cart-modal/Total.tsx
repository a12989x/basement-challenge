import {useContext} from "react";

import {CartContext} from "@/contexts/CartProvider";
import {IProductCart} from "@/product/types";

const Total = () => {
  const {cartState} = useContext(CartContext);

  const prices =
    cartState.length > 0
      ? cartState.reduce(
          (accumulator: number[], currentValue: IProductCart) =>
            accumulator.concat(currentValue.price * currentValue.qty!),
          [],
        )
      : [];
  const total =
    cartState.length > 0
      ? prices.reduce((accumulator, currentValue) => accumulator + currentValue)
      : 0;

  const printCartInConsole = () => {
    // eslint-disable-next-line no-console
    console.table(
      cartState.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.qty,
        price: item.price * item.qty,
        options: item.cart.map((cartItem) => ({[cartItem.label]: cartItem.value})),
      })),
    );

    // eslint-disable-next-line no-console
    console.log(`Total: ${total}`);
  };

  return (
    <div className="mx-8 sm:mx-0 grid grid-cols-1 sm:grid-cols-modal text-4xl uppercase sm:border sm:border-r-0">
      <div className="px-8 py-6 flex justify-between sm:justify-start border-b sm:border-r">
        <p>Total:</p>{" "}
        <p className="ml-2" data-test-id="total-modal">
          ${total}
        </p>
      </div>
      <button
        className="px-8 py-6 text-black uppercase transition transition-duration-150 ease-in-out hover:text-black hover:bg-white"
        style={{WebkitTextStroke: "2px #fff"}}
        onClick={printCartInConsole}
      >
        Checkout
      </button>
    </div>
  );
};

export default Total;
