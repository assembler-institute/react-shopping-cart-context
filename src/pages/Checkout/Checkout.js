import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import CheckoutHeader from "../../components/CheckoutHeader";
import CheckoutPersonalDetails from "../../components/CheckoutPersonalDetails";
import withLayout from "../../hoc/withLayout";
import { CheckoutProvider } from "../../providers/CheckoutProvider";

function Checkout() {
	const { url } = useRouteMatch();

	return (
		<CheckoutProvider>
			<CheckoutHeader />
			<hr className="my-0" />
			<section className="vh-100">
				<Switch>
					<Route exact path={url}>
						<Redirect to={`${url}/step-1`} />
					</Route>
					<Route exact path={`${url}/step-1`}>
						<CheckoutPersonalDetails />
					</Route>
					<Route exact path={`${url}/step-2`}>
						{/* <BillingDetailsForm /> */}
						<div>Pere rules</div>
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
		</CheckoutProvider>
	);
}

export default withLayout(Checkout);
