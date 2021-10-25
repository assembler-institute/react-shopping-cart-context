import { useContext } from "react";
import { CheckoutContext } from "../../providers/CheckoutProvider";

const CHECKOUT_STEPS = ["Your details", "Billing address", "Payment details", "Order summary", "Purchase confirmed"];

function CheckoutHeader(props) {
	const {
		state: { step },
	} = useContext(CheckoutContext);

	return (
		<header className="d-flex align-items-center justify-content-between">
			<h3 className="fw-light">{CHECKOUT_STEPS[step - 1]}</h3>
			<span>
				Step {step} of {CHECKOUT_STEPS.length}
			</span>
		</header>
	);
}

export default CheckoutHeader;
