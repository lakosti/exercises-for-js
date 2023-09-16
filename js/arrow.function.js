///у стрелочной функції немає змінної  arguments можна лише через рест (...rest)
//використовують в основному для колбеків
//викликаються лише після оголошення
//неявне повернення -- без return і без {}
//якщо у стрілочної функції неявне поверненя і немає {} то return  підставляється автоматично // якщо будемо приписувати я return вручну без {} буде помилка
//this в стрілкових функціях посилається на глобальний об'єкт window
//коли повертаємо об'єкт то вказуємо обов'язково return оскільки () використовуються для подвійних тернарних виразів
//інлайн стрілочні функції записується в агрументах

// function add(a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// }
// console.log(add(2, 3, 4));

// //arr
// const arrow = (...arg) => {
//     console.log(arg);
//     // return a + b + c;
// };
// console.log(arrow(8, 6, 2));
//короткий синтаксис
// const arrow = (a, b, c) => a + b + c;

//повернення об'єктів

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };
// console.log(fnA());

// //arrow
// const arrowFn = () => ({ a: 5 });
// //() - вираженіє
// console.log(arrowFn());
// Change code below this line

//this -- у стрілках немає свого this

// const showthis = () => {
//     console.log('this in showThis:', this);
// };
// showthis(); // underfined

//////АРТЕМ/////

//рефакторинг

// const arr = [2, 6, 1, 7, 3];

// //функція лише для перебору
// function each(arr, callback) {
//     let total = arr[0];

//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i]);
//     }
//     return total;
// }

// // функція для якоїсь певної дії
// const add = (first, second) => first + second;
// const sub = (first, second) => first - second;

// // function add(first, second) {
// //     return first + second;
// // }

// // function sub(first, second) {
// //     return first - second;
// // }

// console.log(each(arr, add)); //add - це наш другий параметр - колбек
// console.log(each(arr, sub));

//arow + this = underfined

// const user = {
//     userName: 'test user',
//     say() {
//         console.log(`Hello ${this.userName}`);
//     },
//     sayHello: () => {
//         console.log(`Hello ${this}`);
//     },
// };
// user.say();
// user.sayHello();

////////////////////ЗАДАЧІ

//ЗАДАЧА 1 ПЕРЕПИС НА СТРІЛКУ _________________________________

// // const createProduct = (obj, callback) => {
// //     const product = {
// //         id: Date.now(),
// //         ...obj,
// //     };
// //     callback(product);
// // };

// //перепис на універсальний варіантт

// const createProduct = (obj, callback) =>
//     callback({
//         id: Date.now(),
//         ...obj,
//     });

// // function logProduct(obj) {
// //     console.log(`Product ${obj.name}`);
// // }
// // function logTotalPrice({ price, quantity }) {
// //     //деструкт
// //     console.log(`Total price: ${price * quantity}`);
// // }
// ///////перепис
// const logProduct = product => console.log(product.name);

// const logTotalPrice = ({ price, quantity }) => console.log(`Total price: ${price * quantity}`);

// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'peach', price: 40, quantity: 5 }, logTotalPrice);

//ЗАДАЧА 2 перепис на стрілку ____________________________________

// const TRANSATION_LIMIT = 1000;

// const account = {
//     userName: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSATION_LIMIT) {
//             onError(`Error you TRANSATION_LIMIT is ${TRANSATION_LIMIT} `);
//             return; // якщо залогували помилку зразу виходимо
//         } else if (this.balance < amount) {
//             onError(`Not enought money `);
//             return;
//         }
//         this.balance -= amount;
//         onSuccess(`Succesfully ${amount}, balance ${this.balance}`);
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > `Error you TRANSATION_LIMIT is ${TRANSATION_LIMIT} `) {
//             onError(`Your limit  ${TRANSATION_LIMIT}`);
//             return; // якщо пропустило ретерн то добавимо на баланс
//         } else if (amount <= 0) {
//             onError(`Nice try bro, but you amount must be more than 0`);
//             return;
//         }
//         this.balance += amount;
//         onSuccess(`Operation succesffuly, you balance ${this.balance}`);
//     },
// };

// const handleSuccess = message => console.log(`Success! ${message}`);

// const handleError = message => console.log(`Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

///Задача 3 інлайн стілочні функції переписать________________________________

// function each(array, callback) {
//     const newArr = [];
//     for (const item of array) {
//         newArr.push(callback(item));
//     }
//     return newArr;
// }

// console.log(each([2, 3, 4], item => item - 10));
// console.log(each([2, 3, 4], item => item * 2));
// console.log(each([2, 3, 4], item => item + 10));
// console.log(each([2.5, 3.2, 4.1], item => Math.ceil(item)));
// console.log(each([2.9, 3.5, 4.2], item => Math.floor(item)));

//задача 4 переписати на for each + arrow______________________________

// const logItems = arr => arr.forEach((arr, idx) => console.log(` ${idx + 1} - ${arr}`));

// logItems(['mango', 'banana', 'orange']);
// logItems(['apple', 'plum', 'watermelon']);
