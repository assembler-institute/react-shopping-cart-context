import { useEffect } from "react";
import { Redirect, Route, Switch, useHistory, useRouteMatch } from "react-router";
import withLayout from "../../hoc/withLayout";
import { CheckoutContext, CheckoutProvider } from "../../providers/CheckoutProvider";
import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

import CheckoutHeader from "../../components/CheckoutHeader";
import CheckoutItemList from "../../components/CheckoutItemList";
import CheckoutCustomerDetails from "../../components/CheckoutCustomerDetails";
import CheckoutBillingAddress from "../../components/CheckoutBillingAddress";
import CheckoutPaymentDetails from "../../components/CheckoutPaymentDetails";
import CheckoutOrderSummary from "../../components/CheckoutOrderSummary/CheckoutOrderSummary";
import PurchaseCompleted from "../../components/PurchaseCompleted";
import CheckoutRedirect from "../../components/CheckoutRedirect";

const stepComponents = [
	<CheckoutCustomerDetails />,
	<CheckoutBillingAddress />,
	<CheckoutPaymentDetails />,
	<CheckoutOrderSummary />,
	<PurchaseCompleted />,
];
function Checkout() {
	const history = useHistory();
	const { cartItems } = useContext(AppContext);

	useEffect(() => {
		!cartItems.length && history.push("/");
	}, []);

	return (
		<>
			<CheckoutProvider>
				<CheckoutContext.Consumer>
					{({ state: { step } }) => (
						<>
							<CheckoutHeader />
							<hr className="mt-0 mb-2" />
							<div className="min-vh-100 row">
								<div className={step !== 5 ? "col-8" : "col-12"}>
									<Switch>
										<Route exact path="/checkout/step-:num">
											{({ match }) => stepComponents[match.params.num - 1]}
										</Route>
										<Route path="/checkout">
											<CheckoutRedirect />
										</Route>
									</Switch>
								</div>
								{step !== 5 && (
									<div className="col-4">
										<CheckoutItemList />
									</div>
								)}
							</div>
						</>
					)}
				</CheckoutContext.Consumer>
			</CheckoutProvider>
		</>
	);
}

export default withLayout(Checkout);

// {!cartItems.length && <Redirect to="/" />}
// <CheckoutProvider>
// 	<CheckoutContext.Consumer>
// 		{({ state: { step } }) => (
// 			<>
// 				<CheckoutHeader />
// 				<hr className="mt-0 mb-2" />
// 				<div className="min-vh-100 row">
// 					<div className={`${step < 5 ? "col-8" : "col"}`}>
// 						<Switch>
// 							<Route exact path="/checkout/step-1">
// 								<CheckoutCustomerDetails />
// 							</Route>
// 							<Route exact path={`/checkout/step-2`}>
// 								<CheckoutBillingAddress />
// 							</Route>
// 							<Route exact path={`/checkout/step-3`}>
// 								<CheckoutPaymentDetails />
// 							</Route>
// 							<Route exact path={`/checkout/step-4`}>
// 								<CheckoutOrderSummary />
// 							</Route>
// 							<Route exact path={`/checkout/step-5`}>
// 								<PurchaseCompleted />
// 							</Route>
// 							<Route path="/checkout">
// 								<CheckoutRedirect />
// 							</Route>
// 						</Switch>
// 					</div>
// 					{step < 5 && (
// 						<div className="col-4">
// 							<CheckoutItemList />
// 						</div>
// 					)}
// 				</div>
// 			</>
// 		)}
// 	</CheckoutContext.Consumer>
// </CheckoutProvider>
// </>
