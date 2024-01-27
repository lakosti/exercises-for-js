// перевірка на унікальні елементи   ===== new Set(arr)
// const getUniqueCourses = arr.filter((course, idx, arr) => arr.indexOf(course === idx));
// console.log(getUniqueCourses(['html', 'js', 'css', 'js']));
//array.lenght = 0 --- очищення масиву//очистити масив

//console.log([1, 2, 3] + [1, 2, 4]); ==== 1,2,31,2,4

//псевдомасив

// function arg() {
//     console.log(arguments); //псевдомасив
//     const args = Array.from(arguments); // перетворюємо псевдомасив в масив

//     console.log(args);
// }

//справжній масив якщо різна кількість параметрів

// function arg(...args) {
//     console.log(args);
// }

// arg(1, 2, 3);
// arg(1, 2, 3, 4, 5);
// arg(1, 2, 3, 4, 5, 6, 7, 8, 9);

///// розбираємо вкладений масив ///фор

// const arr = [1, 'hello', null, true, [1, 2, 3]];

// for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i];
//     if (Array.isArray(item)) {
//         for (let j = 0; j < item.length; j += 1) {
//             console.log(item[j]);
//         }
//         continue;
//     }
//     console.log(arr[i]);
// }

// ///перебрати масив через вайл

// const arr = [1, 'hello', null, true, [1, 2, 3]];
// let i = 0;
// while (i < arr.length) {
//     if (typeof arr[i] === 'string') {
//         arr[i] = false;
//     }
//     i += 1;
// }
// console.log(arr);

// const lastIndex = arr.length - 1;
// console.log(lastIndex); //3

// console.log(arr[2]); // aple

// arr[0] = 'first'; // перезапись первого елемента масива
// console.log(arr);

// console.log([1, 2, 3] === [1, 2, 3]); // false

//for перебрати масив

// const arr = ['max', 'igor', 'oleg', 'dima'];
// console.table(arr);

// for (let i = 0; i < arr.length; i += 1) {
//     arr[i] += '-name';
// }
// console.table(arr);

// for of // перебрати масив

// const names = ['max', 'igor', 'oleg', 'dima'];

// for (const name of names) {
//     console.log(name);
// }

//ЗАДАЧА 1 порахувати суму покупок в магазині_____________________
//--------------алгоритм---------
//1 перебрати масив
//2 написати змінну де буде зберігатися сума
//3 кожен елемент додати до тотал

// const cart = [54, 28, 105, 70, 92, 17, 120];

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log('total :', total);

/// переписать на фор оф

// for (const element of cart) {
//     total += element;
// }
// console.log('total :', total);

//добавить 10% налога

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);

// ЗАДАЧА 2 Сума всіх парниx чисел_______________________

//алгоритм  //змінна тотал // перебрать масив і якщо парне то додати до тотал

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];
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
//     // console.log(numbers[i]); // перебір масиву

//     if (!(number % 2)) {
//         console.log(`${number} - pair`);
//         total += number;
//     }
// }
// console.log('total :', total);

//зворотня логіка (більш вірне написання)_________________________

// for (const num of numbers) {
//     if (num % 2) {
//         // console.log('This iteration skip', num); // непарні числа // пропускаємо
//         continue;
//     }
//     // console.log(num);
//     total += num;
// }
// console.log(total);

//ЗАДАЧА 3 Пошук логіна________________________________________

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// let message = `User ${loginToFind} not found`; // пишемо значення для більшості

///1.варіант репети

// const message = logins.includes(loginToFind) ? 'user found' : 'user not found';
// console.log(message);

//2.через цикл фор

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (loginToFind.includes(login)) {
//         message = `User ${loginToFind} found`;
//         break;
//     }
// }
// console.log(message);

///3.варінт репети (якщо дорівнює то брейк, якщо не дорівнює то контінью)

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = 'user found';
//         break; //якщо знайдено то цикл переривається
//     }
// }
// console.log(message);

///4.через фор оф //for of

// for (const login of logins) {
//     if (loginToFind.includes(login)) {
//         message = `User ${loginToFind} found`;
//         break;
//     }
// }
// console.log(message);

//ЗАДАЧА 4 пошук найменшого числа в масиві_______________________________________

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const num of numbers) {
//     if (num < smallestNumber) {
//         smallestNumber = num;
//     }
// }
// console.log('smallestNumber :', smallestNumber);

//ЗАДАЧА 5 Поєднати / з'єднати елементи масива в строку__________________________

// const friends = ['Mango', 'Poly', 'Kiwi', 'Alex'];

// // олдскульний варіант

// let str = '';
// for (const friend of friends) {
//     str += friend + ',';
// }
// str = str.slice(0, str.length - 1);
// console.log(str);

// //правильний варіант

// const str = friends.join(', '); // масив перетворює в строку
// console.log(str);

//ЗАДАЧА 6 змінити регістр // інверсія букв______________________________

// const str = 'JavaScript';

// //олдскульний варіант

// const letters = str.split(''); // перетворюємо в масив
// console.log(letters);
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

//ЗАДАЧА 7 скрипт рахує суму елементів двух масивів__________________________

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2, [90, 70]);

// for (const num of numbers) {
//     total += num;
// }
// console.log(total);

//ЗАДАЧА 8 Добавляємо і удаляємо карточки__________________________________

// const cards = ['card - 1', 'card - 2', 'card - 3', 'card - 4', 'card - 5'];

// console.table(cards);

//видалення по індексу
// const cardToRemove = 'card - 3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.table(cards);

//додавання елемента
// const cardToInsert = 'card - 6';
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

//обновлення елемента
// const cardToUpdate = 'card - 4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, 'new action');
// console.log(cards);

////////////////////////////////////////////////////////

// let arr = ['1', '2', '3', 'p'];
// const lastIndx = arr.length - 1; // 3 індекс ост елемента
// const lastElement = arr[lastIndx]; //сам останній елемент
// console.log(lastElement);
// // console.log(Array.isArray(arr));

// const arr = ['hello', null, true, 15];

// for (let i = 0; i < arr.length; i += 1) {
//     // let item = arr[i];

//     if (arr[i] === 15) {
//         arr[i] = 'love'; // заміна елемента масива
//     }
// }
// console.log(arr);

//ЗАДАЧА 9 Знайти всі співпадіння в масиві _________________________________

// const arr = ['a', 'b', 'c', 'b'];
// let counter = 0;

// for (const item of arr) {
//     if (item === 'b') {
//         counter += 1;
//     }
// }
// console.log(counter);

//ЗАДАЧА 10 видалити з масиву елементи що не є типом даних number________________________________________________________

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

//ЗАДАЧА 13 зворотній порядок літер_______________________________________

// const str = 'Welcome to the future';
// const SEPARATOR = '';
// const result = str.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(result);

//ЗАДАЧА 14 замінити числа в порядку зростання____________________________________

// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//     const currentEl = numbers[i];
//     const prevEl = numbers[i - 1]; // попередній елемент менше на 1
//     if (currentEl - prevEl !== 1) {
//         numbers[i] = prevEl + 1;
//     }
//     //якщо не по порядку
//     // if (currentEl <= prevEl) {
//     //     numbers[i] = prevEl + 1;
//     // }
// }
// console.log(numbers);

/////////////////////////

// const str = 'hello world';
// console.log(str.toLowerCase().replaceAll('', '-')); //-h-e-l-l-o- -w-o-r-l-d-
// console.log(str.toLowerCase().split('').join('-')); //h-e-l-l-o- -w-o-r-l-d

//ЗАДАЧА 15 перебрати масив та порядковий номер______________________

// const arr = ['first', 'second', 'third', 'four', 'five'];
// for (let i = 0, n = 1; i < arr.length; i += 1, n += 1) {
//     console.log(`${n} - ${arr[i]}`);
// }

//ЗАДАЧА 16 подвійна умова  в циклі вивести номер тел на імя користувача__________________________________________________

// let names = 'jacob, alex, olleg, ivan, thtyyhy';
// let numbers = '111111111, 000000000, 222222222, 333333333';
// names = names.split(',');
// numbers = numbers.split(',');
// // console.log(names);
// // console.log(numbers);

// for (let i = 0; i < names.length, i < numbers.length; i += 1) {
//     console.log(`${names[i]} - ${numbers[i]}`);
// }

//ЗАДАЧА 17 відсортувати в алфавітному порядку__________________________________

// const langs = ['c++', 'python', 'bjava', 'ahaskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0]; //якщо умова тру то вирізаємо слово
//         //щоб достати слово з масиву використовуємо індекс [0]
//         langs.unshift(result); //і пушимо на перед
//     }
// }
// console.log(langs);

//ЗАДАЧА 18 знайти найдовше слово в рядку або відібрати декілька найдовших_________________________________

// function findLongestWord(string) {
//     const str = string.split(' ');
//     let biggestWord = str[0];
//     const allWords = [];

//     for (const item of str) {
//         if (item.length > biggestWord.length) {
//             biggestWord = item;
//         }
//     }

//     for (const item of str) {
//         if (item.length === biggestWord.length) {
//             allWords.push(item);
//         }
//     }
//     return allWords;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog swimmi'));
// // console.log(findLongestWord('Google do a roll'));
// // console.log(findLongestWord('May the force be with you'));

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////
