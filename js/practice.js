//ЗАДАЧА 1 ВИДАЛИТИ ТІ ЩО НЕ Є ЧИСЛОМ__________________________________________

// const array = [3, 'hello', null, 42, false];

// // for (let i = 0; i < array.length; i += 1) {
// //     if (typeof array[i] !== 'number') {
// //         array.splice(i, 1);
// //         i -= 1;
// //     }
// // }

// ///////////////////////////////

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

const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'Roman'];
const men = ['Artem', 'Maksim', 'Roman'];

function getWomen(users, men) {
    let women = [];
    for (let i = 0; i < users.length; i += 1) {
        if (!men.includes(users[i])) {
            women.push(users[i]);
        }
    }
    return women;
}
console.log(getWomen(users, men));
