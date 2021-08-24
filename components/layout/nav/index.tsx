import React, {useState} from "react";
import {AnimatePresence} from "framer-motion";

import CartModal from "./cart-modal";

import Logo from "./Logo";
import Hd4k from "./Hd4k";
import CartButton from "./CartButton";

const Nav = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <nav className="pt-8 px-4 mx-auto max-w-screen-xl flex justify-between">
      <Logo />

      <Hd4k />

      <CartButton openModal={() => setIsModalOpen(true)} />

      <AnimatePresence>
        {isModalOpen && <CartModal closeModal={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
