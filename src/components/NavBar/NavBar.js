import React, { useContext } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

import checkoutContext from "../../context/checkoutData";

function NavBar() {
  const { state } = useContext(checkoutContext);
  return (
    <div>
      <ProgressBar now={state.navBar} />
    </div>
  );
}

export default NavBar;
