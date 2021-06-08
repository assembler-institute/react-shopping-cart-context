import React from "react";
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
    const formStep = "Your details";
    return (
      <div className="col col-8">
        <header className="mt-4 mb-4 p-0 d-flex container" {...props}>
          <h6 className="mr-3 text-primary font-weight-bold">1. Account</h6>
          <h6 className="mr-3 text-muted">2. Billing</h6>
          <h6 className="mr-3 text-muted">3. Payment</h6>
          <h6 className="mr-3 text-muted">4. Resume</h6>
        </header>
        <h3 className="mb-3 pb-2 border-bottom text-primary">{formStep}</h3>
        <Main className="border-bottom pb-3">
          <WrappedComponent {...props} />
        </Main>
        <footer className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-primary px-5"
            disabled="true"
            type="button"
          >
            Back
          </button>
          <button className="btn btn-primary px-5" type="button">
            Next
          </button>
        </footer>
      </div>
    );
  }

  return WrapperComponent;
}

export default formHeader;
