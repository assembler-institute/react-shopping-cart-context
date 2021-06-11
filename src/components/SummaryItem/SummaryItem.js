import React from "react";

// import Button from "../Button";

import buildSelectOptions from "../../utils/buildSelectOptions";

import "./SummaryItem.scss";
// function buildSelectOptions(unitsInStock) {
//   return Array.from({ length: unitsInStock }, (_value, index) => {
//     const currentIndex = index + 1;
//     return (
//       <option key={currentIndex} value={currentIndex}>
//         {currentIndex}
//       </option>
//     );
//   });
// }

function SummaryItem({
  id,
  img,
  title,
  price,
  quantity,
  unitsInStock,
  handleChange,
  handleRemove,
}) {
  function onHandleChange(event) {
    handleChange(event, id);
  }
  function onHandleRemove() {
    handleRemove(id);
  }

  return (
    <div className="col sidebar-products mb-4">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-xl-4 mb-3 mb-xl-0">
              <img className="ShoppingCartItem__img" src={img} alt="" />
            </div>
            <div className="col-12 col-xl-8">
              <div className="row flex-column">
                <div className="col d-flex justify-content-between align-items-start">
                  <h4 className="h5">
                    <strong>{title}</strong>
                  </h4>
                  {handleRemove && (
                    <button type="button" onClick={onHandleRemove}>
                      ×
                    </button>
                  )}
                </div>
                <div className="col">
                  <p>
                    <strong>{price}€</strong> × {quantity}
                  </p>
                </div>
                {handleChange && (
                  <div className="col mt-auto">
                    <div className="row">
                      <div className="col col-6 col-lg-4">
                        <select
                          className="custom-select"
                          onChange={onHandleChange}
                          onBlur={onHandleChange}
                          value={quantity}
                        >
                          {buildSelectOptions(unitsInStock)}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col">
          <hr />
        </div> */}
      </div>
    </div>
  );
}

export default SummaryItem;
