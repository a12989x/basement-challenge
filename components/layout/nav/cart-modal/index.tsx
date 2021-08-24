import React, {FC, MouseEventHandler} from "react";
import {motion} from "framer-motion";

import CloseButton from "./CloseButton";
import YourCart from "./YourCart";
import Total from "./Total";
import Products from "./Products";

import {simpleOpacity, simpleXAndOpacity} from "animations";

interface ICartModalProps {
  closeModal: MouseEventHandler<HTMLButtonElement>;
}

const CartModal: FC<ICartModalProps> = ({closeModal}) => {
  return (
    <motion.div
      animate="show"
      className="h-full w-full bg-black fixed top-0 bottom-0 right-0 left-0 z-10 bg-opacity-70"
      data-test-id="cart-modal"
      exit="exit"
      initial="hidden"
      variants={simpleOpacity}
    >
      <motion.section
        className="fixed top-0 right-0 max-h-screen overflow-x-hidden bg-black sm:border border-t-0 border-r-0 overflow-y-auto z-10"
        variants={simpleXAndOpacity}
      >
        <div className="py-10 px-8 flex flex-col content-end justify-end">
          <CloseButton closeModal={closeModal} />

          <YourCart />

          <Products />
        </div>

        <Total />
      </motion.section>
    </motion.div>
  );
};

export default CartModal;
