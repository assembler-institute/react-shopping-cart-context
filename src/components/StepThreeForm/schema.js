import * as Yup from "yup";

const stepThreeSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .label('Card number') 
      .matches('^4[0-9]{12}(?:[0-9]{3})?$', 'Please introduce a valid credit card')
      .max(16)
      .required(),
    cvc: Yup.string()
      .label('CVC')
      .min(3, 'Minimum 3 digits!')
      .max(3, 'Maximum 3 digits!')
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

  