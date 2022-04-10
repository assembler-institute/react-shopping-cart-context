import React from "react";

import withLayout from "../../hoc/withLayout";
import UserForm from "../../components/UserForm";
import SummaryOrder from "../../components/SummaryOrder";


function UserInfo() {
  return (
    <div className="row">
      <div className="col col-8">
        <UserForm />
      </div>
      <SummaryOrder className="col col-4" />
    </div>
  );
}

export default withLayout(UserInfo);
