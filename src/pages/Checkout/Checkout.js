import React, { useContext, useState } from "react";
import { Route, useHistory } from "react-router-dom";

// steps import
import { Step1, Step2, Step3 } from "./steps"

import { CheckoutContext } from "../../context/CheckoutContext";
import withLayout from "../../hoc/withLayout";

function Checkout() {
    const [stepCount, setStepCount] = useState(2)
    const { cartItems } = useContext(CheckoutContext)
    const history = useHistory()

    const handleSteps = () => {
        setStepCount(stepCount + 1)
        history.push(`/checkout/step-${stepCount}`)
    }

    console.log(cartItems)
    return (
        <main>
            <header className="checkoutHeader">
                Header
            </header>
            <article className="checkoutForm">
                Article
                <Route path="/checkout/step-1"><Step1 /></Route>
                <Route path="/checkout/step-2"><Step2 /></Route>
                <Route path="/checkout/step-3"><Step3 /></Route>
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