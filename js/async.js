// синхронний код завжди в пріоритеті
// ІВЕНТ ЛУП - колстек -> web Api (асинхронні) -> черга(після виконання асинхронний код очікує в черзі, і лише коли ВСІ синхронні функції будуть виконані буде виконуватися асинхрон )

// setTimeout -- для годинника/таймера (кожну секунду змінюємо) -- викор. в парі з датами / годинами
// setInterval -- появляється через певний інтервал (реклама)

////////////////////////////////////Date//////////////////////////////////////

// Поточна дата в мілісекундах console.log(Date.now());
//ДАТА У ВИГЛЯДІ ОБ'ЄКТУ З ЯКОГО МОЖНА ВИТЯГНУТИ ВСІ ВІДОМОСТІ new Date()

// --------------------------отримати поточнй місяць------------------------

// const date = new Date();

// const namesOfMonth = [
//     'Січень',
//     'Лютий',
//     'Березень',
//     'Квітень',
//     'Травень',
//     'Червень',
//     'Липень',
//     'Серпень',
//     'Вересень',
//     'Жовтень',
//     'Листопад',
//     'Грудень',
// ];
// const currentMonth = namesOfMonth[date.getMonth()];
// console.log(currentMonth);

// -----------------------------отримати ПОТОЧНИЙ ДЕНЬ --------------------------

// const date = new Date();
// const daysOfWeeks = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
// const currentDay = daysOfWeeks[date.getDay()];
// console.log(currentDay);

// -----------------------------приклад РЕКЛАМИ------------------------

// const box = document.querySelector('.div-cont');
// const timer = document.querySelector('.js-timer');
// let counter = 11;

// setTimeout(() => {
//     box.style.display = 'block';
//     const id = setInterval(() => {
//         counter -= 1;
//         timer.textContent = counter;

//         //якщо секунди дійшли до 0 то видаляємо інтервал
//         if (!counter) {
//             clearInterval(id);
//             timer.textContent = 'X';
//             timer.addEventListener('click', onClick);
//         }
//     }, 1000); // викликаємо інтервал (повторення) через секунду
// }, 5000); // затримка 5 сек (реклама з'явиться через 5 секунд (лише раз))

// function onClick() {
//     box.style.display = 'none';
// }

// ----------------------------------------- ГОДИННИК АРТЕМА ----------------------------------------------

//ЩОБ ПРАЦЮВАТИ З ОБ'ЄКТОМ ДЕЙТ ОБОВ'ЯЗКОВО ОГОЛОШУЄМО ЙОГО
//ПРИ РОБОТІ З ЧАСОМ НЕОБХІДНО ВИКОРИСТОВУВАТИ СЕТ ІНТЕРВАЛ (шоб оновлювались дані на сайті кожної секунди)

//1. ДЕНЬ ТИЖНЯ getDay() + масив
//2. ДЕНЬ МІСЯЦЬ getDate()
//3. МІСЯЦЬ getMonth() + масив
//4. РІК getFullYear()

//отримуємо через дом доступ до даних
// const dayOfWeek = document.querySelector('.date-day');
// const dayOfMonth = document.querySelector('.date');
// const month = document.querySelector('.date-month');
// const year = document.querySelector('.date-year');
// const timeCounter = document.querySelector('.digital-clock');

// const daysOfWeeks = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];

// const namesOfMonth = [
//     'Січень',
//     'Лютий',
//     'Березень',
//     'Квітень',
//     'Травень',
//     'Червень',
//     'Липень',
//     'Серпень',
//     'Вересень',
//     'Жовтень',
//     'Листопад',
//     'Грудень',
// ];

// //ПРИ РОБОТІ З ЧАСОМ НЕОБХІДНО ВИКОРИСТОВУВАТИ СЕТ ІНТЕРВАЛ (шоб оновлювались дані на сайті кожної секунди)

// setInterval(() => {
//     //обов'язково поміщаємо сюди об'єкт ДЕЙТ
//     const date = new Date();

//     //отримуємо актуальні дані з дейту
//     const currentDay = daysOfWeeks[date.getDay()]; //субота
//     const currentDayOfMonth = date.getDate();
//     const currentMonth = namesOfMonth[date.getMonth()];
//     const currentYear = date.getFullYear();

//     //електро годинник
//     const currentHours = date.getHours();
//     const currentMinutes = date.getMinutes();
//     const currentSeconds = date.getSeconds();
//     const currentTimeFormat = `${currentHours.toString().padStart(2, '0')} : ${currentMinutes
//         .toString()
//         .padStart(2, '0')} : ${currentSeconds.toString().padStart(2, '0')}`;

//     //присвоюємо дані з дейту до ДОМ
//     dayOfWeek.textContent = currentDay;
//     dayOfMonth.textContent = currentDayOfMonth;
//     month.textContent = currentMonth;
//     year.textContent = currentYear;
//     timeCounter.textContent = `Поточний час: ${currentTimeFormat}`;
// }, 1000);

//  ------------------ таймер від 10 до 1 --------------------------

// const timeCounter = document.querySelector('.digital-clock');
// let counter = 11;
// const id = setInterval(() => {
//     counter -= 1;
//     timeCounter.textContent = counter;

//     if (!counter) {
//         clearInterval(id);
//         timeCounter.textContent = 'The End';
//     }
// }, 1000);

/// ----------------------------- ЗВОРОТНІЙ ВІДЛІК ----------------------------

// const text = document.querySelector('.time');
// setInterval(() => {
//     const date = new Date();
//     const targetDate = new Date('01/23/2024'); //рандомна дата
//     const substr = convertMs(targetDate - date);
//     const { days = 0, hours = 0, minutes = 0, seconds } = substr;
//     if (!days) {
//         text.textContent = `${hours} hour ${minutes} minutes ${seconds} seconds`;
//     } else {
//         text.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
//     }
// }, 1000);

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//     return { days, hours, minutes, seconds };
// }
