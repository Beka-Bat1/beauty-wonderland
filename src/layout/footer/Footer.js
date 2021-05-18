import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="footer__section">
          <h3 className="text__title__white">About Us</h3>
          <p className="text__secondary__white">about us</p>
          <p className="text__secondary__white">gallery</p>
          <p className="text__secondary__white"> shop all</p>
        </div>
        <div className="footer__section">
          <h3 className="text__title__white">Customer Service</h3>
          <p className="text__secondary__white">faqs</p>
          <p className="text__secondary__white">returns</p>
          <p className="text__secondary__white">contact us</p>
        </div>
        <div className="footer__section">
          <h3 className="text__title__white">Accout</h3>
          <p className="text__secondary__white">your account</p>
          <p className="text__secondary__white">your cart</p>
          <p className="text__secondary__white">settings</p>
        </div>
      </div>

      <ul className="list-group">
        <li className="list-group-item">#followus</li>

        <li className="list-group-item">
          {" "}
          <i class="fab fa-facebook"></i>{" "}
        </li>

        <li className="list-group-item">
          {" "}
          <i class="fab fa-pinterest"></i>
        </li>
        <li className="list-group-item">
          {" "}
          <i class="fab fa-instagram"></i>
        </li>
      </ul>

      <ul className="list-group">
        <li className="list-group-item">
          {" "}
          <span>
            <i className="far fa-copyright"></i>
          </span>{" "}
          BeutyWonderland inc. All rights reserved{" "}
        </li>

        <li className="list-group-item"> Privacy Policy </li>

        <li className="list-group-item"> Terms and Conditions </li>
      </ul>
    </footer>
  );
};

export default Footer;
