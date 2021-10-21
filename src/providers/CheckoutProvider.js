import { useReducer, createContext, useContext } from "react";
import { AppContext } from "./AppProvider";
import { actionTypes, COUNTRY_PHONE_PREFIX_LIST, COUNTRY_SHIPPING_LIST, COUNTRY_TAXES_LIST } from "../constants";

import getCartTotal from "../utils/getCartTotal";

const initialState = {
	step: 1,
	personalDetails: {
		fullname: "",
		email: "",
		phone: "",
		phonePrefix: COUNTRY_PHONE_PREFIX_LIST.ES,
	},
	billingDetails: {
		address: "",
		city: "",
		zipCode: "",
		country: "ES",
	},
	paymentDetails: {
		method: "",
		cardProvider: "",
		cardholderName: "",
		cardNumber: "",
		cardExpirationMonth: "",
		cardExpirationYear: "",
		cardCVV: "",
	},
	orderCosts: {
		subtotal: 0,
		shipping: 0,
		taxes: 0,
	},
};

function reducer(state, actions) {
	const { type, payload } = actions;

	switch (type) {
		case actionTypes.CHECKOUT_GO_BACK:
			return {
				...state,
				step: state.step - 1,
			};
		case actionTypes.CHECKOUT_PERSONAL_DETAILS:
			return {
				...state,
				step: state.step + 1,
				personalDetails: { ...payload },
			};
		case actionTypes.CHECKOUT_BILLING_DETAILS:
			return {
				...state,
				step: state.step + 1,
				billingDetails: { ...payload },
			};
		case actionTypes.CHECKOUT_PAYMENT_DETAILS:
			const { cartItems } = useContext(AppContext);
			const country = state.billingDetails.country;
			const subtotal = getCartTotal(cartItems);

			return {
				...state,
				step: state.step + 1,
				paymentDetails: { ...payload },
				orderCosts: {
					subtotal,
					shipping: COUNTRY_SHIPPING_LIST[country],
					taxes: subtotal * COUNTRY_TAXES_LIST[country],
				},
			};
		default:
			throw new Error();
	}
}

const CheckoutContext = createContext();

function CheckoutProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CheckoutContext.Provider
			value={{
				state,
				goBack: () => {
					dispatch({ type: actionTypes.CHECKOUT_GO_BACK });
				},
				setPersonalDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PERSONAL_DETAILS, payload: values });
				},
				setBillingDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_BILLING_DETAILS, payload: values });
				},
				setPaymentDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PAYMENT_DETAILS, payload: values });
				},
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
}

export { CheckoutContext, CheckoutProvider };
