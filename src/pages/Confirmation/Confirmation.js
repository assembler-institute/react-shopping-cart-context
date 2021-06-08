// import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import withLayout from "../../hoc/withLayout";

function Confirmation() {
  const user = useContext(UserContext);
  return JSON.stringify({ user }, 2, null);
}

export default withLayout(Confirmation);
