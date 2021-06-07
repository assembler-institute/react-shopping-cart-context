import React, { useContext } from "react";
import OrderSummary from "../../components/OrderSummary";
import withLayout from "../../hoc/withLayout";

import CartContext from "../../context/cart-context";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="row">
      <div className="col col-8 border border-danger">Checkout page YAY</div>
      <OrderSummary className="col col-4" cartItems={cartItems} />
    </div>
  );
}

export default withLayout(Checkout);
