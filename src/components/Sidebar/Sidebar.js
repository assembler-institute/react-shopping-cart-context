/* eslint-disable no-console */
import React, { useContext } from "react";
import { useFormik } from "formik";

// import ShoppingCartItem from "../ShoppingCartItem";
import SummaryItem from "../SummaryItem";

import "./Sidebar.scss";
import Button from "../Button";
import FormSchema from "./form-schema";

import CartContext from "../../context/cart-context";

function Sidebar() {
  const { cartItems, total, remove, change } = useContext(CartContext);

  const formik = useFormik({
    initialValues: {
      discountCode: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      console.log(values);
      // event.target.blur(); ????
    },
  });
  return (
    <div id="sidebar" className=" col col-4">
      <div className=" col sidebar-title mb-4">
        <h2>Checkout summary</h2>
      </div>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <SummaryItem
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
      <div className="col sidebar-disccount">
        <hr className="mt-0" />

        <h4 className="h5">
          <strong>Discount code</strong>
        </h4>
        <form
          className="d-flex align-content-start"
          onSubmit={formik.handleSubmit}
        >
          <label className="mr-4 mb-0" htmlFor="discountCode">
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
              <p className="invalid-feedback my-1">
                {formik.errors.discountCode}
              </p>
            )}
          </label>
          <Button submitButton>Enter</Button>
        </form>
        <hr />
      </div>

      <div className="col sidebar-totals d-flex justify-content-between">
        <h4 className="h5">
          <strong>Total</strong>
        </h4>
        <h4 className="h5">{total}€</h4>
      </div>
    </div>
  );
}

export default Sidebar;
