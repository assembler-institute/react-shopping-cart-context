import React from "react";
import PropTypes from "prop-types";

import { Button } from "components/UI/atoms";

import { useCartItems } from "context";

import "./ShoppingCartItem.scss";

function buildSelectOptions(unitsInStock) {
  return Array.from({ length: unitsInStock }, (_value, index) => {
    const currentIndex = index + 1;
    return (
      <option key={currentIndex} value={currentIndex}>
        {currentIndex}
      </option>
    );
  });
}

function ShoppingCartItem({
  id,
  img,
  title,
  price,
  quantity,
  unitsInStock,
}) {

  const {
    handleChangeQuantity,
    handleRemoveItem,
  } = useCartItems();

  function onHandleChange(event, id) {
    event.persist();
    handleChangeQuantity(event, id);
  }
  function onHandleRemove() {
    handleRemoveItem(id);
  }

  return (
    <div className="col">
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
                <div className="col mt-auto">
                  <div className="row">
                    <div className="col col-6 col-lg-4">
                      <select
                        className="custom-select"
                        onChange={(event) => onHandleChange(event, id)}
                        onBlur={(event) => onHandleChange(event, id)}
                        value={quantity}
                      >
                        {buildSelectOptions(unitsInStock)}
                      </select>
                    </div>
                    <div className="col col-6 col-lg-8">
                      <Button onClick={onHandleRemove}>Remove</Button>
                    </div>
                  </div>
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

ShoppingCartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  unitsInStock: PropTypes.number.isRequired
};

export default ShoppingCartItem;
