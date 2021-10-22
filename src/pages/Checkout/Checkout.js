import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router";

import CheckoutHeader from "../../components/CheckoutHeader";
import CheckoutItemList from "../../components/CheckoutItemList";
import CheckoutPersonalDetails from "../../components/CheckoutPersonalDetails";
import CheckoutBillingDetails from "../../components/CheckoutBillingDetails";
import CheckoutOrderSummary from "../../components/CheckoutOrderSummary/CheckoutOrderSummary";

import withLayout from "../../hoc/withLayout";
import { CheckoutProvider } from "../../providers/CheckoutProvider";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";
import CheckoutRedirect from "../../components/CheckoutRedirect";
import PaymentForm from "../../components/PaymentForm";
import PurchaseCompleted from "../../components/PurchaseCompleted";

function Checkout() {
	const { cartItems } = useContext(AppContext);

	return (
		<>
			{!cartItems.length && <Redirect to="/" />}
			<CheckoutProvider>
				<CheckoutHeader />
				<hr className="mt-0 mb-2" />
				<div className="min-vh-100 row">
					<div className="col-8">
						<Switch>
							<Route exact path="/checkout">
								<CheckoutRedirect />
							</Route>
							<Route exact path="/checkout/step-1">
								<CheckoutPersonalDetails />
							</Route>
							<Route exact path={`/checkout/step-2`}>
								<CheckoutBillingDetails />
							</Route>
							<Route exact path={`/checkout/step-3`}>
								<PaymentForm />
							</Route>
							<Route exact path={`/checkout/step-4`}>
								<CheckoutOrderSummary />
							</Route>
							<Route exact path={`/checkout/step-5`}>
								<PurchaseCompleted />
							</Route>
						</Switch>
					</div>
					<div className="col-4">
						<CheckoutItemList />
					</div>
				</div>
			</CheckoutProvider>
		</>
	);
}

export default withLayout(Checkout);
