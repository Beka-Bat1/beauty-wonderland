import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a class="navbar-brand" href="#">
                  Beauty Wonderland
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  My account
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  My cart
                </a>
                <div className="cart__circle">1</div>
              </li>
            </ul>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
            {/* <span class="navbar-toggler-icon"> </span> */}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
