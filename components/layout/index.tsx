import {ReactNode} from "react";

import Nav from "./nav";
import Footer from "./Footer";

const Layout = ({children}: {children: ReactNode}): JSX.Element => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
