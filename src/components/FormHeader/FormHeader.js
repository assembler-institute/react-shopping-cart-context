import React from "react";

import Stepper from "../Stepper";

export default function FormHeader({ page = 1 }) {
  return (
    <>
      <div className="d-md-none">
        <Stepper activePage={page} />
      </div>
      <div className="d-none d-md-block">
        <Stepper mobile activePage={page} />
      </div>
    </>
  );
}
