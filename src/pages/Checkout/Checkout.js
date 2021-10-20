import { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import withLayout from "../../hoc/withLayout";

const CHECKOUT_STEPS = ["Your details", "Billing address", "Payment details", "Order summary"];

function Checkout() {
	const { url } = useRouteMatch();

	const [checkoutStepTitle, setCheckoutStepTitle] = useState(CHECKOUT_STEPS[0]);
	const [checkoutStepNum, setCheckoutStepNum] = useState(0);

	return (
		<>
			<header className="d-flex align-items-center justify-content-between ">
				<h3 className="fw-light">{checkoutStepTitle}</h3>
				<span>Step {checkoutStepNum + 1} of 4</span>
			</header>
			<hr className="my-0" />
			<section className="vh-100">
				<Switch>
					<Route exact path={url}>
						<Redirect to={`${url}/step-2`} />
					</Route>
					<Route exact path={`${url}/step-1`}>
						{/* <PersonalDetailsForm /> */}
					</Route>
					<Route exact path={`${url}/step-2`}>
						{/* {<BillingDetailsForm />} */}
					</Route>
					<Route exact path={`${url}/step-3`}>
						{/* <PaymentDetailsForm /> */}
					</Route>
					<Route exact path={`${url}/step-4`}>
						{/* <OrderSummaryForm /> */}
					</Route>
				</Switch>
				<aside>{/* Renderizar products */}</aside>
			</section>
		</>
	);
}

export default withLayout(Checkout);
