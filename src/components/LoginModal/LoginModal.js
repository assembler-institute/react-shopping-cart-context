/* eslint-disable no-console */
import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";

import Button from "../Button";
import Input from "../Input";

import { formLogin } from "./form-schema";

import LoginContext from "../../context/login-context";

function LoginModal({ setShowModal }) {
  const { data: loginData, setData: updateLoginData } = useContext(
    LoginContext,
  );

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  const handleCloseModal = () => {
    const modal = document.getElementById("loginModal");
    const modalBackdrops = document.getElementsByClassName("modal-backdrop");
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("style", "display: none");
    document.body.removeChild(modalBackdrops[0]);
    setShowModal(false);
  };

  const formik = useFormik({
    initialValues: {
      loginName: "",
      loginPassword: "",
    },
    validationSchema: formLogin,
    onSubmit: (values, { setSubmitting }) => {
      updateLoginData({ ...values, isLogged: true });
      console.log(values);
      setSubmitting(true);
      setTimeout(() => {
        handleCloseModal();
      }, 500);
    },
  });
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="loginModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Log in modal
            </h5>
            <Button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">
            <form onSubmit={formik.handleSubmit} id="loginForm">
              <Input
                type="text"
                label="User name"
                id="loginName"
                value={formik.values.loginName}
                placeholder="User name"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.loginName}
                errorMessage={formik.errors.loginName}
              />
              <Input
                type="password"
                label="User name"
                id="loginPassword"
                placeholder="Password"
                value={formik.values.loginPassword}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                hasErrorMessage={formik.touched.loginPassword}
                errorMessage={formik.errors.loginPassword}
              />
            </form>
          </div>
          <div className="modal-footer">
            <Button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleCloseModal}
            >
              Close
            </Button>
            <Button
              submitButton
              form="loginForm"
              className="btn btn-primary"
              disabled={formik.isValidating || !formik.isValid}
            >
              {formik.isSubmitting ? "Loggin in..." : "Log in"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
