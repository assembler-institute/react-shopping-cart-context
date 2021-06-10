import React from "react";
import Footer from "../components/Footer";
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
          <div className="wrappedComponenet">
            <WrappedComponent />
          </div>

          <Footer />
        </div>
        <CheckoutSideBar />
      </section>
    );
  }

  return WrapperComponent;
}

export default Checkout;
