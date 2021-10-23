import { useReducer, createContext, useContext } from "react";
import { AppContext } from "./AppProvider";
import { actionTypes, COUNTRY_PHONE_PREFIX_LIST, COUNTRY_SHIPPING_LIST, COUNTRY_TAXES_LIST } from "../constants";

import getCartTotal from "../utils/getCartTotal";
import { v4 as uuid } from "uuid";

const initialState = {
	step: 1,
	orderId: uuid(),
	customerDetails: {
		fullname: "",
		email: "",
		phoneNumber: "",
		phonePrefix: COUNTRY_PHONE_PREFIX_LIST.ES,
	},
	billingAddress: {
		address: "",
		city: "",
		zipCode: "",
		country: "ES",
	},
	paymentDetails: {
		method: "Card",
		cardHolderName: "",
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
		case actionTypes.CHECKOUT_BACK:
			return {
				...state,
				step: state.step - 1,
			};
		case actionTypes.CHECKOUT_NEXT:
			return {
				...state,
				step: state.step + 1,
			};
		case actionTypes.CHECKOUT_PERSONAL_DETAILS:
			return {
				...state,
				step: state.step + 1,
				customerDetails: { ...payload },
			};
		case actionTypes.CHECKOUT_BILLING_DETAILS:
			return {
				...state,
				step: state.step + 1,
				billingAddress: { ...payload },
			};
		case actionTypes.CHECKOUT_PAYMENT_DETAILS:
			return {
				...state,
				step: state.step + 1,
				paymentDetails: { ...payload },
				orderCosts: {
					...state.orderCosts,
					shipping: COUNTRY_SHIPPING_LIST[state.billingAddress.country],
					taxes: Number((state.orderCosts.subtotal * COUNTRY_TAXES_LIST[state.billingAddress.country]).toFixed(2)),
				},
			};
		default:
			throw new Error();
	}
}

const CheckoutContext = createContext();

function CheckoutProvider({ children }) {
	const { cartItems } = useContext(AppContext);
	const [state, dispatch] = useReducer(reducer, {
		...initialState,
		orderCosts: {
			...initialState.orderCosts,
			subtotal: getCartTotal(cartItems),
		},
	});

	return (
		<CheckoutContext.Provider
			value={{
				state,
				goBack: () => {
					dispatch({ type: actionTypes.CHECKOUT_BACK });
				},
				goNext: () => {
					dispatch({ type: actionTypes.CHECKOUT_NEXT });
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
