/* eslint-disable no-console */
import React, { useEffect, useState } from "react";

import withLayout from "../../hoc/withLayout";

import ProcessBar from "../../components/ProcessBar";
import Sidebar from "../../components/Sidebar";
import CheckoutProfile from "./CheckoutProfile";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutBilling from "./CheckoutBilling/CheckoutBilling";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

import FormContextProvider from "../../components/ContextComponents/FormContextProvider";

import { PROFILE, BILLING, PAYMENT, SUMMARY } from "../../utils/constants";

import "./Checkout.scss";

function Checkout({ processStep }) {
  const [processCompletedFlags, setProcessCompletedFlags] = useState({
    profile: false,
    billing: false,
    payment: false,
  });

  useEffect(() => {
    console.log(processCompletedFlags);
  }, [processCompletedFlags]);

  return (
    <FormContextProvider>
      <div className="row d-flex">
        {processStep !== SUMMARY && (
          <>
            <div className="col col-8">
              <ProcessBar processCompletedFlags={processCompletedFlags} />
              {processStep === PROFILE && (
                <CheckoutProfile
                  setProcessCompletedFlags={setProcessCompletedFlags}
                />
              )}
              {processStep === BILLING && (
                <CheckoutBilling
                  setProcessCompletedFlags={setProcessCompletedFlags}
                />
              )}
              {processStep === PAYMENT && (
                <CheckoutPayment
                  setProcessCompletedFlags={setProcessCompletedFlags}
                />
              )}
            </div>
            <div id="sidebar" className="col col-4">
              <Sidebar />
            </div>
          </>
        )}
        {processStep === SUMMARY && <CheckoutSummary />}
      </div>
    </FormContextProvider>
  );
}

export default withLayout(Checkout);
