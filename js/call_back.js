//єдиний варіант зробити щось потім або щось за умовою це функція - колбек
//for each (перебирає елементи масиву завжди з початку)  не працює break

// //функція вищого порядку
// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback); // це посилання на функцію
//     callback(100); // і це визов fnB функції
// };
// //сallback функція
// const fnB = function (number) {
//     console.log('це лог при визові fnB', number);
// };
// fnA('message', fnB);

////перевикористання функції
// function doMath(a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// function add(x, y) {
//     return x + y;
// }
// function sub(x, y) {
//     return x - y;
// }

// doMath(2, 3, add);
// doMath(10, 2, sub);

//інлайнові функції / анонімні // та яка передається як колбек // одноразові

// doMath(10, 2, function (x, y) {
//     return x - y;
// });
// doMath(2, 3, function (x, y) {
//     return x + y;
// });

//
// function myltiply(a, b, callback) {
//     const sum = callback(a, b);
//     console.log(sum);
// }
// function call(a, b) {
//     return a * b;
// }
// myltiply(2, 5, call);

//ПРИКЛАДИ ВИКОРИСТАННЯ

//tack 1 відкладений виклик: реєстрація подій//відкладена функція // при такій події виконай цю функцію_______________________________

// const buttonRef = document.querySelector('.js-btn');

// const handleBtnClick = function () {
//     console.log('клик по кнопке' + Date.now());
// };

// //callback - функція виконається при якомусь собитію
// buttonRef.addEventListener('click', handleBtnClick); //слушатель собитій (1 параметр - по якому собитію, 2-й що саме робить(функція))

// //tack 2 get the user`s location //отримати геолокацію__________________________________

// const onGetPossitionSuccess = function (possition) {
//     console.log(possition);
// };

// const onGetPossitionError = function (error) {
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(onGetPossitionSuccess, onGetPossitionError);

/// tack 3 робота з таймером // затримка ______________________

// function callback() {
//     console.log('Через 3 секунди внутри колбека в таймауте');
// }
// console.log('В коде перед таймаутом'); //1 появиться
// setTimeout(callback, 2000); //3
// console.log('В коде после таймаута'); //2

//tack 4 робота з бекендом _________________________________________

// const onRequestSuccess = function (response) {
//     console.log('Виклик функції після успішної відповіді від бекенда');
//     console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.join())
//     .then(onRequestSuccess);

///////
//замикання (функція повертає іншу функцію) -- коли змінні та тіло функції доступно поза її межами
//filter
//можна відфільтрувати будь який масив і за будь якою умовою

// const filter = function (array, test) {
//     const filtredArray = [];

//     for (const item of array) {
//         console.log(item);
//         const passed = test(item);
//         if (passed) {
//             filtredArray.push(item);
//         }
//     }
//     return filtredArray;
// };

// const callback1 = function (value) {
//     return value >= 3; //пишемо логіку перевірки
// };

// // const callback2 = function (value) {
// //     return value <= 4;
// // };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1); // результат

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
//     return value <= 4;
// });
//стрелочна функція
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], value => value <= 4;
// console.log(r2);

// //ЗАДАЧА 1 фільтрація масиву об'єктів _____________________________________
//____можна перевикористовувати код нижче
// const filter = function (array, test) {
//     const filtredArr = [];

//     for (const fruit of array) {
//         const passed = test(fruit);

//         if (passed) {
//             filtredArr.push(fruit);
//         }
//     }
//     return filtredArr;
// };
// //___
// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// function callback3(fruit) {
//     return fruit.quantity >= 150;
// }
// const r3 = filter(fruits, callback3);
// console.log(r3);

//замикання (функція повертає іншу функцію) -- змінні та тіло функції доступно поза її межами ____________________________________

// function fnA(parameter) {
//     const innerVar = 'значення внутрішної змінної';

//     function innerFunction() {
//         console.log(parameter); //лише ці змінні доступні
//         console.log(innerVar);
//         console.log('це виклик innerFunction');
//     }
//     return innerFunction;
// }
// const fnB = fnA(555);
// fnB();
// console.log(fnB);

//Задача 2 приклад замикання готовка_________________________________

//звичайна функція

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовить ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'котлета');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'кофе');
// makeDish('Poly', 'омлет');
// makeDish('Poly', 'суп');

//замикання

// function makeSheff(name) {
//     function makeDish(dish) {
//         console.log(`${name} готовить ${dish}`);
//     }
//     return makeDish;
// }

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

// mango('котлети');
// poly('чай');
// poly('суші');
// mango('pizza');

//Задача 3 округлятор _____________________________________

// const floatingPoint = 3.45698;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); //3.46

// console.log(someInt);
// console.log(withDecimals);

//робимо функцію

// function roundNumber(num, places) {
//     return Number(num.toFixed(places));
// }

// console.log(roundNumber(52.6658, 3));
// console.log(roundNumber(32.68, 1));

//робимо зациклення

// function rounder(places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// }
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);
// const rounder4 = rounder(4);

// console.log(rounder2(26.548));
// console.log(rounder3(86.5458));
// console.log(rounder4(46.66648));

//Задача 4 захист приватних даних (зарплат) приватні змінні__________________________________

// function salaryManage(employeeName, baseSalary = 0) {
//     let salary = baseSalary; // не можна змінити цю змінну вона замкнена

//     function changeBy(amount) {
//         salary += amount;
//     }
//     return {
//         reise(amount) {
//             if (amount > 1000) {
//                 console.log('Error');
//             }
//             changeBy(amount);
//         },
//         lower(amount) {
//             changeBy(amount);
//         },
//         current() {
//             return `Your salary ${employeeName} - ${salary}`;
//         },
//     };
// }
// const salaryCount = salaryManage('Mango', 5000);
// console.log(salaryCount.reise(1000));
// console.log(salaryCount.reise(2000));

// console.log(salaryCount);
// console.log(salaryCount.current());

// другой пример

// function myLock() {
//     let value = 0;

//     function add(num) {
//         value += num;
//     }

//     return {
//         add,
//         getValue() {
//             return value;
//         },
//     };
// }
// const lock = myLock();
// console.log(lock);
// console.log(lock.getValue());
// lock.add(10);
// console.log(lock.getValue());

/////////////////////////ARTEM///////////////////////////

//ЗАДАЧА 1 калькулятор_______________________

// const arr = [2, 6, 1, 7, 3];

// //функція лише для перебору
// function each(arr, callback) {
//     let total = arr[0];

//     for (let i = 1; i < arr.length; i += 1) {
//         total = callback(total, arr[i]);
//     }
//     return total;
// }

// // функція для якоїсь певної дії
// function add(first, second) {
//     return first + second;
// }
// function substract(first, second) {
//     return first - second;
// }

// console.log(each(arr, add)); //add - це наш другий параметр - колбек
// console.log(each(arr, substract));

//Задача 2 ____________________________
// Створити функцію createProduct(obj, callback) -яка приймає об'єкт товару без id а також колбек, Функція ств об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому ств об'єкт
//logProduct (product) колбек приймає об'єкт продукту і логуючий його в консоль
//logTotalPrice(product) - колбек що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj,
//     };
//     callback(product);
//     console.log(product);
// }

// function logProduct(obj) {
//     console.log(`Product ${obj.name}`);
// }
// function logTotalPrice({ price, quantity }) {
//     //деструкт
//     console.log(`Total price: ${price * quantity}`);
// }

// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'peach', price: 40, quantity: 5 }, logTotalPrice);

//ЗАДАЧА 3 ТРАНЗАКЦІЯ__________________________________________

// const TRANSATION_LIMIT = 1000;

// const account = {
//     userName: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSATION_LIMIT) {
//             onError(`Error you TRANSATION_LIMIT is ${TRANSATION_LIMIT} `);
//             return; // якщо залогували помилку зразу виходимо
//         } else if (this.balance < amount) {
//             onError(`Not enought money `);
//             return;
//         }
//         this.balance -= amount;
//         onSuccess(`Succesfully ${amount}, balance ${this.balance}`);
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > `Error you TRANSATION_LIMIT is ${TRANSATION_LIMIT} `) {
//             onError(`Your limit  ${TRANSATION_LIMIT}`);
//             return; // якщо пропустило ретерн то добавимо на баланс
//         } else if (amount <= 0) {
//             onError(`Nice try bro, but you amount must be more than 0`);
//             return;
//         }
//         this.balance += amount;
//         onSuccess(`Operation succesffuly, you balance ${this.balance}`);
//     },
// };

// function handleSuccess(message) {
//     console.log(`Success! ${message}`);
// }

// function handleError(message) {
//     console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//задача 4 помножити кожне число на 2 або відняти 10 чи додати 5___________________________________________

// function each(array, callback) {
//     const newArr = [];
//     for (const item of array) {
//         newArr.push(callback(item));
//     }
//     return newArr;
// }

// console.log(
//     each([2, 3, 4], function (item) {
//         return item - 10;
//     })
// );
// console.log(
//     each([2, 3, 4], function (item) {
//         return item * 2;
//     })
// );
// console.log(
//     each([2, 3, 4], function (item) {
//         return item + 10;
//     })
// );

// Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// }

// function error(name) {
//     console.log(`Error this customer is not find ${name}`);
// }
// // Функція вищого порядку
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
// }

// registerGuest('Mango', greet);
// registerGuest('Poly', error);

///////////////////////////////////////////////////////////////////

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////
