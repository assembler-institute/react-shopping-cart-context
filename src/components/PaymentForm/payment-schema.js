import * as Yup from "yup";

const paymentSchema = Yup.object().shape({
  payMethod: Yup.string().required("A radio option is required"),
  cardHolderName: Yup.string()
    .min(2, "Cardholder Name is too short!")
    .max(50, "Cardholder Name is too long!")
    .required("Cardholder Name is required"),
  cardNumber: Yup.string()
    .length(16, "Must be 16 digits!")
    .required("The price is required"),
  expiryDate: Yup.string()
    .typeError("Not a valid expiration date. Example: MM/YY")
    .max(5, "Not a valid expiration date. Example: MM/YY")
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      "Not a valid expiration date. Example: MM/YY",
    )
    .required("Expiration date is required")
    .test(
      "test-credit-card-expiration-date",
      "Invalid Expiration Date has past",
      (expirationDate) => {
        if (!expirationDate) {
          return false;
        }

        const today = new Date();
        const monthToday = today.getMonth() + 1;
        const yearToday = today.getFullYear().toString().substr(-2);

        const [expMonth, expYear] = expirationDate.split("/");

        if (
          Number(expYear) < Number(yearToday) ||
          (Number(expMonth) < monthToday &&
            Number(expYear) <= Number(yearToday))
        ) {
          return false;
        }
        return true;
      },
    )
    .test(
      "test-credit-card-expiration-date",
      "Invalid Expiration Month",
      (expirationDate) => {
        if (!expirationDate) {
          return false;
        }

        const [expMonth] = expirationDate.split("/");

        if (Number(expMonth) > 12) {
          return false;
        }

        return true;
      },
    ),
  cvvCode: Yup.string().length(3).required("CVV code is required!"),
  termCheck: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

export default paymentSchema;
