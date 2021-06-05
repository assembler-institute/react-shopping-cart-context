import React from "react";
import "./Step1.scss";
import ShoppingLayout from "../../hoc/ShoppingLayout";
import ProgressBar from "../../components/ProgressBar";

function Step1({ ...routeProps }) {
  return (
    <div className="step1__main--container">
      <div className="step1__main--container--form">
        <ProgressBar {...routeProps} />
        <div>Form payment</div>
        <div>Payment Button</div>
      </div>
      <div>Resum</div>
    </div>
  );
}

export default ShoppingLayout(Step1);
