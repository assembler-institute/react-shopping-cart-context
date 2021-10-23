import { useEffect, useContext } from "react";
import { useFormik } from "formik";
import { Redirect, useHistory } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import CheckoutNav from "../CheckoutNav/CheckoutNav";
import CheckoutTotal from "../CheckoutTotal/CheckoutTotal";

function CheckoutOrderSummary(props) {
	const history = useHistory();
	const {
		state: { step, customerDetails, billingAddress, paymentDetails },
		goNext,
	} = useContext(CheckoutContext);

	useEffect(() => {
		step !== 4 && history.push(`step-${step}`);
	}, [step]);

	const formik = useFormik({
		initialValues: {},
		onSubmit: (values, actions) => {
			const { setSubmitting } = actions;

			setSubmitting(true);
			setTimeout(() => {
				goNext();
				console.log("test");
			}, 250);
		},
	});

	const { handleSubmit } = formik;

	const summary = [
		{
			step: "Customer details",
			details: [
				{ property: "Customer name", value: customerDetails.fullname },
				{ property: "Email address", value: customerDetails.email },
				{ property: "Phone prefix", value: customerDetails.phonePrefix },
				{ property: "Phone number", value: customerDetails.phoneNumber },
			],
		},
		{
			step: "Billing address",
			details: [
				{ property: "Address", value: billingAddress.address },
				{ property: "City", value: billingAddress.city },
				{ property: "Zip/Postal code", value: billingAddress.zipCode },
				{ property: "Country", value: billingAddress.country },
			],
		},
		{
			step: "Payment details",
			details: [
				{ property: "Payment method", value: paymentDetails.method },
				{ property: "Cardholder name", value: paymentDetails.cardHolderName },
				{ property: "Card number", value: paymentDetails.cardNumber },
			],
		},
	];

	return (
		<>
			{/* {step !== 4 && <Redirect to={`/checkout`} />} */}
			{summary.map(({ step, details }, index) => (
				<div key={index} className="row">
					<div className="col-12">
						<h4 className="my-2 py-2 fw-normal">{step}</h4>
					</div>
					{details.map(({ property, value }, index) => (
						<div key={index} className="col-12 col-md-6 col-xl-3">
							<div className="w-100 p-2 mb-2 rounded bg-light border">
								<h6 className="my-1 fw-normal">{property}</h6>
								<span className="fw-light">{value}</span>
							</div>
						</div>
					))}
				</div>
			))}
			<div className="row">
				<div>
					<hr className="mt-3" />
				</div>
				<div className="col-12">
					<h4 className="py-2 fw-normal">Order total</h4>
				</div>
				<div className="col-12">
					<CheckoutTotal />
				</div>
			</div>
			<form onSubmit={handleSubmit}>
				<CheckoutNav backButtonMsg="Return to payment details" nextButtonMsg="Confirm purchase" />
			</form>
		</>
	);
}

export default CheckoutOrderSummary;
