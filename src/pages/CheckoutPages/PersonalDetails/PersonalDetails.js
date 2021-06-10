import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { Redirect, Link } from "react-router-dom";

// import Select from "react-select";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import OverviewSidebar from "../../../components/OverviewSidebar";

import PersonalDetailsSchema from "./PersonalDetailsSchema";

import checkoutContext from "../../../context/checkoutData";

import "./PersonalDetails.scss";

const isCheckout = true;

// const prefixPhoneOptions = [
//   { value: "+34", label: "Spain +34" },
//   { value: "+39", label: "Italy +39" },
//   { value: "+49", label: "Germany +49" },
//   { value: "+33", label: "France +33" },
//   { value: "+31", label: "Netherlands +31" },
// ];

function PersonalDetails({ cartItems }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { setCheckoutData, state } = useContext(checkoutContext);

  const formik = useFormik({
    initialValues: {
      name: state.name,
      email: state.email,
      phonePrefix: state.phonePrefix ? state.phonePrefix : "+34",
      phoneNumber: state.phoneNumber,
    },
    validationSchema: PersonalDetailsSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setCheckoutData({
        name: values.name,
        email: values.email,
        phonePrefix: values.phonePrefix,
        phoneNumber: values.phoneNumber,
        navBar: 37.5,
        disabledBillingAddress: false,
      });
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div className="row mt-5">
      <div className="col col-8">
        <h4 className="mb-4">Personal Details</h4>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            label="Name"
            id="name"
            value={formik.values.name}
            placeholder="Name"
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
            placeholder="Email"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.email}
            errorMessage={formik.errors.email}
          />
          {/* <Select
            defaultValue={prefixPhoneOptions[0]}
            options={prefixPhoneOptions}
            value={formik.values.phonePrefix}
            onChange={(value) =>
              formik.setFieldValue("phonePrefix", value.value)
            }
            // onChange={formik.setFieldValue("phonePrefix")}
            onBlur={formik.handleBlur}
            id="phonePrefix"
          /> */}
          <p className="mb-2 mt-3"> Phone Number </p>
          <div className="form-group d-flex mb-3">
            <select
              className="phone-prefix-select"
              value={formik.values.phonePrefix}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="phonePrefix"
            >
              <option value="+34">Spain +34</option>
              <option value="+39">Italy +39</option>
              <option value="+49">Germany +49</option>
              <option value="+33">France +33</option>
              <option value="+31">Netherlands +31</option>
            </select>
            <div className="phone-number">
              <input
                className={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "form-control is-invalid"
                    : "form-control is-valid"
                }
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="invalid-feedback">{formik.errors.phoneNumber}</p>
            )}
          </div>
          <div className="row">
            <div className="col col-6">
              <Link className="w-100" to="/">
                <Button block>Back</Button>
              </Link>
            </div>
            <div className="col col-6">
              <Button
                submitButton
                block
                disabled={formik.isValidating || !formik.isValid}
              >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>
        {hasSubmitted && <Redirect to="/checkout/step-2" />}
      </div>
      <div className="col col-4">
        <OverviewSidebar className="col" cartItems={cartItems} />
      </div>
    </div>
  );
}

export default withLayout(PersonalDetails, isCheckout);
