import NavigationItem from "layout/NavigationItem/NavigationItem";
import UnorderedList from "layout/UnorderedListWrapper/UnorderedList";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="navbar-dark">
      <div className="row">
        <UnorderedList header="About Us" className="footer__section">
          <NavigationItem link="about" className="nav-link">
            gallery
          </NavigationItem>
          <NavigationItem link="about" className="nav-link">
            Shop all
          </NavigationItem>
        </UnorderedList>

        <UnorderedList header="Customer Service" className="footer__section">
          <NavigationItem link="FAQ" className="nav-link">
            FAQ
          </NavigationItem>
          <NavigationItem link="returns" className="nav-link">
            Returns
          </NavigationItem>
          <NavigationItem link="returns" className="nav-link">
            contact us
          </NavigationItem>
        </UnorderedList>

        <UnorderedList header="Accout" className="footer__section">
          <NavigationItem link="user-account" className="nav-link">
            Account
          </NavigationItem>
          <NavigationItem link="user-cart" className="nav-link">
            Shop all
          </NavigationItem>
          <NavigationItem link="settings" className="nav-link">
            settings
          </NavigationItem>
        </UnorderedList>
      </div>

      <div className="row">
        <ul className="list-group navbar-nav">
          <li className="list-group-item">#followus</li>

          <li className="list-group-item">
            {" "}
            <a className="nav-link" href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>

          <li className="list-group-item list-unstiled">
            <a className="nav-link" href="https://www.facebook.com">
              <i className="fab fa-pinterest"></i>
            </a>
          </li>
          <li className="list-group-item">
            <a className="nav-link" href="https://www.facebook.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="row">
        <ul className="list-group navbar-nav">
          <li className="list-group-item">
            {" "}
            <span>
              <i className="far fa-copyright"></i>
            </span>{" "}
            BeutyWonderland inc. All rights reserved{" "}
          </li>

          <li className="list-group-item">
            <Link className="nav-link" to="privacy">
              Privacy Policy
            </Link>
          </li>

          <li className="list-group-item">
            <Link className="nav-link" to="terms&conditions">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
