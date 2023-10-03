//prompt повертає до рядка
//parseFloat() -

// Tack 1 зарплата співробітника___________________________

// //розрахувати зп + премія 15% від суми
// const salary = Number(prompt('Введіть вашу зп')); //prompt приводимо до намбер
// const bonus = Number(parseFloat(prompt('Введіть відсоток бонусу'))); //прибирає знак відсотка, якщо користувач введе
// //1000
// const total = salary * (bonus / 100);
// const restSalary = salary + total;
// alert(
//     `Ваша премія становить ${bonus} % у розмірі ${
//         salary * (bonus / 100)
//     }. На руки отримуєте ${restSalary}`
// );
// //розрахувати податки в 10%
// const tax = Number(parseFloat(prompt('Введіть ваш відсоток податку')));
// const taxes = restSalary - (restSalary * tax) / 100;
// alert(
//     `Податок в розмірі ${tax} відсотків становить ${
//         (restSalary * tax) / 100
//     }. На руки отримуєте ${taxes}`
// );
// // //витрати в магазині
// const spend = Number(prompt('Введіть витрати в магазині'));
// const shop = taxes - spend;
// alert(`Your puschase ${spend}. You have ${shop}`);
// //ділимо суму навпіл з жінкою
// alert(`Give my wife half and my rest ${shop / 2}`);

//ЗАДАЧА 2 введення даних і приведення до верхнього регістру перших букв слів_____________________

// let input = prompt('Enter two words').toLowerCase();
// const spaceIndex = input.indexOf(' '); // знайшли індекс пробілу

// const first = input.slice(0, spaceIndex);
// const second = input.slice(spaceIndex + 1);

// const normalizedFirst = first[0].toUpperCase() + first.slice(1);
// const normalizedSecond = second[0].toUpperCase() + second.slice(1);

// const toSummary = normalizedFirst + ' ' + normalizedSecond;
// console.log(toSummary);

//ЗАДАЧА 3 дано число 1000 поділить його на 2 поки не стане менше 50, вивести це число

// let n = 1000;
// let num = 0;
// while (n > 50) {
//     n /= 2;
//     num += 1;
// }
// console.log('n', n);
// console.log('num', num); // кількість ітерацій

//ЗАДАЧА WHILE 4 знайти суму числе від 1 до 100__________________________________
// let i = 0;
// let total = 0;
// while (i <= 100) {
//     total += i;
//     i += 1;
// }
// console.log(total);

///while - вивести цифри від 1 до 50_______________________________________
// let num = 1;
// while (num <= 50) {
//     console.log(num);
//     num += 1;
// }

//ЗАДАЧА 5 do while (спочатку виконує а потім перевіряє)___________

// do {
//     console.log('do/while');
// } while (false === true);
///////

//ЗАДАЧА 6 Потрібно ввести число більше 100, якщо користувач ввів менше 100, то цикл продовжується________________________

// let input = 0;
// do {
//     input = Number(prompt('Enter a num greater than 100'));
// } while (input < 100);
// console.log(input);

//ЗАДАЧА 7 вивести парні числа які діляться на 3 і 5_________________________________

// let min = 1;
// let max = 100;

// for (let i = min; i <= max; i++) {
//     if (!(i % 3) && !(i % 5)) {
//         console.log('FizzBuzz', i);
//     } else if (!(i % 3)) {
//         console.log('Fizz', i);
//     } else if (!(i % 5)) {
//         console.log('Buzz', i);
//     }
// }

//ЗАДАЧА 6 вивести зірочки трикутником _____________________

// let str = '';
// for (let i = 1; i < 7; i++) {
//     console.log((str += '*'));
// }

// ЗАДАЧА 7 в залежності від мови вивести текст__________________________

// let arr;
// let lang = 'ru';
// if (lang === 'ru') {
//     arr = 'пн,вт,ср,чт,пт';
// }
// if (lang === 'en') {
//     arr = 'mn,ts,wd,th,fd';
// }
// console.log(arr);

//switch
// let arr;
// let lang = 'en';
// switch (lang) {
//     case 'ru':
//         arr = 'пн,вт,ср,чт,пт';
//         break;
//     case 'en':
//         arr = 'mn,ts,wd,th,fd';
//         break;
//     default:
//         break; //дефолт обов'язковий бо літтер буде сваритися що його немає / по дефолту просто виходимо
// }
// console.log(arr);

///ЗАДАЧА 8 написати скрипт який просить внести початок та кінець діапазону і в результаті виводить суму всіх непарних чисел___________________________________________

// const start = Number(prompt('Enter number of start arr'));
// const theEnd = Number(prompt('Enter number of end arr'));
// let total = 0;
// for (let i = start; i <= theEnd; i++) {
//     if (i % 2) {
//         total += i;
//     }
// }
// console.log(total);

// ЗАДАЧА 9 //генератор рандомних чисел_______________________________
// const start = Number(prompt('Enter the first num'));
// const end = Number(prompt('Enter the last num'));
// const rand = Number((Math.random() * (end - start) + start).toFixed());
// console.log(rand);

//ЗАДАЧА 9 є число n, написати програму яка розбиває число n на на цифри і виводить на екран, рахує скільки чисел в n, знаходить суму, змінює порядок чисел на зворотній

// const n = 123;
// // const toStr = n + ''; //число переводити до числа
// let toStr = n.toString();
// let total = 0;
// for (let i = 0; i < toStr.length; i++) {
//     // total += +toStr[i];
//     total += Number(toStr[i]);
// }
// console.log('кількість цифр', toStr.length);
// console.log('їх сума', total);

// // ///у зворотньому порядку
// // for (let i = toStr.length - 1; i >= 0; i -= 1) {
// //     console.log(toStr[i]);
// // }
// //while
// let i = toStr.length - 1; //останній індекс
// let reverseNum = '';
// while (i >= 0) {
//     reverseNum += toStr[i];
//     // console.log(toStr[i]);
//     i -= 1;
// }
// console.log('змінює цикл на зворотній', reverseNum);

//ЗАДАЧА 10 Паліндром - коли слово читається однаково і з початку і з кінця// потрібно перевірити чи слово є паліндропом чи ні______________________________

//через функцію_________________________________________

// const name1 = 'Anna'.toLowerCase(); // true
// const name2 = 'Oleg'.toLowerCase(); // false

// const getName = function (name) {
//     name = name.toLowerCase();
//     // const revers = name.split('').reverse().join('');
//     return name === name.split('').reverse().join('');
//     // return name === reverse?true:false
//     // if (name === revers) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// };

// console.log(getName('Anna'));
// console.log(getName('Oleg'));

//виправлення коду на кращий варіант______________________

// const getName = name => {
//     name = name.toLowerCase();

//     return name === name.split('').reverse().join('');
// };
// console.log(getName('Anna'));
// console.log(getName('Oleg'));

/////без функції та масиву___________________________________

// let name = 'OLEG';
// let name = 'Сел в озере березов лес';
// let name = '12321';
// let name = 'Anna';
// name = name.toLowerCase();
// let result = '';
// for (let i = 0; i < name.length; i++) {
//     if (name[i] === name[name.length - 1 - i]) {
//         // i перша літера /друга ..       1 - і = 0 / і = 1/ і=2;
//         //                             віднімаємо останню, потім передостанню, і тд
//         if (name.length - 1 === i) {
//             result = true;
//         }
//     } else {
//         result = false;
//         break;
//     }
// }
// console.log(result);
