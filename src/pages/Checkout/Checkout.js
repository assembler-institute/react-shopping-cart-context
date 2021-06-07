import React, { useContext } from "react";

import NewClientForm from "../../components/NewClientForm";
import OrderSummary from "../../components/OrderSummary";
import withLayout from "../../hoc/withLayout";

import CartContext from "../../context/cart-context";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="row">
      <NewClientForm />
      <OrderSummary className="col col-4" cartItems={cartItems} />
    </div>
  );
}

export default withLayout(Checkout);
