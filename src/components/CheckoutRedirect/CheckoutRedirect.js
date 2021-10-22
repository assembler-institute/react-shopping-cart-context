import { Redirect } from "react-router";
import { useContext } from "react";
import { CheckoutContext } from "../../providers/CheckoutProvider";

function CheckoutRedirect() {
	const {
		state: { step },
	} = useContext(CheckoutContext);

	return <Redirect to={`/checkout/step-${step}`} />;
}

export default CheckoutRedirect;
