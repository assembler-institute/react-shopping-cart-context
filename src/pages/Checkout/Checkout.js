import React from "react";
import AddressForm from "../../components/AddressForm";

import withLayout from "../../hoc/withLayout";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CheckOutCart from "../../components/CheckOutCart";
import DetailsForm from '../../components/DetailsForm';

function Checkout() {
  console.log(location.pathname);
  return (
    <div className="row">
      {/* <AddressForm /> */}
      <ul>
        <li>
          <Link to="/checkout/step-1">Step 1</Link>
        </li>
        <li>
          <Link to="/checkout/step-2">Step 2</Link>
        </li>
      </ul>
      {/* <DetailsForm /> */}
      <CheckOutCart className="col col-4" />
      {/* <Switch>
        <Route exact path="/checkout/step-1" component={DetailsForm} />
        <Route exact path="/checkout/step-2" component={AddressForm} />
      </Switch> */}

    </div>
  );
}

export default withLayout(Checkout);
