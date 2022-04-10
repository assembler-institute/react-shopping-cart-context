import CreditCard from "../CreditCard";

import paypal from "../../img/PayPal.svg";
import applePay from "../../img/apple_pay.png";
import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";
import american from "../../img/american.png";
import Breadcrumbs from "../Breadcrumbs";

function FormPaymentDetails() {
  return (
    <>
      <Breadcrumbs active="payment" />
      <div className="d-flex justify-content-between">
        <div>
          <b>Payment Details</b>
        </div>
        <div>Step 3 of 4</div>
      </div>
      <hr />
      <CreditCard />
    </>
  );
}

export default FormPaymentDetails;
