import React from "react";
import cn from "clsx";
import PropTypes from "prop-types";

function Button({
  submitButton,
  disabled = false,
  block = false,
  small = false,
  children,
  ...props
}) {
  const classes = cn({
    btn: true,
    "btn-primary": true,
    "btn-block": block,
    "btn-sm": small,
  });

  return (
    <button
      className={classes}
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  submitButton: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  submitButton: false,
  disabled: false,
  block: false,
  small: false,
};

export default Button;
