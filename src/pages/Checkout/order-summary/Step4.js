import React from "react";

// import NewClientForm from "../../../components/NewClientForm";
import OrderSummary from "../../../components/OrderSummary";
import withLayout from "../../../hoc/withLayout";

function Step4({ cartItems }) {
  return (
    <div className="row">
      OrderSummary
      {/* <NewClientForm /> */}
      <OrderSummary className="col col-4" cartItems={cartItems} />
    </div>
  );
}

export default withLayout(Step4);
