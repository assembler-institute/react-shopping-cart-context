import React from "react";
import { Redirect } from "react-router-dom";

import { useCartItems } from "context";

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
    const { cartItemIds } = useCartItems();

    if (cartItemIds.length <= 0) {
      return <Redirect to="/" />;
    }

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
