import React from "react";
import TextField from "@material-ui/core/TextField";

function UiInput({
  label = "input-01",
  id = "input-01",
  value = "",
  name = "",
  // placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      name={name}
      variant="filled"
      size="small"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={hasErrorMessage && Boolean(errorMessage)}
      helperText={errorMessage}
      {...props}
    />
  );
}

export default UiInput;
