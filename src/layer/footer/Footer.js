import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>about us</p>
          <p>gallery</p>
          <p> shop all</p>
        </div>
        <div className="footer__section">
          <h3>Customer Service</h3>
          <p>faqs</p>
          <p>returns</p>
          <p>contact us</p>
        </div>
        <div className="footer__section">
          <h3>Accout</h3>
          <p>your account</p>
          <p>your cart</p>
          <p>settings</p>
        </div>
      </div>

      <ul className=" list-group">
        <li className="list-group-item">
          {" "}
          <span>
            <i class="far fa-copyright"></i>
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
