import * as yup from 'yup';

export const newCardValidation = yup.object().shape({
  bank: yup
    .string()
    .label('Bank')
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Must be at most 20 characters')
    .matches(/^[a-zA-Z\s]*$/g, 'Only ENG name of Banking')
    .required(),
  cardNumber: yup
    .string()
    .label('Card number')
    .min(14, 'Must be at least 14 characters')
    .max(16, 'Must be at most 16 characters')
    .matches(/^[0-9\s]*$/g, 'Card format must be: 1234 5678 9876 5432')
    .required(),
  cvv: yup
    .string()
    .label('Card cvv')
    .min(3, 'Must be at least 3 characters')
    .max(4, 'Must be at most 4 characters')
    .matches(/^[0-9\s]*$/g, 'Format NNN or NNNN')
    .required(),
  amount: yup
    .string()
    .label('Amount money')
    .min(1)
    .matches(/^\d+(\.\d{0,2})?$/, 'Wrong money format ex: 1234.25')
    .required(),
  currency: yup.string().label('Currency').required(),
  date: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Date format MM/YY')
    .label('Date format MM/YY')
    .required('Expiration date is required'),
});

export const editModalValidation = yup.object().shape({
  amount: yup
    .string()
    .label('Amount money')
    .min(1)
    .matches(/^\d+(\.\d{0,2})?$/, 'Wrong money format ex: 1234.25')
    .required(),
  currency: yup.string().label('Currency').required(),
});
