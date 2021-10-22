import CreditCard from "../CreditCard";

import paypal from "../../img/PayPal.svg";
import applePay from "../../img/apple_pay.png";
import visa from "../../img/visa.png";
import mastercard from "../../img/mastercard.png";
import american from "../../img/american.png";

function FormPaymentDetails() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item" aria-current="page">
            Information
          </li>
          <li className="breadcrumb-item" aria-current="page">
            Delivery
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Payment
          </li>
        </ol>
      </nav>
      <div className="d-flex justify-content-between">
        <div>
          <b>Payment Details</b>
        </div>
        <div>Step 3 of 3</div>
      </div>
      <hr />
      <CreditCard />
    </>
  );
}

export default FormPaymentDetails;
