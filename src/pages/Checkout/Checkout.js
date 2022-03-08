import React, { useContext } from "react";
import { Route } from "react-router-dom";

// styles
import "./checkout.scss"

// steps import
import { PersonalForm, BillingForm, PaymentForm } from "./steps"
// contexts
import { OverviewContext } from "../../context/OverviewContext";
// reducer provider
import CheckoutContextProvider from "../../components/CheckoutContextProvider"

import withLayout from "../../hoc/withLayout";
import ProgressBar from "../../components/ProgressBar";
import Overview from "../../components/Overview/Overview";


function Checkout() {

    const { cartItems } = useContext(OverviewContext)
    // const history = useHistory()
    console.log(cartItems)
    return (
        <CheckoutContextProvider>
            <header className="checkoutHeader">
                <ProgressBar />
            </header>

            <main className="CheckoutWrapper mflex mrow mjustify-between">
                <article className="checkoutForm">
                    <Route path="/checkout/step-1"><PersonalForm /></Route>
                    <Route path="/checkout/step-2"><BillingForm /></Route>
                    <Route path="/checkout/step-3"><PaymentForm /></Route>
                </article>
                <Overview />
            </main>

        </CheckoutContextProvider>

    )
}

export default withLayout(Checkout)