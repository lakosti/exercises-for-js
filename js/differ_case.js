//1. що буде виведено в консоль

// const num = [5, 6, 4, 8];
// num.forEach(
//     function (num) {
//         console.log(this.a);
//     },
//     { a: 'I am Groot' } // буде 4 рази виведено  'I am Groot'
// );

/////////////////////////////////////

//2. що буде виведено в консоль
// const num = [5, 3, 4, 6];
// const newNum = num.map(function (number) {});
// console.log(newNum); // 4 underfined бо мап повертає масив оригінальної довжини

///////////////////////////

//3
// const letters = ['A', 'b', 'B', 'a'].sort(); // по зростанню
// console.log(letters); //'A', 'B', 'a', 'b'

//4
// const prices = [1000, 240, 670, 360, 89, 20]
// console.log(prices.sort()); // 1000,20,240,360,670,89 //прирівнюється до рядка і порівнюється по юнікоду 1000(найлегший) = 1 //20 = 2 = 240 = 24 .....

//
// console.log(Object.keys(function () {})); // буде порожній масив []
// //Object keys збирає масив ключів об'єкту // якщо немає ключів пустий масив

//TASK чому = this

////// 1

// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//             test();
//         };
//     },
// };
// objA.myAge(); //  === obj
//починаємо перевіряти хто цей this викликав, якщо це функція то дивимося яка саме, і хто цю функцію викликав (перший ліворуч) arrow наслідує від батька значення // якщо це просто метод об'єкта то underfined / window

///// 2

// const objA = {
//     age: 22,
//     myAge() {
//         function test() {
//             console.log(this);
//         }
//         test(); // ліворуч нікого немає
//     },
// };
// objA.myAge(); //  === underfined if 'use strict' / or window

///// 3
// const objB = {
//     age: 22,
//     skills: {
//         skill: ['html', 'css'],
//         foo() {
//             const boo = () => {
//                 console.log(this);
//             };
//             boo();
//         },
//     },
// };
// objB.skills.foo(); // === skill

/// 4
// const objA = {
//     age: 22,
//     myAge() {
//         const test = () => {
//             console.log(this);
//             // test(); //функція не викликана(тому нічого не визветься)
//         };
//         test(); // тепер викликана
//     },
// };

// const objB = {
//     age: 12,
//     someFunction: objA.myAge,
// };

// objB.someFunction(); /// this ===  objB

///5
