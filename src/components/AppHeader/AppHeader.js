import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LoginForm from "../LoginForm/LoginForm";
import LogoutPanel from "../LogoutPanel/LogoutPanel";
import logo from "../../assets/img/zapato_veloz_logo.png";

import "./AppHeader.scss";

function isInCheckoutProcess(currentPath) {
  const outOfCheckoutProcessPaths = ["/", "/new-product", "/signUp", "/signIn"];
  return !outOfCheckoutProcessPaths.includes(currentPath);
}

function AppHeader({ ...props }) {
  const location = useLocation();
  const checkout = isInCheckoutProcess(location.pathname);
  const { auth } = useContext(AuthContext);

  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark w-100 justify-content-between">
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
            <ul className="navbar-nav">
              {(!auth || auth.currentUser === "") && <LoginForm />}
              {auth && auth.currentUser && auth.currentUser !== "" && (
                <LogoutPanel userName={auth.currentUser} />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
