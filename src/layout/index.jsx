import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
