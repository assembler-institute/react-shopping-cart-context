import React from "react";

import "./reviewProductItem.scss"

export default function ReviewProductItem({
    img,
    title,
    price,
    quantity,
}) {
    return (
        <div className="productReview">
            <div className="productMainInfo">
                <div className="productImage">
                    <img src={img} alt="product" />
                </div>
                <div className="productTitle">
                    <h3>{title}</h3>
                </div>
            </div>
            <div className="priceInfo">
                <p>{`Units:${quantity}`}</p>
                <p>{`${price}€`}</p>
            </div>
        </div>
    )
}