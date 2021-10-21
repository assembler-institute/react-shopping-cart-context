import { Redirect, Route, Switch, useRouteMatch } from "react-router";

import CheckoutHeader from "../../components/CheckoutHeader";
import CheckoutItemList from "../../components/CheckoutItemList";
import CheckoutPersonalDetails from "../../components/CheckoutPersonalDetails";
import CheckoutBillingDetails from "../../components/CheckoutBillingDetails";

import withLayout from "../../hoc/withLayout";
import { CheckoutProvider } from "../../providers/CheckoutProvider";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

function Checkout() {
	const { cartItems } = useContext(AppContext);
	const { url } = useRouteMatch();

	return (
		<CheckoutProvider>
			<CheckoutHeader />
			<hr className="mt-0 mb-2" />
			<div className="vh-100 row">
				<div className="col-8">
					<Switch>
						<Route exact path={url}>
							<Redirect to={`${url}/step-1`} />
						</Route>
						<Route exact path={`${url}/step-1`}>
							<CheckoutPersonalDetails />
						</Route>
						<Route exact path={`${url}/step-2`}>
							<CheckoutBillingDetails />
						</Route>
						<Route exact path={`${url}/step-3`}>
							{/* <PaymentForm /> */}
						</Route>
						<Route exact path={`${url}/step-4`}>
							{/* <OrderSummaryForm /> */}
						</Route>
					</Switch>
				</div>
				<div className="col-4">
					<CheckoutItemList />
				</div>
			</div>
		</CheckoutProvider>
	);
}

export default withLayout(Checkout);
