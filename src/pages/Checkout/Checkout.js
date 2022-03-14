import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// styles
import "./checkout.scss"

// steps import
import { PersonalForm, BillingForm, PaymentForm } from "../../components/CheckoutForms"

import { ReviewCheckout } from "../../components/ReviewCheckout";

import withLayout from "../../hoc/withLayout";
import ProgressBar from "../../components/ProgressBar";
import Overview from "../../components/Overview/Overview";
import { CheckoutContext } from "../../context/CheckoutContext";
import { OverviewContext } from "../../context/OverviewContext";




function Checkout() {
    const { cartItems } = useContext(OverviewContext)
    const { actualStep } = useContext(CheckoutContext)

    return (
        <>
            <header className="checkoutHeader">
                <ProgressBar />
            </header>

            <main className="CheckoutWrapper ">
                <article className="checkoutFormWrapper mflex mrow mjustify-between">
                    <Route path="/checkout/step-1"><PersonalForm /></Route>
                    <Route path="/checkout/step-2"><BillingForm /></Route>
                    <Route path="/checkout/step-3"><PaymentForm /></Route>
                    <Route path="/checkout/step-4"><ReviewCheckout /></Route>
                    {cartItems.length === 0 && <Redirect to="/" />}
                    {actualStep <= 2 && <Overview />}
                </article>
            </main>
        </>

    )
}

export default withLayout(Checkout)