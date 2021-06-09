import React from "react";

import "./SummaryCartItem.scss";

function SummaryCartItem({ img, title, price, quantity }) {
  return (
    <div className="col">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-md-2 mb-3 mb-md-0">
              <img className="ShoppingCartItem__img" src={img} alt="" />
            </div>
            <div className="col-12 col-md-10 d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col col-12 col-md-4">
                  <h4 className="h5">
                    <strong>{title}</strong>
                  </h4>
                </div>
                <div className="col col-12 col-md-4 pe-5 text-md-end">
                  <p>Qty {quantity}</p>
                </div>
                <div className="col col-12 col-md-4 pe-5 text-md-end">
                  <p>${price}</p>
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

export default SummaryCartItem;
