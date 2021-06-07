import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputMask from "react-input-mask";

import SelectCountryCode from "../SelectCountryCode";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingLeft: theme.spacing(15),
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[1-9]/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/]}
      // placeholderChar={"\u2000"}
      // showMask
    />
  );
}

function UiPhoneInput({
  label = "input-01",
  id = "input-01",
  value = "",
  // name = "",
  // placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
  ...props
}) {
  const classes = useStyles();

  return (
    <div className="form-group ">
      {/* <label htmlFor={id}>{label}</label> */}
      <div className="position-relative">
        <TextField
          fullWidth
          required
          id={id}
          label={label}
          name={id}
          variant="filled"
          size="small"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          error={hasErrorMessage && Boolean(errorMessage)}
          helperText={hasErrorMessage && errorMessage}
          InputProps={{
            className: classes.padding,
            inputComponent: TextMaskCustom,
          }}
          InputLabelProps={{ className: classes.padding }}
          {...props}
        />
        <SelectCountryCode />
      </div>
      {/* {hasErrorMessage && errorMessage && (
        <p className="invalid-feedback">{errorMessage}</p>
      )} */}
    </div>
  );
}

export default UiPhoneInput;
