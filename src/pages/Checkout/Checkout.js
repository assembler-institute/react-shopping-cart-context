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


function Checkout() {

    const { cartItems } = useContext(OverviewContext)
    // const history = useHistory()
    console.log("render: checkout")
    console.log(cartItems)
    return (
        <main>
            <CheckoutContextProvider>
                <header className="checkoutHeader">
                    <ProgressBar />
                </header>
                <article className="checkoutForm">
                    <Route path="/checkout/step-1"><PersonalForm /></Route>
                    <Route path="/checkout/step-2"><BillingForm /></Route>
                    <Route path="/checkout/step-3"><PaymentForm /></Route>
                </article>
            </CheckoutContextProvider>
            <aside className="checkoutList" />
            <footer className="checkoutFooter">
                Footer
            </footer>
        </main>


    )
}

export default withLayout(Checkout)