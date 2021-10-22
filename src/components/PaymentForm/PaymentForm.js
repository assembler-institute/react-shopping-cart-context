import { useContext, useState } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import * as Yup from "yup";

import cardValidator from "card-validator";
import Cards from "react-credit-cards";
import IconImg from "../IconImg/IconImg";
import "react-credit-cards/es/styles-compiled.css";

import PaymentCardIcon from "../../img/icons/payment-card.svg";
import ApplePayLogo from "../../img/logos/ApplePay-logo.svg";
import PayPalLogo from "../../img/logos/PayPal-logo.svg";
import VisaLogo from "../../img/logos/Visa-logo.svg";
import MasterCardLogo from "../../img/logos/MasterCard-logo.svg";
import AmericanExpressLogo from "../../img/logos/AmericanExpress-logo.svg";

const cardProviders = [
	{ value: "Visa", img: VisaLogo, disabled: false, checked: false },
	{ value: "MasterCard", img: MasterCardLogo, disabled: false, checked: false },
	{ value: "AmericanExpress", img: AmericanExpressLogo, disabled: false, checked: false },
];
const paymentMethods = [
	{ value: "Card", img: PaymentCardIcon, disabled: false, checked: true },
	{ value: "ApplePay", img: ApplePayLogo, disabled: true, checked: false },
	{ value: "PayPal", img: PayPalLogo, disabled: true, checked: false },
];

const schema = Yup.object({
	method: Yup.string().required("Select a payment method."),
	cardProvider: Yup.string().required("Select a card provider."),
	cardHolderName: Yup.string()
		.required("Cardholder name is required.")
		.test("test-cardHolderName", "Invalid cardholder name.", (value) => cardValidator.cardholderName(value).isValid),
	cardNumber: Yup.string()
		.required("Card number is required.")
		.matches(/^3[47]|4|5[1-5]/, "Only MasterCard, Visa or AmericanExpress")
		.test("test-cardNumber-withCardValidator", "Invalid card number.", (value) => cardValidator.number(value).isValid),
	cardExpirationMonth: Yup.string()
		.required("Month is required.")
		.test("test-cardExpirationMonth", "Invalid month.", (value) => cardValidator.expirationMonth(value).isValid),
	cardExpirationYear: Yup.string()
		.required("Year is required.")
		.test("test-cardExpirationYear", "Invalid year.", (value) => cardValidator.expirationYear(value).isValid),
	cardCVV: Yup.string()
		.required("CVC is required.")
		.test("test-cardCVV", "Invalid CVC", (value) => cardValidator.cvv(value).isValid),
	acceptTerms: Yup.boolean().oneOf([true], "The terms and conditions must be accepted."),
});

function PaymentForm(props) {
	const [focus, setFocus] = useState("");
	const {
		state: { step, paymentDetails },
		setPaymentDetails,
		goBack,
	} = useContext(CheckoutContext);

	const formik = useFormik({
		initialValues: {
			...paymentDetails,
			acceptTerms: false,
		},
		validationSchema: schema,
		validateOnBlur: true,
		onSubmit: (values, actions) => {
			const { setSubmitting } = actions;

			setSubmitting(true);
			setTimeout(() => {
				setPaymentDetails(values);
			}, 250);
		},
	});
	const {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		touched,
		errors,
		isValid,
		isValidating,
		isSubmitting,
	} = formik;
	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<h5 className="my-3">How would you like to pay</h5>
					<div className="mb-3 has-validation">
						<div role="group" className="row">
							{paymentMethods.map(({ value, img, disabled }, index) => (
								<div key={index} className="col">
									<input
										type="radio"
										className="btn-check"
										name="method"
										id={`method-${value}`}
										value={value}
										onChange={handleChange}
										autocomplete="off"
										disabled={disabled}
									/>
									<label
										className={`btn w-100 ${!disabled ? "btn-outline-info" : "btn-secondary"} `}
										for={`method-${value}`}
									>
										<IconImg src={img} height={2.5} width={2.5} />
									</label>
								</div>
							))}
						</div>
						{errors.method && touched.method && <div className="text-danger">{errors.method}</div>}
					</div>
					<h6 className="my-3">We accept the following debit/credit cards</h6>
					<div className="mb-3 has-validation">
						<div role="group" className="row">
							{cardProviders.map(({ value, img, disabled }, index) => (
								<div key={index} className="col">
									<input
										type="radio"
										className="btn-check"
										name="cardProvider"
										id={`cardProvider-${value}`}
										value={value}
										onChange={handleChange}
										autocomplete="off"
										disabled={disabled}
									/>
									<label className="btn btn-outline-info w-100" for={`cardProvider-${value}`}>
										<IconImg src={img} height={2.5} width={2.5} />
									</label>
								</div>
							))}
						</div>
						<div className="row">
							<div className="col-12 col-lg-6 order-2 order-lg-1 ">
								<label htmlFor="cardHolderName" className="control-label">
									<h6>Cardholder name*</h6>
								</label>
								<div className="input-group mb-3 has-validation">
									<input
										className={`form-control ${touched.cardHolderName && errors.cardHolderName ? "is-invalid" : null} ${
											touched.cardHolderName && !errors.cardHolderName ? "is-valid" : null
										}`}
										type="text"
										name="cardHolderName"
										id="cardHolderName"
										placeholder="Name..."
										value={values.cardHolderName}
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={(e) => setFocus("name")}
									/>
									{errors.cardHolderName && touched.cardHolderName && (
										<div className="invalid-feedback">{errors.cardHolderName}</div>
									)}
								</div>
								<label htmlFor="cardNumber" className="control-label">
									<h6>Card number*</h6>
								</label>
								<div className="input-group mb-3 has-validation">
									<input
										className={`form-control ${touched.cardNumber && errors.cardNumber ? "is-invalid" : null} ${
											touched.cardNumber && !errors.cardNumber ? "is-valid" : null
										}`}
										type="text"
										name="cardNumber"
										id="cardNumber"
										placeholder="0000 0000 0000 0000"
										value={values.cardNumber}
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={(e) => setFocus("number")}
									/>
									{errors.cardNumber && touched.cardNumber && (
										<div className="invalid-feedback">{errors.cardNumber}</div>
									)}
								</div>
							</div>
							<div className="col-12 col-lg-6 d-flex py-4 order-1 order-lg-2 align-items-center">
								<Cards
									number={values.cardNumber}
									name={values.cardHolderName}
									expiry={values.cardExpirationMonth + values.cardExpirationYear}
									cvc={values.cardCVV}
									focused={focus}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-6 col-lg-4">
								<label htmlFor="cardExpirationMonth" className="control-label">
									<h6>Expiration month*</h6>
								</label>
								<div className="input-group mb-3 has-validation">
									<input
										className={`form-control ${
											touched.cardExpirationMonth && errors.cardExpirationMonth ? "is-invalid" : null
										} ${touched.cardExpirationMonth && !errors.cardExpirationMonth ? "is-valid" : null}`}
										type="text"
										name="cardExpirationMonth"
										id="cardExpirationMonth"
										placeholder="00"
										value={values.cardExpirationMonth}
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={(e) => setFocus("expiry")}
									/>
									{errors.cardExpirationMonth && touched.cardExpirationMonth && (
										<div className="invalid-feedback">{errors.cardExpirationMonth}</div>
									)}
								</div>
							</div>
							<div className="col-6 col-lg-4">
								<label htmlFor="cardExpirationYear" className="control-label">
									<h6>Expiration year*</h6>
								</label>
								<div className="input-group mb-3 has-validation">
									<input
										className={`form-control ${
											touched.cardExpirationYear && errors.cardExpirationYear ? "is-invalid" : null
										} ${touched.cardExpirationYear && !errors.cardExpirationYear ? "is-valid" : null}`}
										type="text"
										name="cardExpirationYear"
										id="cardExpirationYear"
										placeholder="00"
										value={values.cardExpirationYear}
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={(e) => setFocus("expiry")}
									/>
									{errors.cardExpirationYear && touched.cardExpirationYear && (
										<div className="invalid-feedback">{errors.cardExpirationYear}</div>
									)}
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<label htmlFor="cardCVV" className="control-label">
									<h6>CVV*</h6>
								</label>
								<div className="input-group mb-3 has-validation">
									<input
										className={`form-control ${touched.cardCVV && errors.cardCVV ? "is-invalid" : null} ${
											touched.cardCVV && !errors.cardCVV ? "is-valid" : null
										}`}
										type="text"
										name="cardCVV"
										id="cardCVV"
										placeholder="00"
										value={values.cardCVV}
										onChange={handleChange}
										onBlur={handleBlur}
										onFocus={(e) => setFocus("cvc")}
									/>
									{errors.cardCVV && touched.cardCVV && <div className="invalid-feedback">{errors.cardCVV}</div>}
								</div>
							</div>
						</div>
					</div>
					<label>
						I have read and I accept the <u>booking conditions</u>, <u>general terms</u> and <u>privacy policy</u>
					</label>
					<br />
					<span>We use secure SSL transmission and encrypted storage to protect your personal information.</span>
					<br />
					<br />
					{errors.acceptTerms && touched.acceptTerms && <div className="text-danger">{errors.acceptTerms}</div>}

					<div className="d-flex justify-content-center gap-2">
						<button type="button" className="btn btn-outline-primary" onClick={goBack}>
							Return to billing details
						</button>
						<button type="submit" className="btn btn-primary" disabled={isValidating || isSubmitting || !isValid}>
							Complete booking
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default PaymentForm;
