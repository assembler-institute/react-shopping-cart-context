import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((newTheme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: newTheme.spacing(1),
  },
  instructions: {
    marginTop: newTheme.spacing(1),
    marginBottom: newTheme.spacing(1),
  },
}));

function getSteps() {
  return ["Account", "Shipping", "Payment", "Order review"];
}

export default function HorizontalLabelPositionBelowStepper({ activePage }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  useEffect(() => {
    setActiveStep(activePage - 1);
  }, [activePage]);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
