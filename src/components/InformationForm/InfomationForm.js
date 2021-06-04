import React from "react";
// import { v4 as uuid } from "uuid";
// import InformationSchema from "./information-schema";

// import { useFormik } from "formik";

// function addNewOrder({ cartItems }) {
//   return {
//     id: uuid(),
//     ...cartItems,
//     quantity: 0,
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//   };
// }

function InformationForm(cartItems) {
  // const [hasSubmitted, setHasSubmitted] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     email: "",
  //     address1: "",
  //     address2: "",
  //     zipCode: "",
  //     country: "",
  //     state: "",
  //     city: "",
  //   },
  //   validationSchema: InformationSchema,
  //   onSubmit: (values, { setSubmitting }) => {
  //     null;
  //   },
  // });
  console.log(cartItems);
  return <h2>Hola</h2>;
}

export default InformationForm;
