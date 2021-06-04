import React from "react";
import Checkout from "../../hoc/withCheckout";

function Confirm() {
  return <h1>Confirm</h1>;
}

export default Checkout(Confirm);
