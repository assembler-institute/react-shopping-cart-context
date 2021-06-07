// import React from "react";
import withLayout from "../../hoc/withLayout";

function Confirmation({ user }) {
  return JSON.stringify({ user }, 2, null);
}

export default withLayout(Confirmation);
