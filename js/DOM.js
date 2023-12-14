// element.querySelector('selector') -- для того щоб знайти елемент за css селектором // повертає ПЕРШИЙ елемент  або NULL (якщо нічого не знайдено)
// element.querySelectorAll('selector') -- повертає псевдомасив елементів які співпадають, інакше повертає пустий МАСИВ

//textHead.textContent = 'New text' --- якщо хочемо поміняти текст
// document.body.append(titleEl); // -- в кінці сторінки
// document.body.prepend(titleEl); // -- початок сторінки

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

//робота з класами відбуваєтся через
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

//================СТВОРЕННЯ ТА ДОДАВАННЯ ЕЛЕМЕНТІВ
// -- через методи
// -- через шаблонні строки

//логіка: створили вузол - дадали вузол // <h1 class="page-header">Це заголовок</h1>

//ЗАДАЧА СТВОРИТИ ЗАГОЛОВОК І ПОМІСТИТИ НА ПОЧАТОК СТОРІНКИ_________________

const titleEl = document.createElement('h1');
console.log(titleEl);
titleEl.textContent = 'Це заголовок';
titleEl.classList.add('page-header');
// document.body.append(titleEl); // -- в кінці сторінки
// document.body.prepend(titleEl); // -- початок сторінки

//ЗАДАЧА СТВОРИТИ КАРТИНКУ І ПОМІСТИТИ В ДІВ HERO _________________

const imgEl = document.createElement('img');
imgEl.src =
    'https://media.istockphoto.com/id/1322277517/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B8%D0%BA%D0%B0%D1%8F-%D1%82%D1%80%D0%B0%D0%B2%D0%B0-%D0%B2-%D0%B3%D0%BE%D1%80%D0%B0%D1%85-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=PzyOT42E_elmRShS-7hCADYhXiElZar77vEm8uxuC3Y=';
imgEl.alt = 'new pictures';
imgEl.width = 320;
console.log(imgEl);
console.dir(imgEl);
const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imgEl);
//спочатку куди дадаємо(змінна) потім на початок чи кінець і що додаємо

//ЗАДАЧА СТВОРИТИ ЩЕ ОДИН ПУНКТ МЕНЮ_______________________

//створити елементи
const itemEl = document.createElement('li');
const linkEl = document.createElement('a');
//додати клас
itemEl.classList.add('item');
linkEl.classList.add('link');
//помістити всередину
itemEl.append(linkEl);
//додати текстовий контент
linkEl.textContent = 'Hobby';
//додати атрибут
// linkEl.setAttribute('href', './team.jpg');
linkEl.href = './team.jpg';
// звернення до
const listEl = document.querySelector('.nav-list');
listEl.append(itemEl);
console.log(listEl);
