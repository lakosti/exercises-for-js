//1. Якщо this викликаємо в контексті об'єкта(зліва від функції) то воно посилається на цей об'єкт

// const user = {
//     showText() {
//         console.log('Hello', this);
//     },
// };
// user.showText(); THIS == OBJ

//2. якщо this викликається всередині функції без об'єкту то this буде underfined або буде посилатися на об'єкт window без суворого режиму
// const foo = function () {
//     console.log('foo', this);
// };
// foo(); // THIS == UNDERFINED

//3. при передачі this як метода об'єкта контекст не сохраняється і буде underfined________________________________

//Отже якщо функція посилається на об'єкт obj.fn() -- буде об'єкт у this
//якщо не посилається на об'єкт а просто функція то буде underfined, оскільки вони не пов'язані між собою
//Методи об'єкта не знаю нічого в якому об'єкті вони знаходяться

//ПРИМУСОВО ВИКЛИКАЮТЬ ФУНКЦІ У КОНТЕКСТІ ОБ'ЄКТУ

//call() - fn.call(obj,parament1,paramentr2)
//apply() - fn.apply(obj, [5,2,3,[25,6]])
//bind() - робить копію з прив'язаним контекстом

//exercise // перевикористання функції -- примусовий виклик

// const changeColor = function (color) {
//     console.log('changeColor', this);
//     this.color = color;
//     //this.color = hat.color перший раз а sweater.color в другий раз
// };
// const hat = {
//     color: 'black',
// };
// //викликаємо функцію на об'єкті hat і змінюємо колір на оранжевий
// // changeColor.call(hat, 'orange'); //примусово викликаємо функцію в контексті об'єкту
// // console.log(hat);

// const sweater = {
//     color: 'green',
// };
// // changeColor.call(sweater, 'yellow');
// // console.log(sweater);

// //копія bind // завжди посилається на той об'єкт який передали в неї

// const changeHatColor = changeColor.bind(hat); // завжди посинається на об'єкт hat
// changeHatColor();
// changeHatColor('pink');
// console.log(hat); // змінили колір

//exercise
// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement', this);
//         this.value -= value;
//     },
// };

// const updatedCounter = function (value, operation) {
//     operation(value);
// };
// // updatedCounter(10, counter.increment) //this = underfined
// // updatedCounter(5,counter.decrement) //this = underfined

// updatedCounter(10, counter.increment.bind(counter)); //this = obj
// updatedCounter(5, counter.decrement.bind(counter)); //this = obj
// console.log(counter);
