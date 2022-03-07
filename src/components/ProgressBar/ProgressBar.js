import React from "react";

// react step bar
// styles
import "./progressBar.scss";

export default function ProgressBar() {
    return (
        <div className="progressBar mflex mrow mjustify-between">
            <div className="stepSecondaryLine ">
                <div className="stepLine" />
            </div>
            <div className="stepContainer mflex mcol malign-center  ">
                <button className="mnoButton stepButton" type="button">1</button>
                <p>Personal Information</p>
            </div>
            <div className="stepContainer mflex mcol malign-center ">
                <button className="mnoButton stepButton" type="button">2</button>
                <p>Billing address</p>
            </div>
            <div className="stepContainer mflex mcol malign-center ">
                <button className="mnoButton stepButton" type="button">3</button>
                <p>Payment</p>
            </div>
            <div className="stepContainer mflex mcol malign-center ">
                <button className="mnoButton stepButton" type="button">4</button>
                <p>Review</p>
            </div>

        </div>
    )
}