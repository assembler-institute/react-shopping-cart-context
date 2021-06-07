import React, { useContext } from "react";

import FormContext from "../../../context/form-context";

function CheckoutProfile() {
  const { data: formData } = useContext(FormContext);
  return (
    <>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  );
}

export default CheckoutProfile;
