import * as Yup from "yup";

const stepThreeSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .label('Card number')
      .max(16)
      .required(),
    cvc: Yup.string()
      .label('CVC')
      .min(3)
      .max(4)
      .required(),
    nameOnCard: Yup.string()
      .label('Name on card')
      .required(),
    // expiryMonth: Yup.string()
    //   .label('Expiry month')
    //   .min(2)
    //   .max(2)
    //   .required(),
    // expiryYear: Yup.string()
    //   .label('Expiry year')
    //   .min(4)
    //   .max(4)
    //   .required(),
  });
  
  export default stepThreeSchema;

  