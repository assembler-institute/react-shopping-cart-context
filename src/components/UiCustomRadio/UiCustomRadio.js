import React from "react";

import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function UiCustomRadio({
  value,
  chosenValue,
  formText,
  formImage,
  color,
  ...props
}) {
  return (
    <div
      className={clsx(
        "radio-border-box mb-2 mb-lg-0",
        chosenValue === value && "selected",
      )}
      key={value}
    >
      <FormControlLabel
        value={value}
        control={<Radio inputProps={{ "aria-label": value }} color={color} />}
        label={formText || <img src={formImage} alt={value} />}
        props={props}
      />
    </div>
  );
}
