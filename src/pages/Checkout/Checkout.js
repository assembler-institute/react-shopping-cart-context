import React, { useContext, useState } from "react";
import { Route, useHistory } from "react-router-dom";

// styles
import "./checkout.scss"

// steps import
import { PersonalForm, BillingForm, PaymentForm } from "./steps"
// contexts
import { OverviewContext } from "../../context/OverviewContext";
import { CheckoutContext } from "../../context/CheckoutContext";

import withLayout from "../../hoc/withLayout";
import ProgressBar from "../../components/ProgressBar";

const INITIAL_NEXT_STEP = 2

function Checkout() {
    const [nextStep, setNextStep] = useState(INITIAL_NEXT_STEP)
    const { cartItems } = useContext(OverviewContext)
    const history = useHistory()

    const handleSteps = (step = null) => {
        if (!step) {
            setNextStep(nextStep + 1)
            return history.push(`/checkout/step-${nextStep}`)
        }
        return history.push(`/checkout/step-${step}`)
    }

    console.log(cartItems)
    return (
        <main>
            <CheckoutContext.Provider value={{
                handleSteps: handleSteps
            }}>
                <header className="checkoutHeader">
                    <ProgressBar />
                </header>
                <article className="checkoutForm">
                    <Route path="/checkout/step-1"><PersonalForm /></Route>
                    <Route path="/checkout/step-2"><BillingForm /></Route>
                    <Route path="/checkout/step-3"><PaymentForm /></Route>
                </article>
            </CheckoutContext.Provider>
            <aside className="checkoutList" />
            <footer className="checkoutFooter">
                Footer
            </footer>
        </main>


    )
}

export default withLayout(Checkout)