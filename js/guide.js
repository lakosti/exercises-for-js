//скорочений буль !! + інверсія  !

//рядки в ДЖС не мутуються! Їх потрібно вирізати в додавати самостійно

//push() повертає пустий масив

// ${} -- інтерполяція

// === true в if() можна не ставити оскільки if і так виконується лише при тру
// === 0 в if() також не ставимо робимо інверсію !()

// let arr = new Array(10).fill(3) -- таким чином можемо створювати новий масив //[3,3,3,3,3,3,3,3,3,3]

//!!~courses.indexOf(course); -- те саме що і інклудс // повертає тру або фолс
//courses.includes(course)
// ~ -- bitwise NOT = (x + 1) -- (!!~idx) перевірка чи є такий індекс//таким чином можна перевіряти перший індекс в масиві 0 який приводиться до фолс //Bollean(~idx)

//при будь який математичних операціях приводимо до намбера
//якщо масив в масиві буде рекурсія

//5+5 = 10 -- бінарний плюс (має і з права і з ліва число)
//+5 = унарний плюс // приводить до числа
// 5 ** 2 // приведення в степінь в даному випадку в другу

//масив не можемо привести до числа -- отримаємо NaN

//node script.js --- для терміналу замість лайф сервера

//[] літерал масиву
//{} літерал об'єкту
//'' " " `` - літерал рядка
//Array.from() -- завжди створює новий масив

// const lastIndx = arr.length - 1; // 3 індекс ост елемента
// const lastElement = arr[lastIndx]; //сам останній елемент
// const lastElement = arr[arr.length - 1]; //сам останній елемент

//метод -- виконує якусь дію
//властивість -- зберігає якесь значення

//value = 1
//++value == відразу додасть і покаже == превираз //2
// value ++ == додасть і покаже уже на наступному виклику/ітерації== пост вираз //1 -- 2

//передача по значенню -- прості типи, різні ячейки в памяті

//передача по посиланню -- складні, одна ячейка в памяті, посилання на одне місце в памяті

//for якщо потрібен індекс і потрібно змінити щось в масиві
// for of якщо індекс не потрібен і не потрібно нічого міняти в масиві

//на  null не працює toLowerCase -- буде помилка

//нал = сам собі або андефінед і при <= />=
// console.log(null == undefined);

//NaN === NaN // false
//NaN == NaN // false тобто завжди не дорівнює сам собі

// IsNaN приводить null і false до числа

//ітерабельний -- той що можна перебрати за допомогою чогось (циклу)

//При перевірці isNaN -- використовуємо isNaN()-- включає в себе перетворення до NaN

// if (message) {
//     message = message.toLowerCase(); // приведення до нижнього регістру
// }

// const str = 'hello world';
// console.log(str.slice(0, str.indexOf(' '))); // означає виріжи мені до пробілу (пишемо індекс пробілу)

// const boo = !!!'2';
// console.log(boo);

// //приведення до числа --- +

// let fix = '30';
// console.log(typeof fix); // string
// fix = +fix;
// console.log(typeof fix); //number

// toFixed ------повертає рядок
//prompt --------повертає рядок

//перевірка на фолсі значення//

// const value = 0;

// if (value) {
//     console.log('if');
// } else {
//     console.log('else');
// }

////////

// if (!value) {
//     console.log('yes');
// } else {
//    console.log('not');
//}

//псевдомасив

// function arg() {
//     console.log(arguments); //псевдомасив
//     const args = Array.from(arguments); // перетворюємо псевдомасив в масив

//     console.log(args);
// }

//створюємо повний масив

// function arg(...args) { //операція рест
//     console.log(args);
// }

///// розбираємо вкладений масив

// const arr = [1, 'hello', null, true, [1, 2, 3]];

// for (let i = 0; i < arr.length; i += 1) {
//     if (Array.isArray(arr[i])) {
//         for (let j = 0; j < arr[i].length; j += 1) {
//             console.log(arr[i][j]);
//         }
//         continue;
//     }
//     console.log(arr[i]);
// }

///////////////////////

// інкремент --- додавання / збільшення +  i++
// декремент --- віднімання / зменшення - i--
//a++ -- post=increment
//++a -- pre-increment
// парне число   ------  (i % 2 === 0) // ділиться без залишку
// break---повністью прериває цикл
// continue--- прериває поточну ітерацію // пропускає її

// let a = 10;
// const b = ++a; // -PRE-increment
// console.log(a); //11
// console.log(b); //11
//______________________
// let c = 10;
// const v = c++; // POST - increment
// console.log(c); //11
// console.log(v); //10

//Методи

//join - перетворює масив в строку // працює лише з МАСИВОМ
//split - перетворює строку в масив
//concat - поєднує масиви // не змінює самі масиви
//slice - вирізає, або додає елементи // не змінює масив // повертає копію // значення з мінусом починає вирізати з кінця // 0 - повністью весь масив //.slice(1, -1) - від першого до останнього або (1) якщо пусті дужки буде копія всього
//splice - універсальний метод (додає/вирізає)//змінює масив
//pop/push - видаляє на початку/ додає на початку// змінює масив
//unshift/shift - дадає / видаляє на початку // мутує масив
//indexOf -- повертає індекс ПЕРШОГО елемента який співпадає //можна передавати два параметра ('element', 5) 5 - з якого індекса починати пошук
//includes - також може містити два параметра
//Array.isArray() -- перевірка на масив
//метод padStart / padEnd працюють із типом стрінг, тому приводимо до стрінг
