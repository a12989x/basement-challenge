import Image from "next/image";

import asteriskOne from "@/public/asterisk-one.svg";
import asteriskTwo from "@/public/asterisk-two.svg";

const Asterisks = () => {
  return (
    <div className="mx-auto relative top-0 h-full w-full max-w-screen-xl hidden lg:block">
      <div className="absolute -top-20 left-20">
        <Image alt="first asterisk" src={asteriskOne} />
      </div>
      <div className="absolute bottom-8 right-20">
        <Image alt="second asterisk" src={asteriskTwo} />
      </div>
    </div>
  );
};

export default Asterisks;
