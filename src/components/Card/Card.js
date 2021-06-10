import React from "react";
import "./Card.scss";
// import frontCard from "../..img/frontCard.png";

function Card() {
  return (
    <>
      <div className="card__front card__part">
        {/* <img
          // className="card__front-square card__square"
          // src={frontCard}
          // alt="frontCard"
        /> */}
        {/* <img
          className="card__front-logo card__logo"
          src=""
          alt="alternative text yay"
        /> */}
        <p className="card_numer">**** **** **** 6258</p>
        <div className="card__space-75">
          <span className="card__label">Card holder</span>
          <p className="card__info">John Doe</p>
        </div>
        <div className="card__space-25">
          <span className="card__label">Expires</span>
          <p className="card__info">10/25</p>
        </div>
      </div>

      <div className="card__back card__part">
        <div className="card__black-line">AAA</div>
        <div className="card__back-content">
          <div className="card__secret">
            <p className="card__secret--last">420</p>
          </div>
          {/* <img
            className="card__back-square card__square"
            src="https://image.ibb.co/cZeFjx/little_square.png"
            alt="alternative text yay"
          />
          <img
            className="card__back-logo card__logo"
            src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
            alt="alternative text yay"
          /> */}
        </div>
      </div>
    </>
  );
}

export default Card;
