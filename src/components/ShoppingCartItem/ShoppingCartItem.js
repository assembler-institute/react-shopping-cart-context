import React from "react";

import "./ShoppingCartItem.scss";

import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";

import { AiFillDelete as DeleteIcon } from "react-icons/ai";

function buildSelectOptions(unitsInStock) {
  return Array.from({ length: unitsInStock }, (_value, index) => {
    const currentIndex = index + 1;
    return (
      <MenuItem key={currentIndex} value={currentIndex}>
        {currentIndex}
      </MenuItem>
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
    <div className="col">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-md-5 mb-3 mb-md-0">
              <img className="ShoppingCartItem__img" src={img} alt="" />
            </div>
            <div className="col-12 col-md-7">
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
                  <div className="row align-items-center">
                    <div className="col ">
                      <Select
                        onChange={onHandleChange}
                        onBlur={onHandleChange}
                        value={quantity}
                      >
                        {buildSelectOptions(unitsInStock)}
                      </Select>
                    </div>
                    <div className="col-auto align-self-end">
                      <IconButton
                        onClick={onHandleRemove}
                        variant="contained"
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
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

export default ShoppingCartItem;
