// 1. event -- об'єкт події
// 2.event.preventDefault(); //блокування перезавантаження сторрінки
// 3. currentTarget -- на чому поставили прослуховувач подій
// 4. target --

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

//ЗАДАЧА АЛЬОНИ (додати розмітку книжок і зробити превью / пошук по айді)_____________________________________

// const books = [
//     {
//         id: '1',
//         title: `Apple. Computer evolution`,
//         author: `Володимир Невзоров`,
//         img: `https://bukva.ua/img/products/449/449532_200.jpg`,
//         plot: `Richly illustrated chronological guide to the history of computers in which
//        and structured information about the creation and development of Apple technology against the backdrop of history
//        personal computers in general.
//        The book contains descriptions of dozens of the most significant models of devices from both Apple and other manufacturers,
//        accompanied by a large number of original studio photographs.
//        The book is intended for a wide range of readers interested in the history of electronics.
//        It can also serve as a source of inspiration for designers, marketers and entrepreneurs.`,
//     },
//     {
//         id: '2',
//         title: `How to explain computer science to a child`,
//         author: `Керол Вордерман`,
//         img: `https://bukva.ua/img/products/480/480030_200.jpg`,
//         plot: `Illustrated encyclopedia in infographic format on technical, social and cultural aspects
//        in informatics. Explains step by step how children can get the most out of computers and internet services,
//        staying safe.
//        The book covers everything from data storage to life on the Internet,
//        from programming to computer attacks. About how computers function, about modern software
//        software, the device of the Internet and digital etiquette. All concepts - from hacker to bitcoin -
//        explained clearly with illustrations and diagrams.`,
//     },
//     {
//         id: '3',
//         title: `The path of the Scrum Master. #ScrumMasterWay`,
//         author: `Зузана Шохова`,
//         img: `https://bukva.ua/img/products/480/480090_200.jpg`,
//         plot: `This book will help you become an outstanding Scrum Master and achieve great results with your team.
//        It is illustrated and easy to understand - you can read it in a weekend, and use the resulting
//        knowledge throughout your career.
//        Based on 15 years of experience, Zuzana Shokhova explains the roles and responsibilities of a Scrum Master,
//        how to solve everyday tasks, what competencies are needed to become an outstanding scrum master,
//        What tools does he need to use?`,
//     },
// ];

// const list = document.querySelector('.library');

// const markup = books
//     .map(
//         ({ id, title }) =>
//             `<li id='${id}'>
//     <h2>${title}</h2>
//     <button class = 'show-preview'>Show preview</button>
// </li>`
//     )
//     .join('');

// list.insertAdjacentHTML('afterbegin', markup);

// //дадаємо подію на ВСІ кнопки, але потрібно перебрати оскільки слухач додається на елемент, а не на масив

// const buttons = document.querySelectorAll('.show-preview');
// const rigthDiv = document.querySelector('.right');

// //потрібно при кліці на кнопку робити превью в правий дів на який ми отримали посилання
// buttons.forEach(button =>
//     button.addEventListener('click', event => {
//         //через кнопку достукалися до батьківсього елемента і взяли айді
//         const bookId = event.target.parentNode.id;
//         //знаходимо айді в залежності яка книга обрана
//         const book = books.find(({ id }) => bookId === id);
//         const mark = `<div>
//     <h2>${book.title}</h2>
//     <p>${book.author}</p>
//     <img src="${book.img}" alt="${book.title}">
//     <p>${book.plot}</p>
// </div>`;
//         //щоб розмітка не додавалась а перезаписувалась то додаємо через іннер
//         rigthDiv.innerHTML = mark;
//     })
// );

// ================================================================================================================================================================================================================================================================= A R T E M

//Рухаємо квадрат____________________________

const button = document.querySelector('.js-btn');
const container = document.querySelector('.js-container');
// button.addEventListener('click', onClick); // сдухач на кнопці
container.addEventListener('click', onClick); // слухач на дів

let step = 0;

function onClick(evt) {
    step += 5;
    // container.style.backgroundColor = 'red';
    container.style.marginLeft = `${step}px`;
    container.style.marginTop = `${step}px`;

    console.log(step);
}

////Образіти текст по кліку_________________

const title = document.querySelector('.js-lorem');
const maxLength = 13;
const totalLength = maxLength + 3;
title.addEventListener('click', strCut);

function strCut(evt) {
    //краще у слухачах звертатися по тагрету
    const title = evt.currentTarget;
    const str = title.textContent.slice(0, maxLength);

    if (title.textContent.length > totalLength) {
        const remainder = title.textContent.slice(maxLength);
        title.setAttribute('data-title', remainder);
        title.textContent = str + '...';
    } else {
        const remainder = title.dataset.title; // getAttribute
        title.textContent = str + remainder;

        console.log(remainder);
    }
}
