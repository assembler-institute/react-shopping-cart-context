import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

import AuthContext from "../../context/AuthContext";
import Input from "../Input";

function LoginForm() {
  const { login, auth } = useContext(AuthContext);

  function checkLogin(loginData) {
    const existingUser = auth.users.filter((user) => {
      return (
        user.username === loginData.username &&
        user.password === loginData.password
      );
    });
    if (existingUser.length > 0) login(loginData.username);
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      checkLogin({ username: values.lUsername, password: values.lPassword });
    },
  });

  return (
    <>
      <li className="d-inline-flex">
        <form className="form-inline" onSubmit={formik.handleSubmit} id="login">
          <div className="d-inline-flex">
            <Input
              type="text"
              label=""
              id="lUsername"
              value={formik.values.lUsername}
              placeholder="Username"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.lUsername}
              errorMessage={formik.errors.lUsername}
              isTouched={formik.touched.lUsername}
              margins=" mx-1"
            />
            <Input
              type="password"
              label=""
              id="lPassword"
              value={formik.values.lPassword}
              placeholder="Password"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.lPassword}
              errorMessage={formik.errors.lPassword}
              isTouched={formik.touched.lPassword}
              margins=" mx-1"
            />
          </div>
          <button className="btn btn-light" type="submit">
            Login
          </button>
        </form>
      </li>
      <li className="d-inline-flex">
        <span className="navbar-text ml-4">or</span>
        <NavLink
          exact
          activeClassName="active"
          className="nav-link mx-2"
          to="/signUp"
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );
}

export default LoginForm;
