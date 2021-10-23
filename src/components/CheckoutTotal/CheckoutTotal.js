import { useContext } from "react";
import { CheckoutContext } from "../../providers/CheckoutProvider";

function CheckoutTotal(props) {
	const {
		state: {
			orderCosts: { subtotal, shipping, taxes },
		},
	} = useContext(CheckoutContext);

	const total = (subtotal + shipping + taxes).toFixed(2);

	return (
		<div>
			<div className="d-flex justify-content-between my-1">
				<span>Subtotal</span>
				<span>{subtotal || "---"}€</span>
			</div>
			<div className="d-flex justify-content-between my-1">
				<span>Shipping</span>
				<span>{shipping || "---"}€</span>
			</div>
			<div className="d-flex justify-content-between my-1">
				<span>Taxes</span>
				<span>{taxes || "---"}€</span>
			</div>
			<div className="d-flex justify-content-between my-3">
				<span>Total</span>
				<span className="fw-bold">{total || "---"}€</span>
			</div>
		</div>
	);
}

export default CheckoutTotal;
