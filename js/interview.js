//ОБОВ'ЯЗКОВО ЗНАТИ ДЛЯ ІНТЕРВЬЮ
//this
//prototype
//while

//ЗАДАЧА 1 повернути літери як назву ключа а кількість разів що дублюється як властивість  - скільки раз вона зустрічається в рядку (reduce)_____________________________________________

// const str = 'gughrgrjjgiorgjrildgegergrg';

// const getNum = str.split('').reduce((acc, item) => {
//     // item in acc ? (acc[item] += 1) : (acc[item] = 1);
//     //const keys = Object.keys(acc)
//     // keys.include(item)? acc[item] +=1: acc[item] = 1
//     acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//     return acc;
// }, {});

// console.log(getNum);

//ЗАДАЧА 2____________________________________________________
//визначити загальну кількість авто
//порядковий номер + назва
//якщо ар пустий то "Вибачте авто немає"

// const arr = ['Honda', 'BMW', 'Accord', 'Golf', 'ASX', 'Reno'];

// function logCars(arr) {
//     const result = arr.reduce(
//         (acc, car, idx) => {
//             return acc + `${idx + 1} - ${car}\n`; //перенос рядочка
//         }, // acc + = всі попередні ітерації
//         arr.length ? `Загальна  кількість авто ${arr.length}\n` : `Вибачте авто немає. ${foo()}`
//     );
//     return result;
// }
// function foo() {
//     return 'Але ви можете вибрати його зі списку';
// }
// console.log(logCars(['Honda', 'BMW', 'Accord', 'Golf', 'ASX', 'Reno', 'Mazda']));
// console.log(logCars([]));

//ЗАДАЧА 3 обробка значення underfined __________________________

//є корзина з фруктами потрібно порахувати які і скільки фруктів всього
// const fruits = [
//     'apple',
//     'cherry',
//     'berry',
//     'orange',
//     'cherry',
//     'apple',
//     'cherry',
//     'orange',
//     'lemon',
// ];
// const result = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     // це ств ключ  якщо фрукт є то до нього просто +1, якщо фрукта немає то 0+1
//     return acc;
// }, {});
// console.log(result);

//ЗАДАЧА 4 пошук найменшого числа в масиві_______________________________________

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const num of numbers) {
//     if (num < smallestNumber) {
//         smallestNumber = num;
//     }
// }
// console.log('smallestNumber :', smallestNumber);

//ЗАДАЧА 5 змінити регістр // інверсія букв______________________________

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

//ЗАДАЧА 6 видалити з масиву елементи що не є типом даних number________________________________________________________

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

//ЗАДАЧА 7 відсортувати в алфавітному порядку__________________________________

// const langs = ['c++', 'python', 'bjava', 'ahaskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0]; //якщо умова тру то вирізаємо слово
//         //щоб достати слово з масиву використовуємо індекс [0]
//         langs.unshift(result); //і пушимо на перед
//     }
// }
// console.log(langs);

//ЗАДАЧА 8 рядок який виводить години та хвилини в консоль як на годиннику / ГОДИННИК______________________________

// const time = 70;
// const hours = Math.floor(time / 60);
// const modifyHour = String(hours).padStart(2, 0);
// const minutes = time % 60;
// const modifyMinutes = String(minutes).padStart(2, 0);
// console.log(`${modifyHour}:${modifyMinutes}`);

///// або
//console.log(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}`);
/////

//ЗАДАЧА 9 числа додаються поки не натисните кенсел /cancel // зациклення робить за допомогою do while_________________________________________________

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

//ЗАДАЧА 10 зробити першу літеру великою / заглавною_________________________________

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

//ЗАДАЧА 11 калькулятор________________________________________

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

//Задача 12 __________________________________________________

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

//ЗАДАЧА 13 РАВЛИК за день равлик проповзає на 7 м в гору а за ніч спускається на 2 метри вниз // за скільки він пройде 42 м , 17 м, 18 м____________________________________________

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

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////

//ЗАДАЧА 14 маніпуляції з об'єктом // вивести ключ і значення_______________________________

// const user = {
//     name: 'John',
//     age: 20,
//     hobby: 'tennis',
//     premium: true,
// };
// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key} : ${user[key]}`);
// }

//ЗАДАЧА 15 перебрати об'єкт та просумувати_____________________
// const salaries = {
//     mango: 100,
//     poly: 160,
//     ajax: 1470,
// };
// //for of
// // const values = Object.values(salaries);
// // let total = 0;
// // for (const value of values) {
// //     total += value;
// // }

// // console.log(total);

// //for in + hasOwnProperty
// let total = 0;
// for (const key in salaries) {
//     if (salaries.hasOwnProperty(key)) {
//         total += salaries[key];
//     }
// }
// console.log(total);

//ЗАДАЧА 15 ств функцію яка повертає ім'я працівника знайбільшою зп / зарплатою

// якщо об'єкт пустий то повертається null
///Object.entries  + деструкт
//об'єкт це завжди тру_______________________________________________________________

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// function topSalary(salaries) {
//     const arr = Object.entries(salaries);
//     if (!arr.length) {
//         return null;
//     }
//     // let bigSalary = arr[0][1]; // значення зп першого в об'єкті 100
//     let bigSalary = arr[0];
//     console.log(bigSalary);
//     for (const salary of arr) {
//         if (salary[1] > bigSalary[1]) {
//             console.log(salary[1]);
//             console.log(bigSalary[1]);
//             bigSalary = salary;
//         }
//     }
//     return bigSalary[0];
// }
// console.log(topSalary(salaries));

//////////////////деструкт

// function topSalary(salaries) {
//     const arr = Object.entries(salaries);
//     if (!arr.length) {
//         return null;
//     }
//     // let bigSalary = arr[0][1]; // значення зп першого в об'єкті 100
//     let bigSalary = arr[0];
//     for (const [key, value] of arr) {
//         if (value > bigSalary[1]) {
//             bigSalary = [key, value];
//         }
//     }
//     const [key] = bigSalary;
//     return key;
// }

// console.log(topSalary(salaries));

//ЗАДАЧА 16 написати функцію яка перевііряє чи є елемент саме простим об'єктом а не масивом, чи null______________________________________

// function isObj(payload) {
//     return typeof payload === 'object' && !Array.isArray(payload) && payload !== null;
// }
// console.log(isObj({ a: 1 }));
// console.log(isObj([]));
// console.log(isObj(null));
// console.log(isObj(1));
// console.log(isObj(undefined));

//ЗАДАЧА 17 використовуючи колбеки зробити операції з функціями + передати старий об'єкт та створити id

//function createProduct - створює новий об'єкт з id та розпилює туди старий об'єкт і приймає колбек___________________________________________
// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(), //1970 значення в мілісекундах
//         ...obj,
//     };
//     callback(product);
// }
// function logProduct(product) {
//     console.log(product);
// }
// function logTotalPrice({ price, quantity })
//     console.log(`Price = ${price * quantity}`);
// }
// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'peach', price: 20, quantity: 5 }, logTotalPrice);

//ЗАДАЧА 17 напишіть функцію яка приймає два параметри (масив чисел, колбек) // функція повертає  новий масив кожен елемент якого є результатом виконання колбек__________________________________
// function each(arr, action) {
//     const items = []; // повертає пустий масив

//     // arr.forEach(item => {
//     //     const result = action(item);
//     //     items.push(result);
//     // });
//     // return items;

//     arr.forEach(el => items.push(action(el)));

//     return items
// }
//через map

// function each(arr, action) {
//     return arr.map(item => action(item));
// }
// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.2, 2.6, 2.3, 11.6], value => Math.ceil(value)));
// console.log(each([1.2, 2.6, 2.3, 11.6], value => Math.floor(value)));

////ЗАДАЧА 18 відбір унікальних елементів / неповторюваних___________________________

// const students = [
//     { name: 'Манго', courses: ['математика', 'фізика'] },
//     { name: 'Полі', courses: ['інформатика', 'математика'] },
//     { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

////виходить що індекс масива arr.index на математиці поверне 0, а фактичний індекс по масиву на разі 3
// const allCourses = students
//     .flatMap(course => course.courses)
//     .filter((item, idx, arr) => arr.indexOf(item) === idx);
// console.log(allCourses);
// // const uniqueCourses = allCourses.filter((item, idx, arr) => arr.indexOf(item) === idx);
// // console.log(uniqueCourses);

////ЗАДАЧА 19 перевірити чи масив вкладений чи ні (дані з бекенду) - (лише рекурсія перевіряє чи масив вкладений) ВКЛАДЕНІСТЬ МАСИВУ // кількість вкладеності____________

// const arr = [0, 1, 2, [3, [4, [45]]]];

// function findDepth(arr) {
//     let depth = 0;

//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             depth += 1;
//             depth += findDepth(item);
//         }
//     }
//     return depth;
// }
// console.log(findDepth(arr));

//ЗАДАЧА 20 знайти щасливе число - те яке зустрічається скільки ж раз скільки і його значення____________________ (наприклад 333)
// let num = 122423335566;

//ЗАДАЧА 21 ПЕРЕБІР УНІКАЛЬНИХ ЕЛЕМЕНТІВ________________________________________
// const users = [
//     { id: 1, name: 'John', age: 18, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 20, skills: ['JavaScript', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//     { id: 5, name: 'alice', age: 12, skills: ['Python', 'Data Analysis'] },
//     { id: 6, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

// повернути імена тих хто старше 21

// function getOlder(arr) {
//     return arr.filter(({ age }) => age > 21).map(({ name }) => name);
// }
// console.log(getOlder(users));

// const result = users
//     .flatMap(({ skills }) => skills)
//     .filter((item, idx, arr) => arr.indexOf(item) === idx);
// console.log(result);

//
//ЗАДАЧА 22 пошук книги за назвою, якщо не знайдено то Not found_____________________________

// const books = [
//     {
//         title: 'JavaScript: The Good Parts',
//         author: 'Douglas Crockford',
//         year: 2008,
//     },
//     {
//         title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
//         author: 'Robert C. Martin',
//         year: 2008,
//     },
//     {
//         title: 'The Pragmatic Programmer: Your Journey to Mastery',
//         author: 'Andrew Hunt, David Thomas',
//         year: 1999,
//     },
//     {
//         title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
//         author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
//         year: 1994,
//     },
//     {
//         title: 'Refactoring: Improving the Design of Existing Code',
//         author: 'Martin Fowler',
//         year: 1999,
//     },
// ];

// function getBook(arr, title) {
//     const result = arr.find(({ title: bookName }) => bookName === title);

//     return result || 'Not found';
// }
// console.log(getBook(books, 'Hello'));
// console.log(getBook(books, 'Refactoring: Improving the Design of Existing Code'));

//ЗАДАЧА  25 відсортувати за ціною менше 2 дол і вивести в алфавітному порядку + порядковий номер і перенос рядка, якщо не знайдено то нот фаунд_________________________

// const products = [
//     { id: 2, name: 'Banana', price: 0.99 }, //
//     { id: 1, name: 'Apple', price: 1.99 }, //
//     { id: 3, name: 'Orange', price: 2.49 }, //
//     { id: 4, name: 'Grapes', price: 3.99 }, //
// ];

// function getProduct(arr) {
//     const products = arr
//         .filter(({ price }) => price < 0.2)
//         .map(({ name }) => name)
//         .sort((a, b) => a.localeCompare(b));

//     return products.reduce(
//         (acc, item, idx) => acc + `${idx + 1} - ${item}\n`,
//         products.length ? 'Product list:\n' : 'Not found'
//     );
// }
// console.log(getProduct(products));

//ЗАДАЧА 26 Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа________________________________________________________________________

// const str = 'avavgrjgherafevrv';

// // const obj = {};
// // for (let i = 0; i < str.length; i++) {
// //     console.log(str[i]);
// //     if (str[i] in obj) {
// //         // перевірити чи є ключ в об'єкті / якщо є то додаємо 1 / якщо немає то ми просто ств такий ключ і ставимо йому 1
// //         obj[str[i]] += 1;
// //     } else {
// //         obj[str[i]] = 1;
// //     } // щоб не писати else можна  зробити continue
// // }
// // console.log(obj);

// /// 2 варіант

// const result = str.split('').reduce((acc, item) => {
//     item in acc ? (acc[item] += 1) : (acc[item] = 1);
//     return acc;
// }, {});
// console.log(result);

//ЗАДАЧА 27 сума вкладеного масива (рекурсія)___________________________________

// const arr = [1, 2, 3, [4, 55, 87, [56]]];
// function getTotal(arr) {
//     let total = 0;
//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             total += getTotal(item);
//         } else {
//             total += item;
//         }
//     }
//     return total;
// }
// console.log(getTotal(arr));

// ЗАДАЧА 28 написати скрипт який видаляє непотрібні значення (null, false, underfined, '', 0) ______________________________________________

// const arr = [0, 1, false, 2, undefined, '', 3, null];

// // for (let i = arr.length - 1; i >= 0; i -= 1) {
// //     if (typeof arr[i] !== 'number' || !arr[i]) {
// //         arr.splice(i, 1);
// //     }
// // }

// //інше рішення

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (!arr[i]) {
//         //якщо тру
//         arr.splice(i, 1);
//     }
// }

//або через пуш

// const updatedArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//         updatedArr.push(arr[i]);
//     }
// }

// console.log(arr);

//ЗАДАЧА 29  написати функцію яка отримує 2 числа, якщо обидва числа парні то функція повертає їх множення якщо числа непарні то повертається їх сума, якщо одне парне інше непарне то повертається непарне число_____________________________________________

// function getNum(a, b) {
//     const isEvenA = !(a % 2); //парне
//     const isEvenB = !(b % 2);

//     if (isEvenA && isEvenB) {
//         return a * b;
//     }
//     if (!isEvenA && !isEvenB) {
//         //не парне
//         return a + b;
//     }
//     return !isEvenA ? a : b;
// }
// console.log(getNum(2, 6));
// console.log(getNum(5, 3));
// console.log(getNum(2, 5));

//ЗАДАЧА 30 напишіть функцію яка приймає два параметри початок та кінець діапазона і повертає масив цих значень, третій необов'язковий - це шаг для будови масиву //також повинно працювати і в зворотньому напрямку__________________________________________________

// const range = function (start, end, step = 1) {
//     //step = 1 by default
//     const array = [];
//     if (step === 0) {
//         return; //якщо 0 то перериваємо функцію
//     }
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) {
//             array.push(i);
//         }
//     }
//     for (let i = start; i >= end; i -= 1) {
//         array.push(i);
//     }

//     return array;
// };
// console.log(range(1, 5, 1));
// console.log(range(5, 1, -1));
