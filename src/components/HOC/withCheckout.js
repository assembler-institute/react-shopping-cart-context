import React from "react";

import { CheckOutCart } from "components/UI/organisms";
import { NavList } from "components/UI/molecules";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withCheckout(WrappedComponent) {
  WrappedComponent.displayName = `withCheckout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <div className="row">
        <div className="d-flex flex-column">
          <NavList />
          <WrappedComponent {...props} />
        </div>
        <CheckOutCart className="col col-4" />
      </div>
    );
  }

  return WrapperComponent;
}

export default withCheckout;
