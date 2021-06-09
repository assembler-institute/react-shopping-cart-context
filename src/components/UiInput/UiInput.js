import React from "react";
import TextField from "@material-ui/core/TextField";

function UiInput({
  label = "input-01",
  id = "input-01",
  value = "",
  handleChange = () => {},
  handleBlur = () => {},
  handleFlip = () => {},
  errorMessage,
  hasErrorMessage,
  type = "text",
  maxLength = 0,
  ...props
}) {
  function handleFocus(e) {
    if (e.target.id === "cardCvv") {
      handleFlip(e);
    }
  }
  function onHandleChange(e) {
    if (e.target.value.length === maxLength + 1 && maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    handleChange(e);
  }
  function onHandleBlur(e) {
    if (e.target.id === "cardCvv") {
      handleFlip(e);
    }
    handleBlur(e);
  }

  return (
    <TextField
      fullWidth
      required
      id={id}
      label={label}
      name={id}
      variant="filled"
      size="small"
      value={value}
      onChange={onHandleChange}
      onBlur={onHandleBlur}
      onFocus={handleFocus}
      error={hasErrorMessage && Boolean(errorMessage)}
      helperText={hasErrorMessage && errorMessage}
      type={type}
      // inputProps={{ maxLength: maxLength }}
      {...props}
    />
  );
}

export default UiInput;
