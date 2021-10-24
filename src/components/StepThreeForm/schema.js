import * as Yup from "yup";

const stepThreeSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .label('Card number')
      .max(16)
      .required(),
    cvc: Yup.string()
      .label('CVC')
      .min(3, 'Minimum 3 digits!')
      .max(4, 'Maximum 4 digits!')
      .required(),
    nameOnCard: Yup.string()
      .label('Name on card')
      .required(),
    expiryDate: Yup.string()
      .label('Expiry Date')
      .min(4)
      .max(4)
      .required()
  });
  
  export default stepThreeSchema;

  