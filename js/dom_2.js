// 1. event -- об'єкт події
// 2.event.preventDefault(); //блокування перезавантаження сторрінки
// 3. currentTarget -- елемент на якому прослуховується подія
// 4. target -- елемент який викликав подію

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

// const form = document.querySelector('.js-form');
// const obj = {
//     //// можна і не казувати ключі підставляться автоматично
//     // email: '',
//     // password: '',
// };
// const inputs = document.querySelectorAll(' input');
// inputs.forEach(input =>
//     input.addEventListener('input', evt => {
//         obj[evt.target.name] = evt.target.value;
//         ///  ключ об'єкта        значення об'єкта
//         // ключ підставляється із змінної name
//     })
// );
// form.addEventListener('submit', event => {
//     event.preventDefault();

//     console.log(obj);
// });

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

//дадаємо подію на ВСІ кнопки, але потрібно перебрати оскільки слухач додається на елемент, а не на масив

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

//ЗАДАЧА  Рухаємо квадрат____________________________

// const button = document.querySelector('.js-btn');
// const container = document.querySelector('.js-container');
// // button.addEventListener('click', onClick); // сдухач на кнопці
// container.addEventListener('click', onClick); // слухач на дів

// let step = 0;

// function onClick(evt) {
//     step += 5;
//     // container.style.backgroundColor = 'red';
//     container.style.marginLeft = `${step}px`;
//     container.style.marginTop = `${step}px`;

//     console.log(step);
// }

////ЗАДАЧА Образіти декілька варіантів тексту по кліку_________________

// const titles = document.querySelectorAll('.js-lorem');
// titles.forEach(title => title.addEventListener('click', strCut));

// const maxLength = 13;
// const totalLength = maxLength + 3;

// function strCut(evt) {
//     //краще у слухачах звертатися по тагрету (маштабоване рішення)
//     const title = evt.currentTarget;
//     const str = title.textContent.trim().slice(0, maxLength);

//     if (title.textContent.length > totalLength) {
//         //якщо довжина більша за максимальне значення рядка, то тільки тоді обрізаємо і додаємо ...
//         const remainder = title.textContent.slice(maxLength);
//         title.setAttribute('data-title', remainder);
//         title.textContent = str + '...';
//     } else {
//         const remainder = title.dataset.title; // getAttribute
//         //якщо є залишок тільки тоді формуй рядок
//         if (remainder) {
//             title.textContent = str + remainder;
//         }
//     }
// }

//ЗАДАЧА INPUT --отримувати дані від користувача (пошта/ логін/ пароль)

// const userName = document.querySelector('.js-input');
// userName.addEventListener('input', onInput);

// function onInput(evt) {
//     console.log(evt.currentTarget.value);
// }

//FORM

// const formEl = document.querySelector('.form');
// formEl.addEventListener('submit', evt => {
//     // скасували дефолтну поведінку кнопки сабміт

//     evt.preventDefault();

//     //дестрк. з атрибутів name значення
//     const { userName, userEmail, userNumber } = evt.currentTarget.elements;

//     const data = {
//         userName: userName.value,
//         userEmail: userEmail.value,
//         userNumber: userNumber.value,
//     };
//     console.log(data);
// });

//  ПОДІЇ КЛАВІАТУРИ ВІШАЮТЬСЯ НА ВЕСЬ ДОКУМЕНТ

// const box = document.querySelector('.js-container');
// document.addEventListener('keydown', evt => {
//     console.log(evt);
//     if (evt.code === 'Escape') {
//         box.classList.toggle('js-toggle');
//     }
// });
////////////////////////////БЛОКУВАННЯ КОМБІНАЦІЙ КЛАВІШ / НЕ МОЖНА СКОПІЮВАТИ

// const box = document.querySelector('.js-container');
// document.addEventListener('keydown', evt => {
//     if (evt.ctrlKey && evt.code === 'KeyC') {
//         evt.preventDefault();
//         alert('You can`t copy this text');
//         return;
//     }
// });

////ЗАДАЧА добавити машини в розмітку і зробити пошук по моделі або марці_______________________________________

// const cars = [
//     {
//         id: 1,
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//     },
//     {
//         id: 2,
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//         img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//     },
//     {
//         id: 33,
//         car: 'BMW',
//         type: '5 siries',
//         price: 9000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//     },
//     {
//         id: 3,
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//         number: '+380000000000',
//         img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//     },
//     {
//         id: 4,
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//         img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//     },
// ];

// const container = document.querySelector('.cars-lesson2');
// const searchBtn = document.querySelector('button');
// const form = document.querySelector('.search-car');
// const favoriteList = document.querySelector('.js-favorite-list');
// //додавання в обране
// container.addEventListener('click', onClick);

// function createdMarkup(arr) {
//     return arr
//         .map(({ id, car, type, price, img }) => {
//             return `<li data-id = "${id}">
//                 <img src="${img}" alt="${car}" width="300"/>
//                 <h2>Марка: ${car}</h2>
//                 <h3>Модель: ${type}</h3>
//                 <p>Ціна - ${price}</p>
//                 <div class ="js-favorite">★</div>
//             </li>`;
//         })
//         .join('');
// }
// container.insertAdjacentHTML('beforeend', createdMarkup(cars));

// form.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//     evt.preventDefault();

//     //робимо доступ до полів

//     const form = evt.currentTarget;
//     console.dir(evt.currentTarget);
//     const { query, select } = form.elements;

//     //значення полів

//     console.dir(query.value);
//     console.dir(select.value);

//     //вібираємо машини за умовою

//     const searchCar = cars.filter(
//         //             car || type      -- значення змінної
//         item => item[select.value].toLowerCase() === query.value.trim().toLowerCase()
//     );
//     // якщо знайшло співпадіння то замінили на нове

//     container.innerHTML = createdMarkup(searchCar);
//     console.log(searchCar);
// }

// ////додавання в обране при кліці на зірочку

// function onClick(evt) {
//     // console.log(evt.currentTarget); //те шо прослуховується (в даному випадку список container)
//     // console.log(evt.target); // на чому відпрацювала подія (по чому клікнули)

//     //перевіряємо щоб ми клікнули прямо на зірочку
//     if (evt.target.classList.contains('js-favorite')) {
//         evt.target.classList.add('active');

//         //беремо айді шоб визначити по якому саме елементу клацнув користувач
//         //closest -- доступ до першого батьківсього елемента (айді на лішці)
//         const { id } = evt.target.closest('li').dataset;
//         const { car, type } = cars.find(({ id: carId }) => carId === Number(id));
//         addFavorite(`${car}  ${type}`);
//     }
// }
// //робить розмітку і додає ту машину яку потрібно

// function addFavorite(currentCar) {
//     favoriteList.insertAdjacentHTML('beforeend', `<li>${currentCar}</li>`);
// }

////////////////// РОБОТА З ФОРМОЮ + ЗБЕРЕЖЕННЯ ДАНИХ В ЛОКАЛ СТОРАДЖ //////////////

// const form = document.querySelector('.js-form');
// const KEY_LC = 'storage_key';
// form.addEventListener('submit', onSubmit);
// form.addEventListener('input', onInput);

// function onSubmit(evt) {
//     evt.preventDefault();

//     const email = evt.target.elements.email.value;
//     const password = evt.target.elements.password.value;
//     const comment = evt.target.elements.comment.value;

//     if (!email || !password) {
//         alert('Please fill all date');
//         return;
//     }
//     const date = {
//         email,
//         password,
//         comment,
//     };
//     console.log(date);
//     form.reset();
//     localStorage.removeItem(KEY_LC);
// }

// function onInput(evt) {
//     const email = form.elements.email.value;
//     const comment = form.elements.comment.value;

//     const value = {
//         email,
//         comment,
//     };
//     localStorage.setItem(KEY_LC, JSON.stringify(value));
// }

// function getInfoFromStorage() {
//     const localValue = JSON.parse(localStorage.getItem(KEY_LC)) ?? {};

//     form.elements.email.value = localValue.email || '';
//     form.elements.comment.value = localValue.comment || '';
// }
// getInfoFromStorage();

////ІНШИЙ СПОСІБ ЗБЕРЕЖЕННЯ ДАНИХ З ФОРМИ -- вішаємо слухача на всі інпути + ство пустий обє'кт і потім  obj[evt.target.name] = evt.target.value;
//------------------------------------------------------------------------------------------------------------   KEY                 VALUE
