// синхронний код завжди в пріоритеті
// ІВЕНТ ЛУП - колстек -> web Api (асинхронні) -> черга(після виконання асинхронний код очікує в черзі, і лише коли ВСІ синхронні функції будуть виконані буде виконуватися асинхрон )

// setTimeout -- для годинника/таймера (кожну секунду змінюємо) -- викор. в парі з датами / годинами // ПОВЕРТАЮТЬСЯ ЧИСЛОВИЙ ID // видаляється також по id // ПРИЙМАЄ (КОЛБЕК,ЗАТРИМКУ,ПАРАМЕТРИ)

// const id = setTimeout(
//     (name, country) => {
//         console.log(`Hello ${name} from ${country}`);
//     },
//     1000,
//     'Alex',
//     'Ukraine'
// );

// setInterval -- появляється через певний інтервал (реклама) // ПОВЕРТАЮТЬСЯ ЧИСЛОВИЙ ID //// видаляється також по id

////////////////////////////////////Date//////////////////////////////////////

// Поточна дата в мілісекундах console.log(Date.now());
//ДАТА У ВИГЛЯДІ ОБ'ЄКТУ З ЯКОГО МОЖНА ВИТЯГНУТИ ВСІ ВІДОМОСТІ new Date()

// ------------------------------отримати поточнй місяць------------------------

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

//// -----------------------------отримати ПОТОЧНИЙ ДЕНЬ --------------------------

// const date = new Date();
// const daysOfWeeks = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
// const currentDay = daysOfWeeks[date.getDay()];
// console.log(currentDay);

//// -----------------------------приклад РЕКЛАМИ------------------------

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

//// ----------------------------------------- ГОДИННИК АРТЕМА ----------------------------------------------

////ЩОБ ПРАЦЮВАТИ З ОБ'ЄКТОМ ДЕЙТ ОБОВ'ЯЗКОВО ОГОЛОШУЄМО ЙОГО
////ПРИ РОБОТІ З ЧАСОМ НЕОБХІДНО ВИКОРИСТОВУВАТИ СЕТ ІНТЕРВАЛ (шоб оновлювались дані на сайті кожної секунди)

////1. ДЕНЬ ТИЖНЯ getDay() + масив
////2. ДЕНЬ МІСЯЦЬ getDate()
////3. МІСЯЦЬ getMonth() + масив
////4. РІК getFullYear()

////отримуємо через дом доступ до даних

// const dayOfWeek = document.querySelector('.date-day');
// const dayOfMonth = document.querySelector('.date');
// const month = document.querySelector('.date-month');
// const year = document.querySelector('.date-year');
// const timeCounter = document.querySelector('.digital-clock');
// const secondArrow = document.querySelector('.clock-seconds__arrow');
// const minuteArrow = document.querySelector('.clock-minutes__arrow');
// const hourArrow = document.querySelector('.clock-hours__arrow');

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
//     //обов'язково поміщаємо сюди об'єкт ДЕЙТ -- шоб щоразу отримувати точну щосекундну дату
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

//     //механічний годинник
//     //всього годинник робить оберт в 360 градусів потрібно знайти скільки градусів годинник тратить на 1 секунду/хвилину і помножити на поточну секунду/хвилину
//     const mechanicalSecond = (360 / 60) * currentSeconds;
//     const mechanicalMinute = (360 / 60) * currentMinutes;
//     const mechanicalHour = (360 / 12) * currentHours + (360 / 12 / 60) * currentMinutes;
//     //щоб знайти годину і вона коректно відображалась дізнаємося за скільки градусів проходить одна година і до цих градусів дадаємо значення залишку поточних хвилин

//     //присвоюємо дані з дейту до ДОМ
//     dayOfWeek.textContent = currentDay;
//     dayOfMonth.textContent = currentDayOfMonth;
//     month.textContent = currentMonth;
//     year.textContent = currentYear;

//     timeCounter.textContent = `Поточний час: ${currentTimeFormat}`;

//     secondArrow.style.transform = `rotate(${mechanicalSecond}deg)`;
//     minuteArrow.style.transform = `rotate(${mechanicalMinute}deg)`;
//     hourArrow.style.transform = `rotate(${mechanicalHour}deg)`;
// }, 1000);

//  ---------------------------- таймер від 10 до 1 --------------------------

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

///////////////////    ПОКАЗ/ЗАКРИТТЯ ПОВІДОМЛЕННЯ    //////////////////////////////////

//1 показуємо та ховаємо додаючи клас is-visible
//2 ховаємо через певний час
//3 ховаємо при кліці
//4 очищуємо таймер

// const notification = document.querySelector('.js-alert');
// const NOTIFICATION_DELAY = 3000;
// let timeId = null;

// function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeId); // очищуємо таймер шоб не йшов відлік далі коли повідомлення закрите
// }

// //показ повідомлення (коли повідомлення показано тоді і пишемо основну логіку)
// function showNotification() {
//     notification.classList.add('is-visible');
//     //тільки коли повідомлення відкрите тоді і додаємо слухач на закриття
//     notification.addEventListener('click', onNotificationClick);

//     timeId = setTimeout(() => {
//         hideNotification();
//         console.log('Закрилось через 3 секунди');
//     }, NOTIFICATION_DELAY);
// }

// function hideNotification() {
//     notification.classList.remove('is-visible');
//     notification.removeEventListener('click', onNotificationClick);
// }

// showNotification();
