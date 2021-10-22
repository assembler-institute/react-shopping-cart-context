import React from "react";
import { Redirect } from "react-router";
import { useUsers } from "../../components/Context/UserContext";
import FormBillingAddress from "../../components/FormBillingAddress/FormBillingAddress";
import SummaryOrder from "../../components/SummaryOrder";
import withLayout from "../../hoc/withLayout";

function BillingAddressPage() {
  const { step } = useUsers();
/*   if (step === 2) { */
    return (
      <div className="row">
        <div className="col col-8">
          <FormBillingAddress />
        </div>
        <SummaryOrder className="col col-4" />
      </div>
    );
/*   }
  return <Redirect to="/" />; */
}

export default withLayout(BillingAddressPage);
