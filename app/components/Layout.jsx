import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header title="Smart Check-out" />
      <div className="container">{children}</div>
      <Footer copywrite="@ 2018 - Hotel Beacons GmbH" />
    </div>
  );
};

export default Layout;
