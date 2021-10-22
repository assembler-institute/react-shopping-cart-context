import React from "react";

import { Footer, AppHeader } from "components/UI/organisms";
import { Main } from "components/UI/atoms";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withLayout(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <AppHeader />
        <Main className={props.fullWidth ? "container-fluid" : "container"}>
          <WrappedComponent {...props} />
        </Main>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
