import React from "react";
import { useContext } from "react";
import CheckoutFooter from "../components/CheckoutFooter";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutSideBar from "../components/CheckoutSideBar";
import ShoppingContext from "../context";

// function getDisplayName(WrappedComponent) {
//   return WrappedComponent.displayName || WrappedComponent.name || "Component";
// }

function Checkout(WrappedComponent) {
  // WrappedComponent.displayName = `withCheckout(${getDisplayName(
  //   WrappedComponent,
  // )})`;

  function WrapperComponent() {
    // const { details, updateDetails } = useContext(ShoppingContext);
    return (
      <>
        <CheckoutHeader />
        <CheckoutForm />
        <WrappedComponent />
        <div>
          <code>{JSON.stringify(useContext(ShoppingContext))}</code>
        </div>
        <CheckoutSideBar />
        <CheckoutFooter />
      </>
    );
  }

  return WrapperComponent;
}

export default Checkout;
