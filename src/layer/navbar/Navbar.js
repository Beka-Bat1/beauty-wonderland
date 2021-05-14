import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-alignment">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>

              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  Beauty Wonderland
                </a>
              </li>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My account
                  </a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="#">
                    My cart
                    <div className="cart__circle">1</div>
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            for="btnControl"
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
