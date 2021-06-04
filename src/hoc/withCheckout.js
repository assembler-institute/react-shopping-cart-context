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

  function WrapperComponent({ ...props }) {
    console.log(props);
    const { path } = props;
    console.log(path);
    return (
      <>
        <CheckoutHeader />
        <CheckoutForm />
        <WrappedComponent {...props} />

        <CheckoutSideBar />
        <CheckoutFooter path={path} />
      </>
    );
  }

  return WrapperComponent;
}

export default Checkout;
