import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  discountCode: Yup.string()
    .min(3, "Discount too short")
    .oneOf(
      ["JONY", "RICK", "SPECIAL", "NONSENSEDISCOUNT"],
      "Invalid discount code",
    ),
});

export default FormSchema;
