//-----------------------------------------------------------------------------------------МОДУЛЬ 1
// //TASK 1
// const makeTransaction = function (quantity, priceDroid) {
//     return `You ordered ${quantity} droids worth ${quantity * priceDroid} credits!`;
// };
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// //TASK 2

// const getShippingMessage = function (country, price, deliveryFee) {
//     return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// };
// console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"

// //TASK 3
// const getElementWidth = function (content, padding, border) {
//     return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
// };
// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200

//----------------------------------------------------------------------------------
//МОДУЛЬ 2

//TASK 1
// const makeTransaction = function (quantity, pricePerDroid, customerCredits) {
//     let total = quantity * pricePerDroid;
//     if (total > customerCredits) {
//         return "Insufficient funds!"
//     }
//     return `You ordered ${quantity} droids worth ${total} credits!`
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//TASK 2
// const formatMessage = function (message, maxLength) {
//     if (message.length > maxLength) {
//     return message.slice(0, maxLength) + '...'
//     }
//     return message
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// TASK 3
// function checkForSpam(message) {
//     message = message.toLowerCase();
//     return message.includes('spam') || message.includes('sale');
// }
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//TASK 4

// function getShippingCost(country) {
//     let message;
//     let price;
//     switch (country) {
//         case 'China':
//             price = 100;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Chile':
//             price = 250;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Australia':
//             price = 170;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Jamaica':
//             price = 120;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         default:
//             message = 'Sorry, there is no delivery to your country';
//     }
//     return message;
// }
// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
//----------------------------------------------------------------------------------------- МОДУЛЬ 3

//TASK 1

// function slugify(title) {
//     return title.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
// console.log(slugify('English for developer')); // "english-for-developer"
// console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"

//TASK 2
// function makeArray(firstArray, secondArray, maxLength) {
//     return firstArray.concat(secondArray).splice(0, maxLength);
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// TASK 3

// function filterArray(numbers, value) {
//     let arr = [];
//     for (const num of numbers) {
//         if (value < num) {
//             arr.push(num);
//         }
//     }
//     return arr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

//-----------------------------------------------------------------------------------------МОДУЛЬ 4-----------------------------------------------------------------------

//TASK 1 Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.________________________________________________

// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// const isEnoughCapacity = function (products, containerSize) {
//     let total = 0;
//     for (const key in products) {
//         total += products[key];
//     }
//     return total > containerSize ? false : true;
// };
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

//TASK 2 Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день. Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.______________________________________________

// const calcAverageCalories = function (days) {
//     let total = 0;
//     for (const { calories } of days) {
//         total += calories;
//     }
//     return total / days.length || 0;
// };
// console.log(
//     calcAverageCalories([
//         { day: 'monday', calories: 3010 },
//         { day: 'tuesday', calories: 3200 },
//         { day: 'wednesday', calories: 3120 },
//         { day: 'thursday', calories: 2900 },
//         { day: 'friday', calories: 3450 },
//         { day: 'saturday', calories: 3280 },
//         { day: 'sunday', calories: 3300 },
//     ])
// ); // 3180

// console.log(
//     calcAverageCalories([
//         { day: 'monday', calories: 2040 },
//         { day: 'tuesday', calories: 2270 },
//         { day: 'wednesday', calories: 2420 },
//         { day: 'thursday', calories: 1900 },
//         { day: 'friday', calories: 2370 },
//         { day: 'saturday', calories: 2280 },
//         { day: 'sunday', calories: 2610 },
//     ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

//TASK 3
// const profile = {
//     username: 'Jacob',
//     playTime: 300,
//     changeUsername(newName) {
//         this.username = newName;
//     },
//     updatePlayTime(hours) {
//         this.playTime += hours;
//     },
//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours!`;
//     },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername('Marco');
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

//=---------------------------------------------------------------------------------------МОДУЛЬ 5 -------------------------------------------------------

//TASK 1 Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів. Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.____________________________________________________

// const getUserNames = function (users) {
//     const names = [];
//     users.map(({ name }) => {
//         names.push(name);
//     });
//     return names;
// };

// console.log(
//     getUserNames([
//         {
//             name: 'Moore Hensley',
//             email: 'moorehensley@indexia.com',
//             balance: 2811,
//         },
//         {
//             name: 'Sharlene Bush',
//             email: 'sharlenebush@tubesys.com',
//             balance: 3821,
//         },
//         {
//             name: 'Ross Vazquez',
//             email: 'rossvazquez@xinware.com',
//             balance: 3793,
//         },
//         {
//             name: 'Elma Head',
//             email: 'elmahead@omatom.com',
//             balance: 2278,
//         },
//         {
//             name: 'Carey Barr',
//             email: 'careybarr@nurali.com',
//             balance: 3951,
//         },
//         {
//             name: 'Blackburn Dotson',
//             email: 'blackburndotson@furnigeer.com',
//             balance: 1498,
//         },
//         {
//             name: 'Sheree Anthony',
//             email: 'shereeanthony@kog.com',
//             balance: 2764,
//         },
//     ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//TASK 2 ______________________________________________

// const allUsers = [
//     {
//         name: 'Moore Hensley',
//         friends: ['Sharron Pace'],
//     },
//     {
//         name: 'Sharlene Bush',
//         friends: ['Briana Decker', 'Sharron Pace'],
//     },
//     {
//         name: 'Ross Vazquez',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     },
//     {
//         name: 'Elma Head',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//     },
//     {
//         name: 'Carey Barr',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//     },
//     {
//         name: 'Blackburn Dotson',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     },
//     {
//         name: 'Sheree Anthony',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//     },
// ];

// const getUsersWithFriend = function (users, friendName) {
//     const nameFriends = users.filter(({ friends }) => friends.includes(friendName));
//     return nameFriends;
// };
// console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

//TASK 3 Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.

// Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends)._______________________________________

// const sortByDescendingFriendCount = users =>
//     users.toSorted((a, b) => b.friends.length - a.friends.length);

// console.log(
//     sortByDescendingFriendCount([
//         {
//             name: 'Moore Hensley',
//             friends: ['Sharron Pace'],
//             gender: 'male',
//         },
//         {
//             name: 'Sharlene Bush',
//             friends: ['Briana Decker', 'Sharron Pace'],
//             gender: 'female',
//         },
//         {
//             name: 'Ross Vazquez',
//             friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//             gender: 'male',
//         },
//         {
//             name: 'Elma Head',
//             friends: ['Goldie Gentry', 'Aisha Tran'],
//             gender: 'female',
//         },
//         {
//             name: 'Carey Barr',
//             friends: ['Jordan Sampson', 'Eddie Strong'],
//             gender: 'male',
//         },
//         {
//             name: 'Blackburn Dotson',
//             friends: ['Jacklyn Lucas', 'Linda Chapman'],
//             gender: 'male',
//         },
//         {
//             name: 'Sheree Anthony',
//             friends: ['Goldie Gentry', 'Briana Decker'],
//             gender: 'female',
//         },
//     ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

//TASK 4 Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender._________________________________________________________________________________

// function getTotalBalanceByGender(users, gender) {
//     const totalBalance = users
//         .filter(user => user.gender === gender)
//         .reduce((acc, user) => acc + user.balance, 0);

//     return totalBalance;
// }

// const allUsers = [
//     {
//         name: 'Moore Hensley',
//         gender: 'male',
//         balance: 2811,
//     },
//     {
//         name: 'Sharlene Bush',
//         gender: 'female',
//         balance: 3821,
//     },
//     {
//         name: 'Ross Vazquez',
//         gender: 'male',
//         balance: 3793,
//     },
//     {
//         name: 'Elma Head',
//         gender: 'female',
//         balance: 2278,
//     },
//     {
//         name: 'Carey Barr',
//         gender: 'male',
//         balance: 3951,
//     },
//     {
//         name: 'Blackburn Dotson',
//         gender: 'male',
//         balance: 1498,
//     },
//     {
//         name: 'Sheree Anthony',
//         gender: 'female',
//         balance: 2764,
//     },
// ];

// console.log(getTotalBalanceByGender(allUsers, 'male')); // 12053
// console.log(getTotalBalanceByGender(allUsers, 'female')); // 8863

//-------------------------------------------------------------------------------- МОДУЛЬ 6 -------------------------------------------------------------------
// TASKS 1 Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.___________________________________________

// const customer = {
//     username: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['Burger', 'Pizza', 'Salad'],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//TASK 2

// class Storage {
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }
//     getItems() {
//         return this.#items;
//     }
//     addItem(newItem) {
//         if (!!~newItem) {
//             this.#items.push(newItem);
//         }
//     }
//     removeItem(itemToRemove) {
//         const idx = this.#items.indexOf(itemToRemove);
//         if (!!~idx) {
//             this.#items.splice(idx, 1);
//         }
//     }
// }

// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//TASK 3

// class StringBuilder {
//     #value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
//     getValue() {
//         return this.#value;
//     }
//     padEnd(str) {
//         this.#value += str;
//     }
//     padStart(str) {
//         this.#value = str + this.#value;
//     }
//     padBoth(str) {
//         this.#value = str + this.#value + str;
//     }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
