import React from "react";

import HeaderShopping from "../components/HeaderShopping";
import FooterShopping from "../components/FooterShopping";
import "./ShoppingLayout.scss";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function ShoppingLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <section className="main_layout">
        <HeaderShopping />
        <WrappedComponent {...props} />
        <FooterShopping />
      </section>
    );
  }

  return WrapperComponent;
}

export default ShoppingLayout;
