import React from "react";

import "./FormShopping.scss";
import BtnShopping from "../BtnShopping";

function FormShopping({ ...routeProps }) {
  console.log(routeProps);
  // const [currentActive, setCurrentActive] = useState(1);
  return (
    <form>
      {/* <div>Step1</div>
      <div>Step2</div>
      <div>Step3</div>
      <div>Step4</div> */}
      <BtnShopping />
    </form>
  );
}

export default FormShopping;
