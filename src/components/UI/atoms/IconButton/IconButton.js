import React from "react";
import PropTypes from "prop-types";

function IconButton({ submit, handleClick, children, ...props }) {
  return (
    <button
      type={submit ? "submit" : "button"}
      className="btn btn-light p-1"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

IconButton.propTypes = {
  submit: PropTypes.any,
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

IconButton.defaultProps = {
  submit: undefined,
  handleClick: null,
};

export default IconButton;
