import React from "react";

import { CheckOutCart, NavList } from "components";

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
        <div className="row flex justify-content-between">
          <div className="flex-grow-1">
            <NavList />
            <WrappedComponent {...props} />
          </div>

          <CheckOutCart className="col col-4" />
        </div>
      </div>
    );
  }

  return WrapperComponent;
}

export default withCheckout;
