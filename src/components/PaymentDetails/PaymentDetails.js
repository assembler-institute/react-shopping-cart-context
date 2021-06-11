import React, { useState } from "react";
import Cards from "react-credit-cards";
import { Link } from "react-router-dom";
import "react-credit-cards/lib/styles.scss";
import "./payment.scss";
import withLayout from "../../hoc/withLayout";

function PaymentDetails() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div className="container mt-4">
      <p className="mt-4 firstparagraph">How would you like to pay?</p>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="creditanddebit">
            <input className="radiocredit" type="radio" />
            <p className="creditparagrahp">Credit/Debit card</p>
          </div>
          <div className="paypal">
            <input className="radiopaypal" type="radio" disabled />
            <img
              className="paypalimg"
              src="https://i.ibb.co/XLbgp34/Pay-Pal-Logo.png"
              alt="paypal"
            />
          </div>
          <div className="apple">
            <input className="radioapple" type="radio" disabled />
            <img
              className="appleimg"
              src="https://i.ibb.co/ftp9CZw/Apple-Pay-logo-svg.png"
              alt="Apple-Pay-logo-svg"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 secondparagraph">
        We accept the following debit/credit cards
      </p>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="visaicon">
            <img
              className="visaimg"
              src="https://i.ibb.co/QXcMXmh/visa.png"
              alt="visa"
            />
          </div>
          <div className="americanexpressicon">
            <img
              className="americanexpressimg"
              src="https://i.ibb.co/xssJ5X5/american-express.png"
              alt="americanexpress"
            />
          </div>
          <div className="americanexpressicon">
            <img
              className="americanexpressimg"
              src="https://i.ibb.co/ZY0t3xS/Mastercard-Logo.png"
              alt="mastercad"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 creditCard">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 info">
          <form>
            <input
              maxLength="50"
              className="cardname"
              type="text"
              name="name"
              placeholder="Cardholder name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              maxLength="16"
              className="cardnumber mt-4"
              type="tel"
              name="number"
              placeholder="Card number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />

            <input
              className="cardexpiry"
              type="text"
              name="expiry"
              placeholder="mm/yy"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              maxLength="3"
              className="cardcvc"
              type="tel"
              name="cvc"
              placeholder="CVV"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </form>
          <input className="mt-3" type="checkbox" />
          &nbsp;&nbsp;&nbsp;
          <span>
            I have read and accept the booking conditions, general terms and
            privacy policy.
          </span>
          <div className="sslcertifaction">
            <i className="fab fa-expeditedssl fa-3x mt-3" />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <p className="certification mt-3">
              We use secure SSL transmission and encrypted storage to protect
              your personal information.
            </p>
          </div>
          <Link to="/checkout/order-summary">
            <button type="button" className="mt-3 btn btn-primary">
              Complete Booking
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withLayout(PaymentDetails);
