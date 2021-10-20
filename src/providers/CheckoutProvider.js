import { useReducer, createContext } from "react";

const actionTypes = {
	CHECKOUT_PERSONAL_DETAILS: Symbol(),
	CHECKOUT_BILLING_DETAILS: Symbol(),
	CHECKOUT_PAYMENT_DETAILS: Symbol(),
	CHECKOUT_GO_BACK: Symbol(),
};

const initialState = {
	step: 1,
	personalDetails: {
		fullname: "",
		email: "",
		phone: "",
		phonePrefix: "+34",
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
			return {
				...state,
				step: state.step + 1,
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
				goBack: () => {
					dispatch({ type: actionTypes.CHECKOUT_GO_BACK });
				},
				setPersonalDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PERSONAL_DETAILS, payload: values });
				},
				setBillingDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PERSONAL_DETAILS, payload: values });
				},
				setPaymentDetails: (values) => {
					dispatch({ type: actionTypes.CHECKOUT_PERSONAL_DETAILS, payload: values });
				},
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
}

export { CheckoutContext, CheckoutProvider };
