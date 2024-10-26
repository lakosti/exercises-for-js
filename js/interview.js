//ОБОВ'ЯЗКОВО ЗНАТИ ДЛЯ ІНТЕРВЬЮ

// new Date().getFullYear() -- поточна дата // сьогоднішня дата
// ЗАМИКАННЯ -- це дозволяє зберегти доступ до лексичного оточення змінних навіть якщо його не існує
// ЗАМИКАННЯ -- дозволяє функції зберегти доступ до змінних з області видимості в яких вони були створені навіть після того як ця область припинила свою роботу

// function counter() {
//     let counter = 0;

//     return function () {
//         counter += 1; // цей counter повязаний
//         console.log(counter);
//     };
// }
// const fnCallCounter = counter();
// fnCallCounter();
// fnCallCounter();
// fnCallCounter();
// fnCallCounter();

// RETURN перериває всю функцію BREAK перериває лише цикл функція далі працює
// null typeof obj
// array == obj
// obj == obj
// null = 0
// typeof NaN = number
// Number(underfined) = NaN
//'hello' - 3 = NaN
//[] {} = true
//будь яка операція з NaN або Infinity повертає їх самих
//true + '5' - 1 // NaN
//при + (конкатенації зі строками) - головне буде строка  -- все приводиться до неї
// при інших операціях головне число
//10 / false  = infinity // 10 / 0 === ділення на нуль дає нескінченність
//.map(Number) --- перетворює на число
// console.log('"Khal Drogo\'s favorite word is "athjahakar""'); -- щоб вивести спеціальний символ ставимо  перед  ним \
// console.log(!isNaN(true)); // приводить булеві типи бо числа

//прості типи даних --- імутабельні - не можна змінити без перевизначення
//складні типи даних -- мутабельні

//0 >= null // true
//'0' == false // true // коли порівнюєтья з булями приводиться до числа
// null == underfined // true // а при порівнянні з усім іншим буде false
//0 > null // false
//null == 0 // false

//* ЗАДАЧА 1 повернути літери як назву ключа а кількість разів що дублюється як властивість  - скільки раз вона зустрічається в рядку (reduce)_____________________________________________

// const str = 'gughrgrjjgiorgjrildgegergrg';

// const getNum = str.split('').reduce((acc, item) => {
//     // item in acc ? (acc[item] += 1) : (acc[item] = 1);
//     //const keys = Object.keys(acc)
//     // keys.include(item)? acc[item] +=1: acc[item] = 1
//     acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
//     return acc;
// }, {});

// console.log(getNum);

//* ЗАДАЧА 8 Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа___________________________________________________

// const str = 'absdabsrgbadgtdswwbetflga';

// const obj = {};

// // for (const letter of str) {
// //     if (letter in obj) {
// //         obj[letter] += 1;
// //     } else {
// //         obj[letter] = 1;
// //     }
// // }
// // console.log(obj);

// //////////////////

// const result = str.split('').reduce((acc, key) => {
//     if (key in acc) {
//         acc[key] += 1;
//     } else {
//         acc[key] = 1;
//     }
//     return acc;
// }, {});
// console.log(result);

/////////////////////////////////

//* ЗАДАЧА ПОВЕРНУТИ НАЙБІЛЬШЕ ЧИСЛО З ПІДМАСИВУ____________________________________________________

// function largestNum(arr) {
//     // return arr.map(item => Math.max(...item));
//     return arr.map(item => item.reduce((first, second) => (first > second ? first : second)));
// }

// console.log(
//     largestNum([
//         [4, 5, 6, 7, 2],
//         [25, 63, 22, 598],
//         [1, 2],
//         [5, 89, 2, 3, 4],
//     ])
// );

//* ЗАДАЧА 2
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

//* ЗАДАЧА 3 обробка значення underfined __________________________

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

//* ЗАДАЧА 4 пошук найменшого числа в масиві_______________________________________

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const num of numbers) {
//     if (num < smallestNumber) {
//         smallestNumber = num;
//     }
// }
// console.log('smallestNumber :', smallestNumber);

//* ЗАДАЧА 5 змінити регістр // інверсія букв______________________________

// const str = 'JavaScript';

// //олдскульний варіант

// const letters = str.split(''); // перетворюємо в масив
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

//* ЗАДАЧА 6 видалити з масиву елементи що не є типом даних number________________________________________________________

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

//* ЗАДАЧА 7 відсортувати в алфавітному порядку__________________________________

// const langs = ['c++', 'python', 'bjava', 'ahaskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0]; //якщо умова тру то вирізаємо слово
//         //щоб достати слово з масиву використовуємо індекс [0]
//         langs.unshift(result); //і пушимо на перед
//     }
// }
// console.log(langs);

//* ЗАДАЧА 8 рядок який виводить години та хвилини в консоль як на годиннику / ГОДИННИК______________________________

// const time = 70;
// const hours = Math.floor(time / 60);
// const modifyHour = String(hours).padStart(2, 0);
// const minutes = time % 60;
// const modifyMinutes = String(minutes).padStart(2, 0);
// console.log(`${modifyHour}:${modifyMinutes}`);

///// або
//console.log(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}`);
/////

//* ЗАДАЧА 9 числа додаються поки не натисните кенсел /cancel // зациклення робить за допомогою do while_________________________________________________

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

//* ЗАДАЧА 10 зробити першу літеру великою / заглавною_________________________________

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
// // console.log(allTags);

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

//* ЗАДАЧА 11 калькулятор________________________________________

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

//* Задача 12 Створити функцію createProduct(obj, callback) -яка приймає об'єкт товару без id а також колбек, Функція ств об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому ств об'єкт
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

//* ЗАДАЧА 13 РАВЛИК за день равлик проповзає на 7 м в гору а за ніч спускається на 2 метри вниз // за скільки він пройде 42 м , 17 м, 18 м____________________________________________

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

//* ЗАДАЧА 14 маніпуляції з об'єктом // вивести ключ і значення_______________________________

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

//* ЗАДАЧА 15 перебрати об'єкт та просумувати_____________________
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

//* ЗАДАЧА 15 ств функцію яка повертає ім'я працівника знайбільшою зп / зарплатою

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
//     for (const salary of arr) {
//         if (salary[1] > bigSalary[1]) {
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

//* ЗАДАЧА 16 написати функцію яка перевііряє чи є елемент саме простим об'єктом а не масивом, чи null______________________________________

// function isObj(payload) {
//     return typeof payload === 'object' && !Array.isArray(payload) && payload !== null;
// }
// console.log(isObj({ a: 1 }));
// console.log(isObj([]));
// console.log(isObj(null));
// console.log(isObj(1));
// console.log(isObj(undefined));

//* ЗАДАЧА 17 використовуючи колбеки зробити операції з функціями + передати старий об'єкт та створити id

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

//* ЗАДАЧА 17 напишіть функцію яка приймає два параметри (масив чисел, колбек) // функція повертає  новий масив кожен елемент якого є результатом виконання колбек__________________________________
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

//* ЗАДАЧА 18 відбір унікальних елементів / неповторюваних___________________________

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

//* ЗАДАЧА 19 перевірити чи масив вкладений чи ні (дані з бекенду) - (лише рекурсія перевіряє чи масив вкладений) ВКЛАДЕНІСТЬ МАСИВУ // кількість вкладеності____________

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

//* ЗАДАЧА 21 ПЕРЕБІР УНІКАЛЬНИХ ЕЛЕМЕНТІВ________________________________________
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
//* ЗАДАЧА 22 пошук книги за назвою, якщо не знайдено то Not found_____________________________

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

//* ЗАДАЧА  25 відсортувати за ціною менше 2 дол і вивести в алфавітному порядку + порядковий номер і перенос рядка, якщо не знайдено то нот фаунд_________________________

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

//* ЗАДАЧА 26 Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа________________________________________________________________________

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

//* ЗАДАЧА 27 сума вкладеного масива (рекурсія)___________________________________

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

//* ЗАДАЧА 28 написати скрипт який видаляє непотрібні значення (null, false, underfined, '', 0) ______________________________________________

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

//*ЗАДАЧА 29  написати функцію яка отримує 2 числа, якщо обидва числа парні то функція повертає їх множення якщо числа непарні то повертається їх сума, якщо одне парне інше непарне то повертається непарне число_____________________________________________

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

//* ЗАДАЧА 30 напишіть функцію яка приймає два параметри початок та кінець діапазона і повертає масив цих значень, третій необов'язковий - це шаг для будови масиву //також повинно працювати і в зворотньому напрямку__________________________________________________

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

//*ЗАДАЧА 32 перевірити чи є число простим (ділиться без остачі тільки на себе та на 1)___________________________________

// function isPrimeNumber(num) {
//     if (num > 1) {
//         for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
//             // (let i = 2; i < num; i++)
//             if (num % i === 0) {
//                 return 'Складне число';
//             }
//         }
//         return 'Просте число';
//     } else {
//         return 'Число повинно бути більше 1';
//     }
// }

//якщо ділиться на 2 без остачі то складне в іншому випадку просте
// console.log(isPrimeNumber(5)); //просте ділиться на 5 і 1
// console.log(isPrimeNumber(3)); //просте ділиться на 3 і 1
// console.log(isPrimeNumber(4)); // складне
// console.log(isPrimeNumber(7)); //просте ділиться на 7 і 1
// console.log(isPrimeNumber(2)); //просте ділиться на 2 і 1
// console.log(isPrimeNumber(10)); //складне

//* ЗАДАЧА 33 обчислити суму від 1 до заданого числа_________________________________

// function calculateSum(num) {
//     let total = 0;

//     for (let i = 1; i <= num; i++) {
//         total += i;
//     }

//     return total;
// }
// console.log(calculateSum(10));

//*EXAMPLE 34 геттери та сеттерию. Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та  email__________________________________________________

// class User {
//     #login; // обов'язково оголошуємо їх зверху
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login() {
//         return this.#login; // повертаємо значення (типу консолі)
//     }
//     set login(newLogin) {
//         if (this.#login !== newLogin) {
//             this.#login = newLogin; // перевизначаємо
//         }
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         if (this.#email !== newEmail) {
//             this.#email = newEmail;
//         }
//     }
// }

// const polly = new User({ login: 'yaroslava', email: 'hovenko@gmail.com' });

// console.log(polly.login); // виклик гетера
// polly.login = 'valentyna'; // виклик сеттера
// console.log(polly.login);
// console.log(polly.email);
// polly.email = 'valentyna@gmail.com';
// console.log(polly.email);

//*EXAMPLE 35 Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.________________________________________________

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     };
//     constructor(note) {
//         this.items = note;
//     }
//     addNote(note) {
//         const isArr = this.items.some(({ text }) => text === note.text); //перевіряємо чи є в масиві і якщо немає то пушемо
//         if (!isArr) {
//             // include тут не працює бо це складний тип
//             this.items.push(note);
//         }
//     }
//     removeNote(text) {
//         const idx = this.items.findIndex(({ text: noteText }) => noteText === text); // indexOf  - працює із простими значеннями
//         if (!!~idx) {
//             //idx !== -1 // idx > -1
//             this.items.splice(idx, 1);
//         }
//     }
//     updatePtiority(text, newPriority) {
//         const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//         if (!!~idx) {
//             this.items[idx].priority = newPriority;
//         }
//     }
// }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
// myNotes.addNote({ text: 'My second note', priority: Notes.Priority.NORMAL });

// console.log(myNotes);

// myNotes.removeNote('My first note');
// console.log(myNotes);

// myNotes.updatePtiority('My second note', Notes.Priority.HIGH);
// console.log(myNotes);

//*ЗАДАЧА 36 ОТРИМАТИ ЧИСЛО З РЯДКА ___________________________________________

// function getNum(str) {
//     let num = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i])) {
//             num += str[i];
//         }
//     }
//     return num;
// }
// console.log(getNum('frg50rg'));

//*ЗАДАЧА 37 вирізати з першої по задане значення___________________________________________

// function getSubstring(string, length) {
//     return string.slice(0, length);
// }
// console.log(getSubstring('Hello world', 8)); //Hello wo
// console.log(getSubstring('Hello world', 3)); // Hel
// console.log(getSubstring('Hello world', 5)); // Hello
// console.log(getSubstring('Hello world', 0)); // ''

//*ЗАДАЧА 37 якщо є розширення, то видалити, якщо немає то повернути просто рядок__________________________________

// function getFileName(file) {
//     const idx = file.indexOf('.');
//     if (!!~idx) {
//         return file.slice(0, idx);
//     } else {
//         return file;
//     }
// }
// console.log(getFileName('app.js'));
// console.log(getFileName('index'));

//* TASK 38 Дано випадкове невід’ємне число, ви повинні повернути цифри цього числа в масиві у зворотному порядку._______________________________________

// function digitize(n) {
//     return String(n).split('').map(Number).reverse();
// }

/// інший варіант
// function digitize(n) {
//     return Array.from(String(n), Number).reverse();
// }
// console.log(digitize(54321));
// console.log(digitize(0));

//*ЗАДАЧА 38 Додати числа за допомогою while
// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6. __________________________________________________________

// function calculateTotal(number) {
//     let total = 0;
//     let i = number;
//     while (i > 0) {
//         total += i;
//         i -= 1;
//     }
//     return total;
// }

// console.log(calculateTotal(3));
// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));

//*ЗАДАЧА 39 знайти мін і макс з кодеварса (на кодеварсі через мас вирішила)_____________________________________________

// function minMax(arr) {
//     let min = arr[0],
//         max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//     }
//     return [min, max];
// }

// console.log(minMax([1, 2, 3, 4, 59, 8, 36])); //[1,5]
// console.log(minMax([15, 78, 59, 32, 2, 5])); //[6, 158445]
// console.log(minMax([5])); //[1,1]

//*ЗАДАЧА 40 повернути кількість овець // true

// function countSheeps(sheep) {
//     return sheep.filter(Boolean).length;
// }
// console.log(countSheeps([true, false, true, true, false])); //3
// console.log(countSheeps([null])); //0
// console.log(countSheeps([undefined])); //0
// console.log(countSheeps([true])); //1
// console.log(countSheeps([])); //0

//*ЗАДАЧА 41 ПОВЕРНУТИ КІЛЬКІСТЬ ДІЛЬНИКІВ____________________________________

// const getDivisorsCnt = n => {
//     let counter = 0;
//     for (let i = 0; i <= n; i++) {
//         counter += n % i === 0 ? 1 : 0;
//     }
//     return counter;
// };

////отпимізований варіант

// const getDivisorsCnt = n => {
//     let counter = 0;
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             counter += i * i === n ? 1 : 2;
//         }
//     }
//     return counter;
// };

// console.log(getDivisorsCnt(1));
// console.log(getDivisorsCnt(10)); //4
// console.log(getDivisorsCnt(11));
// console.log(getDivisorsCnt(54));

//* ЗАДАЧА 42 РЕКУРСІЯ -- ПОРАХУВАТИ ЧИСЛА ВІД МЕНШОГО ДО БІЛЬШОГО ___________________________

// function countUp(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countUp(n - 1);
//         countArray.push(n);
//         return countArray;
//     }
// }
// console.log(countUp(5));

//*ЗАДАЧА 43 ВИДАЛИТИ ТІ ЩО НЕ Є ЧИСЛОМ__________________________________________

// const array = [3, 'hello', null, 42, false];

// // for (let i = 0; i < array.length; i += 1) {
// //     if (typeof array[i] !== 'number') {
// //         array.splice(i, 1);
// //         i -= 1;
// //     }
// // }

// /////////////////////////////// 2-й варіант

// for (let i = array.length - 1; i >= 0; i -= 1) {
//     if (typeof array[i] !== 'number') {
//         array.splice(i, 1);
//     }
// }
// console.log(array);

//* ЗАДАЧА 44 ПОКАЗАТИ//ЗАПУШИТИ ТІ ЩО ДУБЛЮЮТЬСЯ ___________________________________

// function getCommonElements(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(arr[i], i + 1)) {
//             // i + 1 чи входить елемент з масив за виключенням мене самого
//             if (!result.includes(arr[i])) {
//                 result.push(arr[i]);
//             } //якщо такого елемента ще немає, то тоді тільки додай
//         }
//     }
//     return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 1, 1, 1, 19]));

//* ЗАДАЧА 45  ВІДІБРАТИ ЛИШЕ ЖІНОЧІ ІМЕНА З МАСИВУ_________________________

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'Roman'];
// const men = ['Artem', 'Maksim', 'Roman'];

// function getWomen(users, men) {
//     let women = [];
//     for (const user of users) {
//         if (!men.includes(user)) {
//             women.push(user);
//         }
//     }
//     return women;
// }

// console.log(getWomen(users, men));

//* ЗАДАЧА 46 ПЕРЕВІРИТИ ЧИ ЕЛЕМЕНТИ РОЗТАШОВАНІ В ПОРЯДКУ ЗРОСТАННЯ ЯКЩО НІ ЗАМІНИТИ НА ВІРНІ____________________________

// // const arr = [1, 2, 3, 1, 5, 6, 1, 1, 9]; // 1,2,3,4,5,6,7,8,9
// const arr = [1, 2, 34, 35, 36, 37, 38, 39];

// for (let i = 1; i < arr.length; i++) {
//     const currentEl = arr[i];
//     const prevEl = arr[i - 1];

//     // if (currentEl - prevEl !== 1) {
//     //     arr[i] = prevEl + 1;
//     // }
//     // трішки друга умова
//     if (currentEl <= prevEl) {
//         arr[i] = prevEl + 1;
//     }
// }

// console.log(arr);

//* ЗАДАЧА 47 СОРТУВАННЯ В АЛФАВІТНОМУ ПОРЯДКУ (сортує не повністью)___________________________

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'avacode', 'bootstrap'];

// // const newArr = [];
// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0]; // перевотврюємо в рядок [0]
//         langs.unshift(result);
//     }
// }
// console.log(langs);

//* ЗАДАЧА 48 СТВОРИТИ ФУНКЦІЮ ЯКА БУДЕ ПЕРЕВІРЯТИ ЧИ КОЖНЕ ЧИСЛО МАСИВУ БІЛЬШЕ ЗА ЗНАЧЕННЯ ПО ЗАМОВЧУВАННЮ______________________________

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(numbers, value) {
//     let message = 'Success';
//     for (const n of numbers) {
//         if (n >= value) {
//             message = 'Fail';
//             return message;
//         }
//     }
//     return message;
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));
// console.log(checkValue(numbers, 80));

//* ЗАДАЧА 49 СТВОРИТИ ФУНКЦІЮ ЯКА БУДЕ РОЗБИВАТИ МАСИВ НА ПЕВНУ КІЛЬКІСТЬ ЕЛЕМЕНТІВ__________________________

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += count) {
//         const combination = arr.slice(i, i + count);
//         result.push(combination);
//     }
//     return result;
// }

// console.log(getCombination(data, 2)); // [[1,2],[3,4], [...]...]
// console.log(getCombination(data, 3)); // [[1,2,3],[4,5,6], [...]...]

//* 50 ЗАДАЧА ВІДІБРАТИ УНІКАЛЬНІ ЕЛЕМЕНТИ________________________________________________
// const elem = [1, 5, 2, 6, 3, 2, 5, 1, 6];
// const result = elem.filter((el, i, arr) => arr.indexOf(el) === i).toSorted((a, b) => a - b);
// console.log(result);

//* ЗАДАЧА 51 створити функцію яка повертає об'єкт з 3 ключами___________________________

// function createNewObj(product, quantity, price) {
//     return {
//         name: product,
//         price,
//         quantity,
//         totalPrice: quantity * price,
//     };
// }
// console.log(createNewObj('pizza', 3, 120));

//* ЗАДАЧА 52 ПОВЕРНУТИ КІЛЬКІСТЬ ГРАВЦІВ ТА СЕРЕДНІЙ ЧАС ГРИ______________________

// const players = {
//     Den: 120,
//     Artem: 10,
//     Igor: 25,
//     Egor: 40,
//     Lew: 40,
//     On: 40,
// };

// function getTime(obj) {
//     const countPlayers = Object.keys(obj).length;
//     const time = Object.values(obj);
//     let total = 0;
//     for (const el of time) {
//         total += el;
//     }
//     return `Count players ${countPlayers}, average time ${(total / countPlayers).toFixed()}`;
// }
// console.log(getTime(players));

//* ЗАДАЧА 53 функція повертає імена юзерів у яких є дана книга // порахувати  вік в юзерів (перебрати масив об'єктів)__________________________________

// const friends = [
//     {
//         name: 'Anna',
//         books: ['Bible', 'Harry Potter'],
//         age: 21,
//     },
//     { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//     { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//     {
//         name: 'Oleksii',
//         books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//         age: 26,
//     },
// ];
// function getUsers(arr, bookName) {
//     // let users = '';
//     let users = [];
//     for (const user of arr) {
//         if (user.books.includes(bookName)) {
//             // users += `${user.name}, `;
//             users.push(user.name);
//         }
//     }
//     return users.join(', '); // перетворюємо рядок
// }
// console.log(getUsers(friends, 'Harry Potter'));

// //немає одного ключа(щоб не було NaN ми виконуємо перевірку на фолсі значення якщо прийде андефінед воно буде проігноровано, якщо значення є то додаємо)

// function getTotalAge(arr) {
//     let totalAge = 0;
//     //1 variant // не дуже доречний варіант, значення ключа може бути фолсі значенням
//     // if(user.age)  // === true
//     //{ totalAge += user.age}
//     //
//     // 2 variant  ==== the best
//     for (const user of arr) {
//         if (user.hasOwnProperty('age')) {
//             totalAge += user.age;
//         }
//     }
//     return totalAge;

//     // 3 variant in // перевіряє і не власні ключі
//     // for (const user of arr) {
//     //     if ('age' in user) {
//     //         totalAge += user.age;
//     //     }
//     // }
//     // return totalAge;
// }

// console.log(getTotalAge(friends));

//* ЗАДАЧА 54 створити метод який буде повертати учнів факультету // та їх бали_____________________________________

// const hogvargs = {
//     griffindor: [
//         {
//             name: 'Harry',
//             points: 17,
//         },
//         {
//             name: 'Hermiona',
//             points: 19,
//         },
//         {
//             name: 'Ron',
//             points: 14,
//         },
//     ],
//     slizerin: [
//         {
//             name: 'Draco',
//             points: 17,
//         },
//         {
//             name: 'Goyl',
//             points: 14,
//         },
//         {
//             name: 'Crabbe',
//             points: 5,
//         },
//     ],
//     // getUserList(faculty) {
//     //     if (!(faculty in this)) {
//     //         // завжди перевіряємо чи є такий ключ в об'єкті // негативний сценарій
//     //         return 'Not found';
//     //     }
//     //     const students = [];
//     //     for (const student of this[faculty]) {
//     //         //передаємо параметр який прийде як змінна
//     //         students.push(student.name);
//     //     }
//     //     return students;
//     //     // return students.join(', ') // або повертаємо рядком
//     // },

//     getTotalPoints(faculty) {
//         if (!this.hasOwnProperty(faculty)) {
//             return 'Not found';
//         }
//         let totalPoint = 0;
//         for (const point of this[faculty]) {
//             totalPoint += point.points;
//         }
//         return totalPoint;
//     },
// };

// // console.log(hogvargs.getUserList('griffindor'));
// // // console.log(hogvargs.getUserList('orlan'));
// // console.log(hogvargs.getUserList('slizerin'));

// console.log(hogvargs.getTotalPoints('griffindor'));
// console.log(hogvargs.getTotalPoints('slizerin'));
// console.log(hogvargs.getTotalPoints('orlan'));

//* ЗАДАЧА 55 СТВОРИТИ НОВИЙ КЛЮЧ І ПОЄДНАТИ ДВІ ВЛАСТИВОСТІ (РЕСТ + СПРЕД)_____________________________

// function transformUserName({ name, surname, ...props }) {
//     return {
//         fullName: `${name} ${surname}`,
//         ...props,
//     };
// }

// console.log(
//     transformUserName({
//         name: 'Egor',
//         surname: 'Bondar',
//         email: 'wefef@gmail.com',
//         city: 'Kiev',
//     })
// );

////БЕЗ РЕСТА __________

// function getFullName(obj) {
//     const firstName = obj.name;
//     const secondName = obj.surname;
//     const fullName = `${firstName} ${secondName}`;

//     delete obj.name;
//     delete obj.surname;

//     obj.fullName = fullName;

//     return obj;
// }
// console.log(
//     getFullName({
//         name: 'Egor',
//         surname: 'Bondar',
//         email: 'wefef@gmail.com',
//         city: 'Kiev',
//     })
// );

//* ЗАДАЧА 56 колбек функції // робота  з масивами // підповідно по інлайн функції зробити математичні операції______________________________________________

// function each(arr, action) {
//     const newArr = [];

//     // arr.forEach(el => {
//     //     const result = action(el);
//     //     newArr.push(result);
//     // });
//     arr.forEach(el => newArr.push(action(el)));
//     return newArr;
// }
///---------------------------------через map

// function each(arr, action) {
//     return arr.map(el => action(el));
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64.5, 49.1, 36.9, 25.7, 16.3], value => Math.ceil(value)));
// console.log(each([64.5, 49.1, 36.9, 25.7, 16.3], value => Math.floor(value)));

//* ЗАДАЧА 57 повернути повідомлення про те чи знайдено об'єкт по айді чи ні (колбек функція)___________________________________

// const products = [
//     {
//         id: 1,
//         name: 'Телефон',
//         price: 10000,
//         description: 'Смартфон з високоякісним дисплеєм та потужним процесором.',
//     },
//     {
//         id: 2,
//         name: 'Ноутбук',
//         price: 25000,
//         description: 'Легкий та потужний ноутбук для роботи та розваг.',
//     },
//     {
//         id: 3,
//         name: 'Планшет',
//         price: 8000,
//         description: 'Компактний планшет для перегляду контенту.',
//     },
// ];

// function getProductDetails(id, success, error) {
//     for (const product of products) {
//         if (product.id === id) {
//             success(product);
//             return;
//         }
//     }
//     error(id);
// }
// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError);

// function handleSuccess(message) {
//     console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//     console.log(`❌ Error! Product with ${productId} id not found`);
// }

//* 58 ЗАДАЧА повернути середнюю суму товарів // якщо масив пустий повернути No products found_____________________________________

// const products = [
//     { name: 'Apple', price: 0.99 },
//     { name: 'Banana', price: 0.49 },
//     { name: 'Orange', price: 0.79 },
//     { name: 'Mango', price: 1.99 },
// ];

// function calculateAveragePrice(products, onSuccess, onError) {
//     let total = 0;
//     if (!products.length) {
//         return onError('No products found'); // перериваємо
//     }
//     products.forEach(({ price }) => (total += price));
//     onSuccess(total / products.length);
// }
// const onSuccess = averagePrice => console.log('Average price - ', averagePrice.toFixed(2)); // оскільки це лише в цьому колбеці потрібно округлити, то тут і прописуємо фіксед
// const onError = errorMessage => console.log('Error', errorMessage);

// calculateAveragePrice(products, onSuccess, onError);

//* ЗАДАЧА 59 знайти вкладеність (рекурсія) ____________________________________

// const arr = [1, 2, 3, [4, [5, 6, [7, 8, [9, [5, 6]]]]]];
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

//* ЗАДАЧА 60 порахувати середній бал студентів та повернути об'єкт з імям та балами цього студента____________________________________

// const students = [
//     { name: 'John', grades: [80, 85, 90] }, //  { name: "John", average: 85 }
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [70, 80, 75] },
//     { name: 'Emily', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//     const result = arr.map(({ name, grades }) => {
//         const total = grades.reduce((acc, grade) => acc + grade, 0); // якщо масив примітивів можемо не повертати явно акамулятор
//         return { name, average: Math.round(total / grades.length) };
//     });
//     return result;
// }
// console.log(getAverage(students));

//* ЗАДАЧА 61 повернути імена студентів вік яких старше 20 років _____________________________________
// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 },
// ];

// function getAdultName(arr) {
//     return arr.filter(({ age }) => age > 20).map(({ name }) => name);
// }
// console.log(getAdultName(students));

//* ЗАДАЧА 62 Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title) // Якщо книгу не знайдено повертається рядок 'Not found'_______________________________________

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
//     const result = arr.find(book => book.title == title);
//     return result || 'Not found';
// }
// console.log(getBook(books, 'Design Patterns: Elements of Reusable Object-Oriented Software'));
// console.log(getBook(books, 'Hello my sword'));

//* ЗАДАЧА 63 Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.// Результат повинен бути загальною вартістю всіх товарів_______________________________________

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 }, // 20 * 3 = 60
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 },
// ];
// function getTotal(arr) {
//     return arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
// }
// console.log(getTotal(products));

//* ЗАДАЧА 64 відсортувати книжки за роком видання _______________________________________
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

// function sortByYear(arr) {
//     return arr.toSorted((a, b) => b.year - a.year);
// }
// console.log(sortByYear(books));

//* ЗАДАЧА 65 Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком

// const products = [
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
//     { id: 4, name: 'Grapes', price: 3.99 },
// ];

// function getSortByName(arr) {
//     const products = arr
//         .filter(({ price }) => price < 2)
//         .map(({ name }) => name)
//         .toSorted((a, b) => a.localeCompare(b));

//     return products.reduce(
//         (acc, product, i) => acc + `${i + 1} - ${product}\n`,
//         products.length ? 'Product list: \n' : 'Products not found'
//     );
// }

// console.log(getSortByName(products));
