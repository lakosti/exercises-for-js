//МОДУЛЬ 4

//МОДУЛЬ 5

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
