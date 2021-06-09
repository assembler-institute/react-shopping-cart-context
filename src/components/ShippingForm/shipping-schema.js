import * as Yup from "yup";

const ShippingSchema = Yup.object().shape({
  addressOne: Yup.string().max(50).required("Required"),
  addressTwo: Yup.string().max(50),
  zipCode: Yup.number().min(5).required("Required"),
  country: Yup.string().min(5).max(20).required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

export default ShippingSchema;
