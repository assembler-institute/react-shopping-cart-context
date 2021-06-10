import React from "react";
import { NavLink } from "react-router-dom";
// import { HOME } from "../../constants/routes";

import "./AppHeader.scss";

function AppHeader({ page, ...props }) {
  return (
    <header className="bg-primary mb-3" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand"
              to="/"
            >
              Home
            </NavLink>
            {!page && (
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
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
