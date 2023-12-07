//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.
// const string = "Abcde";
// if (string[0].toLowerCase() === "a") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// function checkString(str) {
//   return str.toLowerCase().startsWith("a");
// }
// console.log(checkString(string));

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 60. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту). Виведіть значення у консоль, або alert

// const min = 62;

// if (min > 0 && min <= 15) {
//     console.log("first part");
// } else if(min > 15 && min <= 30) {
//     console.log("second part");
// } else if(min > 30 && min <=45) {
//     console.log("third part");
// } else if (min > 45 && min <= 60) {
//   console.log("four part");
// } else {
//     console.log("part not found");
// }

//TODO: 3 ===================================
// Напиши скрипт, який отримує мінімальне та максимальне значення від користувача через prompt. Зроби перевірку, що користувач передає саме числа, якщо користувач водить не числа виведіть в консоль 'Будь ласка, введіть числа.' Також додайте перевірку, щоб користувач не зміг ввести мінімальне число > за максимальне, якщо це сталось виведи у косоль повідомлення 'Мінімальне значення повинно бути менше максимального.'. У падку правильного ввода данних виведи у консоль рядок  "Випадкове число в діапазоні від мінімального до максимального : ("рандомне число")"

// Генерація випадкового числа

// const min = parseInt(prompt('Введіть мінімальне значення:'));
// const max = parseInt(prompt('Введіть максимальне значення:'));

// function checkRandomNum(a, b) {
//         if (isNaN(min) || isNaN(max)) return alert("not a number");
//     if (min >= max) return alert("Мінімальне значення повинно бути менше максимального.");

//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     return `Випадкове число в діапазоні від мінімального до максимального : ${randomNum}`;
// // }
// console.log(checkRandomNum(min, max));
// if (isNaN(min) || isNaN(max)) {
//        alert("not a number");
//    } else if (min >= max) {
//     alert("Мінімальне значення повинно бути менше максимального.");
// } else {
//     const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//     alert(`Випадкове число в діапазоні від мінімального до максимального : ${randomNum}`);
//    }

//* Тернарний оператор

//TODO: 4 ===================================
// Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення. Використай promt і виведи повідомлення в alert. (використати тернарний оператор)

//TODO: 5 ===================================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

//const login = '';
//let message = '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);
//login === 'Співробітник'
//? message = 'Привіт'
//: login == 'Директор'
//? message = 'Вітаю'
//: login == ''
//? message = 'Немає логіну'
//: message = 'fail';
//console.log(message)
//* Цикл while and do while
//TODO: 6 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50
// let i = 0;
// while (i <= 50) {
//   console.log(i);
//   i += 1;
// }
//TODO: 7 ===================================
//  Дано число n = 1000.
//  Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
//  Яке число вийде?
//  Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
// let n = 1000;
// let num = 0;
// while (n > 50) {
//   num += 1;
//   n /= 2;
// }
// console.log(`Кількість ітерацій: ${num}. Чило після ділення: ${n}`);
// console.log(123);
//TODO: 8 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

// TODO: 9 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

//* Цикл for і директива continue
//TODO: 10 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// console.log(`Сума усіх парних: ${total}`);

//TODO: 11 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *******
// let star = "*";
// for (let index = 0; index < 7; index += 1) {
//   console.log(star);
//   star += "*";
// }

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

//* Конструкція switch
//TODO: 13 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.
// const num = 5;
// let message = "";
// switch (num) {
//   case 1:
//     message = "зима";
//     break;
//   case 2:
//     message = "весна";
//     break;
//   case 3:
//     message = "літо";
//     break;
//   case 4:
//     message = "осінь";
//     break;

//   default:
//     message = "Такої пори року не існує";
//     break;
// }
// console.log(message);
//TODO: 14 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     console.log("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log('Okay we support these browsers too');
//     break;

//   default:
//     console.log('We hope that this page looks ok!');
// }

////////

// function getFirstLetter(str) {
//     return str.toLowerCase().startsWith('a') ? 'yes' : 'no';
// }
// console.log(getFirstLetter('vbcbe'));

///////////////////////////////////////////////////////ДРУГЕ ЗАНЯТТЯ///////////////////////////////////////////////////////////////////////////////////////////

//TASK 1 перевірити чи входить підстрока в рядок використовуючи метод indexOf______________________________

// const str = ['JavaScript', 'HTML', 'CSS', 'React'];
// const subStr = 'S';
// const newArr = [];

// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
//     if (str[i].indexOf(subStr) !== -1) {
//         newArr.push(str[i]);
//     }
// }
// const joinedArr = newArr.join(', ');
// console.log(`Масив що містить підстроку: ${subStr} - ${joinedArr}`);

//TASK 2 перевірити якщо масив містить такий елемент, то видалити, якщо немає то додати в кінець масива____________________

// const array = ['JavaScript', 'HTML', 'CSS', 'SS'];
// const el = 'HE';
// const idx = array.indexOf(el);

// // if (idx !== -1) {
// //     array.splice(idx, 1);
// // } else {
// //     array.push(el);
// // }

// // !!~idx ---- ЯКЩО Є (!== -1)

// !!~idx ? array.splice(idx, 1) : array.push(el);
// console.log(array);

//TASK 3 створити функцію яка буде приймати числа (зробити перевірку) і повертати найменше_________________________

// function getMinNum(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'It`s not a number'; //else не вівдпрацює бо поставили return
//     }
//     // return Math.min(a, b);
//     return a < b ? a : b;
// }

// console.log(getMinNum(5, 3));
// console.log(getMinNum(5, 's'));
// console.log(getMinNum('u', 's'));
// console.log(getMinNum(true, false));

//TASK 4 напишіть функцію яка буде сумувати сусідні числа і пушити в масив__________________________________

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function getSum(arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         newArr.push(arr[i] + arr[i + 1]);
//     }
//     return newArr;
// }
// console.log(getSum(someArr)); // [33,45,39,17,25,29]

//TASK 5 повернути середнє значення серед аргументів + додати перевірку на числа________________________

// function calculateAvarage(...args) {
//     // Array.from(arguments) // перетворити на повноцінний масив
//     let sum = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === 'number') {
//             sum += arg;
//             count += 1; // рахуємо скільки приходить чисел
//         }
//     }
//     return Math.round(sum / count); // ділимо на ці числа
// }
// console.log(calculateAvarage(10, 15, 20, 200));
// console.log(calculateAvarage(10, 15, 20, 200, 10));

//TASK 6  порахувати кількість голосних _____________________________________________

// const str = 'This is A new line';
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// function countVowels(str) {
//     let count = 0;
//     for (const s of str.toLowerCase()) {
//         count += vowels.includes(s) ? 1 : 0;
//     }
//     return count;
// }
// console.log(countVowels(str));

//TODO:=========task-11=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 21, 8, 7, 15, 11, 11];

// console.log(getOddNumbers(numbers));

//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

//TODO:============task-02==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// console.log(square.calculateArea());

//TODO:============task-03==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// console.log(store.hasProduct('apple'));

//TODO:============task-04==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// console.log(cart.calculateTotal());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-05======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// console.log(getBool(obj, 'car')); // true

//TODO:============task-06======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// console.log(sum);

//TODO:============task-07======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

// changeObject(user);

//TODO:============task-08======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//TODO:==========task-09=============
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// console.logs(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a')); // {c: 3}

//! Робота з масивом об'єктів
//TODO:============task-10==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];

// console.log(findTopStudent(students));

//TODO:============task-11==================================================
// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.

// const books = [
//   { title: 'Війна і мир', author: 'Лев Толстой', year: 1869 },
//   {
//     title: 'Преступление и наказание',
//     author: 'Федор Достоевский',
//     year: 1866,
//   },
//   {
//     title: 'Гаррі Поттер і філософський камінь',
//     author: 'Джоан Роулінг',
//     year: 1997,
//   },
//   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
//   { title: '1984', author: 'Джордж Оруелл', year: 1949 },
// ];

// const arr = findBooksByAuthor(books, 'Джоан Роулінг');
// console.log(arr);

//TODO:============task-12=========================
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];
// const arr2 = [
//   { id: 2, name: 'Mary' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];

// console.log(uniq(arr1, arr2));
//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.
// function performOperation(a, b, callback) {
//
// }

// const result = performOperation(3, 3, callbackFunction);
// console.log(result);

//TODO:============task-02=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 3, 2, 7, 9, 20];
// const words = ["apple", "banana", "orange", "pear", "onion"];

// function findElement(arr, callback) {

// }
// function isEven(number) {
//
// }
// function startWithO(str) {
//
// }
// // const res = findElement(numbers, isEven);
// // console.log(res);
// const res1 = findElement(words, startWithO);
// console.log(res1);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const getNewArray = ;

// const res = getNewArray([1, 2, 3, 4, 5]);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArray = ;

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 21 },
// ];

// const checkAge =;

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray;

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];

// const getNumber ;

// const res = getNumber(numbers);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 200, 5, 1000, 3];

// const sortedArray ;

// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortedArray;

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:===============task-8===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const ageSortedUsers ;

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-09=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const getAge ;

// const res = getAge(user, 25);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum ;

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-11=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const averageValue;

// const res = averageValue(arr);
// console.log(res);

// ! this
//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить повну інформацію про користувача.

// const user = {
//   userName: "Pol",
//   lastName: "Jonson",
//   age: 27,
//   email: "pol@gmail.com",

//   info() {
//     console.log(this);
//   },

//   modify(key, newValue) {
//     if (key !== "userName" && key !== "lastName") {
//       return "Key is not value";
//     }

//     if (newValue[0] === newValue[0].toUpperCase() && newValue.length >= 3) {
//       return this[key] = newValue;
//     }
//   }
// }
// user.info();

// console.log(user.modify("age", 32));
// user.info();

// const emploeer = Object.create(user);
// emploeer.department = "developer";
// console.log(emploeer);

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

// user.modify('firstName', 'Vlad');

//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

// user.addProperty('friends', [
//   {
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 32,
//     email: 'marysmith@hotmail.com',
//   },
//   {
//     firstName: 'Alex',
//     lastName: 'Johnson',
//     age: 45,
//     email: 'alex.johnson@yahoo.com',
//   },
//   {
//     firstName: 'Emily',
//     lastName: 'Davis',
//     age: 19,
//     email: 'emilydavis@gmail.com',
//   },
// ]);

// console.log(user);

//TODO:=========task-04=================
//  Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//   userName: 'Bob',
//   lastName: 'Lasso',
//   age: 50,
//   email: 'BodLasso@gmail.com',
// };

// // console.log(obj);
// user.info.call(obj);

//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

//TODO:=========task-06=================
// Виправте помилки, щоб код працював

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback) {
//   callback();
// }

// callAction(product.showPrice.bind(product));

//! class
//TODO:=================task-01=============================
// Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)

// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення.
// - `markAsPaid`() - позначає замовлення як оплачене
// - `addItem`() - який додає предмет замовлення до масиву "items"
// - `removeItem`() - який видаляє предмет замовленя з масиву "items"
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// Create menu items
// const item1 = new MenuItem('Burger', 10);
// const item2 = new MenuItem('Fries', 5);
// const item3 = new MenuItem('Drink', 2);

// Create an order
// const order = new Order(1);

// Add items to the order
// order.addItem(item1);
// order.addItem(item2);
// order.addItem(item3);

// Calculate the total and mark the order as paid
// const total = order.calculateTotal();
// order.markAsPaid();

// console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
// console.log(`Is paid: ${order.isPaid}`);
