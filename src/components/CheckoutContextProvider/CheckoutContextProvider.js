import React, { useReducer } from "react";
// context
import { useHistory } from "react-router-dom"
import { CheckoutContext } from "../../context/CheckoutContext";

const checkoutInitialState = {
    personalInfo: {},
    billingAddress: {},
    payment: {},
    actualStep: 1
}

function checkoutReducer(state, action) {
    const { type, nameForm, payload } = action
    switch (type) {
        case "SET_INFO":
            // sets the info dynamiclly, and sums 1 to go for next step
            return {
                ...state,
                actualStep: state.actualStep + 1,
                [nameForm]: payload
            }
        case "SET_STEP":
            return {
                ...state,
                actualStep: payload
            }
        default:
            return {
                ...state
            }
    }
}

export default function CheckoutContextProvider({ children }) {
    const [checkoutState, dispatch] = useReducer(checkoutReducer, checkoutInitialState)
    const history = useHistory()
    const setFormInfo = (nameForm, data) => {
        dispatch({
            type: "SET_INFO",
            nameForm: nameForm,
            payload: data
        })
    }

    const setStep = (step) => {
        dispatch({
            type: "SET_STEP",
            payload: step
        })

        return history.push(`/checkout/step-${step}`)
    }

    return (
        <CheckoutContext.Provider value={{
            setFormInfo: setFormInfo,
            setStep: setStep,
            personalInfo: checkoutState.personalInfo,
            billingAddress: checkoutState.billingAddress,
            payment: checkoutState.payment,
            actualStep: checkoutState.actualStep
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}