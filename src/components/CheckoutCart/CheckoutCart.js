import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import ShoppingCartItem from "../ShoppingCartItem";
import ButtonLink from "../ButtonLink";
import { DETAIL } from "../../constants/routes";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function CheckoutCart({
  cartItems,
  handleRemove,
  handleChange,
  checkout,
  ...props
}) {
  const [state, setState] = useState({ error: false, errorCode: "" });

  function discountCode() {
    setState({ error: true, errorCode: "Wrong code." });
  }

  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h3 className="h3 mt-2">Order Summary</h3>
          <hr className="mb-3" />
        </div>

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
              handleRemove={handleRemove}
              handleChange={handleChange}
            />
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <div className="col">
          <h4 className="h5 mb-3">Gift card/Discount code</h4>
          <form noValidate autoComplete="off">
            <div className="row">
              <div className="col">
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  size="small"
                  error={state.error}
                  helperText={state.errorCode}
                />
              </div>
              <div className="col-auto">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={discountCode}
                >
                  Apply
                </Button>
              </div>
            </div>
          </form>
          <hr className="mb-3" />
        </div>
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>{0.79 * getCartTotal(cartItems)}€</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Tax</p>
                <p>{0.21 * getCartTotal(cartItems)}€</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping</p>
                <p>{0.0}€</p>
              </div>
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getCartTotal(cartItems)}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            {checkout && (
              <div className="col col-12 d-flex justify-content-center">
                <ButtonLink page={DETAIL}>Checkout</ButtonLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CheckoutCart;
