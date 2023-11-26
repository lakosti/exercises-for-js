//ЗАДАЧА 1 ВИДАЛИТИ ТІ ЩО НЕ Є ЧИСЛОМ__________________________________________

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

///ЗАДАЧА 2 ПОКАЗАТИ//ЗАПУШИТИ ТІ ЩО ДУБЛЮЮТЬСЯ ___________________________________

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

//ЗАДАЧА 3 ВІДІБРАТИ ЛИШЕ ЖІНОЧІ ІМЕНА З МАСИВУ_________________________

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

//ЗАДАЧА 4 ПЕРЕВІРИТИ ЧИ ЕЛЕМЕНТИ РОЗТАШОВАНІ В ПОРЯДКУ ЗРОСТАННЯ ЯКЩО НІ ЗАМІНИТИ НА ВІРНІ____________________________

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

//ЗАДАЧА 5 СОРТУВАННЯ В АЛФАВІТНОМУ ПОРЯДКУ (сортує не повністью)___________________________

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'avacode', 'bootstrap'];

// // const newArr = [];
// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0]; // перевотврюємо в рядок [0]
//         langs.unshift(result);
//     }
// }
// console.log(langs);

//ЗАДАЧА 6 СТВОРИТИ ФУНКЦІЮ ЯКА БУДЕ ПЕРЕВІРЯТИ ЧИ КОЖНЕ ЧИСЛО МАСИВУ БІЛЬШЕ ЗА ЗНАЧЕННЯ ПО ЗАМОВЧУВАННЮ______________________________

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

//ЗАДАЧА 7 СТВОРИТИ ФУНКЦІЮ ЯКА БУДЕ РОЗБИВАТИ МАСИВ НА ПЕВНУ КІЛЬКІСТЬ ЕЛЕМЕНТІВ__________________________

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

//
//ЗАДАЧА 8 створити функцію яка повертає об'єкт з 3 ключами___________________________

// function createNewObj(product, quantity, price) {
//     return {
//         name: product,
//         price,
//         quantity,
//         totalPrice: quantity * price,
//     };
// }
// console.log(createNewObj('pizza', 3, 120));

//ЗАДАЧА 9 ПОВЕРНУТИ КІЛЬКІСТЬ ГРАВЦІВ ТА СЕРЕДНІЙ ЧАС ГРИ______________________

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

//ЗАДАЧА 10 функція повертає імена юзерів у яких є дана книга // порахувати  вік в юзерів (перебрати масив об'єктів)__________________________________

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

//ЗАДАЧА 11 створити метод який буде повертати учнів факультету // та їх бали_____________________________________

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

//ЗАДАЧА 12 СТВОРИТИ НОВИЙ КЛЮЧ І ПОЄДНАТИ ДВІ ВЛАСТИВОСТІ (РЕСТ + СПРЕД)_____________________________

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
