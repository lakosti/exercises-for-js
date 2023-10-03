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
