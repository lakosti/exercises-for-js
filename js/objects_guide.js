//зправа від =  це літерал об'єкта {}
//ключ: свойство -- всегда строки

//якщо ім'я ключа починається з _ (нижнього підкреслення) то таке імя не можна змінювати напряму а лише через set / get  -- відео заняття 5 -  48:41

//object.freeze справцювує лише на об'єктах // не заморожує вкладені об'єкти// щоб їх заморозити необхідно звернутися до нього через .

//щоб передати кілька значень ключа, використовуємо масив

//for in - перебираєм і власні і успадковані ключі
//оператор in перебирає власні та успадковані ключі і повертає тру або фолс //'key' in obj
//object.keys - знаходить лише власні ключі
//object.entires -- повертає завжди масив значень ключ + властивість

//метод спред - розпилення (spread) // робить без масива //не робиться копія, робиться посилання на оригінальний//рядки також розпиляються
//метод rest --
//деструктирізація -- зміна

//методи по тернарному оператору краще не визивати

//за допомогою прототипних звязків передаються і функції

//includes  -- працює лише з колекцією примітивів // з об'єктами не працює оскільки буде порівнювати цілий об'єкт

//одноіменні ключі та значення amount: amount => amount,

// в методах об'єкта не можна використовувати його ім'я тільки this . This є тільки у функціях в об'єкті

//при переборі об'єкта в масиві через for of ми отримуємо посилання на нього і ми можемо його змінювати

//? -- безпечне звернення до властивості або методу (?.length)
//null?.length // underfined?.length

// Object.keys() -- вертає масив ключів // лише власні назви
// Objects.values() -- вертає масив значень
// Object.entries(this.languages) -- повертає масив елементів //двух вимірний масив
// Object.freeze() --- заборона зміни об'єкту
//.hasOwnProperty(key) --- перевірка чи власна властивість //і чи є взагалі цей ключ в об'єкті hasOwnProperty('key') // покаже лише власний ключ
//const c = Object.assign({}, a, b); -- розпилення / об'єднання об'єктів
//const x = {...a,...b,} --- тепер так розпиляють
//if ('score' in user) --- покаже чи наявний будь який ключ
// Date.now() --час в мілісекундах
// new Date() -- поточна дата і час
// const { } = playlist; // деструктурізація --- розпаковка
// const { name = 'default', ratting, tracks, trackCount } = playlist;

//ПАТЕРН об'єкт налаштувань -- використовується коли у функції більше 3 аргументів

// цикл for .. in для об'єкта краще не використовувати (він перебирає і унаслідовані елементи)

//функція та масиви це об'єкти!!!

//додавання елемента = назва об'єкта.ключ = значення
//якщо додали ключ який існує, то перезапишеться значення

//звернення до свойства то крапка =  .keys
//якщо значення ключа лежить у змінній то через літерал масиву [varible]

//якщо замість ключа потрібно підставити значення змінної пишемо [назва змінної]: значення

//зміна даних в об'єкті

// //user.age = 26;
// user.age +=1 //перевизначення
// console.log(user);

// user.city = 'kyiv'; // додавання ключа
// console.log(user);

//----видалення

// delete user.city;
// console.log(user);

//заборона зміни об'єкту --- Object.freeze()

// Object.freeze(user);
// user.work = 'waiter'; //не буде зміни

// літерал об'єкта

// const x = {};
// console.log({});

// const fn = function (myObject) {
//     //myObject = {a: 1, b: 2} // під капотом
//     console.log(myObject);
// };
// fn({ a: 1, b: 2 }); // літерал об'єкта

// function obj() {
//     return {}; // повертаємо літерал об'єкта
// }

// const playlist = {
//     name: 'Hello my dear',
//     ratting: 5,
//     tracks: ['track 1', 'track -2', 'track - 3'],
//     trackCount: 3,
//     year: 1998,
//     year: 2010, //2010 //переоприділиться
// getYear: function () {
//     console.log('this is function'); //було
// },
// getName() {
//     console.log('this is function'); //стало -- метод об'єкта
// },
// };

// console.log(playlist.ratting);
// console.log(playlist.name);
// console.log(playlist.tracks);

// //якщо задано змінною
// const propertyName = 'tracks';
// console.log(playlist[propertyName]); // найде треки
// console.log(playlist.propertyName); // underfined

///коротка запись

// const username = 'Mango';
// const email = 'mango@mail.com';

// // const signupData = {
// //     username: username,
// //     email: email,
// // };
// // console.log(signupData);

// //якщо імя ключа таке саме як і змінної то тоді можна записати коротким варіантом

// const signupData = {
//     username,
//     email,
// };
// console.log(signupData);

//витягування значення з інпута // обраховані властивості // динамічно

/* <input name="color" value="tomato"></input>; */

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };
// console.log(colorPickerData);

//додавання значень в масив

//імя об'єкта.ключ = значення

// playlist.genres = 'metal';
// console.log(playlist); //metal

// playlist.name = 'change name of song'; // значення зміниться
// console.log(playlist);

//метод об'єкта (працюють з властивостями об'єктів)_______________________________

// const playlist = {
//     name: 'Hello my dear',
//     ratting: 5,
//     tracks: ['track 1', 'track -2', 'track - 3'],
//     year: 1998,
//     year: 2010, //2010 //переоприділиться
//     changeName(newName) {
//         console.log('в середині', this);
//         this.name = newName; //змінити і'мя на нове
//     },
//     addTrack(track) {
//         this.tracks.push(track); // додати новий трек
//     },
//     updateRating(newRating) {
//         this.ratting = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }, //підрахунок кількостті треків (кількість = довжині)
// };

// playlist.changeName('Change');

// playlist.addTrack('New');
// playlist.addTrack('New 2');

// playlist.updateRating(3);

// console.log(playlist.getTrackCount());
// console.log(playlist);

////перебір об'єкту___________________________________________

// const test = 10;
// const test2 = 15;
// const user = {
//     name: 'alex',
//     age: 25,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         react_native: false,
//     },
//     result: test + test2,
// };

// console.log(user.result);
// console.log(user.languages.react_native); //звернення до властивості
// console.log(user['languages']['react_native']);

//зміна даних в об'єкті

// //user.age = 26;
// user.age +=1 //перевизначення
// console.log(user);

// user.city = 'kyiv'; // додавання ключа
// console.log(user);

//----видалення

// delete user.city;
// console.log(user);

//заборона зміни об'єкту --- Object.freeze()

// Object.freeze(user);
// user.work = 'waiter'; //не буде зміни

//for in

// for (const key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

///ВЛАСНА І НЕ ВЛАСНА ВЛАСТИВІСТЬ

// const user = {
//     name: 'alex',
//     age: 25,
//     languages: {
//         html: false,
//         css: false,
//         js: true,
//         react_native: false,
//     },
// }; // власна властивість

// const user2 = Object.create(user); //не власна властивість //прототипний зв'язок//оригінал не перезаписується лише копія змінюється
// user2.age = 32; // наслідується
// // console.log(user2);

// for (const key in user2) {
//     if (user2.hasOwnProperty(key)) {
//         console.log('Own', user2[key]);
//     } else {
//         console.log('All', user2[key]);
//     }
// }

//перевірка чи є ключ в об'єкті

// const user = {
//     score: 0,
// };

//через hasOwnProperty('')  --- покаже лише власний ключ

// if (user.hasOwnProperty('score')) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// через in --покаже будь який ключ

// if ('score' in user) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// через if

// if (!user.score) {
//     console.log('yes');
// } else {
//     console.log('not');
// }

///---------Ч2-------ДЕСТРУКТИРІЗАЦІЯ // SPREAD // REST

//Array.prototype.concat() або [].concat це аналог spread

// const temps = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], ...[7, 8, 9]]; // spread
// /// однакове ... = .concat
// // const temps = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// console.log(temps);

///
// const a = [1, 2, 3];
// const b = [...a];
// console.log(b); // скопіювався

///
// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const b = [...a];
// a[0].a = 1000;
// console.log(b);
// console.log(a[0] === b[0]); //true
// console.log(a === b); // false

//////////////////////
//розпилення об'єктів
//раніше було так
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = {};
// Object.assign(c, a, b);

//тепер роблять так
// const c = {
//     name: 'Mango',
//     ...a,
//     ...b,
// };
// console.log(c);
/////
// const c = {
//     ...a,
//     x: 10,
//     ...b,
//     y: 20,
// };
// console.log(c); //{x: 0, y: 20, z: 3} // важен порядок

///порядок впливає на кінцевий результат

// const defaultSettings = {
//     theme: 'light',
//     showNotification: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showNotification: false,
//     hideSidebar: true,
// };
// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings, //переоприділилися значення
// };
// console.log(finalSettings);

////деструктирізація об'єктів__________________________________________
//example 1
// const playlist = {
//     name: 'Hello',
//     ratting: 5,
//     tracks: ['track - 1, track - 2', 'track - 3'],
//     trackCount: 3,
// };

// const { name = 'default', ratting, tracks, trackCount: numberOfTracks = 0 } = playlist; // деструктурізація --- розпаковка /// name = default --- по завмовчуванні // якщо потрібно змінити назву змінної в коді то використовуємо :

// // console.log(tracks, name, trackCount, ratting);
// console.log(numberOfTracks);

///REST - збір

// const profile = {
//     name: 'User Surname',
//     tag: 'user_88',
//     location: 'Venezuela',
//     avatar: 'kiwi',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };
// const { name, tag, location, ...remainder } = profile;
// console.log(name, tag, location);
// console.log(remainder); // REST --остача змінних від деструктирізації

//ПАТЕРН об'єкт налаштувань -- використовується коли у функції більше 3 аргументів

// const fn = function (params) {
//     //
// };
// fn({
//     age: 10,
//     friends: 5,
//     isOnline: true,
//     hobbies: [],
//     games: {},
//     ratting: 5,
// });
