import Image from "next/image";

import favicon from "@/public/favicon.svg";
import logo from "@/public/logo.svg";

const Logo = () => {
  return (
    <>
      <div className="hidden sm:flex">
        <Image alt="Basement" src={logo} />
      </div>
      <div className="flex sm:hidden">
        <Image alt="Basement" height="45" src={favicon} width="54" />
      </div>
    </>
  );
};

export default Logo;
