import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import { useEffect } from "react/cjs/react.development";

function CheckoutRedirect() {
	const history = useHistory();
	const {
		state: { step },
	} = useContext(CheckoutContext);

	useEffect(() => {
		history.push(`/checkout/step-${step}`);
	}, []);

	return null;
}

export default CheckoutRedirect;
