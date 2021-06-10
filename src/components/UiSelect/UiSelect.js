import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

function buildSelectOptions(arrOption = ["element 1", "element 2"]) {
  return arrOption.map((element, index) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <MenuItem key={index} value={element}>
        {element}
      </MenuItem>
    );
  });
}

function UiSelect({
  label = "input-01",
  id = "input-01",
  value = "",
  name = "",
  options,
  handleChange = () => {},
  handleBlur = () => {},
  errorMessage,
  hasErrorMessage,
}) {
  return (
    <TextField
      fullWidth
      select
      id={id}
      label={label}
      name={name}
      value={value}
      size="small"
      onChange={handleChange}
      onBlur={handleBlur}
      error={hasErrorMessage && Boolean(errorMessage)}
      helperText={errorMessage}
    >
      {buildSelectOptions(options)}
    </TextField>
  );
}

export default UiSelect;
