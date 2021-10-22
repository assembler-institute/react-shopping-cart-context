import React from "react";

import withLayout from "../../hoc/withLayout"; 
import UserForm from "../../components/UserForm";
import SummaryOrder from "../../components/SummaryOrder";
import { useUsers } from "../../components/Context/UserContext";
import { Redirect } from "react-router";

function UserInfo() {
  const { step } = useUsers();
  if (step === 1) {
    return (
      <div className="row">
        <div className="col col-8">
          <UserForm />
        </div>
        <SummaryOrder className="col col-4" />
      </div>
    );
  }
  return (<Redirect to="/" />)
  
}

export default withLayout(UserInfo);
