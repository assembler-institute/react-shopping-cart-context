/* eslint-disable no-console */
import React, { useContext, useState, useEffect } from "react";
// import { Modal } from "react-bootstrap";
import { useFormik } from "formik";

import Button from "../Button";
import Input from "../Input";

import { formLogin } from "./form-schema";

import LoginContext from "../../context/login-context";

function LoginModal({ showModal, setShowModal }) {
  const { data: loginData, setData: updateLoginData } = useContext(
    LoginContext,
  );
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  useEffect(() => {
    if (hasLoggedIn) {
      setShowModal(false);
    }
  }, [hasLoggedIn]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formik = useFormik({
    initialValues: {
      loginName: loginData.loginName,
      loginPassword: loginData.loginPassword,
    },
    validationSchema: formLogin,
    onSubmit: (values, { setSubmitting }) => {
      updateLoginData(values);
      setSubmitting(true);
      setTimeout(() => {
        setHasLoggedIn(true);
        console.log("Has logged in ", hasLoggedIn);
      }, 500);
    },
  });
  return (
    <>
      {showModal && (
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
                  onClick={handleCloseModal}
                  disabled={formik.isValidating || !formik.isValid}
                >
                  {formik.isSubmitting ? "Loggin in..." : "Log in"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
