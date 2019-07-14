import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  console.log(arguments);
  return (
    <div>
      <Header title="Smart Check-out " />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
