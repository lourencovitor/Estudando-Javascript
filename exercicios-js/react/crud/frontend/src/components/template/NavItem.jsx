import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to={props.url}>
        <i className={`${props.icon}`}></i> {props.text}
      </Link>
    </nav>
  </aside>
);
