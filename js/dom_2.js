//event -- об'єкт події
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

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault();
});
