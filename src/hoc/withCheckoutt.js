import React from "react";
import Footer from "../components/Footer";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutSideBar from "../components/CheckoutSideBar";
import "./CheckoutStyles.scss";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function Checkout(WrappedComponent) {
  // eslint-disable-next-line no-param-reassign
  WrappedComponent.displayName = `withCheckout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent() {
    return (
      <>
        <CheckoutHeader />
        <section className="mainContainer">
          <div className="checkoutContainer">
            <div className="wrappedComponenet">
              <WrappedComponent />
            </div>
          </div>
          <CheckoutSideBar />
        </section>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default Checkout;
