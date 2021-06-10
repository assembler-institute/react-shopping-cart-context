import React from "react";

import front from "../../img/payment/card-front.svg";
import back from "../../img/payment/card-back.svg";

import "./CardSvg.scss";

function CardSvg({ isFront, cardName, cardNumber, cardDate, cardCVV }) {
  return (
    <div className="card-illustration">
      {isFront ? (
        <>
          <img src={front} alt="front card" />
          <p className="card-text card-name">{cardName}</p>
          <p className="card-text card-number">{cardNumber}</p>
          <p className="card-text card-date">{cardDate}</p>
        </>
      ) : (
        <>
          <img src={back} alt="back card" />
          <p className="card-text card-cvv">{cardCVV}</p>
        </>
      )}
    </div>
  );
}

export default CardSvg;
