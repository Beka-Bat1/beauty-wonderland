import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "./index.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="wrapper__main container-fluid">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
