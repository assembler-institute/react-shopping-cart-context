import { useContext } from "react";
import { CheckoutContext } from "../../providers/CheckoutProvider";

const CHECKOUT_STEPS = ["Your details", "Billing address", "Payment details", "Order summary"];

function CheckoutHeader() {
	const {
		state: { step },
	} = useContext(CheckoutContext);

	return (
		<header className="d-flex align-items-center justify-content-between">
			<h3 className="fw-light">{CHECKOUT_STEPS[step]}</h3>
			<span>Step {step + 1} of 4</span>
		</header>
	);
}

export default CheckoutHeader;
