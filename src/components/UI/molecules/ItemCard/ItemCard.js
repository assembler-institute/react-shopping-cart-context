import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  FavoriteIconButton,
  IconButton,
  ThumbDown,
  ThumbUp
} from 'components/UI/atoms'

import "./ItemCard.scss";

function Divider() {
  return <hr className="ItemCard__divider" />;
}

function getPopularityClasses(
  currentValue,
  limit,
  prevClasses,
  popularityClassName,
) {
  const halfLimit = Math.floor(limit / 2);

  if (currentValue >= halfLimit) {
    return `${prevClasses} ${popularityClassName}`;
  }

  return prevClasses;
}

function ItemCard({
  id,
  img,
  title,
  shortDescription,
  isFavorite,
  upVotes,
  downVotes,
  handleDownVote,
  handleUpVote,
  handleSetFavorite,
  handleAddToCart,
}) {
  const onDownVote = () => handleDownVote(id);
  const onUpVote = () => handleUpVote(id);
  const onSetFavorite = () => handleSetFavorite(id);
  const onAddToCart = () => handleAddToCart(id);

  return (
    <article className="ItemCard col col-12 col-md-6 col-lg-4">
      <header>
        <div className="ItemCard__image-wrapper">
          <img src={img} className="ItemCard__image" alt={title} />
          <FavoriteIconButton
            handleSetFavorite={onSetFavorite}
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
            <IconButton aria-label="up vote product" handleClick={onUpVote}>
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
            <IconButton aria-label="down vote product" handleClick={onDownVote}>
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
          <Button onClick={onAddToCart}>Add to cart</Button>
        </div>
      </footer>
    </article>
  );
}

getPopularityClasses.propTypes = {
  currentValue: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  prevClasses: PropTypes.string,
  popularityClassName: PropTypes.string,
};

getPopularityClasses.defaultProps = {
  prevClasses: "",
  popularityClassName: "",
};

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  upVotes: PropTypes.shape({
    currentValue: PropTypes.number.isRequired,
    upperLimit: PropTypes.number.isRequired,
  }),
  downVotes: PropTypes.shape({
    currentValue: PropTypes.number.isRequired,
    lowerLimit: PropTypes.number.isRequired,
  }),
  handleDownVote: PropTypes.func.isRequired,
  handleUpVote: PropTypes.func.isRequired,
  handleSetFavorite: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ItemCard;
