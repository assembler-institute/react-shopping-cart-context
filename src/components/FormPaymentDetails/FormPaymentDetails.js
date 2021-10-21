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
      {/* <div className="d-flex justify-content-around">
        <div className="form-check border p-1">
          <input
            className="form-check-input"
            type="radio"
            name="pay"
            id="card"
          />
          <label className="form-check-label" htmlFor="card">
            Credit/Debit Card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="pay"
            id="paypal"
          />
          <label className="form-check-label" htmlFor="paypal">
            <img src={paypal} />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="pay"
            id="apple"
          />
          <label className="form-check-label" htmlFor="apple">
            <img src={applePay} style={{ width: "50px" }} />
          </label>
        </div>
      </div> */}
      {/* <div>
        <div>We accept the folling debit/credit cards</div>
        <img src={visa} style={{ width: "50px",border: "1px solid #EEE"}} />
        <img src={mastercard} style={{ width: "50px" ,border: "1px solid #EEE"}} />
        <img src={american} style={{ width: "50px",border: "1px solid #EEE" }} />
      </div> */}
      <CreditCard />
      {/* <input type="checkbox" /> I have read and I accept the booking conditions,
      general terms and privacy policy. */}
    </>
  );
}

export default FormPaymentDetails;
