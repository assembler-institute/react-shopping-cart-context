import React, { useEffect, useState } from "react";
import "./CreditCard.scss";

function CreditCard({
  cardNameAnimation,
  cardCVVCodeAnimation,
  cardNumberAnimation,
  cardExpirationDateAnimation,
}) {
  const [ccvChange, setCcvChange] = useState(false);
  const [newNumber, setNewNumber] = useState("");
  const [newCvv, setNewCvv] = useState("");
  const ccvCHangelol = "";

  const cardNumberAnimationString = cardNumberAnimation.toString();

  useEffect(() => {
    if (ccvCHangelol === cardCVVCodeAnimation) {
      setCcvChange(false);
    } else {
      setCcvChange(true);
    }
    setTimeout(() => {
      setCcvChange(false);
    }, 4000);
  }, [cardCVVCodeAnimation]);

  useEffect(() => {
    const myPlus = "x";
    let plusChain = "";
    for (let i = 0; i <= cardNumberAnimationString.length + 3; i += 1) {
      if (i % 5 === 0) {
        plusChain += " ";
      } else {
        plusChain += myPlus;
      }
    }
    setNewNumber(plusChain);
  }, [cardNumberAnimation]);

  useEffect(() => {
    const myPlusCVV = "x";
    let plusChainCVV = "";
    for (let i = 0; i < cardCVVCodeAnimation.length; i += 1) {
      plusChainCVV += myPlusCVV;
    }
    setNewCvv(plusChainCVV);
  }, [cardCVVCodeAnimation]);

  // useEffect(() => {
  //   console.log(cardNameAnimation);
  //   console.log(cardCVVCodeAnimation);
  //   console.log(cardNumberAnimation);
  //   console.log(cardExpirationDateAnimation);
  //   console.log(cardNumberAnimationString);
  // }, []);

  return (
    <>
      {!ccvChange && (
        <div className="creditCard--container">
          <div className="creditCard">
            <div className="card__header">
              <img
                className="card__chip"
                src="https://img.icons8.com/offices/452/sim-card-chip.png"
                alt="Chip_image"
              />
              <div>
                <svg
                  className="icon icon--full-color"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-visa"
                >
                  <title id="pi-visa">Visa</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  />
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  />
                  <path
                    d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                    fill="#142688"
                  />
                </svg>
              </div>
            </div>
            {newNumber === " xxx" ? (
              <div className="card__body">xxxx xxxx xxxx xxxx</div>
            ) : (
              <div className="card__body">{newNumber}</div>
            )}
            <div className="card__footer">
              <div>
                {cardNameAnimation === "" ? (
                  <p>
                    Your fucking name
                    <span role="img" aria-labelledby="emoji">
                      &#129297;
                    </span>
                  </p>
                ) : (
                  <p>
                    {cardNameAnimation}
                    <span role="img" aria-labelledby="emoji">
                      &#129297;
                    </span>
                  </p>
                )}
              </div>
              {cardExpirationDateAnimation === "" ? (
                <div>mm/yy</div>
              ) : (
                <div>{cardExpirationDateAnimation}</div>
              )}
            </div>
          </div>
        </div>
      )}
      {ccvChange && (
        <div className="creditCard--container">
          <div className="creditCard--Back">
            <div className="card__header--back">
              <div />
            </div>
            <div className="card__body--Back">
              <div className="card__line" />
              <div className="card__CCV">{newCvv}</div>
            </div>
            <div className="card__footer--back">
              <div className="card__line2" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreditCard;
