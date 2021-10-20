import React from "react";
import FormBillingAddress from "../../components/FormBillingAddress/FormBillingAddress";
import SummaryOrder from "../../components/SummaryOrder";
import withLayout from "../../hoc/withLayout";

function BillingAddressPage() {
  return (
    <div className="row">
      <div className="col col-8">
         <FormBillingAddress /> 
      </div>
       <SummaryOrder className="col col-4" /> 
    </div>
  );
}

export default withLayout(BillingAddressPage);
