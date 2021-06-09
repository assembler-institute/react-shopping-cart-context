import React from "react";

import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";
import CheckoutCart from "../components/CheckoutCart";
import FormHeader from "../components/FormHeader";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withCheckoutLayout(WrappedComponent) {
  WrappedComponent.displayName = `withCheckoutLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  function WrapperComponent({ ...props }) {
    return (
      <>
        <AppHeader />
        <Main className={props.fullWidth ? "container-fluid" : "container"}>
          <div className="row">
            <div className="col col-8">
              <div className="col col-12">
                <header className="jumbotron">
                  <FormHeader page={props.page} />
                </header>
              </div>

              <WrappedComponent {...props} />
            </div>

            <CheckoutCart
              checkout={false}
              className="col col-4"
              cartItems={props.cartItems}
              handleRemove={props.handleRemove}
              handleChange={props.handleChange}
            />
          </div>
        </Main>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default withCheckoutLayout;
