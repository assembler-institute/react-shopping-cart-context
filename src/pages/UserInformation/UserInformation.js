import React from "react";
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
        <div className="col col-6">
          <header className="jumbotron">
            <h3>Your details</h3>

            <hr />

            <InformationForm saveUser={saveUser} />
          </header>
        </div>

        <div className="col col-6">
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

export default withLayout(UserInformation);
