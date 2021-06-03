import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import Input from "../../components/Input";
import Button from "../../components/Button";

import withLayout from "../../hoc/withLayout";
// import Cart from "../../components/Cart";

// import productSchema from "./product-schema";

function Detail() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tel: "",
    },
    // validationSchema: productSchema,
    onSubmit: (values, { setSubmitting }) => {
      //   const newProduct = addProductDetails(values);
      //   saveNewProduct(newProduct);
      setSubmitting(true);

      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Product title"
          id="title"
          value={formik.values.title}
          placeholder="Product title"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.title}
          errorMessage={formik.errors.title}
        />
        <Input
          type="number"
          label="Product price"
          id="price"
          value={formik.values.price}
          placeholder="Product price"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.price}
          errorMessage={formik.errors.price}
        />
        <Input
          type="text"
          label="Product image url"
          id="img"
          value={formik.values.img}
          placeholder="Product image url"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.img}
          errorMessage={formik.errors.img}
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
    </>
  );
}

export default withLayout(Detail);
