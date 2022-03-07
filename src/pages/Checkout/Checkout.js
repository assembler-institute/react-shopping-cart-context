import React, { useContext, useState } from "react";
import { Route, useHistory } from "react-router-dom";

// styles
import "./checkout.scss"

// steps import
import { PersonalForm, BillingForm, PaymentForm } from "./steps"

import { CheckoutContext } from "../../context/CheckoutContext";
import withLayout from "../../hoc/withLayout";
import ProgressBar from "../../components/ProgressBar";

const INITIAL_NEXT_STEP = 2

function Checkout() {
    const [nextStep, setNextStep] = useState(INITIAL_NEXT_STEP)
    const { cartItems } = useContext(CheckoutContext)
    const history = useHistory()

    const handleSteps = (step = null) => {
        if (!step) {
            console.log("hi")
            setNextStep(nextStep + 1)
            history.push(`/checkout/step-${nextStep}`)
        }

    }

    console.log(cartItems)
    return (
        <main>
            <header className="checkoutHeader">
                <ProgressBar />
            </header>
            <article className="checkoutForm">
                Article
                <Route path="/checkout/step-1"><PersonalForm /></Route>
                <Route path="/checkout/step-2"><BillingForm /></Route>
                <Route path="/checkout/step-3"><PaymentForm /></Route>
                <button type="button" onClick={handleSteps}>Next</button>
            </article>
            <aside className="" />
            <footer className="checkoutFooter">
                Footer
            </footer>
        </main>


    )
}

export default withLayout(Checkout)