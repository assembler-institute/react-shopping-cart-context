import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CartSummary from "../../components/CartSummary/CartSummary";
import InformationForm from "../../components/InformationForm/InfomationForm";
import Stepper from "../../components/Stepper/Stepper";
import withLayout from "../../hoc/withLayout";

function UserInformation({ cartItems, handleRemove, handleChange, saveUser }) {
  return (
    <>
      <Stepper />
      <div className="Space" />
      <h1>User Information</h1>
      <div className="row">
        <div className="col-12 col-md-8">
          <header className="jumbotron">
            <h3>Your details</h3>

            <hr />

            <InformationForm saveUser={saveUser} />
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
            <div className="col">
              <Link to="/">
                <Button>Back</Button>
              </Link>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(UserInformation);
