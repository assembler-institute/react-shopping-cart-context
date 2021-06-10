import React from "react";
import cn from "clsx";

function Button({
  submitButton,
  disabled = false,
  block = false,
  small = false,
  handleClick = () => {},
  children,
  ...props
}) {
  function onHandleClick(e) {
    handleClick(e);
  }

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
      onClick={onHandleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
