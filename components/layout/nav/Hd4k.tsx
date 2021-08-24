import Image from "next/image";

import hd from "@/public/hd-4k.svg";

const Hd4k = () => {
  return (
    <div className="hidden sm:flex">
      <Image alt="hd-4k icons" src={hd} />
    </div>
  );
};

export default Hd4k;
