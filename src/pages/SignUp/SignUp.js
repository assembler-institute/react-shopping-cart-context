import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useHistory } from "react-router-dom";

import "./SignUp.scss";

import AuthContext from "../../context/AuthContext";
import withLayout from "../../hoc/withLayout";
import Input from "../../components/Input";

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Please insert a valid username")
    .required("A username is required"),
  password: Yup.string().required("A password is required"),
});

function SignUp() {
  const { auth, register } = useContext(AuthContext);

  const [signUpState, setSignUpState] = useState({
    registerSuccess: false,
    registerError: false,
  });

  const history = useHistory();

  function checkRegister(username, password) {
    const existingUser = auth.users.filter((user) => {
      return user.username === username;
    });
    if (existingUser.length < 1) {
      register(username, password);
      setSignUpState((prevState) => ({
        ...prevState,
        registerSuccess: true,
      }));
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } else {
      setSignUpState((prevState) => ({
        ...prevState,
        registerError: true,
      }));
    }
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      checkRegister(values.username, values.password);
    },
  });

  return (
    <div className="col col-6 mx-auto sign-up-form">
      {!signUpState.registerSuccess && (
        <form onSubmit={formik.handleSubmit} id="signUp">
          <Input
            type="text"
            label="Username"
            id="username"
            value={formik.values.username}
            placeholder="Your username"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.username}
            errorMessage={formik.errors.username}
            isTouched={formik.touched.username}
          />
          <Input
            type="password"
            label="Password"
            id="password"
            value={formik.values.password}
            placeholder="Your password"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.password}
            errorMessage={formik.errors.password}
            isTouched={formik.touched.password}
          />
          <button className="btn btn-dark" type="submit">
            Registry
          </button>
        </form>
      )}
      {!signUpState.registerSuccess && signUpState.registerError && (
        <span className="text-danger fs-6">
          Incorrect username or password.
        </span>
      )}
      {signUpState.registerSuccess && (
        <span className="text-success fs-6">User registered.</span>
      )}
    </div>
  );
}

export default withLayout(SignUp);
