import React from "react";
import AddressForm from "../../components/AddressForm";
import withLayout from "../../hoc/withLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckOutCart from "../../components/CheckOutCart";

function Checkout() {
  console.log(location.pathname);
  return (
    <div className="row">
      <AddressForm />
      <CheckOutCart className="col col-4" />
    </div>
  );
}

export default withLayout(Checkout);
