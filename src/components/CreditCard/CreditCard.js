import React from "react";
import CardImage from "../../img/CardImage.png";
import "./CreditCard.scss";

function CreditCard({ values }) {
  const holderName = values.cardHolderName.toUpperCase();
  const numbers = values.cardNumber.replace(/(\d{4}(?!\s))/g, "$1 ");
  const cvvConfig = values.cvvCode.replace(/\d/g, "*");
  return (
    <div className="CreditCard">
      <img src={CardImage} alt="card" className="CreditCard__img" />
      <div>
        <p className="CreditCard__name">{holderName}</p>
        <p className="CreditCard__number">{numbers}</p>
        <p className="CreditCard__expiry">{values.expiryDate}</p>
        <p className="CreditCard__cvv">
          cvv
          <br />
          {cvvConfig}{" "}
        </p>
      </div>
    </div>
  );
}

export default CreditCard;
