import React from "react";
import CheckoutFooter from "../components/CheckoutFooter/CheckoutFooter";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import CheckoutHeader from "../components/CheckoutHeader/CheckoutHeader";
import CheckoutSideBar from "../components/CheckoutSideBar/CheckoutSideBar";

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
