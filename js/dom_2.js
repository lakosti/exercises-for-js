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

//ЗАДАЧА Реалізувати закриття та відкриття модалки за клавішою Escape____________________________________

// const modalBtn = document.querySelector('.open-modal');
// const modal = document.querySelector('.modal');

// // потрібно видаляти слухач щоб не навантажувати браузер
// //слухач пишемо там де використовуємо, щоб він не слухав всі клавіші які користувач натискає у браузері

// const closeBtn = event => {
//     if (event.code === 'Escape') {
//         modal.classList.remove('open');
//         document.removeEventListener('keydown', closeBtn);
//     }
// };

// modalBtn.addEventListener('click', () => {
//     modal.classList.add('open');
//     document.addEventListener('keydown', closeBtn);
// });

//ЗАДАЧА АЛЬОНИ
const books = [
    {
        id: '1',
        title: `Apple. Computer evolution`,
        author: `Володимир Невзоров`,
        img: `https://bukva.ua/img/products/449/449532_200.jpg`,
        plot: `Richly illustrated chronological guide to the history of computers in which
       and structured information about the creation and development of Apple technology against the backdrop of history
       personal computers in general.
       The book contains descriptions of dozens of the most significant models of devices from both Apple and other manufacturers,
       accompanied by a large number of original studio photographs.
       The book is intended for a wide range of readers interested in the history of electronics.
       It can also serve as a source of inspiration for designers, marketers and entrepreneurs.`,
    },
    {
        id: '2',
        title: `How to explain computer science to a child`,
        author: `Керол Вордерман`,
        img: `https://bukva.ua/img/products/480/480030_200.jpg`,
        plot: `Illustrated encyclopedia in infographic format on technical, social and cultural aspects
       in informatics. Explains step by step how children can get the most out of computers and internet services,
       staying safe.
       The book covers everything from data storage to life on the Internet,
       from programming to computer attacks. About how computers function, about modern software
       software, the device of the Internet and digital etiquette. All concepts - from hacker to bitcoin -
       explained clearly with illustrations and diagrams.`,
    },
    {
        id: '3',
        title: `The path of the Scrum Master. #ScrumMasterWay`,
        author: `Зузана Шохова`,
        img: `https://bukva.ua/img/products/480/480090_200.jpg`,
        plot: `This book will help you become an outstanding Scrum Master and achieve great results with your team.
       It is illustrated and easy to understand - you can read it in a weekend, and use the resulting
       knowledge throughout your career.
       Based on 15 years of experience, Zuzana Shokhova explains the roles and responsibilities of a Scrum Master,
       how to solve everyday tasks, what competencies are needed to become an outstanding scrum master,
       What tools does he need to use?`,
    },
];
