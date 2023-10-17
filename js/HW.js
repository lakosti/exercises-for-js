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
