import { useContext } from "react";
import { CheckoutContext } from "../../providers/CheckoutProvider";

function CheckoutNav(props) {
	const { backButtonMsg, nextButtonMsg, backButtonDisabled = false, nextButtonDisabled = false } = props;
	const { goBack } = useContext(CheckoutContext);

	return (
		<div className="d-flex justify-content-center gap-2">
			{backButtonMsg && (
				<button type="button" className="btn btn-outline-primary" disabled={backButtonDisabled} onClick={goBack}>
					{backButtonMsg}
				</button>
			)}
			{nextButtonMsg && (
				<button type="submit" className="btn btn-primary" disabled={nextButtonDisabled}>
					{nextButtonMsg}
				</button>
			)}
		</div>
	);
}

export default CheckoutNav;
