// const input = document.querySelector('#theme-switch');
// const body = document.querySelector('body');
// const LS_KEY = 'colorTheme';

// input.addEventListener('click', onClick);

// function onClick() {
//     if (input.checked === true) {
//         darkTheme();
//     } else {
//         lightTheme();
//     }
//     // визначаємо поточну тему
//     const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
//     localStorage.setItem(LS_KEY, currentTheme);
// }

// //поміщаюємо у функцію шоб спрацювало лише після того як спрацює перша функція
// document.addEventListener('DOMContentLoaded', function () {
//     const savedTheme = localStorage.getItem(LS_KEY);

//     if (savedTheme === 'dark') {
//         darkTheme();
//         input.checked = true; // встановлюємо чекбокс як вибраний (якщо TRUE === DARK )
//     } else {
//         lightTheme();
//         input.checked = false; // (FALSE === LIGHT)
//     }
// });

// function lightTheme() {
//     body.classList.remove('dark');
//     body.classList.add('light');
// }
// function darkTheme() {
//     body.classList.remove('light');
//     body.classList.add('dark');
// }
