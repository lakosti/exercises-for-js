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
