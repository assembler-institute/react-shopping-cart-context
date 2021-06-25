import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/kings.png";

import "./AppHeader.scss";

function AppHeader({ ...props }) {
  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <img src={logo} alt="logo" className="logo" />
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand d-flex"
              to="/"
            >
              Home
            </NavLink>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/new-product"
                >
                  New Product
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
