import React from "react";
import "./creditCardTemplate.scss";

import creditChip from "../../assets/img/creditChip.png"
import background from "../../assets/img/worldCard.png"

export default function CreditCardTemplate() {
    return (
        <div className="cardContainer">
            <div className="backgroundCard">
                <img src={background} alt="background card template" />
            </div>
            <h3 className="cardType">CARD TYPE</h3>
            <img className="chip" src={creditChip} alt="chip" />
            <p className="CardNumbersField">030123012043123123</p>
            <div className="cardFooter">
                <p className="CardHolderField">Luis Molina Mateo</p>
                <p className="expireField">06/24</p>
            </div>

        </div>
    )
}