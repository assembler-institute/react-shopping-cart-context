import classNames from "classnames";
import React from "react";
import Select from "../Select";

import "./Input.scss";

function Input({
  withSelect,
  type = "text",
  label = "input-01",
  id = "input-01",
  value = "",
  placeholder = "",
  handleChange = () => {},
  handleBlur = () => {},
  handleFocus = () => {},
  errorMessage,
  hasErrorMessage,
  shortInput = false,
  ...props
}) {
  const formItemClasses = classNames({
    "mt-3": true,
    "short-input": shortInput,
  });

  let messageFail;
  if (withSelect) {
    if (
      hasErrorMessage &&
      errorMessage &&
      withSelect.hasErrorMessage &&
      withSelect.errorMessage
    ) {
      messageFail = `${withSelect.errorMessage} | ${errorMessage}`;
    } else if (hasErrorMessage && errorMessage) {
      messageFail = errorMessage;
    } else if (withSelect.hasErrorMessage && withSelect.errorMessage) {
      messageFail = withSelect.errorMessage;
    }
  }
  return (
    <div className={formItemClasses}>
      {!withSelect && (
        <>
          <label htmlFor={id}>{label}</label>
          <div
            className={classNames("flex-prop", "input-wrapper", {
              "input-fail": hasErrorMessage && errorMessage,
              "input-success": hasErrorMessage && !errorMessage,
            })}
          >
            <input
              className="form-input mr-2"
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              {...props}
            />
            {hasErrorMessage && errorMessage && (
              <i className="uit uit-times-circle custom-icon-fail" />
            )}
            {hasErrorMessage && !errorMessage && (
              <i className="uit uit-check-circle custom-icon-success" />
            )}
          </div>
          {hasErrorMessage && errorMessage && (
            <p className="form-feedback">{errorMessage}</p>
          )}
        </>
      )}
      {withSelect && (
        <>
          <label htmlFor={id}>{label}</label>
          <div
            className={classNames("flex-prop", "input-wrapper", {
              "input-fail":
                (hasErrorMessage && errorMessage) ||
                (withSelect.hasErrorMessage && withSelect.errorMessage),
              "input-success":
                hasErrorMessage &&
                !errorMessage &&
                withSelect.hasErrorMessage &&
                !withSelect.errorMessage,
            })}
          >
            <Select
              isChild
              id={withSelect.id}
              value={withSelect.value}
              options={withSelect.options}
              placeholder={withSelect.placeholder}
              handleChange={withSelect.handleChange}
              handleBlur={withSelect.handleBlur}
              hasErrorMessage={withSelect.hasErrorMessage}
              errorMessage={withSelect.errorMessage}
            />
            <span className="separator mr-3" />
            <input
              className="form-input mr-2"
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              onBlur={handleBlur}
              {...props}
            />
            {((hasErrorMessage && errorMessage) ||
              (withSelect.hasErrorMessage && withSelect.errorMessage)) && (
              <i className="uit uit-times-circle custom-icon-fail" />
            )}
            {hasErrorMessage &&
              !errorMessage &&
              withSelect.hasErrorMessage &&
              !withSelect.errorMessage && (
                <i className="uit uit-check-circle custom-icon-success" />
              )}
          </div>
          {messageFail && <p className="form-feedback">{messageFail}</p>}
        </>
      )}
    </div>
  );
}

export default Input;
