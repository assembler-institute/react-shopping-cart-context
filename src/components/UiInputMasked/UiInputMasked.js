import React from "react";
import TextField from "@material-ui/core/TextField";

import valid from "card-validator";

import InputMask from "react-input-mask";

const usedMask = [
  {
    id: "cardExpiry",
    mask: [/\d/, /\d/, "/", /\d/, /\d/],
  },
  {
    id: "cardNumber",
    mask: [
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      " ",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ],
  },
];

function TextMaskCustom(_props) {
  const { inputRef, ...other } = _props;
  const [obj] = usedMask.filter((el) => el.id === other.id);

  return (
    <InputMask
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={obj.mask}
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
  handleCardType = () => {},
  errorMessage,
  hasErrorMessage,
  type = "text",
  ...props
}) {
  function onHandleChange(e) {
    handleChange(e);
    const numberValidation = valid.number(e.target.value);
    handleCardType(numberValidation.card?.type);
  }

  return (
    <TextField
      fullWidth
      id={id}
      label={label}
      name={name}
      variant="filled"
      size="small"
      value={value}
      onChange={onHandleChange}
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
