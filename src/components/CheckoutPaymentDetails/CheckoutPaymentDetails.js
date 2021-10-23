import { useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import { Redirect, useHistory } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import { paymentDetailsSchema } from "../../validation";
import CheckoutNav from "../CheckoutNav/CheckoutNav";
import Cards from "react-credit-cards";
import IconImg from "../IconImg/IconImg";
import "react-credit-cards/es/styles-compiled.css";

import PaymentCardIcon from "../../img/icons/payment-card.svg";
import ApplePayLogo from "../../img/logos/ApplePay-logo.svg";
import PayPalLogo from "../../img/logos/PayPal-logo.svg";
import VisaLogo from "../../img/logos/Visa-logo.svg";
import MasterCardLogo from "../../img/logos/MasterCard-logo.svg";
import AmericanExpressLogo from "../../img/logos/AmericanExpress-logo.svg";
import SSLIcon from "../../img/icons/lock-green.svg";

const cardProviders = [
	{ value: "Visa", img: VisaLogo, disabled: false },
	{ value: "MasterCard", img: MasterCardLogo, disabled: false },
	{ value: "AmericanExpress", img: AmericanExpressLogo, disabled: false },
];

const paymentMethods = [
	{ value: "Card", img: PaymentCardIcon, disabled: false },
	{ value: "ApplePay", img: ApplePayLogo, disabled: true },
	{ value: "PayPal", img: PayPalLogo, disabled: true },
];

function CheckoutPaymentDetails(props) {
	const history = useHistory();
	const {
		state: { step, paymentDetails },
		setPaymentDetails,
	} = useContext(CheckoutContext);

	useEffect(() => {
		step !== 3 && history.push(`step-${step}`);
	}, [step]);

	const [focus, setFocus] = useState("");
	const formik = useFormik({
		initialValues: {
			...paymentDetails,
			acceptTerms: false,
		},
		validationSchema: paymentDetailsSchema,
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
			{/* {step !== 3 && <Redirect to={`/checkout`} />} */}
			<form onSubmit={handleSubmit}>
				<h5 className="my-3">How would you like to pay</h5>
				<div className="mb-3 has-validation">
					<div className="row">
						{paymentMethods.map(({ value, img, disabled, checked }, index) => (
							<div key={index} className="col">
								<input
									type="radio"
									className="btn-check"
									name="method"
									id={`method-${value}`}
									value={value}
									checked={value === values.method}
									onChange={handleChange}
									disabled={disabled}
								/>
								<label
									className={`form-check-label btn w-100 ${!disabled ? "btn-outline-info" : "btn-secondary"} `}
									htmlFor={`method-${value}`}
								>
									<IconImg src={img} height={2.5} width={2.5} />
								</label>
							</div>
						))}
					</div>
				</div>
				<h6 className="my-3">We accept the following debit/credit cards</h6>
				<div className="mb-3 has-validation">
					<div role="group" className="row my-3">
						{cardProviders.map(({ img }, index) => (
							<div key={index} className="col-2">
								<div className="border p-1 d-flex justify-content-center">
									<IconImg src={img} height={2.5} width={2.5} />
								</div>
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
									className={`form-control ${touched.cardHolderName && errors.cardHolderName && "is-invalid"} ${
										touched.cardHolderName && !errors.cardHolderName && "is-valid"
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
									className={`form-control ${touched.cardNumber && errors.cardNumber && "is-invalid"} ${
										touched.cardNumber && !errors.cardNumber && "is-valid"
									}`}
									type="text"
									name="cardNumber"
									id="cardNumber"
									placeholder="0000 0000 0000 0000"
									maxLength="19"
									value={values.cardNumber}
									onChange={handleChange}
									onBlur={handleBlur}
									onFocus={(e) => setFocus("number")}
								/>
								{errors.cardNumber && touched.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
							</div>
						</div>
						<div className="col-12 col-lg-6 d-flex py-4 order-1 order-lg-2 align-items-center">
							<Cards
								number={values.cardNumber}
								name={values.cardHolderName}
								expiry={values.cardExpirationMonth + values.cardExpirationYear}
								cvc={values.cardCVV.replace(/./g, "*")}
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
										touched.cardExpirationMonth && errors.cardExpirationMonth && "is-invalid"
									} ${touched.cardExpirationMonth && !errors.cardExpirationMonth && "is-valid"}`}
									type="text"
									name="cardExpirationMonth"
									id="cardExpirationMonth"
									placeholder="00"
									maxLength="2"
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
									className={`form-control ${touched.cardExpirationYear && errors.cardExpirationYear && "is-invalid"} ${
										touched.cardExpirationYear && !errors.cardExpirationYear && "is-valid"
									}`}
									type="text"
									name="cardExpirationYear"
									id="cardExpirationYear"
									placeholder="00"
									maxLength="2"
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
									className={`form-control ${touched.cardCVV && errors.cardCVV && "is-invalid"} ${
										touched.cardCVV && !errors.cardCVV && "is-valid"
									}`}
									type="password"
									name="cardCVV"
									id="cardCVV"
									placeholder="***"
									maxLength="3"
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
				<div className="form-check mb-3 has-validation">
					<input
						className={`form-check-input ${touched.acceptTerms && errors.acceptTerms && "is-invalid"} ${
							touched.acceptTerms && !errors.acceptTerms && "is-valid"
						}`}
						type="checkbox"
						name="acceptTerms"
						id="acceptTerms"
						value={values.acceptTerms}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={(e) => setFocus("expiry")}
					/>
					<label className="form-check-label" htmlFor="acceptTerms">
						I have read and I accept the <u>booking conditions</u>, <u>general terms</u> and <u>privacy policy</u>
					</label>
					{errors.acceptTerms && touched.acceptTerms && <div className="invalid-feedback">{errors.acceptTerms}</div>}
				</div>
				<p>
					<IconImg src={SSLIcon} height={1} width={1} /> We use secure SSL transmission and encrypted storage to protect
					your personal information.
				</p>
				<CheckoutNav
					backButtonMsg="Return to billing address"
					nextButtonMsg="Complete purchase"
					nextButtonDisabled={!isValid || isValidating || isSubmitting}
				/>
			</form>
		</>
	);
}

export default CheckoutPaymentDetails;
