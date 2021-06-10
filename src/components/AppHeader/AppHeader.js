/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import "./AppHeader.scss";
import Button from "../Button";
import LoginModal from "../LoginModal";

import LoginContext from "../../context/login-context";

function AppHeader({ showNewProductForm, ...props }) {
  const { data: loginData, setData: updateLoginData } = useContext(
    LoginContext,
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  function handleLogOut() {
    updateLoginData({
      loginName: "",
      loginPassword: "",
      isLogged: false,
    });
    console.log(loginData);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  return (
    <header className="bg-primary container-fluid mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark d-flex justify-content-between align-items-center">
            <div className="navbar-group left-nav">
              <NavLink
                exact
                activeClassName="active"
                className="navbar-brand"
                to="/"
              >
                Home
              </NavLink>

              {showNewProductForm && (
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
            </div>
            <div className="navbar-group right-nav">
              {loginData.isLogged && (
                <p className="login-name">{`Hello ${loginData.loginName}`}</p>
              )}
              {loginData.isLogged ? (
                <Button type="button" onClick={handleLogOut}>
                  Log out
                </Button>
              ) : (
                <Button
                  type="button"
                  data-toggle="modal"
                  data-target="#loginModal"
                  onClick={handleShowModal}
                >
                  Log in
                </Button>
              )}
              {showModal && (
                <LoginModal showModal={showModal} setShowModal={setShowModal} />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
