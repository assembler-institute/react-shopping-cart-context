import React from "react";

import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Cart from "../components/Cart";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/* eslint no-param-reassign: [2, { "props": false }] */
function withCheckoutLayout(WrappedComponent) {
  WrappedComponent.displayName = `withCheckoutLayout(${getDisplayName(
    WrappedComponent,
  )})`;

  // function WrapperComponent({ ...props }) {
  //   return (
  //     <>
  //       <AppHeader />
  //       <Main className={props.fullWidth ? "container-fluid" : "container"}>
  //         <WrappedComponent {...props} />
  //       </Main>
  //       <Footer />
  //     </>
  //   );
  // }
  function WrapperComponent({ ...props }) {
    return (
      <>
        <AppHeader />
        <Main className={props.fullWidth ? "container-fluid" : "container"}>
          <div className="row">
            <div className="col col-8">
              <div className="col col-12">
                <header className="jumbotron">
                  <h1 className="display-4 mb-5 text-danger">
                    AQUI VA EL STEPPER
                  </h1>
                  {/* <p className="lead">
                    This is the best shoe shop ever, you will never find a
                    better one.
                  </p> */}
                  {/* <p className="font-weight-bold">Buy now!</p> */}
                </header>
              </div>

              <WrappedComponent {...props} />
            </div>

            <Cart
              checkout
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
