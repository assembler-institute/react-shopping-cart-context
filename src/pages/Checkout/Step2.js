import React from "react";
import ShoppingLayout from "../../hoc/ShoppingLayout";
import ProgressBar from "../../components/ProgressBar";

function Step2({ ...routeProps }) {
  return (
    <div className="step1_main--container">
      <div>
        <ProgressBar {...routeProps} />
        <div>Form payment</div>
        <div>Payment Button</div>
      </div>
      <div>Resum</div>
    </div>
  );
}

export default ShoppingLayout(Step2);
