import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/zapato_veloz_logo.png";

import "./AppHeader.scss";

function AppHeader({ ...props }) {
  let checkout = true;
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/new-product") {
    checkout = false;
  }

  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand"
              to="/"
            >
              <img src={logo} alt="Zapato Veloz" />
            </NavLink>

            <ul className="navbar-nav mr-auto">
              <li className={`${checkout ? "hidden-item" : "nav-item"}`}>
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
