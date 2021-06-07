import React from "react";
import withLayout from "../../hoc/withLayout";
import CartSummary from "../../components/CartSummary/CartSummary";

import PaymentForm from "../../components/PaymentForm";

function Payment({ cartItems, handleChange, handleRemove }) {
  return (
    <>
      <div className="row">
        <div className="col col-8">
          <header className="jumbotron pt-4 pb-2">
            <h4>Payment details</h4>
            <hr />
            <PaymentForm />
          </header>
        </div>

        <div className="col col-4">
          <header className="jumbotron">
            <CartSummary
              cartItems={cartItems}
              handleRemove={handleRemove}
              handleChange={handleChange}
            />
            <hr />
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(Payment);
