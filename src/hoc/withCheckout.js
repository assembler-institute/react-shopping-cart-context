import React from "react";
import CheckoutFooter from "../components/CheckoutFooter";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutSideBar from "../components/CheckoutSideBar";
import "./CheckoutStyles.scss";

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || "Component";
// }

function Checkout(WrappedComponent) {
  // WrappedComponent.displayName = `withCheckout(${getDisplayName(
  //   WrappedComponent,
  // )})`;

  function WrapperComponent() {
    return (
      <section className="mainContainer">
        <div className="checkoutContainer">
          <CheckoutHeader />
          <CheckoutForm />
          <WrappedComponent />

          <CheckoutFooter />
        </div>
        <CheckoutSideBar />
      </section>
    );
  }

  return WrapperComponent;
}

export default Checkout;
