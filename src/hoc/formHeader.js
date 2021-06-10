import React from "react";
import { useLocation } from "react-router-dom";
import Main from "../components/Main";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function formHeader(WrappedComponent) {
  WrappedComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    const path = useLocation();
    console.log(path);
    // const url = path.pathname;

    return (
      <div className="col col-8">
        <header className="mt-4 mb-4 p-0 d-flex container" {...props}>
          <h6 className="mr-3 text-primary font-weight-bold">1. Account</h6>
          <h6 className="mr-3 text-muted">2. Billing</h6>
          <h6 className="mr-3 text-muted">3. Payment</h6>
          <h6 className="mr-3 text-muted">4. Resume</h6>
        </header>
        {/* {title && (
          <h3 className="mb-3 pb-2 border-bottom text-primary">{title}</h3>
        )} */}
        <Main className="border-bottom pb-3">
          <WrappedComponent {...props} />
        </Main>
      </div>
    );
  }

  return WrapperComponent;
}

export default formHeader;
