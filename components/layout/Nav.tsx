import Image from "next/image";

import logo from "@/public/logo.svg";

const Nav = (): JSX.Element => {
  return (
    <div>
      <Image alt="Basement" src={logo} />
    </div>
  );
};

export default Nav;
