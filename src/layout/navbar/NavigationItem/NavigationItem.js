import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <div>
      <li className="nav-item">
        
        <NavLink to={props.link} exact={props.exact} className={props.className}>
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default NavigationItem;
