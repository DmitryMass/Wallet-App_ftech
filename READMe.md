Для запуска проекта : 1. npm i (установка всех зависимостей) 2. npm start (запуск проекта) 3. npm webpack (build проекта)

Используемые технологии:

1. React (Hooks)
2. Formik (Yup) -формы + валидации
3. React-Redux / RTK Query - запросы на сервер, (CRUD)
4. MockApi - хранение данных, манипулирование данными
5. Module CSS - для стилей
6. Webpack/Babel для сборки проекта
7. Деплой у netlify/
8. PropTypes

Реализованный функционал

1. Список ваших кредитних карток
2. Додавання нової картки
3. Видалення картки зі списку
4. Відображення загального балансу (сумма ваших готівкових та карткових рахунків з урахуванням різних валют)
5. Відображення готівкового балансу (з урахуванням різних валют, тобто для різних валют будуть окремі баланси)
6. Додавання та редагування (Додав ще Видалення) готівкового балансу
   вибір валюти (UAH, EUR, USD, за замовчуванням UAH)
7. При додаванні або видаленні картки, наприклад з валютою UAH, перерахунок загального балансу. Аналогічно при зміні готівкового балансу.
8. Валідація значень:
   номера картки (Luhn algorithm) + выдпралення запиту на перевірку карти по першим 8 цифрам для отримання інформаці (master/visa (debit/other) etc)
   cvv (3-4 символи)
   amount (тільки 2 знаки після коми)
   currency
   також (на мінусове число)
   та вивід помилок валідаціЇ для цих полів.
9. В списку карток така інформація:
   замаскований номер картки ( 5555 \***\* \*\*** 1111) з можливістю показати/скопіювати повний номер картки.
   expire date (не працює, не зміг зробити)
   баланс картки
   валюта
   тип платіжної системи ( логотип для Visa, Mastercard; для інших ПСтекстом)
   тип картки (credit, debit)

Доповнення:

1. Додав поле для назви картки оскільки по номеру карток, майже ніякі назви Банків Арі не видає, не дуже зручно але я думаю ви розумієте). Писати можно будь що, я би зробив по іншому але, сервіс не находить усі назви банків.
2. Додав Видалення готівкового рахунку.
3. Трішки стилів, без макету тяжкувато), трошки прикрасив
4. Адаптація под мобільні планшетні та десктопні версіі.

На виконання завдання (без виправдовування, типу рішення юзати РТК Квері), пішло приблизно, десь годин 16-18 може трішки більше. У цілому мабудь якщо не брати витрачений час на пошук як зробити валідацію дати (яку так і не вийшло реалізувати), та не юзати редакс, а звичний useEffect + api, можливо орієнтовно зробив бы годин за 8 точніше не сможу сказати.

Из сложностей

1. Правильно переиспользовать модалки, все работает но все равно слишком грязно.

2. Работа с валидацией, не корректо работает валидация Expire date. Не смог разобраться как сделать валидацию на эту форму.

3. Кастомные хуки в Модалках не работают, не знаю почему, создавал кастомный хук, чтобы использовать его на открытие закрытие модалок, и сделать нужные handleSubmit для форм, не ошибки не клик не консоль лог ничего не работает. По этому в файлах с название ...item, и подобных повторно создается хук со стейтом edit setEdit.

4. Моя личная сложность, и решение, 6-7 числа изучал Redux-Toolkit и RTK-Query. Успел использовать в туду проектах, и решил использовать его в Тестовом проекте, заняло довольно много времени, чтобы прочитать пол доки, и узнать про лейзи хуки, отложенные, он оч понадобился в данном проекте). Можно было сделать все на обычных Апи, с еффектами и тд, Но мое решение было такое по сколько не думаю что на проектах пользуются еффектами для Апи, слишком это запарно.

5. Слайсил номер карты, либо забыл как делать по-человечески, либо просто не догадался как лучше сделать, по этому получилось так же не очень красивий, но работающий код)

6. button в форме в формике, если использовать готовый компонент (Button) не работает Клик по кнопке и стили(модификатор). Использовал создание внутри формика новых кнопок + глобальные стили в файле мейн, предназначенные для компонента Button
