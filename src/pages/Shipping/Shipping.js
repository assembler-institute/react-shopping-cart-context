import React from "react";
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import withLayout from "../../hoc/withLayout";

function Shipping() {
  return (
    <>
      <h1>Shipping Information</h1>
      <div className="row">
        <div className="col col-6">
          <header className="jumbotron">
            <h3>Your details</h3>

            <hr />

            <ShippingForm />
          </header>
        </div>

        <div className="col col-6">
          <header className="jumbotron">
            <h3>Your Cart</h3>

            <hr />
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(Shipping);
