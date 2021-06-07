import React from "react";

import "./Step2Shopping.scss";

function Step2Shopping() {
  return (
    <section className="containerStep">
      <div className="headerPage">
        <h2>Billing address</h2>
        <span>Step 2 of 3</span>
      </div>
      <hr />
      <div className="containerInputs">
        <input type="text" />
        <input type="text" />
        <input type="number" />
        <input type="text" />
      </div>
    </section>
  );
}

export default Step2Shopping;
