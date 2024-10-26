//ЗА ДОПОМОГОЮ ЦИКЛА ФОР  - перебираються числа, рядки перебираються за допомогою FOR OF здебільшого

//ЦИКЛИ ВИКОРИСТОВУЮТЬСЯ ДЛЯ МАСИВА

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
// }
// console.log('з низу вверх');

// ////

// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i);
// }
// console.log('з верху вниз');

//1. ВИВІД НЕПАРНИХ ЧИСЕЛ_____________________________________

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i); // 1, 3, 5, 7, 9
// }

//2. Підрахунок/ сума загальної суми зарплати працівників // зарплата це рандомне число від 500 - 5000_______________________________________________

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//     salary = +salary; // приведення до намбер

//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSalary += salary;
//     // console.log('totalSalary:', totalSalary); // покаже зп після кожної ітерації
// }
// console.log('totalSalary:', totalSalary); // одну загальну

//3. Напиши суму всіх парних чисел, які входять у відрізок від мін до макс // тобто якщо діапазон 0-5 то сума парних = 6(2+4)______________________________

//парне число те яке у відсотку від ділення дає нуль, тобто повністью влізає (4 % 2)

// const min = 5;
// const max = 14;
// let total = 0;

// ///спочатку перевіряємо поганий кейс // непарні числа, і йдемо далі // зворотнья логіка
// for (let i = min; i <= max; i += 1) {
//     // і +=2 не можна бо число спочатку може бути не парне
//     if (i % 2 !== 0) {
//         console.log('Не четное: ', i);
//         continue; // пропускає//йде далі//тобто якщо число не чотне -- пропусти
//     }
//     console.log('четное:', i);
//     total += i;
// }
// console.log('total: ', total);

// ЗАДАЧА 4 Сума всіх парниx чисел
//алгоритм  //змінна тотал // перебрать масив і якщо парне то додати до тотал

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//     if (!(number % 2)) {
//         total += number;
//     }
// }
// console.log(total);

/// перепис на фор
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i]; // щоб не писати numbers[i] для зручності ств іншу змінну
//     console.log(numbers[i]); // перебір масиву

//     if (!(number % 2)) {
//         total += number;
//     }
// }
// console.log('total :', total);

//ЗАДАЧА 3 Пошук логіна

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message;

// for (let i = 0; i < logins.length; i += 1) {
//     if (loginToFind.includes(logins[i])) {
//         message = `User ${loginToFind} found`;
//         break;
//     } else {
//         message = `User ${loginToFind} not found`;
//     }
// }
// console.log(message);

///через фор оф //for of

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message;

// for (const login of logins) {
//     if (loginToFind.includes(login)) {
//         message = `User ${loginToFind} found`;
//         break;
//     } else {
//         message = `User ${loginToFind} not found`;
//     }
// }
// console.log(message);

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////
// function sum(numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum([])); //0
// console.log(sum([1, 5.2, 4, 0, -1])); //9.2

//!
// 1. number
// 2 number.length 4 / 6
// 3 number > 0

// function validatePIN(pin) {
//     const number = Number(pin);
//     console.log(number);
//     // const rightLength = pin.length === 4 || pin.length === 6;
//     // let hasNonNumeric = false;
//     // for (const n of pin) {
//     //     if (isNaN(n)) {
//     //         hasNonNumeric = true;
//     //         break;
//     //     }
//     // }
//     // return rightLength && !hasNonNumeric;
// }
// console.log(validatePIN('1234')); //true
// console.log(validatePIN('123456')); // true
// console.log(validatePIN('er4586')); // false
// console.log(validatePIN('-124')); // false
// console.log(validatePIN('.124')); // false
// console.log(validatePIN('1')); // false
// console.log(validatePIN('0000')); // true
// console.log(validatePIN('')); // false
// console.log(validatePIN('40.2')); // false
// console.log(validatePIN('123'));

//* TASK
// function fn(str) {
//     const max = Math.max(...str); // 16
//     let total = 0;
//     for (const s of str) {
//         if (s !== max) {
//             total += s;
//         }
//     }
//     return total === max ? true : false;
// }

// console.log(fn([5, 7, 16, 1, 2])); // false
// console.log(fn([3, 5, -1, 8, 12])); // false
// console.log(fn([4, 8, 12])); // true

//* TASK
// function fn(str) {
//     const arr = str.split('');
//     const space = arr.indexOf(' ');

//     const firstLetter = arr.slice(0, space);
//     const secondLetter = arr.slice(space + 1);

//     const capitalizedFirst = firstLetter[0].toUpperCase() + firstLetter.slice(1).join('');
//     const capitalizedSecond = secondLetter[0].toUpperCase() + secondLetter.slice(1).join('');

//     return (
//         capitalizedFirst.split('').reverse().join('') +
//         ' ' +
//         capitalizedSecond.split('').reverse().join('')
//     );
// }
// console.log(fn('yaroslava hovenko'));
// console.log(fn('hre wod'));

//* TASK

// function between(a, b) {
//     let result = [];
//     for (let i = a; i <= b; i++) {
//         result.push(i);
//     }
//     return result;
// }

// console.log(between(1, 4)); // [1,2,3,4]
// console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]

// function sumArray(array) {
//     let sum = 0;

//     const min = Math.min(...array);
//     const max = Math.max(...array);

//     for (const n of array) {
//         if (n !== min && n !== max) {
//             sum += n;
//         }
//     }

//     return sum;
// }

// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([-6, -20, -1, -10, -12]));
// console.log(sumArray([6]));
// console.log(sumArray([6, 1]));
// console.log(sumArray([]));
// console.log(sumArray([null]));
