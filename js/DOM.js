// ЧИМ МЕНШЕ МИ ЗМІНЮЄМО ДОМ ДЕРЕВО ТИМ КРАЩЕ
// ЯКЩО ПОТРІБНО БАГАТО СТИЛІВ ЗАДАТИ ТО РОБИМО ЧЕРЕЗ ЦСС (2-3+)
// КЛАСИ ЯКІ ВИКОРИСТ ТІЛЬКИ В JS МИ ПИШЕМО З ПРИСТАВКОЮ js (js-test)
// ВСІ ЕЛЕМЕНТИ ДІЛЯТЬ НА ТЕКСТОВІ (textContent) І ІНТЕРАКТИВНІ/ЕЛЕМЕНТИ КОМУНІКАЦІЇ(value)
// element.querySelector('selector') -- для того щоб знайти елемент за css селектором // повертає ПЕРШИЙ елемент  або NULL (якщо нічого не знайдено)
// element.querySelectorAll('selector') -- повертає псевдомасив елементів які співпадають, інакше повертає пустий МАСИВ
// insertAdjacentHTML() -- вставка розмітки

// innerHtml -- вміє ств нові вузли, тобто розрізняти посилання від звичайного тексту і робити їх клікабельні // він ПЕРЕЗАПИСУЄ значення на нове// щоб було і нове і старе значення то робимо +=
// titleEl.innerHTML = ''; //  швидке очищення контейнеру
// textContent -- все написне буде лише текстом

// textHead.textContent = 'New text' --- якщо хочемо поміняти текст
// document.body.append(titleEl); // -- в кінець сторінки // можна передавати багато значень, не тільки вузли а і текст // тобто він приймає STRING
// document.body.prepend(titleEl); // -- початок сторінки
// appendChild -- можна передавати лише один вузол

//ПОШУК (querySelector / querySelectorAll)
//-- за назвою тега
//-- назвою класа
//-- за ID --- більш надійніше

// АТРИБУТИ (src/type/class) -- розширують тег

// ourPicture.getAttribute('src'); //отримати атрибут
// ourPicture.setAttribute('alt', 'the next text'); //нове значення (атрибут, значення)
// ourPicture.removeAttribute('alt'); // видалення атрибуту
// ourPicture.hasAttribute('alt'); // перевірка чи є такий атрибут

//ДАТА АТРИБУТИ -- дозволяють якусь інформацію зберігати в тегах

//(частіше за все зберігають ID)
//зберігаються у псевдомасиві Dataset
//починати назвe обовязково з data потім через девіз рандомна назва (data-action)

//робота з КЛАСАМИ відбуваєтся через

//classList:
//--add -- динамічно додати клас (при стилізації)
//--remove -- динамічно видалити
//--toggle -- видаляє якщо є і додає якщо немає (open/close modal)
//--replace -- заміна одного класу на інший
//--contains -- = includes //true/false
/**
 * 
elem.parentNode — містить посилання на батьківський вузол-елемент вузла elem
elem.childNodes — містить псевдомасив, у якому зібрані всі дочірні вузли-елементи і текстові вузли вузла elem
elem.children — містить псевдомасив, у якому зібрані всі дочірні вузли-елементи вузла elem, тобто ті, що відповідають тегам
elem.firstChild — містить посилання на перший дочірній вузол (вузол-елемент або текстовий вузол) вузла elem
elem.firstElementChild — містить посилання на перший дочірній вузол-елемент усередині elem, тобто той, що відповідає тегу
elem.lastChild — містить посилання на останній дочірній вузол (вузол-елемент або текстовий вузол) вузла elem
elem.lastElementChild — містить посилання на останній дочірній вузол-елемент усередині elem, тобто той, що відповідає тегу
elem.previousSibling — містить посилання на попередній сусідній вузол відносно елемента elem, і це може бути як елемент, так і текстовий вузол
elem.previousElementSibling — містить посилання на попередній сусідній вузол-елемент відносно елемента elem, тобто той, що відповідає тегу
elem.nextSibling — містить посилання на наступний сусідній вузол відносно елемента elem, і це може бути як елемент, так і текстовий вузол
elem.nextElementSibling — містить посилання на наступний сусідній вузол-елемент відносно елемента elem, тобто той, що відповідає тегу

 */

//ПОШУК (querySelector / querySelectorAll)
//-- за назвою тега
//-- назвою класа
//-- за ID --- більш надійніше

// const buttonEl = document.querySelectorAll('button');
// const reallyArr = [...buttonEl]; //перетворили псевдомасив в масив
// console.log(buttonEl);
// console.log(reallyArr);
// const buttonClass = document.querySelector('.js-btn-less');
// console.log(buttonClass);
// const buttonId = document.querySelector('#zero');
// console.log(buttonId);

// //ЗАМІНА КАРТИНКИ

// const ourPicture = document.querySelector('img');
// console.dir(ourPicture);
// ourPicture.src = 'https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg';
// ourPicture.alt = 'New picture';

// const textHead = document.querySelector('.text');
// console.dir(textHead);
// textHead.textContent = 'New text'; // -- ЗАМІНА ТЕКСТОВОГО КОНТЕНТУ

// // АТРИБУТИ (src/type/class) -- розширують тег

// console.log(ourPicture.getAttribute('src')); // -- отримати атрибут
// ourPicture.setAttribute('alt', 'the next text'); // встановити нове значення атрибута (атрибут, значення)
// ourPicture.removeAttribute('alt'); // видалення атрибуту
// console.log(ourPicture.hasAttribute('alt')); // перевірка чи є такий атрибут

// //ДАТА АТРИБУТИ -- дозволяють якусь інформацію зберігати в тегах
// //(частіше за все зберігають ID)
// //зберігаються у псевдомасиві Dataset
// //починати назвe обовязково з data потім через девіз рандомна назва (data-action)

// const action = document.querySelectorAll('.actions button'); // КЛАС + ТЕГ щоб був масив
// console.log(action[1].dataset);
// console.log(action[1].dataset.action);
// console.log(action[2].dataset.actionBtn);

// //КЛАСИ

// //робота з класами відбуваєтся через
// //classList:
// //--add -- динамічно додати клас (при стилізації)
// //--remove -- динамічно видалити
// //--toggle -- видаляє якщо є і додає якщо немає (open/close modal)
// //--replace -- заміна одного класу на інший
// //--contains -- = includes //true/false

// const newElement = document.querySelector('.our-examples');

// newElement.classList.add('new-variant');
// newElement.classList.remove('our-examples');
// newElement.classList.toggle('our-examples');
// newElement.classList.replace('new-variant', 'replace-class');
// console.log(newElement.classList.contains('new-variant'));

// console.log(newElement);

//=============================СТВОРЕННЯ ТА ДОДАВАННЯ ЕЛЕМЕНТІВ через МЕТОДИ

// логіка: створили вузол - дадали вузол // <h1 class="page-header">Це заголовок</h1>

// ЗАДАЧА СТВОРИТИ ЗАГОЛОВОК І ПОМІСТИТИ НА ПОЧАТОК СТОРІНКИ_________________

// const titleEl = document.createElement('h1');
// console.log(titleEl);
// titleEl.textContent = 'Це заголовок';
// titleEl.classList.add('page-header');
// // document.body.append(titleEl); // -- в кінці сторінки
// // document.body.prepend(titleEl); // -- початок сторінки

// ЗАДАЧА СТВОРИТИ КАРТИНКУ І ПОМІСТИТИ В ДІВ HERO _________________

// const imgEl = document.createElement('img');
// imgEl.src =
//     'https://media.istockphoto.com/id/1322277517/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B8%D0%BA%D0%B0%D1%8F-%D1%82%D1%80%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B3%D0%BE%D1%80%D0%B0%D1%85-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=PzyOT42E_elmRShS-7hCADYhXiElZar77vEm8uxuC3Y=';
// imgEl.alt = 'new pictures';
// imgEl.width = 320;
// console.log(imgEl);
// console.dir(imgEl);
// const heroEl = document.querySelector('.hero');
// heroEl.append(titleEl, imgEl);
//спочатку куди дадаємо(змінна) потім на початок чи кінець і що додаємо

// ЗАДАЧА СТВОРИТИ ЩЕ ОДИН ПУНКТ МЕНЮ_______________________

////створити елементи
// const itemEl = document.createElement('li');
// const linkEl = document.createElement('a');
// //додати клас
// itemEl.classList.add('item');
// linkEl.classList.add('link');
// //помістити всередину
// itemEl.append(linkEl);
// //додати текстовий контент
// linkEl.textContent = 'Hobby';
// //додати атрибут
// // linkEl.setAttribute('href', './team.jpg');
// linkEl.href = './team.jpg';
// // звернення до / отримали елемент
// const listEl = document.querySelector('.nav-list');
// listEl.append(itemEl);
// console.log(listEl);

// ЗАДАЧА НАПИСАТИ ФУНКЦІЮ ДЛЯ СТВОРЕННЯ КОЛЕКЦІЇ КОЛЬОРІВ(кнопка + зміна кольору) (КОЛЕКЦІЯ ЕЛЕМЕНТІВ)_________________

// const options = [
//     { label: 'red', color: 'red' },
//     { label: 'green', color: 'green' },
//     { label: 'blue', color: 'blue' },
//     { label: 'grey', color: 'grey' },
//     { label: 'pink', color: 'pink' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const colorPickerContainerEl = document.querySelector('.color-picker');

// const buttonsArr = options.map(({ label, color }) => {
//     //створили кнопку
//     const buttonEl = document.createElement('button');
//     //додали текстовий контент через лейбл
//     buttonEl.textContent = label;
//     //додали фоновий колір
//     buttonEl.style.backgroundColor = color;
//     //додали клас
//     buttonEl.classList.add('color-picker-btn');
//     //повернули кнопку
//     return buttonEl;
// });

// console.log(buttonsArr);
// //додали все в елемент в HTML
// //обов'язково розпилюємо
// colorPickerContainerEl.append(...buttonsArr);

// // ==============================СТВОРЕННЯ та ДОДАВАННЯ ЕЛЕМЕНТІВ ЧЕРЕЗ ШАБЛОННІ СТРОКИ (частіше використовується)
// const titleEl = document.querySelector('.title');
// console.log(titleEl);
// titleEl.innerHTML +=
//     "<a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'>Link to freecodecamp</a>";
// // titleEl.innerHTML = ''; //  найчастіше викор для швидке очищення контейнеру, або для перезаписання контенту (замінити старе на нове)
// // titleEl.textContent =
// //     "<a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'>Link to freecodecamp</a>";

////ДИНАМІЧНО ДОДАЛИ ТЕКСТ через insertAdjacentHTML
// const pEl =
// '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium in inventore qui.</p>';
// const container = document.querySelector('.container');
// container.insertAdjacentHTML('beforeend', pEl); // динамічно створили текст

//ЗАДАЧА (ТРАНЗАКЦІЇ)___________________________________________
// const transactionHistory = [
//     {
//         id: '758d5283-358e-4fbb-b222-a17fd04e8916',
//         amount: '179.07',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Bogan - DuBuque',
//         name: 'Auto Loan Account 7313',
//         type: 'deposit',
//         account: '19808943',
//     },
//     {
//         id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
//         amount: '930.87',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Legros, Weimann and Treutel',
//         name: 'Auto Loan Account 0721',
//         type: 'invoice',
//         account: '38277848',
//     },
//     {
//         id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
//         amount: '704.53',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Beatty, Wisozk and Koch',
//         name: 'Savings Account 1894',
//         type: 'withdrawal',
//         account: '76727204',
//     },
//     {
//         id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
//         amount: '656.81',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Hane - Bode',
//         name: 'Personal Loan Account 2316',
//         type: 'withdrawal',
//         account: '27462350',
//     },
//     {
//         id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
//         amount: '280.21',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Schulist - Waelchi',
//         name: 'Savings Account 9032',
//         type: 'payment',
//         account: '99923313',
//     },
//     {
//         id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
//         amount: '303.06',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Swaniawski - Hayes',
//         name: 'Checking Account 0573',
//         type: 'invoice',
//         account: '75028346',
//     },
//     {
//         id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
//         amount: '462.59',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Berge - Reinger',
//         name: 'Personal Loan Account 8173',
//         type: 'invoice',
//         account: '93437240',
//     },
//     {
//         id: '247e150a-71ba-4df7-9836-5bb400e012bb',
//         amount: '242.49',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Stroman Inc',
//         name: 'Savings Account 1383',
//         type: 'withdrawal',
//         account: '18476423',
//     },
//     {
//         id: '6224c740-ff23-429d-854a-c7b310f7653b',
//         amount: '770.94',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Johns - Pagac',
//         name: 'Auto Loan Account 1392',
//         type: 'invoice',
//         account: '07680863',
//     },
//     {
//         id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
//         amount: '788.40',
//         date: '2012-02-01T22:00:00.000Z',
//         business: 'Ullrich, Shields and Koelpin',
//         name: 'Personal Loan Account 8318',
//         type: 'invoice',
//         account: '07081761',
//     },
// ];

// const tableEl = document.querySelector('.js-transaction-table');

// const createMarkup = ({ id, amount, date, business, name, type, account }) => `
//     <tr>
//     <td>${id}</td>
//     <td>${amount}</td>
//     <td>${date}</td>
//     <td>${business}</td>
//     <td>${type}</td>
//     <td>${name}</td>
//     <td>${account}</td>
//     </tr>
//     `;
// //якщо на основі масиву об'єктів необхідно створити розмітку, то робимо на основі одного елемента а потім перебираємо мепом, і визначаємо скільки нам необіхідно разів викликати цю фукцію

// const markup = transactionHistory.map(createMarkup).join(''); //передаємо строки

// //отримуємо посилання на тбоді щоб додати туди дані
// const tbody = document.querySelector('tbody');

// tbody.insertAdjacentHTML('beforeend', markup);
