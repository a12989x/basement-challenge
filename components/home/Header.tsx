import Image from "next/image";

import header from "@/public/header.svg";

const Header = (): JSX.Element => {
  return (
    <header className="px-4 my-12 mx-auto max-w-screen-xl flex justify-center">
      <Image alt="Basement" src={header} />
    </header>
  );
};

export default Header;
