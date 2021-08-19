import Image from "next/image";

import footer from "@/public/footer.svg";

const Footer = (): JSX.Element => {
  return (
    <div className="px-4 sm:px-8 mt-20 mx-auto max-w-screen-xl">
      <Image alt="footer" src={footer} />
    </div>
  );
};

export default Footer;
