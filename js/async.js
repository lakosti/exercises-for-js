// синхронний код завжди в пріоритеті
// ІВЕНТ ЛУП - колстек -> web Api (асинхронні) -> черга(після виконання асинхронний код очікує в черзі, і лише коли ВСІ синхронні функції будуть виконані буде виконуватися асинхрон )

// setTimeout -- для годинника/таймера (кожну секунду змінюємо) -- викор. в парі з датами / годинами
// setInterval -- появляється через певний інтервал (реклама)

////////////////////////////////////Date//////////////////////////////////////

// Поточна дата в мілісекундах console.log(Date.now());

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
