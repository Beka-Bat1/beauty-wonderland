import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
            <div className="navbar__container">
              
              <div className="navbar__one">
                <ul className="navbar-nav me-auto">
                  <li className="navbar-item">
                    <a className="navbar-link" href="#">
                      Shop
                    </a>
                  </li>

                  <li className="navbar-item">
                    <a className="navbar-link" href="#">
                      Gallery
                    </a>
                  </li>

                  <li className="navbar-item">
                    <a className="navbar-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="navbar__two">
                <a className="navbar-brand" href="#">
                  Beauty Wonderland
                </a>
              </div>

              <div className="navbar__three">
                <a className="navbar-link" href="#">
                  My Account
                </a>
                <a className="navbar-link" href="#">
                  Cart
                </a>
                <a className="navbar-link" href="#">
                  <i class="fas fa-bars"></i>
                </a>
              </div>
            </div>
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
                <span class="navbar-toggler-icon"></span>
              </button>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li className="nav-item">
                <a class="nav-link" href="#">
                  collection
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  collection
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  collection
                </a>
              </li>

              <li className="nav-item">
                <a class="nav-link" href="#">
                  Beauty Wonderland
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  collection
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  collection
                </a>
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
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
