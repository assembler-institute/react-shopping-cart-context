import React, { useContext } from "react";

// context
import { CheckoutContext } from "../../context/CheckoutContext";
// styles
import "./progressBar.scss";

const STEPS = ["Account", "Shipping", "Payment", "Review"]


export default function ProgressBar() {
    const { setStep, actualStep } = useContext(CheckoutContext)

    const stepClassBtn = (stepNum) => {
        if (actualStep > stepNum) return "mnoButton stepButton stepCompleted"
        if (actualStep === stepNum) return "mnoButton stepButton stepActive"
        return "mnoButton stepButton"
    }
    return (
        <div className="progressBar mflex mrow mjustify-between">
            <div className="stepSecondaryLine ">
                <div className={`stepLine progress-${actualStep}`} />
            </div>
            {STEPS.map((step, index) => {
                const stepNum = index + 1
                return (
                    <div key={step} className="stepContainer mflex mcol malign-center  " >
                        <button
                            type="button"
                            disabled={actualStep < stepNum}
                            onClick={() => { setStep(stepNum) }}
                            className={stepClassBtn(stepNum)}
                        >
                            {stepNum}
                        </button>
                        <p>{step}</p>
                    </div>
                )
            })}

        </div >
    )
}