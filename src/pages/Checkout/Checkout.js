import React from "react";

import Sidebar from "../../components/Sidebar";

import withLayout from "../../hoc/withLayout";

function Checkout({ processStep, cartItems }) {
  return (
    <div className="row m-4">
      <div className="col col-8"> {processStep}</div>
      <Sidebar cartItems={cartItems} />
    </div>
  );
}

export default withLayout(Checkout);
