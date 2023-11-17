//обчислювальні властивості

// const inputName = 'color';
// const colorPickerData = {
//     color: 'red', //color: red
//     [inputName]: 'red', // color: red
// };
// console.log(colorPickerData);

//пербір об'єкту

// for (const product of products) {
//     // console.log(product); // один об'єкт
//     for (const key in product) {
//         // console.log(key); // ключі об'єкту
//         // console.log(product[key]); // властивість / значення об'єкту
//         if (propName === key) {
//             values.push(product[key]); //пушемо значення ключа
//         }
//     }
// }

//дістаємо значення з імені
// console.log(arr[0]); -- John: 300  -- перший елемент
//console.log(arr[0][1]); -- 300 -- саме значення

///перевірити чи є ключ в об'єкті

//obj.hasOwnProperty(key)
//key in obj

// for (const product of products) {
//     if(argument in product){
//     push()
// }

//===================== методи об'єкту ========

// const test = 10;
// const test2 = 15;
// const user = {
//     name: 'alex',
//     age: 25,
//     languages: {
//         html: true,
//         css: false,
//         js: true,
//         react_native: false,
//     },
//     sayHello() {
//         console.log(`my name ${this.name}`);
//     },
//     iKnow() {
//         // const keys = Object.keys(this.languages);
//         // const values = Object.values(this.languages);
//         // const entires = Object.entries(this.languages);
//         // console.log(keys);
//         // console.log(values);
//         // console.log(entires);

//         //////////щоб відкинути функції в методі
//         const keys = Object.keys(this);
//         // console.log(keys);
//         for (const key of keys) {
//             if (typeof this[key] === 'function') {
//                 continue;
//             } else {
//                 console.log(key);
//             }
//         }
//         // 1 // відбирає всі власні ключі
//         // const keys = Object.keys(this.languages);
//         // for (const key of keys) {
//         //     if (this.languages[key]) {
//         //         console.log(key);
//         //     }
//         // }
//         // 2 // повертає нам всі значення
//         // const keys = Object.values(this.languages);
//         // console.log(keys);
//         // 3 // повертає масив елементів //двухвимірний масив
//         // const entires = Object.entries(this.languages);
//         // for (const key in this.languages) {
//         //     if (this.languages[key]) {
//         //         console.log(key);
//         //     }
//         // }
//     },
// };
// user.iKnow();

// const user2 = Object.create(user); //
// user2.name = 'den';

// user2.sayHello();
// user.sayHello();

////////ПРАКТИКА

//ЗАДАЧА 1 перебрать об'єкт (деструктурування)_________________________________________

// const feedback = {
//     good: 5,
//     heutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// // 1 -й варіант Object.keys() -- вертає масив ключів

// // const keys = Object.keys(feedback); //отримати масив ключів з елемента фідбек

// // console.log(keys);
// // //потім просто перебераємо як звичайний масив

// // for (const key of keys) {
// //     console.log(key);
// //     console.log(feedback[key]);
// //     totalFeedback += feedback[key];
// //     console.log(totalFeedback); //всього відгуків
// // }

// // 2 -й варіант  Objects.values() -- вертає масив значень

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     totalFeedback += value;
//     console.log(totalFeedback);
// }

//ЗАДАЧА 2 перебрати масив об'єкта_______________________________________

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// friends.oplrr = 555; // доббавить в останній елемент а якщо через цикл, то добавить кругом
// for (const friend of friends) {
//     friend.ths = 5555;
// }
// console.table(friends);

//задача 2.1 знайти друга по імені(заміна includes в складних типах даних)_________________________

// function findFriendByName(allFriends, name) {
//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.name);

//         if (friend.name === name) {
//             return 'true';
//         }
//     }
//     return 'false';
// }
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

//задача 2.2 отримати всі імена_______________________________________________

// function getAllNames(allFriends) {
//     const newArr = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);
//         newArr.push(friend.name);
//     }
//     return newArr;
// }
// console.log(getAllNames(friends));

//задача 2.3 отримати імена лише тих хто онлайн__________________________________

// function getOnlineFriends(allFriends) {
//     const newArr = [];
//     for (const friend of allFriends) {
//         if (friend.online) {
//             // === true можна не ставити оскільки if і так виконується лише при тру, a friend.online і так == true
//             newArr.push(friend.name);
//         }
//     }
//     return newArr;
// }
// console.log(getOnlineFriends(friends));

//задача 2.4  отримати імена тих хто оффлайн___________________________________

// function getOfflineFriends(allFriends) {
//     const offlineFriends = [];

//     for (const friend of allFriends) {
//         if (!friend.online) {
//             offlineFriends.push(friend.name);
//         }
//     }

//     return offlineFriends;
// }
// console.log(getOfflineFriends(friends));

//задача 2.5 яка відбирає і офлайн і онлайн (повернення об'єктів)__________________

// function getFriendByOnlineStatus(allFriends) {
//     const friendByStatus = {
//         online: [],
//         offline: [],
//     };
//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendByStatus.online.push(friend.name);
//             continue;
//         }
//         friendByStatus.offline.push(friend.name);

//         //тернарний
//         // const key = friend.online ? 'online' : 'offline';
//         // friendByStatus[key].push(friend);
//     }
//     return friendByStatus;
// }
// console.log(getFriendByOnlineStatus(friends));

//ЗАДАЧА 3 дізнатися кількість властивостей об'єкта___________________________

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// };

// console.log(Object.keys(x).length);

//ЗАДАЧА 4 КОРЗИНА ТОВАРІВ ___________________________________________________
// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             console.log(item);

//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };
//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this; // щоб прибрати this

//         // for (let i = 0; i < this.items.length; i += 1) {
//         //     const item = this.items[i];

//         //     if (productName === item.name) {
//         //         console.log('find this product', productName);
//         //         console.log('index', i);
//         //         items.splice(i, 1);
//         //     }
//         // }

//         //деструктуризація

//         for (let i = 0; i < items.length; i += 1) {
//             const { name } = items[i];

//             if (productName === name) {
//                 console.log('find this product', productName);
//                 console.log('index', i);
//                 items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = []; // очищаем все
//     },
//     countTotalPrice() {
//         const { items } = this; //деструктирізація // прибрали this //this.items
//         console.log(items);
//         let total = 0;

//         // for (const item of items) {
//         //     console.log(item);
//         //     total += item.price;
//         // }
//         //заміняємо на деструктурізацію

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }

//         return total;
//     },
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };
// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'raspberry', price: 60 });
// cart.add({ name: 'raspberry', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItems());
// console.log('total:', cart.countTotalPrice());
// cart.remove('lemon');
// // console.table(cart.getItems());
// // cart.clear();
// // console.log(cart.getItems());

// // const getProductTotalPrice = function (product) {
// //     return product.price * product.quantity;
// // };

// //деструктуризація (кількість на ціну перемножене)

// const getProductTotalPrice = function ({ price, quantity }) {
//     return price * quantity;
// };
// console.log(getProductTotalPrice(cart.items[2]));

// ----------------------АРТЕМА ЗАДАЧІ-----------------------------------

//ЗАДАЧА 5 маніпуляції з об'єктом // заміна даних // перебір об'єкту за допомогою keys and for of________________________________________

// const user = {
//     name: 'mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// user.skils = {
//     run: true,
// };//додавання об'єкта
// user.mood = 'happy'; //додали елемент
// user.hobby = 'skydiving';
// // user['premium'] = false; //або через значення
// const key = 'premium';
// user[key] = false; // або через змінну
// console.log(user);

// // const keys = Object.keys(user);
// // for (const key of keys) {
// //     console.log(user[key]);
// // }
// //for in // звертаємось до об'єкта
// for (const key in user) {
//     console.log(user[key]);
// }

//ЗАДАЧА 6 підсумовування // додавання зарплат співробітників //якщо зп немає то повинно бути нуль ________________________________________

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

//for in

// let sum = 0;
// for (const key in salaries) {
//     // console.log(salaries[key]);
//     sum += salaries[key];
// }
// console.log(sum);

//for of + values

// const values = Object.values(salaries);

// let sum = 0;
// for (const value of values) {
//     sum += value;
// }
// console.log(sum);

/// ЗАДАЧА перебрати масив об'єктів та по назві повернути суму____________________________________________________

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null;
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Engine'));

//ЗАДАЧА 7 написати функцію яка приймає масив об'єктів рахує та повертає загальну вартість каміння з таким ім'ям ціною та кількістью об'єкта_______________________________

// const stones = [
//     {
//         name: 'Smaraght',
//         price: 1300,
//         quantity: 4,
//     },
//     {
//         name: 'Diamond',
//         price: 2700,
//         quantity: 3,
//     },
//     {
//         name: 'Saphfire',
//         price: 400,
//         quantity: 7,
//     },
// ];

// function calcTotalPrice(stones, stoneName) {
//     // let sum = 0;
//     for (const stone of stones) {
//         // if (stone.name === stoneName) {
//         //     sum = stone.price * stone.quantity;
//         //     break;
//         // }
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//     }
//     // return sum;
//     return 'Empty';
// }
// console.log(calcTotalPrice(stones, 'yth'));

// EXAMPLE 7 якщо існує такий ключ повертає його значення // повернення значення ключів____________________________________________________________

// function getAllPropValues(propName) {
//     const values = [];

//     //перший варіант

//     // for (const product of products) {
//     //     if (product.hasOwnProperty(propName)) {
//     //         values.push(product[propName]);
//     //     }
//     // }

//     ////інший варіант

//     // for (const product of products) {
//     //     // console.log(product); // один об'єкт
//     //     for (const key in product) {
//     //         // console.log(key); // ключі об'єкту
//     //         // console.log(product[key]); // властивість / значення об'єкту
//     //         if (propName === key) {
//     //             values.push(product[key]); //пушемо значення ключа
//     //         }
//     //     }
//     // }

//     //ще один варіант

//     for (const product of products) {
//         propName in product ? values.push(product[propName]) : null;
//     }

//     return values;
// }

// // Приклад використання
// const products = [
//     { name: 'Radar', quantity: 4, price: 1300 },
//     { name: 'Scanner', quantity: 3, price: 2700 },
//     { name: 'Droid', quantity: 7, price: 400 },
//     { name: 'Grip', quantity: 9, price: 1200 },
// ];

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// EXAMPLE 8 - Комплексні завдання______________________________________________

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction); //заборона зміни
// // Transaction.DEPOSIT = 'asdfefjhhhhhhhhhhhhhrfe';
// // console.log(Transaction);

// /*
// // /*
// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount
// //  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{ id: 16, amount: 145, type: 'deposit' }],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             amount, //одноіменні ключі та значення //кількість грошей
//             type, // тип транзакцій //зняття / поповнення
//         };
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         if (amount <= 0) {
//             return 'Eror';
//         } //перевіряємо якщо сума менша нуля
//         const item = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.balance += amount;
//         this.transactions.push(item); // додаємо до історії транзакцій
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         //зняття готівки
//         if (amount > this.balance || amount <= 0) {
//             return 'Not enought money';
//         }
//         // item = this.createTransaction // ми ств змінну айтем для зберігання цього об'єкту
//         //     {
//         //         id: Date.now(),
//         //         amount,
//         //         type,
//         //     };
//         const item = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(item); // додаємо до історії транзакцій
//         this.balance -= amount; //віднімаємо кошти які зняли
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance;
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
//         return 'This transaction not exict';
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let sum = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sum += transaction.amount;
//             }
//         }
//         return sum;
//     },
// };

// account.deposit(1);
// account.deposit(1231);
// account.deposit(1431);
// account.withdraw(123);
// // console.log(account.getBalance());
// // console.log(account.getTransactionDetails(16));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

//ЗАВДАННЯ 9 доповнити функцію щоб вона повертала новий об'єкт  з доданими властивостями id та createAt а також list зі значенням default якщо немає такої властивості_________________________________________________

// function createContact(partialContact) {
//     return {
//         list: 'default', // якщо напишемо після спреда то у всіх буде значення default
//         ...partialContact, // спред // зібрали об'єкти
//     };
// }
// console.log(
//     createContact({
//         id: generateId(),
//         createdAt: new Date(),
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     })
// );

// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@mail.com',
//     })
// );

// //генеруємо id _____________
// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

//ЗАВДАННЯ 10 Написати функцію щоб вона повертала новий об'єкт із властивістю FullName замість firstName / lastName_________________________________________

//алгоритм
//1 розпакувати об'єкт
//2 дістати потрібні дані ( в даному випадку це first last)
//3 решту об'єкту зарестети
// 4 поєднати ці два елементи
// 5 зібрати об'єкт

// function transformUsername({ firstName, lastName, ...props }) {
//     console.log(props); // в даному випадку це рест (залишок)
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props, // розпилюємо // це вже spred // повераємо нашу решту даних
//     };
// }
// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     })
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@mail.com',
//         friendCount: 20,
//     })
// );

////ЗАДАЧА 11 Повертає суму кількості власних ключів у об'єкта_________________________________________________________________

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += [key].length;
//         }
//     }

//     // Change code above this line
//     return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//ЗАДАЧА 12 функція буде приймати 3 параметри та повертати/ формувати об'єкт покупки та суму_____________________________________________________________

// function createBasket(product, quantity, price) {
//     // const totalPrice = quantity * price;
//     //1 варіант
//     const basket = {
//         name: product,
//         quantity,
//         price,
//         totalPrice: quantity * price,
//     };
//     return basket;

//     //2 варінт буде краще
//     // return {
//     //     name: product,
//     //     quantity,
//     //     price,
//     //     totalPrice: quantity * price,
//     // };
// }

// const result = createBasket('pizza', 3, 120); // результат функції зберігаємо у змінну і далі можемо нею маніпулювати
// console.log(result);

// console.log(createBasket('apple', 13, 1200));

//ЗАДАЧА 13 функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди за один комп___________________________________________

// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Mattew: 120,
//     Ethan: 40,
//     David: 55,
// };
// function getTime(obj) {
//     // const countPlayers = Object.keys(obj)?.length; // отримуємо кількість ключів
//     // const values = Object.values(obj);
//     // console.log(values);
//     // let totalTime = 0;
//     // for (const value of values) {
//     //     totalTime += value;
//     // }
//     // console.log(totalTime);
//     // return `Count of players ${countPlayers}, average time ${totalTime / countPlayers}`;

//     //переписуємо на ентріес

//     const entries = Object.entries(obj);
//     let totalPrice = 0;
//     for (const entry of entries) {
//         console.log(entry);
//         totalPrice += entry[1];
//     }
//     console.log(totalPrice);
//     return `${entries.length} players - ${totalPrice / entries.length} average time`;
// }
// console.log(getTime(players));

//ЗАДАЧА 14 функція повертає імена юзерів у яких є дана книга // порахувати  вік в юзерів (перебрати масив об'єктів)__________________________________

// const friends = [
//     {
//         name: 'Anna',
//         books: ['Bible', 'Harry Potter'],
//         age: 21,
//     },
//     { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//     { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//     {
//         name: 'Oleksii',
//         books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//         age: 26,
//     },
// ];
// function getUsers(arr, bookName) {
//     // let users = '';
//     let users = [];
//     for (const user of arr) {
//         if (user.books.includes(bookName)) {
//             // users += `${user.name}, `;
//             // console.log(users);
//             users.push(user.name);
//         }
//     }
//     return users.join(', '); // перетворюємо рядок
// }
// console.log(getUsers(friends, 'Harry Potter'));

// //немає одного ключа(щоб не було NaN ми виконуємо перевірку, якщо значення є то додаємо)

// function getTotalAge(arr) {
//     let totalAge = 0;
//     //variant 1
//     // for (const user of arr) {
//     //     if (user.hasOwnProperty('age')) {
//     //         totalAge += user.age;
//     //     }
//     // }
//     // return totalAge;

//     //variant 2 in
//     for (const user of arr) {
//         if ('age' in user) {
//             totalAge += user.age;
//         }
//     }
//     return totalAge;
// }

// console.log(getTotalAge(friends));

//ЗАДАЧА 15 створити метод який буде повертати учнів факультету // та їх бали_____________________________________

// const hogvargs = {
//     griffindor: [
//         {
//             name: 'Harry',
//             points: 17,
//         },
//         {
//             name: 'Hermiona',
//             points: 19,
//         },
//         {
//             name: 'Ron',
//             points: 14,
//         },
//     ],
//     slizerin: [
//         {
//             name: 'Draco',
//             points: 17,
//         },
//         {
//             name: 'Goyl',
//             points: 14,
//         },
//         {
//             name: 'Crabbe',
//             points: 5,
//         },
//     ],
//     // getUserList(faculty) {
//     //     if (!(faculty in this)) {
//     //         // завжди перевіряємо чи є такий ключ // негативний сценарій
//     //         return 'Not found';
//     //     }
//     //     const students = [];
//     //     for (const student of this[faculty]) {
//     //         //передаємо параметр який прийде як змінна
//     //         students.push(student.name); //беремо одного студента з властивістью яка нам потрібна
//     //     }
//     //     return students;
//     //     // return students.join(', ')
//     // },
//     getTotalPoints(faculty) {
//         if (!this.hasOwnProperty(faculty)) {
//             return 'Not found';
//         }
//         let totalPoint = 0;
//         for (const point of this[faculty]) {
//             totalPoint += point.points;
//         }
//         return totalPoint;
//     },
// };
// // console.log(hogvargs.getUserList('griffindor'));
// // // console.log(hogvargs.getUserList('orlan'));
// // console.log(hogvargs.getUserList('slizerin'));

// console.log(hogvargs.getTotalPoints('griffindor'));
// console.log(hogvargs.getTotalPoints('slizerin'));
// console.log(hogvargs.getTotalPoints('orlan'));

//////ЗАДАЧА 16 видалити стару книгу і замінити / обновити на нову_____________________________________

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         const idx = this.books.indexOf(oldName);
//         if (idx !== -1) {
//             // якшо ця книга є то заміни // якщо немає то нічого не роби
//             this.books.splice(idx, 1, newName);
//             return newName;
//         }
//         return 'Not found';
//     },
// };

// console.log(bookShelf.updateBook('Top', 'New'));
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));

/// //ЗАДАЧА 17 додавання елемента / зілля в кінець масива___________________________
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     addPotion(potionName) {
//         if (!this.potions.includes(potionName)) {
//             this.potions.push(potionName);
//             return this.potions;
//         }
//         return 'This potion already exists';
//     },
// };
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));
// console.log(atTheOldToad.potions);

/// ЗАДАЧА 18 видалення зілля (використання одного методу indexOf замість двух, вірно обробляємо значення коли немає в масиву -1 замість includes) _________________________________________
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     removePotion(potionName) {
//         const idx = this.potions.indexOf(potionName);
//         if (idx !== -1) {
//             this.potions.splice(idx, 1);
//             return this.potions;
//         }
//         return 'Not found';

//     },
// };

// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');
// console.log(atTheOldToad.removePotion('Tor'));
// console.log(atTheOldToad.potions);

//ЗАДАЧА 19 оновляємо / обновляємо зілля // об'єкт // елемент_______________
// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     updatePotionName(oldName, newName) {
//         const idx = this.potions.indexOf(oldName);
//         if (idx !== -1) {
//             this.potions.splice(idx, 1, newName);
//             return this.potions;
//         }
//         return 'Not found';
//     },
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
// console.log(atTheOldToad.potions);

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////
