import React from "react";
import TextField from "@material-ui/core/TextField";

import InputMask from "react-input-mask";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, "/", /\d/, /\d/]}
    />
  );
}

function UiInputDate({
  label = "input-01",
  id = "input-01",
  value = "",
  name = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  type = "text",
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
      helperText={hasErrorMessage && errorMessage}
      type={type}
      InputProps={{
        inputComponent: TextMaskCustom,
      }}
      {...props}
    />
  );
}

export default UiInputDate;
