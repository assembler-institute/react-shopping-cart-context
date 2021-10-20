import React from "react";

import FavoriteIconButton from "../FavoriteIconButton";
import IconButton from "../IconButton";
import Button from "../Button";
import { ThumbDown, ThumbUp } from "../SVGIcons";

import "./ItemCard.scss";
import { useEcommerce } from "../../context/EcommerceContext";

import { getPopularityClasses} from "../../store/EcommerceHandlers"


function ItemCard({
  id,
  img,
  title,
  shortDescription,
  isFavorite,
  upVotes,
  downVotes
}) {

  const {handleDownVote, handleSetFavorite,handleUpVote, handleAddToCart} = useEcommerce()

  return (
    <article className="ItemCard col col-12 col-md-6 col-lg-4">
      <header>
        <div className="ItemCard__image-wrapper">
          <img src={img} className="ItemCard__image" alt={title} />
          <FavoriteIconButton
            handleSetFavorite={() => handleSetFavorite(id)}
            isFavorite={isFavorite}
          />
        </div>
        <h2 className="ItemCard__title">{title}</h2>
      </header>
      <Divider />
      <p className="ItemCard__description">{shortDescription}</p>
      <Divider />
      <footer className="ItemCard__meta">
        <div className="ItemCard__icons">
          <div className="ItemCard__icon-row">
            <IconButton aria-label="up vote product" handleClick={() => handleUpVote(id)}>
              <ThumbUp />
            </IconButton>
            <p
              className={getPopularityClasses(
                upVotes.currentValue,
                upVotes.upperLimit,
                "ItemCard__icon-txt",
                "ItemCard__icon-popular",
              )}
            >
              {upVotes.currentValue}
            </p>
          </div>
          <div className="ItemCard__icon-row">
            <IconButton aria-label="down vote product" handleClick={() => handleDownVote(id)}>
              <ThumbDown />
            </IconButton>
            <p
              className={getPopularityClasses(
                downVotes.currentValue,
                downVotes.lowerLimit,
                "ItemCard__icon-txt",
                "ItemCard__icon-unpopular",
              )}
            >
              {downVotes.currentValue}
            </p>
          </div>
        </div>
        <div className="ItemCard__icon-row">
          <Button onClick={() => handleAddToCart(id)}>Add to cart</Button>
        </div>
      </footer>
    </article>
  );
}

export default ItemCard;
