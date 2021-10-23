import { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import PurchaseCompletedImage from "../../img/purchase-complete1_orig.png";
import { AppContext } from "../../providers/AppProvider";
import { CheckoutContext } from "../../providers/CheckoutProvider";

function PurchaseCompleted() {
	const history = useHistory();
	const { handleClearCart } = useContext(AppContext);
	const {
		state: { step },
	} = useContext(CheckoutContext);

	useEffect(() => {
		setTimeout(() => {
			history.push("/");
		}, 2000);

		handleClearCart();
	}, []);

	useEffect(() => {
		step !== 5 && history.push(`step-${step}`);
	}, [step]);

	return (
		<div>
			<div className="d-flex flex-column align-items-center">
				<h2 className="p-3 fw-light text-center">Thanks for your purchase! 谢谢！</h2>
				<img src={PurchaseCompletedImage} className="w-100" />
			</div>
		</div>
	);
}

export default PurchaseCompleted;
