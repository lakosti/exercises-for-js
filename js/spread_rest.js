//щоб пропуститти якийсь елемент при дескруктирізації ----  _, або просто ,
//загалом використовують до 3 деструктирізацій, далі через крапку звертаються

// rest ----  збирає  зліва
// spread --- розпиляє  зправа

// const numbers = [1, 2, 3];
// const copy = [...numbers]; // spread = (1,2,3)

// const number = [1, 2, 3];
// const [first, ...arg] = number; // rest = [2,3] а якщо об'єкт  то {}
// console.log(arg);

//у функціях -- де параметри function foo(...props) // rest а там де агрументи foo(...numbers) // spread

//задача 1 знайти найменшу та найбільшу температуру____________________________________

// const temps = [18, 14, 12, 21, 17, 29, 24];
// const min = Math.min(...temps);
// const min = Math.max(...temps);
// console.log(min);

//example 2 з'єднати в один масив / spread______________________________

// const lastWeek = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];
// // const allTemps = lastWeek.concat(currentTemps, nextWeekTemps);
// // const allTemps = [...lastWeek, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

//example 2
// const profile = {
//     name: 'User Surname',
//     tag: 'user_88',
//     location: 'Venezuela',
//     avatar: 'kiwi',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//         a: {
//             b: 1,
//             c: 1,
//             d: 1,
//         },
//     },
// };
// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: {
//         followers: myFollowers = 5,
//         views,
//         likes,
//         a: { b, c, d },
//     }, //глубока деструктирізація
// } = profile;
// // const { followers, views, likes } = stats; //якщо вкладений елемент
// console.log(name, tag, location, avatar, myFollowers, views, likes, b, c, d);

//без деструктирізації було б так

// const followers = profile.stats.followers
// const name = profile.name

//example 3 деструктирізація масивів______________________________________

// const rgb = [255, 100, 80];

// const [red, , blue] = rgb; //пропуск якогось значення
// console.log(red, green, blue);

//example 4 знайти найбільший рейтинг_____________________________________

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

//1 знайшли лише рейтинг без імені
// const ratting = Object.values(authors);
// console.log(ratting);
// const max = Math.max(...ratting);
// console.log(max);

//2
// const entries = Object.entries(authors);
// for (const [name, ratting] of entries) {
//     // const name = entry[0]; //витягли з масиву по індексу
//     // const ratting = entry[1];

//     //або за допомогою деструктирізації
//     // const [name, ratting] = entry;

//     //або на пряму у for

//     console.log(name, ratting);
// }

// const { kiwi, poly, ajax, mango } = authors;

//example 5______________________________________________________________

// function showProfileInfo(userProfile) {
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;
//     console.log(name, tag, location, avatar, followers, views, likes);
// }

//або деструктирізація може бути як параметр функції + rest

// function showProfileInfo({ name, tag, location, avatar, ...restProps }) {
//     console.log(name, tag, location, avatar);
//     console.log(restProps);
// }

// const profile = {
//     name: 'User Surname',
//     tag: 'user_88',
//     location: 'Venezuela',
//     avatar: 'kiwi',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };
// showProfileInfo(profile);

//example 6 деструктуризація_____________________________________________

//array

// const arr = [1, 2, 3];
// const [one, _, third, nest, thi] = arr; // пишемо власну змінну // і звідки її беремо
// console.log(one);
// console.log(third);

//object

// const user = {
//     name: 'test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         react: false,
//         node: false,
//         cars: {
//             audi: {
//                 first: 'A6',
//             },
//             bmw: 'not',
//         },
//     },
// };
// const name = 'value';
// const { age, name: userName } = user; //100% назва ключа і вказуємо звідки,з чого деструкт.
// console.log(age);
// console.log(userName);
///
// const skills = 123;
// const {
//     name,
//     skills: { js: userJs }, // в такому випадку skills стає недоступною
// } = user;
// console.log(userJs);

///глибока деструктирізація

// const {
//     skills: {
//         html,
//         css,
//         js: vanillaJs,
//         cars: {
//             audi: { first },
//         },
//     },
// } = user;
// console.log(vanillaJs);

//деструктирізація з масиву об'єктів

// const user = {
//     name: 'test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         react: false,
//         node: false,
//         cars: {
//             audi: {
//                 first: 'A6',
//             },
//             bmw: 'not',
//         },
//     },
//     languages: [{ angular: true }, { php: false }],
// };
// const {
//     languages: [angularFree, php],
// } = user;
// const { angular } = angularFree;
// console.log(angular);
// console.log(php);

///////////перебір масиву

// const user = {
//     name: 'test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         react: false,
//         node: false,
//         cars: {
//             audi: {
//                 first: 'A6',
//             },
//             bmw: 'not',
//         },
//     },
//     languages: [{ angular: true }, { php: false }],
// };
// for (const language of user.languages) {
//     console.log(language);
// }

//// якщо були б однакові ключі можна було б зробити так
// for (const {angular} of user.languages) {
//     console.log(angular);
// }

///// деструктуризація коли однакові ключі
// const user = [
//     {
//         name: 'user1',
//         language: 'html',
//         car: {
//             audi: 'a6',
//             bmw: 'x5',
//         },
//     },
//     {
//         name: 'user2',
//         language: 'css',
//         car: {
//             audi: 'lahety',
//             bmw: 'x3',
//         },
//     },
//     {
//         name: 'user3',
//         language: 'js',
//         car: {
//             audi: 'csx3',
//         },
//     },
// ];
//example 1
// for (const {
//     name,
//     language,
//     car: { audi: car },
// } of user) {
//     console.log(name, language, car);
// }
//example 2
// for (const {
//     name,
//     car: { audi, bmw = 'None' },
// } of user) {
//     console.log(name, bmw);
// }

////деструкр  при функціях(дефолтні значення)

// function foo(obj) {
//     console.log(obj);
// }
//
// function foo({ name = 'unknown', car: { bmw = 'None' } = {} } = {}) {
//     //якщо немає кар то прийде пустий об'єкт з дефолтним значення None
//     console.log(name, bmw);
// }
// foo({
//     name: 'user',
//     language: 'html',
//     car: {
//         audi: 'a6',
//         bmw: 'x5',
//     },
// });
// foo({
//     name: 'user2',
//     language: 'html',
// }); //без кар
// foo(); // взагалі нічого не прийшло ={}

//spread and rest------- rest (збирає/зліва) = spread(розпиляє/зправа)

// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // const min = Math.min(...arr);
// // console.log(min);

// //спред створює незалежну копію

// const arr2 = [...arr1];
// // arr2.splice(0, 1);
// console.log(arr1 === arr2); //false

//ЗАДАЧА 1  перше значення помножене на наступне_______________________________

// const arr1 = [12, 22, 3, 14, 45, 16, 57];

// const [first, ...props] = arr1;
// // console.log(first, props);
// for (let i = 0; i < props.length; i += 1) {
//     props[i] *= first;
// }
// console.log(props);

//// rest in functions

// function foo(...args) {
//     console.log('rest', args);
// }
// foo(1, 2, 3, 4, 5, 6);

//ЗАДАЧА 2 Деструктирізація_______________________________________________

// //JS Doc //* */
// /**
//  * Розраховуємо індекс маси тіла
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */

// function calcBMI({ weight, height }) {
//     const numbericWeight = Number(weight.replace(',', '.'));
//     const numbericHeight = Number(height.replace(',', '.'));
//     return Number((numbericWeight / numbericHeight ** 2).toFixed(1));
// }
// console.log(calcBMI({ weight: '88,3', height: '1.75' })); // стало
// // console.log(calcBMI('88,3', '1.75')); //було

//ЗАДАЧА 2 Глибока деструктуризація (підхід об'єкт параментів) Переписати фінкцію щоб вона приймала один об'єкт параметрів замість арзкментів____________________________________

// function getBotReport({ companyName, repairBots, defenceBots }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({ companyName: 'Cybor system', repairBots: 150, defenceBots: 50 }));

//ЗАДАЧА 3 отримати імена всіх користувачів_____________________________

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }, {}];
// const names = [];
// for (const { name = 'Name nor found' } of users) {
//     names.push(name);
// }
// console.log(names);

//ЗАДАЧА 4 деструктуризація____________________________________________

// const user = {
//     id: 1,
//     username: 'harry-potter',
//     profile: {
//         name: 'harry',
//         surname: 'Potter',
//         age: 25,
//     },
// };

// const {
//     profile,
//     profile: { name, surname },
//     username,
// } = user;
// console.log(profile);
// console.log(name);
// console.log(surname);
// console.log(username);

//ЗАДАЧА 5 деструктуризація для функції - обов'язково робимо  = {}____________________________

// const user = {
//     name: 'Yagor',
//     price: 2015,
//     category: 'veniche',
//     details: {
//         brand: 'Samsung',
//         color: 'Black',
//         weight: '15.5',
//     },
// };

// function displayProductInfo({
//     name,
//     price,
//     category,
//     details: { brand, color, weight } = {},
// } = {}) {
//     console.log(`назва товару: ${name}`);
//     console.log(`назва товару: ${price}`);
//     console.log(`назва товару: ${category}`);
//     console.log(`назва товару: ${brand}`);
//     console.log(`назва товару: ${color}`);
// }

// displayProductInfo(user);

//ЗАДАЧА 6 налаштування по замовчуванню___________________________________

// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

/// ЗАДАЧА 7 повернення об'єкту з новими та дефолтними властивостями____________________________________________

// function makeTask(data) {
//     return {
//         category: 'General',
//         priority: 'Normal',
//         completed: false,
//         ...data,
//     };
// }
// makeTask({});
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

/// ЗАДАЧА 8 поразувати суму з неоднаковою кількістью аргументів______________________________________

// function add(...args) {
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

//ЗАДАЧА 9 порахувати суму елементів в тому випадку якщо вони більші за перше число__________________________________________

// function addOverNum(a, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > a) {
//             total += arg;
//         }
//     }
//     return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//ЗАДАЧА 10 перевірити на однакові числа в масиві і вивести в окремий масив______________________________________

// function findMatches(array, ...args) {
//     const matches = [];

//     for (let i = 0; i < array.length; i++) {
//         if (args.includes(array[i])) {
//             matches.push(array[i]);
//         }
//     }
//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16, 8, 11, 5, 29));

//ЗАДАЧА 11

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////
