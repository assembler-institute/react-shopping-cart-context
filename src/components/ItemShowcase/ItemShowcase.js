import React from "react";

import "./ItemShowcase.scss";

function ItemShowcase({ title, price, img, quantity }) {
  return (
    <div className="col">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-xl-4 mb-3 mb-xl-0">
              <img className="ItemShowcase__img" src={img} alt={title} />
            </div>
            <div className="col-12 col-xl-8">
              <div className="row flex-column mb-3">
                <div className="col">
                  <h4 className="h5">
                    <strong>{title}</strong>
                  </h4>
                </div>
                <div className="col">
                  <div className="row flex-column">
                    <span className="col">
                      <strong>Quantity: </strong>
                      {quantity}
                    </span>
                    <span className="col">
                      <strong>Price: </strong>
                      {price}€
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*         <div className="col">
          <hr />
        </div> */}
      </div>
    </div>
  );
}
export default ItemShowcase;
