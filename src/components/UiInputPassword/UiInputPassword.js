import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function UiInputPassword({
  fullWidth = true,
  id = "input-01",
  value = "",

  handleChange = () => {},
}) {
  const [showPassword, setshowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel htmlFor={id}>Password</InputLabel>
      <Input
        label="password"
        id={id}
        name={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default UiInputPassword;
