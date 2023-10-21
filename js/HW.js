//------------------------------------------------------------------------------------МОДУЛЬ 1
//TASK 1
// const makeTransaction = function (quantity, priceDroid) {
//     return `You ordered ${quantity} droids worth ${quantity * priceDroid} credits!`
// };

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//TASK 2

// const getShippingMessage = function (country, price, deliveryFee) {
//     return `Shipping to ${country} will cost ${price + deliveryFee} credits`
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//TASK 3
// const getElementWidth = function (content, padding, border) {
//     return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

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
//-------------------------------------------------------------------------------МОДУЛЬ 3

//------------------------------------------------------------------------------------МОДУЛЬ 4

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

//=-----------------------------------------------------------------------------------------МОДУЛЬ 5

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

//TASK 2

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

//--------------------------------------------------------------------------- МОДУЛЬ 6
