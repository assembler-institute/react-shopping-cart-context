import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import AuthContext from "../../context/auth-context";

import CheckoutContext from "../../context/checkout-context";
import { CHECKOUT_CONTEXT_KEY } from "../../constants/local-storage-keys";

import "./AppHeader.scss";

function AppHeader({ page, ...props }) {
  const { auth, logout } = useContext(AuthContext);
  const { clearCheckoutContext } = useContext(CheckoutContext);
  function handleClick() {
    localStorage.removeItem(CHECKOUT_CONTEXT_KEY);
    clearCheckoutContext();
    logout();
  }

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

            {auth.isAuthenticated && (
              <Button className="align-center-center" onClick={handleClick}>
                Log out
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
