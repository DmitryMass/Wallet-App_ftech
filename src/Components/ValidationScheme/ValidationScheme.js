import * as yup from 'yup';

export const newCardValidation = yup.object().shape({
  bank: yup
    .string()
    .label('Bank')
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be at most 20 characters')
    .required(),
  cardNumber: yup
    .string()
    .label('Card number')
    .min(14, 'Must be at least 14 characters')
    .max(16, 'Must be at most 16 characters')
    .required(),
  cvv: yup
    .string()
    .label('Card cvv')
    .min(3, 'Must be at least 3 characters')
    .max(4, 'Must be at most 4 characters')
    .required(),
  amount: yup.string().label('Amount money').min(1).required(),
  currency: yup.string().label('Currency').required(),
  date: yup.date().default(function () {
    return new Date();
  }),
});
