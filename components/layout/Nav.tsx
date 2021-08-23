import {useContext, useState} from "react";
import Image from "next/image";

import CartModal from "./CartModal";

import {CartContext} from "@/contexts/CartProvider";
import favicon from "@/public/favicon.svg";
import hd from "@/public/hd-4k.svg";
import logo from "@/public/logo.svg";

const Nav = (): JSX.Element => {
  const {cartState} = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <nav className="pt-8 px-4 mx-auto max-w-screen-xl flex justify-between">
      <div className="hidden sm:flex">
        <Image alt="Basement" src={logo} />
      </div>
      <div className="flex sm:hidden">
        <Image alt="Basement" height="45" src={favicon} width="54" />
      </div>

      <div className="hidden sm:flex">
        <Image alt="hd-4k icons" src={hd} />
      </div>

      <button
        className="py-2 px-5 sm:py-3.5 sm:px-8 font-bold uppercase border border-white rounded-full transition transition-duration-150 ease-in-out hover:bg-white hover:text-black"
        data-test-id="cart-button"
        onClick={() => setIsModalOpen(true)}
      >
        Cart ({cartState.length})
      </button>

      {isModalOpen && <CartModal closeModal={() => setIsModalOpen(false)} products={cartState} />}
    </nav>
  );
};

export default Nav;
