import React, { useContext } from "react";
import { Route } from "react-router-dom";

// styles
import "./checkout.scss"

// steps import
import { PersonalForm, BillingForm, PaymentForm, Review } from "./steps"

import withLayout from "../../hoc/withLayout";
import ProgressBar from "../../components/ProgressBar";
import Overview from "../../components/Overview/Overview";
import { CheckoutContext } from "../../context/CheckoutContext";


function Checkout() {
    const { actualStep } = useContext(CheckoutContext)
    console.log("render: checkout")
    return (
        <>
            <header className="checkoutHeader">
                <ProgressBar />
            </header>

            <main className="CheckoutWrapper ">
                <article className="checkoutFormWrapper mflex mrow mjustify-between">
                    <Route path="/checkout/step-3"><PersonalForm /></Route>
                    <Route path="/checkout/step-2"><BillingForm /></Route>
                    <Route path="/checkout/step-4"><PaymentForm /></Route>
                    <Route path="/checkout/step-1"><Review /></Route>
                    {actualStep === 2 && <Overview />}
                </article>

            </main>
        </>

    )
}

export default withLayout(Checkout)