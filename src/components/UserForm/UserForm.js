import React, { useState } from "react";
import { useFormik } from "formik";

import UserSchema from "./User-schema";
/* import userContext from "../../Contexts/UserContext" */
import Input from "../Input";
import Button from "../Button";
import { useUsers } from "../Context/UserContext";
import { Redirect } from "react-router";

function UserForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const { saveUser } = useUsers();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+34",
    },
    validationSchema: UserSchema,
    onSubmit: (values, { setSubmitting }) => {
      /* updateFormData(values);
            setSubmitting(true); */
      console.log(values);

      saveUser(values);
      setSubmitting(true);
      setTimeout(() => {
        /* saveUser(({ ...prev }) => ({
                ...prev,
                completed: true,
            })); */
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <div className="col">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              Information
            </li>
          </ol>
        </nav>

        <div className="d-flex justify-content-between">
          <div>
            <b>User Information</b>
          </div>
          <div>Step 1 of 3</div>
        </div>
        <hr />
        <div>
          <form onSubmit={formik.handleSubmit} id="userForm">
            <Input
              type="text"
              label="Name"
              id="name"
              value={formik.values.name}
              placeholder="Your name"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.name}
              errorMessage={formik.errors.name}
            />
            <Input
              type="text"
              label="Email"
              id="email"
              value={formik.values.email}
              placeholder="Your email address"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.email}
              errorMessage={formik.errors.email}
            />

            <span>Phone number</span>
            <div>
              <select
                className="countryCode"
                name="countryCode"
                id="countryCode"
                onChange={formik.handleChange}
              >
                <option value="+34">Spain</option>
                <option value="+39">Italy</option>
                <option value="+49">Germany</option>
                <option value="+33">France</option>
              </select>
              <label htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Your phone number"
                  className="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>
            <Button
              submitButton
              block
              disabled={formik.isValidating || !formik.isValid}
            >
              {formik.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>

          {hasSubmitted && <Redirect to="/checkout/step-2" />}
        </div>
      </div>
    </>
  );
}

export default UserForm;
