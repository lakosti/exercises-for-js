// 1. event -- об'єкт події
// 2.event.preventDefault(); //блокування перезавантаження сторрінки

//=============================EVENTS / ПОДІЇ

// 1. CLICK / подія клік______________

// const clickBtn = document.querySelector('.main-btn');
// const box = document.querySelector('.box-container');

// let step = 0;
// clickBtn.addEventListener('click', event => {
//     // console.log(event);
//     // console.log(event.target);
//     // box.style.backgroundColor = 'red';
//     step += 50;
//     box.style.marginTop = `${step}px`;
//     box.style.marginLeft = `${step}px`;
// });

// 2. INPUT / подія інпут__________________
//---------------------------------------------------------------------------------
// -- Подія input (ВИВОДИТЬСЯ В КОНСОЛЬ ЩО РАЗУ КОЛИ ПИШЕМО СИМВОЛ)

// const input = document.querySelector('.input-label');
// console.log(input);
// input.addEventListener('input', evt => {
//     // console.log(evt.target.value); // введене значення
//     console.log(`My name ${evt.target.value}`);
// });
//---------------------------------------------------------------------------------
// -- Подія focus, blur (часто викор в парі, blur, дуже схожий до change ЗНАЧЕННЯ ВИВОДИТЬСЯ ПРИ ВТРАТІ ФОКУСУ )

// const input = document.querySelector('.input-label');
// console.log(input);
// input.addEventListener('blur', evt => {
//     console.log(evt);
// });
//---------------------------------------------------------------------------------
// -- Подія change (ПОДІЯ ВИВОДИТЬСЯ КОЛИ НАТИСНУЛИ ВТРАТИЛИ ФОКУС І ВВЕЛИ НОВЕ ЗНАЧЕННЯ )

// const input = document.querySelector('.input-label');
// console.log(input);
// input.addEventListener('change', evt => {
//     console.log(`My name ${evt.target.value}`);
// });
//---------------------------------------------------------------------------------

//РОБОТА З ФОРМАМИ / ПОДІЯ Submit (швидко зникає інформація)________________________
// ЗАДАЧА Щоб при роботі з формою створювався об'єкт

// const form = document.querySelector('.js-form');
// form.addEventListener('submit', event => {
//     //щоб швидко не зникало виведення
//     event.preventDefault();
//     //вивід значення в  консоль
//     // console.dir(event.target.elements.email.value);
//     const data = {
//         comment: event.target.elements.comment.value,
//         email: event.target.elements.email.value,
//         password: event.target.elements.password.value,
//     };
//     console.log(data);
// });

//РОБОТА З ФОРМАМИ (СКЛАДНІШИЙ ВАРІАНТ)_____________________________

// ПОДІЇ КЛАВІАТУРИ (keydowm/keyup)_____________________

// keydowm -- працює трішки швидше за keyup (спрацювує коли тільки натискаємо клавішу)
// keyup -- спрацювує коли відпустили клавішу
// властивості key / code
// code  -- більш надійніша, не враховує капс і мову

//ЗАДАЧА Реалізувати закриття та відкриття модалки

const modalBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');

// потрібно видаляти слухач щоб не навантажувати браузер
//слухач пишемо там де використовуємо, щоб він не слухав всі клавіші які користувач натискає у браузері

const closeBtn = event => {
    if (event.code === 'Escape') {
        modal.classList.remove('open');
        document.removeEventListener('keydown', closeBtn);
    }
};

modalBtn.addEventListener('click', () => {
    modal.classList.add('open');
    document.addEventListener('keydown', closeBtn);
});
