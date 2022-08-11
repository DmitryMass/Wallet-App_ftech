import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationsEn = {
  balance: 'Balance',
  cash: 'Cash',
  my_cards: 'My cards',
  new_card: 'Add new card',
  new_cash: 'Add new cash',
  edit: 'Edit',
  delete: 'Delete',
  copy: 'Copy',
  cancel: 'Cancel',
  save: 'Save',
  amount: 'Amount money',
  no_cash: 'U dont have a cash',
  copied: 'Copied',
  nameCard: 'Mono, privat etc',
  cardNum: 'Type your card number',
  cardDate: 'MM/YY',
  cardCvv: 'Type cvv',
};

const translationsUa = {
  balance: 'Баланс',
  cash: 'Готівка',
  my_cards: 'Мої картки',
  new_card: 'Додати картку',
  new_cash: 'Додати готівку',
  edit: 'Редагувати',
  delete: 'Видалити',
  copy: 'Скопіювати',
  cancel: 'Скасувати',
  save: 'Зберегти',
  amount: 'Кількість грошей',
  no_cash: 'На данний час у вас немає банківських карт',
  copied: 'Скопійовано',
  nameCard: 'Моно, приват та інш',
  cardNum: 'Введіть номер картки',
  cardDate: 'ММ/РР',
  cardCvv: 'Введіть cvv',
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    ua: { translation: translationsUa },
  },
  lng: 'ua',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
