import React, { useContext } from "react";
import { StateContext } from "../../context/state-context";

import "./ShoppingCartItem.scss";

function SummaryItem({ img, title, price, quantity }) {
  const value = useContext(StateContext);
  const { currentStep } = value;
  return (
    <div className={currentStep === 4 ? "col col-4" : "col"}>
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-xl-4 mb-3 mb-xl-0">
              <img className="ShoppingCartItem__img" src={img} alt="" />
            </div>
            <div className="col-12 col-xl-8">
              <div className="row flex-column">
                <div className="col">
                  <h4 className="h5">
                    <strong>{title}</strong>
                  </h4>
                </div>
                <div className="col">
                  <p>
                    <strong>{price}€</strong>
                  </p>
                </div>
                <div className="col d-flex flex-row justify-content-between bg-light m-auto">
                  <div>quantity:</div>
                  <div className="">{quantity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
}

export default SummaryItem;
