import React from "react";
import { SavedIcon, UnsavedIcon } from "../SVGIcons";
import PropTypes from "prop-types";

import "./FavoriteIconButton.scss";

function FavoriteIconButton({ handleSetFavorite, isFavorite }) {
  return (
    <button
      type="button"
      className="btn btn-light FavoriteIconButton"
      onClick={handleSetFavorite}
      aria-label="save as favorite"
    >
      {isFavorite ? <SavedIcon /> : <UnsavedIcon />}
    </button>
  );
}

FavoriteIconButton.propTypes = {
  handleSetFavorite: PropTypes.func,
  isFavorite: PropTypes.bool.isRequired,
};

FavoriteIconButton.defaultProps = {
  handleSetFavorite: null,
  isFavorite: false,
};

export default FavoriteIconButton;
