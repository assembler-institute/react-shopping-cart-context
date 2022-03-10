import React, { useContext } from "react";
import "./creditCardTemplate.scss";

// context
import { CreditCardContext } from "../../context/CreditCardContext";

import creditChip from "../../assets/img/creditChip.png"
import background from "../../assets/img/worldCard.png"

export default function CreditCardTemplate() {
    const { cardHolderName, cardNumber, expireDate, cvv } = useContext(CreditCardContext)

    const replaceAllExceptLast = (str, n) => {
        const token = "*";
        if (str.length >= 17) {
            return str.replace(/[0-9]/g, (match, offset) => {
                return offset < str.length - n ? token : match;
            });
        }
        return str.replace(/[0-9]/g, "*")
    }

    console.log("render: credit card template")
    return (
        <div className="cardContainer">
            <div className="backgroundCard">
                <img src={background} alt="background card template" />
            </div>
            <h3 className="cardType">CARD TYPE</h3>
            <img className="chip" src={creditChip} alt="chip" />
            <p className="CardNumbersField">{replaceAllExceptLast(cardNumber, 4) || "**** **** **** ****"}</p>
            <div className="cardFooter">
                <p className="CardHolderField">{cardHolderName}</p>
                <p className="expireField">Expires: {expireDate || "MM/YY"}</p>
                <p>CVV:{cvv.replace(/[0-9]/g, "#")}</p>
            </div>

        </div>
    )
}