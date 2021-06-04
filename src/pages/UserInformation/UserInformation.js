import React from "react";

import CartSummary from "../../components/CartSummary/CartSummary";
import InformationForm from "../../components/InformationForm/InfomationForm";
import withLayout from "../../hoc/withLayout";

function UserInformation({ cartItems, handleRemove, handleChange }) {
  return (
    <>
      <h1>User Information</h1>
      <div className="row">
        <div className="col col-6">
          <header className="jumbotron">
            <h3>Your details</h3>

            <hr />

            <InformationForm />
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
