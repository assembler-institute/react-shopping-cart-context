import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

import { DETAIL, PAYMENT, SUMMARY, ADDRESS } from "../../constants/routes";

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

export default function HorizontalLabelPositionBelowStepper({
  activePage,
  mobile,
}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();
  const steps = [
    { name: "Account", route: DETAIL },
    { name: "Shipping", route: ADDRESS },
    { name: "Payment", route: PAYMENT },
    { name: "Order review", route: SUMMARY },
  ];

  useEffect(() => {
    setActiveStep(activePage - 1);
  }, [activePage]);

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.name}>
            <StepButton
              onClick={() => {
                history.push(step.route);
              }}
            >
              {mobile && step.name}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
