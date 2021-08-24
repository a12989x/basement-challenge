import {FC, MouseEventHandler, useContext} from "react";

import {CartContext} from "@/contexts/CartProvider";

interface ICartButtonProps {
  openModal: MouseEventHandler<HTMLButtonElement>;
}

const CartButton: FC<ICartButtonProps> = ({openModal}) => {
  const {cartState} = useContext(CartContext);

  return (
    <button
      className="py-2 px-5 sm:py-3.5 sm:px-8 font-bold uppercase border border-white rounded-full transition transition-duration-150 ease-in-out hover:bg-white hover:text-black"
      data-test-id="cart-button"
      onClick={openModal}
    >
      Cart ({cartState.length})
    </button>
  );
};

export default CartButton;
