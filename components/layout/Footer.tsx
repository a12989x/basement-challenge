import Image from "next/image";

import footer from "@/public/footer.svg";

const Footer = (): JSX.Element => {
  return <Image alt="footer" src={footer} />;
};

export default Footer;
