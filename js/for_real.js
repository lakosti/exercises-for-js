//1.Взаємодія з інпутом // отримання посилання з кнопки_____________________________

// const btnAdd = document.querySelector('button[data-add]'); // отримання доступу по тегу
// // btnAdd.textContent = 'change'; // зміна назви кнопки
// const resetBtn = document.querySelector('button[data-reset]');

// const valueInput = document.querySelector('input[data-value]');
// const outPutEl = document.querySelector('.js-output span');

// let total = 0;
// btnAdd.addEventListener('click', function () {
//     console.log('click age');
//     const value = Number(valueInput.value);
//     console.log(value);

//     total += value;
//     outPutEl.textContent = total;
//     valueInput.value = '';
// });

// resetBtn.addEventListener('click', function () {
//     total = 0;
//     outPutEl.textContent = total;
// });

//2. Назва URL__________________________________

// const title = 'Top 10 benefits of React framework';

// const toLower = title.toLowerCase();
// console.log(toLower);

// const words = toLower.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

//the better

// const normalizedWords = title.toLowerCase().split(' ').join('-'); // ченінг
// console.log(normalizedWords);

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////

//ЗАДАЧА  ЛІЧИЛЬНИК_______________________
// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement', this);
//         this.value -= 1;
//     },
// };
// const decrementBtn = document.querySelector('.js-btn-less');
// const incrementBtn = document.querySelector('.js-btn-add');
// const textEl = document.querySelector('.js-btn-text');
// // console.log(decrementBtn);
// // console.log(incrementBtn);
// // console.log(textEl);
// incrementBtn.textContent = 'Збільшити'; //змінити текстовий контент

// decrementBtn.addEventListener('click', function () {
//     console.log('We less num');

//     counter.decrement(); //передали метод об'єкта
//     console.log(counter);

//     textEl.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () {
//     console.log('We add num');

//     counter.increment(); //передали метод об'єкта
//     console.log(counter);

//     textEl.textContent = counter.value;
// });
