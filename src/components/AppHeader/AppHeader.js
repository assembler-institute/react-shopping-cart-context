import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import AuthContext from "../../context/auth-context";

// import { HOME } from "../../constants/routes";

import "./AppHeader.scss";

function AppHeader({ page, ...props }) {
  const { auth, logout } = useContext(AuthContext);

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
                {/* <li className="nav-item"></li> */}
              </ul>
            )}

            {auth.isAuthenticated && (
              <Button
                className="align-center-center"
                onClick={logout}
                // handleClick={() => updateCheckoutContext({ actualPage: 1 })}
              >
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
