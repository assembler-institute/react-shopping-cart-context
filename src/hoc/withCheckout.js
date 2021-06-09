import React, { useContext } from "react";
import CheckoutFooter from "../components/CheckoutFooter";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutSideBar from "../components/CheckoutSideBar";
import ShoppingContext from "../context";
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
          <div>
            <code>{JSON.stringify(useContext(ShoppingContext))}</code>
          </div>

          <CheckoutFooter />
        </div>
        <CheckoutSideBar />
      </section>
    );
  }

  return WrapperComponent;
}

export default Checkout;
