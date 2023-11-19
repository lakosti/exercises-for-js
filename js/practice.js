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

//  ЗАДАЧА ПОВЕРНУТИ ЗА КЛЮЧЕМ ВЛАСТИВІСТЬ У ВИГЛЯДІ МАСИВУ________________________________
