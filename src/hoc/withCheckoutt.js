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
      <>
        <CheckoutHeader />
        <section className="mainContainer">
          <div className="checkoutContainer">
            <div className="wrappedComponenet">
              <WrappedComponent />
            </div>
          </div>
          <CheckoutSideBar />
          <div>
            <code>{JSON.stringify(useContext(ShoppingContext))}</code>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default Checkout;
