//---------------------------------------------------------------------------------

/// 1.ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ ТА ОПЕРАТОР НУЛЬОВОГО ЗЛИТТЯ  (??)
//1.1
// const incomingValue = 5;
// const result = incomingValue + Number('qwerty'); // NaN
// console.log(result);
// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value); //10

//1.2 ??
// const incomingValue = 5;
// let test = 0;

// const value = test ?? 'some'; // коли потрібно повернути нуль ?? працює з  null і undefined
// console.log(value);

//1.3 ||
// const incomingValue = 5;
// let test = 0;

// const value = test || 'some'; // 0 // бо || працює з нулем і ще 5 значеннями фолс
// console.log(value);

///2.

// let weight = '88,3';
// let height = '1.75';
// weight = Number(weight.replace(',', '.')); // ченінг - метод на методі
// height = +height; // приводить до числа // унарний плюс
// // const bmi = weight / Math.pow(height, 2);
// const bmi = Number((weight / height ** 2).toFixed(1)); // піднесення до степеня
// console.log(bmi); // 28.8

///promt

// const message = 'введите число';
// let quantity = Number(prompt(message)); // промт повертає рядок
// // quantity = Number(quantity); // перетворюємо в число результат промта
// console.log(quantity);
// console.log(typeof quantity);

//

//parceInt - parseFloat
// let years = '25yers';
// let result = Number.parseInt(years);
// console.log(result);
// /////
// let weight = '25.3kg';
// let conseqvent = Number.parseFloat(weight);
// console.log(conseqvent);

// //// toFixed

// const salary = 125.6185444;
// let fin = Number(salary.toFixed(0)); //126 // повертає рядок
// // fin = Number(fin); // привели до числа
// console.log(fin);

//Nan

// let quantity = '30';
// let value = 'its just a text';
// console.log(Number(value));

//Math

// const base = 2;
// const power = 5;
// // const result = Math.pow(base, power);
// console.log(base ** power);
// console.log(Number(Math.sqrt(200).toFixed(2))); // Math.sqrt - квадратний корінь

/* ЗАДАЧА 1. Написати скрипт який просить внести число і степень, а потім вираховує його і результат виводить в консоль*/

// let base = prompt('Enter your number');
// base = Number(base);
// console.log(base);

// let power = prompt('Give me your power');
// power = Number(power);
// console.log(power);

// // const result = Math.pow(base, power);
// // console.log(result);

// const result = base ** power;
// console.log(result);

//випадкові числа

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);
// // console.log(Math.round(result));
// console.log(result);

//випадкове значення з  масиву // рандомна зміна кольору боді

// const colors = ['blue', 'yellow', 'pink', 'green', 'purple', 'orange'];

// const max = colors.length - 1;
// const min = 0;
// const result = Math.round(Math.random() * (max - min) + min);
// const color = colors[result];
// console.log(color);

// document.body.style.backgroundColor = color;

//нормализация

// const brand = prompt('Enter your brand');
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

/// вариант 2

// let brand = 'saMSUnG';
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// поиск в строке // проверка на спам

// const block1 = 'spam';
// const block2 = 'sales';

// const str1 = 'gtjgrtijg grmkjg rgfkjrg spam';
// const str2 = 'gtjgrtijg grmkjg rgfkjrg SALES';
// const str3 = 'gtjgrtijg grmkjg rgfkjrg';

// console.log(str1.includes(block1));
// console.log(str1.includes(block2));

// console.log(str2.includes(block1));
// console.log(str2.toLowerCase().includes(block2)); //якщо великі літери

// console.log(str3.includes(block1));
// console.log(str3.includes(block2));

//ЗАДАЧі

//1. Скрипт входження числа в певний проміжок________________________

//до х1 //менше
//после х2 //більше
//от х1 до х2
//до х1 чи після х2

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок після ${x2}?`, number > x2);
// console.log(`Число ${number} попадает в отрезок від ${x1} до ${x2}?`, number > x1 && number < x2);
// console.log(
//     `Число ${number} попадает в отрезок до ${x1} чи після ${x2}?`,
//     number < x1 || number > x2
// );

//2. Напиши скрипт який провіряє можливість написати людині. Для цього користувач повинен бути другом/онлайн/без режиму не турбувати__________________________

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd; // не включений
// console.log('Можна відкрити чат?', canOpenChat);

//3 перевірити доступ по підписці до контенту , якщо vip / pro  - то доступ відкритий_______________________________

// const sub = 'free';

// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть ли доступ к контенту', canAccessContent);

///4.покупка в магазині // оплата і перевірка балансу________________________

//моє рішення

// let balance = 10000;
// const payment = 2000;
// let message;
// const result = balance - payment;

// if (payment <= balance) {
//     message = `Thank you for your purchase. You have ${result} credits yet`;
// } else {
//     message = `Not enought money, you have only ${balance} credits but you ordered for the amount ${payment}`;
// }
// console.log(message);

//репета

// console.log(`Общая стоимость заказа ${payment}`);
// if (payment <= balance) {
//     balance -= payment;
//     //balance = balance - payment
//     console.log('Все хорошо, снимаем деньги');
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('Не достаточно денег');
// }
// console.log('Операция завершена');

//5. Скрипт  витрачених грошей і вид підписки та знижка/скидка/ відсоток від суми__________________________________________

//від 100 - 1000 - бронза скидка 2 % = 0.02
//від 1000 - 5000 - серебряний партнер скидка  5% = 0.05
// якщо більше 50000 - золотий скидка 10% = 0.1
//менше 100 - не партнер скидки немає

// [1,5) = 1,2,3,4 - включно з 1 і без 5

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('бронза скидка 2 %');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('серебряний партнер скидка  5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('золотий скидка 10%');
//     discount = 0.1;
// } else {
//     console.log('скидки нема');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount; // скидка
// console.log(`Оформляем [заказ] на суму ${payment} со скидкой ${discount * 100}%`); //[] - динамическое значение
// totalSpent += payment;
// console.log(`Общая сума потраченного в магазине ${totalSpent}`);

//7. Знайти найбільше та найменше число в масиві (не до кінця) ____________________

// function heightAndLow(str) {
//     const num = str.split(' ');

//     const max = Math.max(...num);
//     const min = Math.min(...num);

//     return `${max} and ${min}`;
// }
// console.log(heightAndLow(1, 7, 8, 20, 6));

// Change code below this line

// const str = 'hello world';
//___________________________________________________________________________________
//1. години та хвилини //якщо немає хвилин виводити одні години // minutes > 0 можна не ставити бо нуль і так дасть фолс__________________________

// const hours = 14;
// const minutes = 3;
// let timeStr;

// if (minutes) {
//     console.log(`${hours} g ${minutes} xv`);
// } else {
//     console.log(`${hours} g`);
// }
//2. Вивести нуль / додтнє число / негативне число // перевірка на нуль_________________________

// const userInput = Number(prompt('Введіть число'));
// if (!userInput) {
//     console.log('Це нуль');
// } else if (userInput > 0) {
//     console.log('Позитивне число');
// } else {
//     console.log('Негативне число');
// }

//// парні / непарні

// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2 === 0) {
//     console.log('парне');
// } else {
//     console.log('not');
// }

//// аналог

// const userInput = Number(prompt('Введіть число'));
// if (!(userInput % 2)) {
//     console.log('парне');
// } else {
//     console.log('not');
// }

//ще більше оптимізували

// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2) {
//     console.log('not');
// } else {
//     console.log('парне');
// }

//тернарний
// const userInput = Number(prompt('Number'));
// console.log(userInput % 2 ? 'not' : 'yes');

///як обрати нуль // знайти нуль

//некоректний варіант

// if (0) {

// } else {
//     console.log('zero');
// }

// // вірний варіант

// if (!0) {
//     console.log('zero');
// }

//3. Порівняти числа і вивести в консоль найбільше число якщо вони більше 100 , і додати їх якщо менше ____________________________________________

// const a = 120;
// const b = -25;

// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }

///тернарний

// const a = 20;
// const b = 370;

// if (a > 100 && b > 100) {
//     console.log(a > b ? a : b);
// } else {
//     console.log(b + 512);
// }

////4.перевірка чи закінчується рядок цим символом, якщо ні, то потрібно його додати___________________________________

// let link = 'https://my-sites.com/about';
// if (!link.endsWith('/')) {
//     link += '/';
// }
// console.log(link);

///5, якщо немає такого символу на кінці то, то додай якщо рядок включає май сайт______________________________

//мій варіант

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//     if (!link.includes('my-site')) {
//         link += '/';
//     }
// }
// console.log(link);

//варіант артема

// let link = 'https://my-sites.com/about';

// if (!link.endsWith('/') && link.includes('com')) {
//     link += 'hello';
// }
// console.log(link);

///тернарний

// let link = 'https://my-sites.com/about';
// console.log(link.includes('com') && !link.endsWith('/') ? (link += '/') : link);

//6. скільки лишилось днів до дедлайну_________________________________________

// const daysUntilDeadline = 0;
// //якщо приходить нуль то опрацьовуємо інверсію
// if (!daysUntilDeadline) {
//     console.log('today');
// } else if (daysUntilDeadline === 1) {
//     console.log('tomorow');
// } else if (daysUntilDeadline === 2) {
//     console.log('the next day after tomorow');
// } else if (daysUntilDeadline >= 3) {
//     console.log('date in future');
// } else {
//     console.log('are you lost');
// }

//switch

// const dayUntilDeadline = -1;

// if (dayUntilDeadline >= 0) {
//     switch (dayUntilDeadline) {
//         case 0:
//             console.log('today');
//             break;
//         case 1:
//             console.log('tomorow');
//             break;
//         case 2:
//             console.log('the next day before');
//             break;
//         default:
//             console.log('date in future');
//     }
// } else {
//     console.log('are you lost');
// }

//7. виведи у консоль браузера число  від мін до макс яке кратне 5_________________

// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1) {
//     if (!(i % 5)) {
//         console.log(i);
//     }
// }

///щоб не писати і % 5 === 0 ми приводимо до інверсії!!!!!!

// if (!(i % 5))

///8. розгалудження та ввід пароля________________________________

// const login = prompt('Тут має бути логін');
// // console.log(login);
// // login === null ----- !login
// if (!login) {
//     console.log('cancel');
// } else if (login === 'admin') {
//     const password = prompt('Тут має бути пароль');
//     console.log(password === 'i admin' ? 'hello' : alert('wrong password'));
// } else {
//     alert('i dont know you');
// }
