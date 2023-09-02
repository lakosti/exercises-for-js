//параметри функції = function add (text) -- це як змінна лет
//аргументи функції це те що пишемо під час виклику add('hello')

//function expression - функція яка присвоюється в змінну
//function declaration - функція без змінної (поведінка хойстинг - можливість викликати функцію перед написанням)

//ОБЛАСТІ видимості

//// 1.
//let someValue = 4;
// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

//// console.log(someValue); //error

//2.
// let someValue = 4;
// if (true) {
//     someValue = 11;
// }
// console.log(someValue); //11

////3
// let someValue = 4;
// if (true) {
//     let someValue = 11
// }
// console.log(someValue); //4

////4
// let someValue = 2;
// function checkScope(someValue) {
//     someValue = 45;
//     return someValue;
// }
// checkScope(someValue);
// console.log(someValue); //2

////5
// let someValue = 2;
// function checkScope() {
//     someValue = 45;
//     return someValue;
// }
// checkScope(someValue);
// console.log(someValue);

////6 в даному випадку сторюються два масиви і ми змінюємо один але інший залишається незмінний

// let someValue = ['hello', 'my', 'name', 'scope'];
// function check(arr) {
//     arr = Array.from(arr);
//     arr.splice(0, 3);
// }
// check(someValue);
// console.log(someValue);

//ЗАДАЧА 1  ЗАГАДКА_____________________________________

// function check(text, answer) {
//     let message = prompt(text);
//     if (message) {
//         // якщо меседж це тру то пишемо просто так -- (message)//приводимо до одного регістру
//         message = message.toLowerCase();
//     }
//     console.log(message);
//     return message === answer;
// }

// console.log(check('Хоч не літак, а крилатий, без крил не може працювати', 'вітряк'));
// console.log(check('Через воду він проходить, а сам з місця вік не сходить', 'міст'));

//ЗАДАЧА 2 Порахувати кількість голосних літер у реченні_____________________________________

// function countVowel(str) {
//     const vowels = 'aeiou';
//     let result = 0;
//     str = str.toLowerCase(); //завжди рядки приводимо до нижнього регістру

//     for (let i = 0; i < str.length; i += 1) {
//         if (vowels.includes(str[i])) {
//             result += 1;
//         }
//     }
//     return result;
// }
// console.time('fn');
// console.log(countVowel('HELLO WORLD'));
// console.log(countVowel('Junior web developer'));
// console.timeEnd('fn');

//ЗАДАЧА 3 лайки користувачів_________________________________________

// function createStr(arr) {
//     let result = '';
//     switch (arr.length) {
//         case 0:
//             result = 'no one likes you';
//             break;
//         case 1:
//             result = `${arr[0]} likes you`;
//             break;
//         case 2:
//             result = `${arr[0]} and ${arr[1]} like this`;
//             break;
//         case 3:
//             result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//             break;
//         default:
//             result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//     }
//     return result;
// }

// console.log(createStr([])); //no one likes you
// console.log(createStr(['Peter'])); // peter likes you
// console.log(createStr(['Jacob', 'Alex'])); // jacob and alex like this
// console.log(createStr(['Max', 'John', 'Mark'])); // max , john and Mark like this
// console.log(createStr(['Alex', 'Jacob', 'Mark', 'Max', 'Oleg'])); //alex, jacob and 2 others like this

//ЗАДАЧА 4 за допомогою функції відібрати ті елементи які дублюються в масиві___________________________________________

// function getCommonElements(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) {
//             //                               i + 1 - означає перевір після мене / наступного
//             if (!result.includes(arr[i])) {
//                 result.push(arr[i]);
//             } //уникаємо повторень // якщо елемент не включається в новий масив то додай його
//         }
//     }
//     return result;
// }
// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 17, 19, 1, 1, 1]));

//ЗАДАЧА 5  функція повинна відібрати з масиву лише жіночі імена і повернути їх______________________________________

// const users = ['artem', 'anna', 'larisa', 'maksim', 'svetlana', 'david', 'roman', 'olga'];
// const men = ['artem', 'maksim', 'david', 'roman'];

// function getWomen(users, men) {
//     const women = [];
//     for (const user of users) {
//         if (!men.includes(user)) {
//             women.push(user);
//         }
//     }
//     return women;
// }

// console.log(getWomen(users, men));

//ЗАДАЧА 6 порахувати суму покупок в магазині__________________________________

// const calculatePtice = function (items) {
//     let total = 0;
//     for (const value of items) {
//         total += value;
//     }
//     return total;
// };
// console.log(calculatePtice([1, 2, 3]));
// console.log(calculatePtice([5, 10, 15, 20]));
// console.log(calculatePtice([2, 5, 7]));

//ЗАДАЧА 7 функція для перебору масиву___________________________________

// function logItems(array) {
//     for (const arr of array) {
//         console.log(arr);
//     }
// }
// logItems(['mango', 'kiwi', 'poly', 'ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавіатура', 'наушники', 'часи']);

//ЗАДАЧА 8 ЗНАЙТИ ЛОГІН_____________________________________________

// const logins = ['mango', 'peach', 'apple'];

// // function findLogin(allLogins, loginsToFind) {
// //     for (const login of allLogins) {
// //         if (login === loginsToFind) {
// //             return 'found'; // при першому збігу завершай функцію
// //         }
// //     }
// //     return 'not found'; //можна писати навіть без змінних
// // }

// ///через тернарний

// function findLogin(allLogins, loginsToFind) {
//     return allLogins.includes(loginsToFind) ? 'found' : 'not found';
// }

// console.log(findLogin(logins, 'avacoda'));
// console.log(findLogin(logins, 'peach'));
// console.log(findLogin(logins, 'apple'));

//ЗАДАЧА 10 знайти найменше число________________________________________

// function findSmallestNum(numbers) {
//     let smallNum = numbers[0];
//     for (const num of numbers) {
//         if (num < smallNum) {
//             smallNum = num;
//         }
//     }
//     return smallNum;
// }
// console.log(getSmallestNum([5, 10, 20, 6, 8, 1]));
// console.log(getSmallestNum([5, 10, 0, 6, -2, 1]));

//ЗАДАЧА 11 змінить регістр ___________________________________

// function ChangeCase(str) {
//     // const letters = str.split('');
//     let invertStr = '';

//     for (const letters of str) {
//         // if (letters === letters.toLowerCase()) {
//         //     invertStr += letters.toUpperCase();
//         //     console.log(letters);
//         // } else {
//         //     invertStr += letters.toLowerCase();
//         // }

//         //через тернарний
//         invertStr +=
//             letters === letters.toLowerCase() ? letters.toUpperCase() : letters.toLowerCase();
//     }

//     return invertStr;
// }
// console.log(ChangeCase('QdedrJIM'));

//ЗАДАЧА 12 рядок розділений по тире (повернення через ретерн)____________________

// function slugiFy(str) {
//     return str.toLowerCase().split(' ').join('-');
// }
// console.log(slugiFy('Hello my aborable woRld'));

//ЗАДАЧА 12 аргументи (дадавання)______________________________________

// function add(...arg) {
//     console.log(arg);

//     let total = 0;
//     for (const num of arg) {
//         total += num;
//     }
//     return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

//ЗАДАЧА 13 повернути числа які співпадають у двох масивах_______________________

// function filterNum(array, ...arg) {
//     const newArr = [];

//     for (const element of array) {
//         if (arg.includes(element)) {
//             newArr.push(element);
//             console.log(`${element} - is everywhere `);
//         }
//     }
//     return newArr;
// }
// console.log(filterNum([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNum([10, 15, 25, 30], 23, 30, 18, 15));

//ЗАДАЧА 14 порівняти чи більше кожне число елементу масиву з вказаним числом______________________________________

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//     for (const item of arr) {
//         if (item <= target) {
//             return 'Fail';
//         }
//     }

//     return 'Success';
// }
// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

//ЗАДАЧА 15 функція повинна розбивати масив на певну кількість елементів в ньому // створити масив в масиві з певною кількістю елементів в ньому//порізати масив//відбирати елементи в масиві за допомогою slice________________________________________

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += count) {
//         const combination = arr.slice(i, i + count);
//         result.push(combination);
//     }
//     return result;
// }

// console.log(getCombination(data, 2));
// console.log(getCombination(data, 3));

//ЗАДАЧА 16 площа прямокутника______________________________________

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');
//     return Number(dimensions[0]) * +dimensions[1]; // +dimensions = приведення до числа
// }
// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));

//ЗАДАЧА 17 функція для роботи з курсами / видаляє / додає / змінює__________________________________________

// const courses = ['html', 'css', 'javascript', 'react', 'postgreSQL'];

//додавання курсу

// function addCourse(name) {
//     if (courses.includes(name)) {
//         alert('Ви вже маєте такий курс');
//         // return 'Ви вже маєте такий курс';
//     } else {
//         courses.push(name);
//     }
// }
// addCourse('Express');
// console.log(courses);
// console.log(addCourse('css'));

// видалення курсу(мій варіант)

// function removeCourse(name) {
//     if (!courses.includes(name)) {
//         return 'Ви не маєте такого курсу';
//     } else {
//         courses.splice(courses.indexOf(name), 1);
//     }
// }

//варіант артема(швидший // бо якщо буде багато методів тормозитиме код)

// function removeCourse(name) {
//     const idx = courses.indexOf(name);
//     if (idx === -1) {
//         return 'Ви не маєте такого курсу';
//     }
//     courses.splice(idx, 1);
// }

// removeCourse('react');
// console.log(courses);
// console.log(removeCourse('vue'));

//оновлення курсу

// function updateCourse(oldName, newName) {
//     const idx = courses.indexOf(oldName);
//     const inCourses = courses.includes(newName);

//     if (idx !== -1 && !inCourses) {
//         courses[idx] = newName; // швидше працюватиме
//         // courses.splice(idx, 1, newName);
//     } else if (inCourses) {
//         return 'ви вже вивчаєте цей курс';
//     } else {
//         return 'такого курсу не знайдено';
//     }
// }
// updateCourse('html', 'nestJS');
// console.log(updateCourse('qwerty', 'nestJS'));
// console.log(courses);

//ЗАДАЧА 18 індекс маси тіла____________________________________________

// const bmi = calcBMI('88,3', '1.75');

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return Number((weight / Math.pow(height, 2)).toFixed(1));
//     return Number((weight / height ** 2).toFixed(1));
// }

// console.log(bmi);

//ЗАДАЧА 19 найменше число через псевдомасив_____________________________________

// function min(...arg) {
//     let smallestNumber = arg[0];
//     for (let i = 0; i < arg.length; i += 1) {
//         if (arg[i] < smallestNumber) {
//             smallestNumber = arg[i];
//         }
//     }
//     return smallestNumber;
// }
// console.log(min(5, 2, 8));
// console.log(min(5, -5));
// console.log(min(0, 5, 3, -9, 5, 6, -45));

//ЗАДАЧА 20 -- вивід елемента по порядковому номеру___________________________

// function num(items) {
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }
// num(['first', 'second', 'third', 'four', 'five', 'six', 'seven']);

//ЗАДАЧА 21 знайти найбільше число в рядку з різною кількістю елементів (псевдомасив)__________________________________________________

// function findLargestNumber() {
//     // const arr = Array.from(arguments)
//     const arr = [...arguments];
//     let largestNum = arr[0];
//     for (const item of arr) {
//         if (item > largestNum) {
//             largestNum = item;
//         }
//     }
//     return largestNum;
// }
// console.log(findLargestNumber(2, 17, 94, 265));
// console.log(findLargestNumber(49, 4, 7, 86, 12, 26));

// знайти найбільше число коли масив в масиві

function findLargestNumber() {
    // const arr = Array.from(arguments)
    const arr = [...arguments];
    let largestNum;

    for (const num of arr) {
        if (typeof num === 'number') {
            largestNum = num;
            break;
        }
    }

    return largestNum;
}

console.log(findLargestNumber(2, 17, 94, 265));
console.log(findLargestNumber(49, 4, 7, 86, 12, 26));
console.log(findLargestNumber([1, 5, 9, 95], 49, 4, 7, 12, 26));
