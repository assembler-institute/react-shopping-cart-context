import React, { useContext } from "react";

// context
import { CheckoutContext } from "../../context/CheckoutContext";
// styles
import "./progressBar.scss";

export default function ProgressBar() {
    const { setStep, actualStep } = useContext(CheckoutContext)
    return (
        <div className="progressBar mflex mrow mjustify-between">
            <div className="stepSecondaryLine ">
                <div className="stepLine" />
            </div>
            <div className="stepContainer mflex mcol malign-center  ">
                <button
                    type="button"
                    onClick={() => { setStep(1) }}
                    className={actualStep > 1 ? "mnoButton stepButton completed"
                        : "mnoButton stepButton"}
                >
                    1
                </button>
                <p>Account</p>
            </div>
            <div className="stepContainer mflex mcol malign-center ">
                <button
                    type="button"
                    onClick={() => { setStep(2) }}
                    className={actualStep > 2 ? "mnoButton stepButton completed"
                        : "mnoButton stepButton"}
                >
                    2
                </button>
                <p>Shipping</p>
            </div>
            <div className="stepContainer mflex mcol malign-center ">
                <button
                    type="button"
                    onClick={() => { setStep(3) }}
                    className={actualStep > 3 ? "mnoButton stepButton completed"
                        : "mnoButton stepButton"}
                >
                    3
                </button>
                <p>Payment</p>
            </div>
            <div className="stepContainer mflex mcol malign-center ">
                <button
                    type="button"
                    onClick={() => { setStep(4) }}
                    className={actualStep >= 4 ? "mnoButton stepButton completed"
                        : "mnoButton stepButton"}
                >
                    1
                </button>
                <p>Review</p>
            </div>

        </div>
    )
}