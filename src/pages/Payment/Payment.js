import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import withLayout from "../../hoc/withLayout";
import CartSummary from "../../components/CartSummary/CartSummary";

import PaymentForm from "../../components/PaymentForm";
import Stepper from "../../components/Stepper/Stepper";

function Payment({ cartItems, handleChange, handleRemove }) {
  return (
    <>
      <Stepper />
      <div className="Space" />
      <div className="row">
        <div className="col-12 col-md-8">
          <header className="jumbotron pt-4 pb-2">
            <h4>Payment details</h4>
            <hr />
            <PaymentForm />
          </header>
        </div>

        <div className="col-12 col-md-4">
          <header className="jumbotron p-2">
            <CartSummary
              cartItems={cartItems}
              handleRemove={handleRemove}
              handleChange={handleChange}
            />
            <hr />
            <div className="col">
              <Link to="/checkout/step-2">
                <Button>Back</Button>
              </Link>
            </div>
            <div className="col">
              <Link to="/checkout/order-summary">
                <Button>Confrim</Button>
              </Link>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(Payment);
