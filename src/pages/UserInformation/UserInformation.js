import React from "react";
import InformationForm from "../../components/InformationForm/InfomationForm";
import withLayout from "../../hoc/withLayout";

function UserInformation() {
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
            <h3>Your Cart</h3>

            <hr />
          </header>
        </div>
      </div>
    </>
  );
}

export default withLayout(UserInformation);
