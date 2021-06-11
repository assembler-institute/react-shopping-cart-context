import React, { useContext } from "react";
import Footer from "../components/Footer";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutSideBar from "../components/CheckoutSideBar";
import "./CheckoutStyles.scss";
import ShoppingContext from "../context";

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

          <WrappedComponent />

          <Footer />
        </div>
        <CheckoutSideBar />
        <div>
          <code>{JSON.stringify(useContext(ShoppingContext))}</code>
        </div>
      </section>
    );
  }

  return WrapperComponent;
}

export default Checkout;
