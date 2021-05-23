import React from "react";

import "./UnorderedList.scss";

function UnorderedList(props) {
  return (
    <div className="col-4 text-center py-3">
      <h4>{props.header}</h4>
      <ul className="navbar-nav">{props.children}</ul>
    </div>
  );
}

export default UnorderedList;
