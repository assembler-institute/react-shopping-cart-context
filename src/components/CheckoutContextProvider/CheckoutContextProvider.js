import React, { useReducer, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// context
import { CheckoutContext } from "../../context/CheckoutContext";
import { OverviewContext } from "../../context/OverviewContext";
// local storage hook
import useLocalStorage from "../../hooks/useLocalStorage"

const checkoutInitialState = {
    personalInfo: {},
    billingAddress: {},
    payment: {},
    actualStep: 1
}

function checkoutReducer(state, action) {
    const { type, nameForm, payload } = action
    switch (type) {
        case "FINISH_CHECKOUT":
            return {
                actualStep: 1
            }

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

const checkInitialState = () => {
    return localStorage.getItem("checkoutInfo") ?
        JSON.parse(localStorage.getItem("checkoutInfo"))
        : checkoutInitialState
}

export default function CheckoutContextProvider({ children }) {
    const [checkoutState, dispatch] = useReducer(checkoutReducer, { ...checkInitialState() })
    const { setCartItems } = useContext(OverviewContext)
    const history = useHistory()

    const { personalInfo, billingAddress, payment, actualStep } = checkoutState
    useLocalStorage(
        { personalInfo, billingAddress, payment, actualStep },
        "checkoutInfo"
    )

    useEffect(() => {
        const location = history.location.pathname.split("/")[2]
        // const step = parseInt(location.substring(5, 6), 10)
        if (location !== `step-${actualStep}`) {
            history.push(`/checkout/step-${actualStep}`)
        }
    }, [])

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

    const setCheckoutDone = (saveUserInfo) => {
        if (!saveUserInfo) localStorage.removeItem("checkoutInfo")

        localStorage.removeItem("react-sc-state-cart-items")
        dispatch({
            type: "FINISH_CHECKOUT"
        })
        setCartItems([])
        return history.push(`/`)
    }

    return (
        <CheckoutContext.Provider value={{
            setFormInfo: setFormInfo,
            setCheckoutDone: setCheckoutDone,
            setStep: setStep,
            personalInfo: personalInfo,
            billingAddress: billingAddress,
            payment: payment,
            actualStep: checkoutState.actualStep
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}