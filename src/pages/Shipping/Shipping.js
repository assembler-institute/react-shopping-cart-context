import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ShippingForm from "../../components/ShippingForm/ShippingForm";
import withLayout from "../../hoc/withLayout";
import CartSummary from "../../components/CartSummary/CartSummary";
import Stepper from "../../components/Stepper/Stepper";

function Shipping({ cartItems, handleChange, handleRemove, user }) {
  return (
    <>
      <Stepper />
      <div className="Space" />
      <h1>Shipping Information</h1>
      <div className="row">
        <div className="col-12 col-md-8">
          <header className="jumbotron">
            <h3>Shipping details</h3>

            <hr />

            <ShippingForm user={user} />
          </header>
        </div>

        <div className="col-12 col-md-4">
          <header className="jumbotron">
            <CartSummary
              cartItems={cartItems}
              handleRemove={handleRemove}
              handleChange={handleChange}
            />

            <hr />
            <div className="row-4 d-flex justify-content-around">
              <Link to="/checkout/step-1">
                <Button>Back</Button>
              </Link>
              <Link to="/">
                <Button>Home</Button>
              </Link>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(Shipping);
