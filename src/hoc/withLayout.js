import React from "react";

import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SubHeader from "../components/SubHeader";
import SubFooter from "../components/SubFooter";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withLayout(WrappedComponent, isCheckout = false) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <AppHeader />
        {isCheckout && (
          <Main className="container">
            <SubHeader />
          </Main>
        )}
        <Main className={props.fullWidth ? "container-fluid" : "container"}>
          <WrappedComponent {...props} />
        </Main>
        {isCheckout && (
          <Main className="container">
            <SubFooter />{" "}
          </Main>
        )}
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
