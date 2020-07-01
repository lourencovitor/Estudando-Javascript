import React from "react";
import "./Nav.css";
import NavItem from "./NavItem";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <NavItem url={"/"} icon={"fa fa-home"} text={"Início"} />
      <NavItem url={"/users"} icon={"fa fa-users"} text={"Usuário"} />
    </nav>
  </aside>
);
