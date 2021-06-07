import React from "react";
import Cart from "../../components/Cart";
import withLayout from "../../hoc/withLayout";

function Checkout({ cartItems, handleChange, handleRemove }) {
  return (
    <div className="row">
      <div className="col col-8 border border-danger">Checkout page YAY</div>
      <Cart
        className="col col-4"
        cartItems={cartItems}
        handleRemove={handleRemove}
        handleChange={handleChange}
      />
    </div>
  );
}

export default withLayout(Checkout);
