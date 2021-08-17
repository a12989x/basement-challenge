import Image from "next/image";

import logo from "@/public/logo.svg";
import hd from "@/public/hd-4k.svg";

const Nav = (): JSX.Element => {
  return (
    <nav className="flex justify-between">
      <Image alt="Basement" src={logo} />
      <Image alt="hd-4k icons" src={hd} />

      <button className="py-3.5 px-8 font-bold border border-white rounded-full">Checkout</button>
    </nav>
  );
};

export default Nav;
