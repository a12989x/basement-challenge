import Image from "next/image";

import logo from "@/public/logo.svg";
import hd from "@/public/hd-4k.svg";

const Nav = (): JSX.Element => {
  return (
    <nav className="pt-8 mx-auto max-w-screen-xl flex justify-between">
      <Image alt="Basement" src={logo} />
      <Image alt="hd-4k icons" src={hd} />

      <button className="py-3.5 px-8 font-bold uppercase border border-white rounded-full">
        Cart
      </button>
    </nav>
  );
};

export default Nav;
