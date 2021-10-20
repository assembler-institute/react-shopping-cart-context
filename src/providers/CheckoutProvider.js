import { useReducer, createContext } from "react";

const actionTypes = {
	CHECKOUT_PERSONAL_DETAILS: Symbol(),
	CHECKOUT_BILLING_DETAILS: Symbol(),
	CHECKOUT_PAYMENT_DETAILS: Symbol(),
};

const initialState = {
	personalDetails: {
		fullname: "",
		email: "",
		phone: "",
	},
	billingDetails: {
		address: "",
		city: "",
		zipcode: "",
		country: "",
	},
	paymentDetails: {
		method: "",
		cardholderName: "",
		cardNumber: "",
		cardExpiryDate: "",
		cardCVV: "",
	},
};

function reducer(state, actions) {
	const { type, payload } = actions;

	switch (type) {
		case actionTypes.CHECKOUT_PERSONAL_DETAILS:
			return {
				...state,
				personalDetails: { ...payload },
			};
		case actionTypes.CHECKOUT_BILLING_DETAILS:
			return {
				...state,
				billingDetails: { ...payload },
			};
		case actionTypes.CHECKOUT_PAYMENT_DETAILS:
			return {
				...state,
				paymentDetails: { ...payload },
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
				savePersonalDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PERSONAL_DETAILS, payload: values });
				},
				saveBillingDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PERSONAL_DETAILS, payload: values });
				},
				savePaymentDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PERSONAL_DETAILS, payload: values });
				},
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
}

export { CheckoutContext, CheckoutProvider };
