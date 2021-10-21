import { useContext } from "react";
import { Redirect } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import CheckoutTotal from "../CheckoutTotal/CheckoutTotal";

function CheckoutOrderSummary(props) {
	const { state } = useContext(CheckoutContext);
	const { step, personalDetails, billingDetails, paymentDetails } = state;

	return (
		<>
			{step !== 4 && <Redirect to={`/checkout/step-${step}`} />}
			<div className="row">
				<div className="col-12">
					<h5 className="my-2 py-2 fw-normal border-bottom">Payment details</h5>
				</div>
				<div className="col-4">
					<h6 className="my-1 fw-normal">Customer name</h6>
					<span className="fw-light">{personalDetails.fullname || "---"}</span>
				</div>
				<div className="col-4">
					<h6 className="my-1 fw-normal">Email address</h6>
					<span className="fw-light">{personalDetails.email || "---"}</span>
				</div>
				<div className="col-4">
					<h6 className="my-1 fw-normal">Phone number</h6>
					<span className="fw-light">
						{personalDetails.phonePrefix || "---"} {personalDetails.phone || "---"}
					</span>
				</div>
				<div className="col-12">
					<h5 className="my-2 py-2 fw-normal border-bottom">Billing details</h5>
				</div>
				<div className="col-3">
					<h6 className="my-1 fw-normal">Address</h6>
					<span className="fw-light">{billingDetails.address || "---"}</span>
				</div>
				<div className="col-3">
					<h6 className="my-1 fw-normal">City</h6>
					<span className="fw-light">{billingDetails.city || "---"}</span>
				</div>
				<div className="col-3">
					<h6 className="my-1 fw-normal">Zip code</h6>
					<span className="fw-light">{billingDetails.zipCode || "---"}</span>
				</div>
				<div className="col-3">
					<h6 className="my-1 fw-normal">Country</h6>
					<span className="fw-light">{billingDetails.country || "---"}</span>
				</div>
				<div className="col-12">
					<h5 className="my-2 py-2 fw-normal border-bottom">Payment details</h5>
				</div>
				{paymentDetails.method === "card" && (
					<>
						<div className="col-4">
							<h6 className="my-1 fw-normal">Payment method</h6>
							<span className="fw-light">{paymentDetails.method || "---"}</span>
						</div>
						<div className="col-4">
							<h6 className="my-1 fw-normal">Card number</h6>
							<span className="fw-light">{paymentDetails.address || "---"}</span>
						</div>
						<div className="col-4">
							<h6 className="my-1 fw-normal">Card holder</h6>
							<span className="fw-light">{paymentDetails.city || "---"}</span>
						</div>
					</>
				)}
				{paymentDetails.method !== "card" && (
					<div className="col-12">
						<h5 className="my-1 fw-light text-center text-muted">Payment method not available</h5>
					</div>
				)}
				<div className="col-12">
					<h5 className="my-2 py-2 fw-normal border-bottom">Order total</h5>
				</div>
				<div className="col-12">
					<CheckoutTotal />
				</div>
			</div>
		</>
	);
}

export default CheckoutOrderSummary;
