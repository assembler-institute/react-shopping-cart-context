import React from "react";
import { Formik } from "formik";
import Checkout from "../../hoc/withCheckout";
import productSchemaDetails from "./product-schema";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Details() {
  return (
    <>
      <h1>Details</h1>
      <Formik
        initialValues={{
          userName: "",
          userEmail: "",
          userPhone: 0,
        }}
        validationSchema={productSchemaDetails}
        onSubmit={(values) => {
          // eslint-disable-next-line
          console.log(values);
        }}
      >
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Write your name"
              id="userName"
              value={values.userName}
              onChange={(event) => console.log(event.target.value)}
            />
            <Button submitButton block>
              Sumbit
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Checkout(Details);
