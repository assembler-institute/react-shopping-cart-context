import React, { useState } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";

import withLayout from "../../../hoc/withLayout";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

import PersonalDetailsSchema from "./PersonalDetailsSchema";

const isCheckout = true;

function PersonalDetails({ cartItems }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", phonePrefix: 0, phoneNumber: 0 },
    validationSchema: PersonalDetailsSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <div className="row">
      <div className="col col-8">
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
          <Input
            type="number"
            label="Phone number"
            id="phone-number"
            value={formik.values.phoneNumber}
            placeholder="Phone number"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.phoneNumber}
            errorMessage={formik.errors.phoneNumber}
          />
          <Button
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
        {hasSubmitted && <Redirect to="/" />}
      </div>

      <div className="col col-4">
        {cartItems.map((item) => (
          <div key={item.id} id={item.id}>
            <p>Product name: {item.title}</p>
            <img
              src={item.img}
              alt={item.title}
              style={({ width: "100px" }, { height: "100px" })}
            />
            <p>Amount: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withLayout(PersonalDetails, isCheckout);
