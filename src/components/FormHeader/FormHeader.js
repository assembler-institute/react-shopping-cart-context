import React from "react";

import Stepper from "../Stepper";

export default function FormHeader({ page = 1 }) {
  return (
    <>
      <Stepper activePage={page} />
    </>
  );
}
