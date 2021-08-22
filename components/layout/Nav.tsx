import Image from "next/image";
import {useContext, useState} from "react";

import Modal from "./Modal";

import logo from "@/public/logo.svg";
import favicon from "@/public/favicon.svg";
import hd from "@/public/hd-4k.svg";
import {CartContext} from "contexts/CartProvider";

const Nav = (): JSX.Element => {
  const {state} = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <nav className="pt-8 px-4 sm:px-0 mx-auto max-w-screen-xl flex justify-between">
      <div className="hidden sm:block">
        <Image alt="Basement" src={logo} />
      </div>
      <div className="block sm:hidden">
        <Image alt="Basement" height="45" src={favicon} width="54" />
      </div>

      <div className="hidden sm:inline-block">
        <Image alt="hd-4k icons" src={hd} />
      </div>

      <button
        className="py-2 px-5 sm:py-3.5 sm:px-8 font-bold uppercase border border-white rounded-full"
        data-test-id="cart-button"
        onClick={() => setIsModalOpen(true)}
      >
        Cart ({state.length})
      </button>

      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} products={state} />}
    </nav>
  );
};

export default Nav;
