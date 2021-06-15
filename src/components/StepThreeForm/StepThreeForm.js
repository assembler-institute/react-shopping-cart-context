import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import Input from "../Input";
import stepThreeSchema from "./StepThree-schema";
import { orderContext } from "../../CheckoutContext";
import paypal from "../../assets/img/PayPal.svg";
import apple from "../../assets/img/ApplePay.svg";
import visa from "../../assets/img/Visa.svg";
import mastercard from "../../assets/img/Mastercard.svg";
import american from "../../assets/img/American.svg";
import "./StepThreeForm.scss";

function StepThreeForm() {
  const { submitStepThree, stepThree } = useContext(orderContext);
  const { cardHolder, cardNumber, expiryDate, cvv, acceptedTerms } = stepThree;
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      cardHolder: cardHolder,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
      acceptedTerms: acceptedTerms,
    },
    validationSchema: stepThreeSchema,
    onSubmit: (values) => {
      submitStepThree(values);
      history.push("/checkout/order-summary");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} id="stepThree">
      <h5>How would you like to pay?</h5>
      <div className="d-flex justify-content-between mb-2">
        <div className="paymentCanvas">
          <input type="radio" name="method" className="mr-2" required />
          <span>Credit / Debit Card</span>
        </div>
        <div className="paymentCanvas">
          <input type="radio" name="method" className="mr-1" disabled />
          <img src={paypal} alt="PayPal" height="70" />
        </div>
        <div className="paymentCanvas">
          <input type="radio" name="method" className="mr-1" disabled />
          <img src={apple} alt="Apple Pay" height="50" />
        </div>
      </div>

      <div>
        <p>We accept the following credit/debit cards:</p>
        <div className="d-flex">
          <div className="credit">
            <img src={visa} alt="Visa" height="30" />
          </div>
          <div className="credit">
            <img src={mastercard} alt="MasterCard" height="30" />
          </div>
          <div className="credit">
            <img src={american} alt="American Express" height="30" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="cardData">
          <Input
            type="text"
            label="Card holder name"
            id="cardHolder"
            value={formik.values.cardHolder}
            placeholder="Complete name of the card holder"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardHolder}
            errorMessage={formik.errors.cardHolder}
            isTouched={formik.touched.cardHolder}
          />

          <Input
            type="password"
            label="Card number"
            id="cardNumber"
            value={formik.values.cardNumber}
            placeholder="Complete card number"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardNumber}
            errorMessage={formik.errors.cardNumber}
            isTouched={formik.touched.cardNumber}
          />
          <div className="smallFields">
            <Input
              type="text"
              label="Card expiry date"
              id="expiryDate"
              value={formik.values.expiryDate}
              placeholder="MM/YY"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.expiryDate}
              errorMessage={formik.errors.expiryDate}
              isTouched={formik.touched.expiryDate}
            />

            <Input
              type="password"
              label="Card CVV"
              id="cvv"
              value={formik.values.cvv}
              placeholder="Card CVV"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              hasErrorMessage={formik.touched.cvv}
              errorMessage={formik.errors.cvv}
              isTouched={formik.touched.cvv}
            />
          </div>
        </div>
        <div className="rightCol">
          <div className="mockup">
            <div className="dataTranslation">
              <p>
                {formik.values.cardNumber.slice(0, 4)}{" "}
                {formik.values.cardNumber.slice(4, 8)}{" "}
                {formik.values.cardNumber.slice(8, 12)}{" "}
                {formik.values.cardNumber.slice(12, 16)}
              </p>
              <p>{formik.values.cardHolder.toUpperCase()}</p>
              <div className="smallOutput">
                {formik.values.expiryDate && (
                  <div>{formik.values.expiryDate}</div>
                )}{" "}
                <div>{formik.values.cvv}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="terms d-flex">
        <label htmlFor="acceptedTerms">
          <input
            className={`${formik.touched.acceptedTerms ? "is-valid" : ""}
          ${
            formik.touched.acceptedTerms && formik.errors.acceptedTerms
              ? "form-control is-invalid"
              : "form-control"
          }
        `}
            id="acceptedTerms"
            name="acceptedTerms"
            type="checkbox"
            value={formik.values.acceptedTerms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.acceptedTerms && formik.errors.acceptedTerms && (
            <p className="invalid-feedback">{formik.errors.acceptedTerms}</p>
          )}
        </label>
        <span>
          I have read and accepted the booking conditions, general terms and
          privacy policy.
        </span>
      </div>
    </form>
  );
}

export default StepThreeForm;
