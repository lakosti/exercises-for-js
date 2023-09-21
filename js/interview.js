//ЗАДАЧА 1 повернути літери як назву ключа і властивість  - скільки раз вона зустрічається в рядку (reduce)_____________________________________________

// const str = 'gughrgrjjgiorgjrildgegergrg';

// const getNum = str.split('').reduce((acc, item) => {
//     item in acc ? (acc[item] += 1) : (acc[item] = 1);
//     return acc;
// }, {});

// console.log(getNum);

//ЗАДАЧА 4 пошук найменшого числа в масиві_______________________________________

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const num of numbers) {
//     if (num < smallestNumber) {
//         smallestNumber = num;
//     }
// }
// console.log('smallestNumber :', smallestNumber);

//ЗАДАЧА 6 змінити регістр // інверсія букв______________________________

// const str = 'JavaScript';

// //олдскульний варіант

// const letters = str.split(''); // перетворюємо в масив
// console.log(letters);
// let newCase = '';

// for (const letter of letters) {
//     // console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Lower case - ', letter);

//     //     newCase += letter.toUpperCase();
//     // } else {
//     //     console.log('Upper case -', letter);
//     //     newCase += letter.toLowerCase();
//     // }

//     //тернарний (більш правильний варіант)

//     const isEqual = letter === letter.toLowerCase();
//     newCase += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(newCase);

//ЗАДАЧА 10 видалити з масиву елементи що не є типом даних number________________________________________________________

// const arr = [3, 'hello', null, 42, false];

// if (isNaN(arr[i])) {
//     console.log(arr[i]);
// } // IsNaN приводить null і false до числа

// for (let i = 0; i < arr.length; i += 1) {
//     if (typeof arr[i] !== 'number') {
//         console.log(arr[i]);
//         arr.splice(i, 1); //реіндексація // авт зміна індексів
//         i -= 1; // пропустили null тому вертаємося щоб його прибрати
//     }
// }
// console.log(arr);

//якщо потрібно перевірити та видаляти якісь елементи з масиву то краще починати перебір з кінця, щоб не писати потім i-=1

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (typeof arr[i] !== 'number') {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

//ЗАДАЧА 17 відсортувати в алфавітному порядку__________________________________

// const langs = ['c++', 'python', 'bjava', 'ahaskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0]; //якщо умова тру то вирізаємо слово
//         //щоб достати слово з масиву використовуємо індекс [0]
//         langs.unshift(result); //і пушимо на перед
//     }
// }
// console.log(langs);

//2. рядок який виводить години та хвилини в консоль як на годиннику / ГОДИННИК______________________________

// const time = 70;
// const hours = Math.floor(time / 60);
// const modifyHour = String(hours).padStart(2, 0);
// const minutes = time % 60;
// const modifyMinutes = String(minutes).padStart(2, 0);
// console.log(`${modifyHour}:${modifyMinutes}`);

///// або
//console.log(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}`);
/////

//6. числа додаються поки не натисните кенсел /cancel // зациклення робить за допомогою do while_________________________________________________

// let inputValue = prompt('Enter number');
// let check = false;
// let total = 0;

// do {
//     if (inputValue) {
//         check = true;
//         inputValue = prompt('Enter number');
//         total += Number(inputValue);
//     } else {
//         check = false;
//         alert(`Total summ = ${total}`);
//     }
// } while (check);

//8 зробити першу літеру великою / заглавною_________________________________

// const str = 'string not starting';
// const largestStr = str[0].toUpperCase();
// console.log(largestStr);
// const total = largestStr + str.slice(1);
// console.log(total);

//алгоритм 1 об'єднати всі масиви в об'єкті в один файл та поахувати їх кількість

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react', 'nodejs'] },
// ];
// const allTags = tweets.flatMap(tweet => tweet.tags); //поєднали всі теги
// console.log(allTags);

// const stats = allTags.reduce(
//     (acc, item) => {
//         return {
//             ...acc,
//             [item]: acc[item] ? acc[item] + 1 : 1,
//         };
//     },
//     {} //== acc сховище = reduce
// );
// console.log(stats);

//ЗАДАЧА 1 калькулятор_______________________

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
// function add(first, second) {
//     return first + second;
// }
// function substract(first, second) {
//     return first - second;
// }

// console.log(each(arr, add)); //add - це наш другий параметр - колбек
// console.log(each(arr, substract));

//Задача 2 ____________________________
// Створити функцію createProduct(obj, callback) -яка приймає об'єкт товару без id а також колбек, Функція ств об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому ств об'єкт
//logProduct (product) колбек приймає об'єкт продукту і логуючий його в консоль
//logTotalPrice(product) - колбек що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj,
//     };
//     callback(product);
//     console.log(product);
// }

// function logProduct(obj) {
//     console.log(`Product ${obj.name}`);
// }
// function logTotalPrice({ price, quantity }) {
//     //деструкт
//     console.log(`Total price: ${price * quantity}`);
// }

// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'peach', price: 40, quantity: 5 }, logTotalPrice);

//ЗАДАЧА 2 РАВЛИК за день равлик проповзає на 7 м в гору а за ніч спускається на 2 метри вниз // за скільки він пройде 42 м , 17 м, 18 м

// function getDays(deps) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     let days = 0;

//     while (total < deps) {
//         // поки його шлях менший глибини він повзе === тру
//         total += daySpeed;
//         days += 1;
//         if (total < deps) {
//             total -= nightSpeed;
//         }
//     }
//     console.log(days);
// }

// getDays(42); //8
// getDays(17); //3
// getDays(18); //4
