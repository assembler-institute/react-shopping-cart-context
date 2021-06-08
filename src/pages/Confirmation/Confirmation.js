import React from "react";

import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";

import withLayout from "../../hoc/withLayout";

function Confirmation() {
  return <OrderConfirmation />;
}

export default withLayout(Confirmation);
