import React from "react";

import Input from "../Input";

function CardForm({ formik }) {
  return (
    <form
      className="container-fluid d-flex flex-wrap px-0 mr-4"
      onSubmit={formik.handleSubmit}
      id="paymentForm"
    >
      <Input
        type="text"
        label="Cardholder name"
        id="cardName"
        value={formik.values.cardName}
        placeholder="Name"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.cardName}
        errorMessage={formik.errors.cardName}
      />
      <Input
        type="text"
        label="Card number"
        id="cardNumber"
        value={formik.values.cardNumber}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.cardNumber}
        errorMessage={formik.errors.cardNumber}
      />
      <Input
        shortInput
        type="text"
        label="Exp. date"
        id="cardDate"
        value={formik.values.cardDate}
        placeholder="MM/YY"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.cardDate}
        errorMessage={formik.errors.cardDate}
      />
      <Input
        shortInput
        type="text"
        label="CVV"
        id="cardCVV"
        value={formik.values.cardCVV}
        placeholder="XXX"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        hasErrorMessage={formik.touched.cardCVV}
        errorMessage={formik.errors.cardCVV}
      />
    </form>
  );
}

export default CardForm;
