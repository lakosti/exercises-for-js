//скорочений буль !! + інверсія  !

// const boo = !!!'2';
// console.log(boo);

// //приведення до числа --- +

// let fix = '30';
// console.log(typeof fix); // string
// fix = +fix;
// console.log(typeof fix); //number

// toFixed ------повертає рядок
//prompt --------повертає рядок

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

//1. Скрипт входження числа в певний проміжок

//до х1
//после х2
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

//2. Напиши скрипт який провіряє можливість написати людині. Для цього користувач повинен бути другом/онлайн/без режиму не турбувати

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd; // не включений
// console.log('Можна відкрити чат?', canOpenChat);

//3 перевірити доступ по підписці до контенту , якщо vip / pro  - то доступ відкритий

// const sub = 'free';

// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть ли доступ к контенту', canAccessContent);

///покупка в магазині // оплата і перевірка балансу

let balance = 10000;
const payment = 200;
let message;
const result = balance - payment;

if (payment <= balance) {
    message = `Thank you for your purchase. You have ${result} credits yet`;
} else {
    message = `Not enought money, you have only ${balance} credits but you ordered for the amount ${payment}`;
}
console.log(message);
