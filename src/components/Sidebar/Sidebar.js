/* eslint-disable no-console */
import React, { useContext } from "react";
import { useFormik } from "formik";

import ShoppingCartItem from "../ShoppingCartItem";

import "./Sidebar.scss";
import Button from "../Button";
import FormSchema from "./form-schema";

import CartContext from "../../context/cart-context";

function Sidebar() {
  const { cartItems, remove, change } = useContext(CartContext);
  const formik = useFormik({
    initialValues: {
      discountCode: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div id="sidebar" className="col-4">
      <div className="sidebar-products">Products go here</div>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <ShoppingCartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
            unitsInStock={item.unitsInStock}
            handleRemove={remove}
            handleChange={change}
          />
        ))}
      <hr />
      <div className="sidebar-disccount">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="discountCode">
            <input
              type="text"
              id="discountCode"
              name="discountCode"
              value={formik.values.discountCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.discountCode && formik.errors.discountCode
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {formik.touched.discountCode && formik.errors.discountCode && (
              <p className="invalid-feedback">{formik.errors.discountCode}</p>
            )}
          </label>

          <Button submitButton>Enter</Button>
        </form>
      </div>
      <hr />
      <div className="sidebar-totals">Total goes here</div>
    </div>
  );
}

export default Sidebar;
