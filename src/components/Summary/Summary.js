import React, { useContext } from "react";
import { StateContext } from "../../context/state-context";
// import { ACTIONS } from "../../../context/state-reducer";

function Summary() {
  const value = useContext(StateContext);
  const { cartItems, account, billing, payment } = value;
  return (
    <div>
      {JSON.stringify(cartItems)}
      {JSON.stringify(account)}
      {JSON.stringify(billing)}
      {JSON.stringify(payment)}
    </div>
  );
}

export default Summary;
