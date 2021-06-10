import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import personalSchema from "./personal-schema";
import ShoppingCartItem from "../../components/ShoppingCartItem";

function PersonalDetails({ cartItems, ...props }) {
  const [hasSubmitted] = useState(false);

  function getCartTotal(cart) {
    return cart.reduce((accum, item) => {
      return accum + item.price * item.quantity;
    }, 0);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: 0,
    },
    validationSchema: personalSchema,
  });

  return (
    <div className="row">
      <form onSubmit={formik.handleSubmit} className="col-6">
        <Input
          type="text"
          label="Your name"
          id="name"
          value={formik.values.name}
          placeholder="Your Name"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.name}
          errorMessage={formik.errors.name}
        />

        <Input
          type="email"
          label="Email Address"
          id="email"
          value={formik.values.email}
          placeholder="Your Email Address"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.email}
          errorMessage={formik.errors.email}
        />

        <Input
          type="number"
          label="Mobile Phone Number"
          id="phoneNumber"
          value={formik.values.phoneNumber}
          placeholder="Your Mobile Phone Number"
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
      <div className="col-6" {...props}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ShoppingCartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              quantity={item.quantity}
              unitsInStock={item.unitsInStock}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <h4>
          <strong>{getCartTotal(cartItems)}€</strong>
        </h4>
      </div>
      {hasSubmitted && <Link to="/" />}
    </div>
  );
}
export default PersonalDetails;
