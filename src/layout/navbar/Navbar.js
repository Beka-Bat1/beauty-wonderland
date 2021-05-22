import React from "react";
import "./Navbar.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-alignment">
              <ul className="navbar-nav">
                <NavigationItem link="home" className={"nav-link"}>
                  Home
                </NavigationItem>
                <NavigationItem link="about" className={"nav-link"}>
                  About
                </NavigationItem>
                <NavigationItem link="gallery" className={"nav-link"}>
                  Gallery
                </NavigationItem>
              </ul>

              <NavigationItem link="about" className={"navbar-brand"}>
                BeautyWonderland
              </NavigationItem>

              <ul className="navbar-nav">
                <NavigationItem link="about" className={"nav-link"}>
                  Shop
                </NavigationItem>
                <NavigationItem link="about" className={"nav-link"}>
                  My account
                </NavigationItem>
                <NavigationItem link="about" className={"nav-link"}>
                  My cart
                  <div className="cart__circle">1</div>
                </NavigationItem>
              </ul>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            htmlFor="btnControl"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
