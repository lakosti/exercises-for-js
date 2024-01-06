// //  TASK 1 BASE WORK WITH DOM
// const bodyEl = document.body; // лише боді так
// // console.log(bodyEl);

// const h1EL = document.querySelector('#title');

// const dataEls = document.querySelectorAll('[data-topic]');
// // console.log(dataEls);

// const lastEl = document.querySelector('[data-topic="manipulation"]');
// // console.log(lastEl);
// // console.log(dataEls[dataEls.length - 1]);

// //сусід

// const firstSibling = h1EL.nextElementSibling;
// // console.log(firstSibling);

// const titles = document.querySelectorAll('h3');
// titles.forEach(title => title.classList.add('action'));

// lastEl.style.backgroundColor = 'yellow';

// lastEl.lastElementChild.textContent = 'Я змінив тут текст!';

// // через змінну знайти
// const currentTopic = 'navigation';
// const firstEl = document.querySelector(`[data-topic="${currentTopic}"]`);

// firstEl.style.backgroundColor = 'orange';

// const findHeading = document.querySelector('.completed');
// findHeading.parentElement.remove();

// const list = document.querySelector('.list');
// const parag = document.createElement('p');
// parag.textContent = "Об'єктна модель документа (Document Object Model)";
// //вставляємо параграф за заголовком
// h1EL.after(parag);

// // через create
// const liEl = document.createElement('li');
// const h3EL = document.createElement('h3');
// const paragEl = document.createElement('p');
// h3EL.textContent = 'Властивість innerHTML';
// paragEl.textContent =
//     'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу';
// // appendChild(el) // лише створює але не вставляє//
// liEl.append(h3EL, paragEl);
// list.append(liEl); // вставляє в дом

// //через insertAdj
// const markup = `<li> <h3>Властивість innerHTML</h3>
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`;

// list.insertAdjacentHTML('beforeend', markup);

// //clean
// list.innerHTML = '';

//ЗАДАЧА 2 виділити слова які мають більше ніж 8 сиволів жовтим_____________________

// const pEl = document.createElement('p');
// const text = `Об'єктна модель документа Document Object Model - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

// const arr = text.split(/\s+/);
// console.log(arr);

// arr.forEach(item => {
//     if (item.length > 8) {
//         const span = document.createElement('span');
//         span.style.backgroundColor = 'yellow';
//         //текстовий контент це слово
//         span.textContent = item + ' ';
//         pEl.appendChild(span);
//     } else {
//         pEl.innerHTML += item + ' ';
//     }
// });
// list.append(pEl);

//ЗАДАЧА 3 /**Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd). */_______________________________________

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const container = document.createElement('div');
// container.classList.add('container');
// const arr = [];
// for (let i = 0; i < 100; i += 1) {
//     const divEl = document.createElement('div');
//     divEl.classList.add('number');
//     divEl.textContent = randomNumber();
//     divEl.textContent % 2 === 0 ? divEl.classList.add('even') : divEl.classList.add('odd');
//     arr.push(divEl);
// }
// container.append(...arr);
// const list = document.querySelector('.list');
// list.after(container);

//ЗАДАЧА 4 робота зі слухачами___________________________________

/**1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо
ж символів менше аніж 6, то клас `error`

2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline`
=> `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline`
=> `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек
боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо
користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо
користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання
ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби
так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут,
верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span. */

// const input = document.querySelector('.js-username-input');
// console.log(input);

// input.addEventListener('input', onClick);
// function onClick(evt) {
//     const { target } = evt;
//     if (target.value.length > 6) {
//         target.classList.add('success');
//         target.classList.remove('error');
//     } else {
//         target.classList.add('error');
//         target.classList.remove('success');
//     }
// }
