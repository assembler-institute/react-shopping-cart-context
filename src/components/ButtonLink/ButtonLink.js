import React from "react";
import cn from "clsx";
import { useHistory } from "react-router-dom";
import ButtonMUI from "@material-ui/core/Button";

function ButtonLink({
  page = "",
  disabled = false,
  block = false,
  small = false,
  handleClick = () => {},
  children,
  ...props
}) {
  const history = useHistory();
  const classes = cn({
    "btn px-4 mx-3": true,
    "btn-primary": true,
    "btn-block": block,
    "btn-sm": small,
  });

  function onHandleClick(e) {
    handleClick(e);
    history.push(page);
  }

  return (
    <ButtonMUI
      variant="contained"
      color="primary"
      className={classes}
      type="button"
      disabled={disabled}
      onClick={onHandleClick}
      {...props}
    >
      {children}
    </ButtonMUI>
  );
}

export default ButtonLink;
