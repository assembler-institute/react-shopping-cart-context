import React from "react";

import CheckoutHeader from "../components/CheckoutHeader";
import CheckoutSidebar from "../components/CheckoutSidebar";
import CheckoutFooter from "../components/CheckoutFooter";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function checkoutLayout(WrappedComponent) {
  // eslint-disable-next-line no-param-reassign
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <div className="row">
        <div className="col col-8">
          <div className="row">
            <div className="col col-12">
              <CheckoutHeader />
              <WrappedComponent {...props} />
            </div>
          </div>
        </div>
        <div className="col col-4">
          <div className="row">
            <CheckoutSidebar />
          </div>
        </div>
        <CheckoutFooter />
      </div>
    );
  }

  return WrapperComponent;
}

export default checkoutLayout;
