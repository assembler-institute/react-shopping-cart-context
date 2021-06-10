import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import ShoppingContext from "../../context";

import "./CheckoutHeader.scss";

function CheckoutHeader() {
  const { progresBar } = useContext(ShoppingContext);
  let progresBarClass = "";
  const Sphere1 = "Sphere1";
  let Sphere2 = "Sphere2";
  let Sphere3 = "Sphere3";
  let detailsText = "detailsText";
  let adressText = "adressText";
  let paymentText = "paymentText";
  if (progresBar === 1) {
    progresBarClass = "progressLine1";
    detailsText = "detailsText_on";
  }
  if (progresBar === 2) {
    progresBarClass = "progressLine2";
    Sphere2 = "Sphere2_ON";
    adressText = "adressText_on";
    detailsText = "detailsText";
  }
  if (progresBar === 3) {
    progresBarClass = "progressLine3";
    Sphere3 = "Sphere3_ON";
    Sphere2 = "Sphere2_ON";
    paymentText = "paymentText_on";
    adressText = "adressText";
  }

  return (
    <header className="WrappHeader">
      <div className="Line">
        <div className={progresBarClass} />
        <div className={Sphere1}>
          <p className={detailsText}>Details</p>
        </div>
        <div className={Sphere2}>
          <p className={adressText}>Adress</p>
        </div>
        <div className={Sphere3}>
          <p className={paymentText}>Payment</p>
        </div>
      </div>
    </header>
  );
}

export default CheckoutHeader;
