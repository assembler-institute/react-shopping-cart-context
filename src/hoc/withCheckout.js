import React from "react";

import CheckoutFooter from "../components/CheckoutFooter";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutSideBar from "../components/CheckoutSideBar";

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || "Component";
// }

function Checkout(WrappedComponent) {
  // WrappedComponent.displayName = `withCheckout(${getDisplayName(
  //   WrappedComponent,
  // )})`;

  function WrapperComponent() {
    return (
      <>
        <CheckoutHeader />
        <CheckoutForm />
        <WrappedComponent />

        <CheckoutSideBar />
        <CheckoutFooter />
      </>
    );
  }

  return WrapperComponent;
}

export default Checkout;
