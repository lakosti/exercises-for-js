//скорочений буль !! + інверсія  !

//
/**
 * JS DOCa
 */

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log('abc'.charCodeAt(0)) -- перевірка по юнікоду
//  ----------------------------Methods-----------------------------------
//в перебираючих методах масиву важливий порядок параметрів
//їх не можна break  or  continue
//деструкт у функціях =  ({}) = (({online}) => online)

//1. for each  ----   як заміна форму
// повертає underfined тому не можна присвоїти у змінну
// перебирає елементи завжди з початку
// приймає в параметрах колбек функцію
// вказуємо в колбек функції такі параметри (сам елемент*, індекс, масив)
// не працює break та return
//мутує масив
//arr.forEach(function (_, idx) -- коли айтем не потрібен

//2. map ----використовується коли потрібно взяти якесь одне значення або обновити щось, поілементно перебирає
// повертає масив такої самої довжини як оригінальний
//не змінює оригінальний масив
//перебирає масив поелементно
//може витягнути якісь певні властивості наприклад всі імена / очки ...
//може змінити масив не мутуючи справжній масив і щось обновити

//3. filter ---- робить лише фільтрацію за якоюсь умовою, находить БАГАТО з БАГАТЬОХ елементів
//повертає новий масив (пустий або з елементами)
//не змінює оригінальний
//його колбек функція повертає або тру або фолс
//якщо тру то елемент добавляеться в масив а якщо фолс то ні

//4. find -- знайти унікальний елемент, ОДИН з колекції
//повертає ПЕРШИЙ елемент який задовольняє умову
//якщо умова фолс повертає underfined
//часто використовують для пошуку айді чи імені

//5. every --- поілементо перебирає оригінальний масив
//повертає тру якщо ВСІ елементи масива можуть щось і фолс якщо хоч один не удовлітворяє умову

//6. some --- також перебирає поелементно і ХОЧА б ОДИН удовлітворяє умову поверне тру
// якщо ні один не задовільняє поверне фолс
//приводить елементи до строки і сортірує по юнікоду

//7. reduce (універсальний) -- поілементно перебирає ориг масив
//повертає що завгодно
//потрібно початкове значення як у let total
//бере багато і робить щось одне
//можна порахувати загальну суму масиву
//має два обов'язкових параметри (аккумулятор, число) і також індекс та масив
//acc = total also acc = arr[0] by default
//acc = return на кожній ітерації
//при роботі завжди повертаємо акамулятор reduce arr

//sort -- сортірує поілементно по зростанню, повільний але для фронта норм
//сортування рядків - const result = arr.sort(); -- не вказуємо умову
//ЗМІНЮЄ ориг масив!!!!!!
//тому робимо копію через сперд або слайс / краще спред [...spred]
//.sort(a,b) => b-a) -- з більшого до меншого
//.sort(a,b) => a-b) по дефолту з більшого до меншого
//сортування за алфавітом -- const result = arr.sort((a,b)=> a.localeCompare(b))
//спочатку завжди розпилюємо масив [...players].sort(())

//flat -- розглажування масива (arr.flat()) => arr.flat(2))
//коли є масив в масиві і необхідно зробити один
//не змінює старий масив
//повертає результат своєї робити
//розглажує лише на одну вкладеність по замовчуванні
//щоб розгладити решту вкладеності пишемо в параметрах (2), (3) ... і так далі

//flatMap -- якщо потрібно з'єднати кілька масивів в один, аналог reduce

//findIndex -- знаходить індекс в об'єкта

// --------------------------MAP ------------

// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map(number => {
//     return number * 2;
// });

// console.log('numbers', numbers);
// console.log('doubleNums', doubleNums);

// const players = [
//     {
//         id: 'player-1',
//         name: 'Poly',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },
//     {
//         id: 'player-2',
//         name: 'Mango',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//     },
//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//     },
// ];
// // вернули всі імена______________________________________
// const playersName = players.map(player => player.name);
// console.log(`playersName`, playersName);

// // повернули id____________________________________________
// const getId = players.map(player => player.id);
// console.log(getId);

// ///потрібно повернути кілька значень______________________________
// const getNameAndPoint = players.map(({ name, points }) => {
//     return {
//         name,
//         points,
//     };
// });
// console.log(getNameAndPoint);

//обновити масив_____________________________________________
// const updatedPlayers = players.map(player => {
//     console.log(player);

//     //поверне копію
//     return {
//         ...player,
//         points: Number((player.points * 1.1).toFixed(1)), // 10%
//     };
// });
// console.log(updatedPlayers);

//щось змінити в одного гравця_______________________________

// const playerIdUpdated = 'player-3';

// const changeOnePlayer = players.map(player => {
//     console.log(player.id);
//     if (playerIdUpdated === player.id) {
//         console.log('we found the player need update');

//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     }
//     return player;
// });
// console.table(changeOnePlayer);

////переписуємо на тернарний_______________________________

// const playerIdUpdated = 'player-3';

// const changeOnePlayer = players.map(player =>
//     playerIdUpdated === player.id ? { ...player, timePlayed: player.timePlayed + 100 } : player
// );
// console.table(changeOnePlayer);

//---------------------------------FILTER ------------------
//задача 1
// const arr = [1, 2, 3, 4, 5, 6];
// const filtredArr = arr.filter(number => number > 3 && number < 6); // 4,5
// console.log(filtredArr);

//задача 2
// const players = [
//     {
//         id: 'player-1',
//         name: 'Poly',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },
//     {
//         id: 'player-2',
//         name: 'Mango',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//     },
//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//     },
// ];
// //вивести тільки онлайн користувачів + деструктуризація__________________

// const getOnlyOnlinePlayers = players.filter(({ online }) => online);
// console.log(getOnlyOnlinePlayers);

//вивести тільки офлайн__________________________________

// const getOfflinePlayers = players.filter(player => !player.online);
// console.log(getOfflinePlayers);

//вивести тих в кого час три більше 250_____________________

// const getPlayersTime = players.filter(({ timePlayed }) => timePlayed > 250);
// console.log(getPlayersTime);

//--------------------------FIND-----------------------------------
//знайти число 15
// const arr = [2, 3, 5, 9, 7, 15, 25];
// const findNum = arr.find(number => number === 15);
// console.log(findNum);

// знайти юзера з айді 3_______________________________

// const players = [
//     {
//         id: 'player-1',
//         name: 'Poly',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },
//     {
//         id: 'player-2',
//         name: 'Mango',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//     },
//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//     },
// ];
// const idToFind = 'player-3';
// const findUser = players.find(({ id }) => id === idToFind);
// console.log(findUser);

//знайти по імені________________________________________

// const nameToFind = 'Poly';
// const findNameUser = players.find(({ name }) => name === nameToFind);
// console.log(findNameUser);

//перевикористання для знаходження айді______________________________
// const findPlayerById = (allPlayer, playerId) => allPlayer.find(({ id }) => id === playerId);

// console.log(findPlayerById(players, 'player-3'));
// console.log(findPlayerById(players, 'player-4'));

//--------------------EVERY / SOME---------------------------

// const players = [
//     {
//         id: 'player-1',
//         name: 'Poly',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },
//     {
//         id: 'player-2',
//         name: 'Mango',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//     },
//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//     },
// ];
//every перевірити чи всі онлайн
// const isAllOnline = players.every(({ online }) => online);
// console.log(isAllOnline); // false  бо не всі онлайн

//some // хоч хтось онлайн є
// const isAnyOnline = players.some(({ online }) => online);
// console.log(isAnyOnline);

//some
// const isHereProGamer = players.some(player => player.timePlayed > 400);
// console.log(isHereProGamer);

//---------------------------------REDUCE--------- -----------

//Задача 1 сума масива__________________________

// const numbers = [5, 10, 15, 20, 25];

// // const total = numbers.reduce((acc, number) => {
// //     //acc = total or acc = arr[0]
// //     //number item of arr
// //     console.log('acc', acc);
// //     console.log('number', number);

// //     return acc + number;
// // }, 0); //  0 = на першій ітерації

// ///перепис на короткий синтаксис
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// //explain
// //acc = 0 -> num 5 = 0 + 5
// //acc = 5 -> num 10 = 5 + 10
// //acc = 15 -> num 15 = 15 + 15
// //acc = 30 -> num 20 = 30 + 20
// //acc = 50 -> num 25 = 50 + 25
// // total = 75

//Задача 2 зарплати співробітників з об'єкта________________________

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };
// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);

//Задача 3 загальна кількість годин скільки грали гравці______________________________
// const players = [
//     {
//         id: 'player-1',
//         name: 'Poly',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },
//     {
//         id: 'player-2',
//         name: 'Mango',
//         timePlayed: 470,
//         points: 92,
//         online: true,
//     },
//     {
//         id: 'player-3',
//         name: 'Kiwi',
//         timePlayed: 230,
//         points: 48,
//         online: true,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,
//         points: 48,
//         online: true,
//     },
// ];

// // const totalTime = players.reduce((total, player) => total + player.timePlayed, 0);
// //деструкт (якщо один то переваждно не деструкт)
// const totalTime = players.reduce((total, { timePlayed }) => total + timePlayed, 0);
// console.log(totalTime);

//Задача 4 порахувати корзину товарів ___________________________________
// const cart = [
//     { label: 'apples', price: 100, quantity: 2 },
//     { label: 'bananas', price: 120, quantity: 3 },
//     { label: 'lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// //деструк
// // const totalAmount = cart.reduce((total, { price, quantity }) => {
// //     return total + price * quantity;
// // }, 0);
// console.log(totalAmount);

//Задача 5 збір всіх тегів_______________________________
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'node.js'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['js', 'html', 'node.js'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'node.js', 'react'] },
// ];
// const allTags = tweets.reduce((acc, item) => {
//     // tags.push(...item.tags); // лінтер буде бити помилку
//     return [...acc, ...item.tags];
// }, []);
// console.log(allTags);

//Задача 6 підрахунок кількості тегів _____________________________

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'node.js'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['js', 'html', 'node.js'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'node.js', 'react'] },
// ];
// const allTags = tweets.reduce((acc, item) => [...acc, ...item.tags], []);
// const countTags = allTags.reduce((acc, tag) => {
//     console.log(acc); // по черзі
//     if (tag in acc) {
//         //(acc.hasOwnProperty(tag))
//         acc[tag] += 1;
//         return acc;
//     }
//     acc[tag] = 1;
//     return acc;
// }, {});
// console.log(countTags);
//пояснення
//якщо є такий тег то ми до нього додаємо 1, якщо такого тега немає то ми не заходимо в іф і просто цьому тегу ставимо 1 і так по кругу

//перепис імутабельно // щоб не мутувати
// const countTags = allTags.reduce((acc, tag) => {
//     console.log(acc); // по черзі
//     if (tag in acc) {
//         // acc[tag] += 1;
//         return {
//             ...acc,
//             [tag]: (acc[tag] += 1),
//         };
//     }
//     // acc[tag] = 1;
//     return {
//         ...acc,
//         [tag]: 1,
//     };
// }, {});
// console.log(countTags);

///перепис на тернарний

// const countTags = allTags.reduce((acc, tag) => {
//     console.log(acc); // по черзі

//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});
// console.log(countTags);

//---------------------------SORT------------------------------------
//Сортирує по порядку цифри______________________________

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers);

// //Сортирує по порядку букви___________________________
// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(letters);

//принцип роботи сорт // cортування за зменшенням____________________
// const numbers = [1, 9, 6, 2, 3];

// numbers.sort((curentEl, nextEl) => {
//     return nextEl - curentEl;
// });
// console.log(numbers);
// const copy = [...numbers];
// const ascSortNumbers = [...numbers].sort(a,b) => b-a); // зменшення
// const ascSortNumbers = [...numbers].sort(a,b) => a-b); // збільшення
// console.log(ascSortNumbers);

//Задача 2 сортіровка об'єктів_______________________________

// const players = [
//     {
//         id: 'player-1',
//         name: 'Poly',
//         timePlayed: 310,

//         online: false,
//     },
//     {
//         id: 'player-2',
//         name: 'Mango',
//         timePlayed: 470,

//         online: true,
//     },
//     {
//         id: 'player-3',
//         name: 'Aiwi',
//         timePlayed: 230,

//         online: true,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,

//         online: false,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,

//         online: true,
//     },
// ];
// const sortByBestPlayers = [...players].sort(
//     (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );
// console.log(sortByBestPlayers);

//Задача 3 сортування по першій букві імені_______________________________
// const sortByNamePlayers = [...players].sort((firstName, nextName) => {
//     if (firstName.name[0] > nextName.name[0]) {
//         return 1;
//     }
//     if (!(firstName.name[0] > nextName.name[0])) {
//         return -1;
//     }
// });
// console.log(sortByNamePlayers);

// console.log('abc'.charCodeAt(1));

//----------------------------FLAT /FlatMap__________________________

//розглаження

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));
// console.log(array);

//ЗАДАЧА 1 взяти всі теги з масива за допомогою flatMap_____________________

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'node.js'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['js', 'html', 'node.js'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'node.js', 'react'] },
// ];

// // const getAllTags = tweets.map(tweet => tweet.tags).flat(); //двічі викликаємо цей метод

// const getAllTags = tweets.flatMap(tweet => tweet.tags);
// console.log(getAllTags);

//flatMap

// const result = tweets
//     .flatMap(tweets => tweets.tags)
//     .reduce((acc, tag) => {
//         return {
//             ...acc,
//             [tag]: acc[tag] ? acc[tag] + 1 : 1,
//         };
//     }, {});
// console.log(result);
///////////////////////////////ПРАКТИКА ////////////////////////

//ЗАДАЧА 1 for each (перебирає елементи масиву завжди з почату)  не працює break____________________

// const arr = [2, 6, 1, 7, 3];
// //item -- ітеруємий елемент
// //idx -- індекс поточного елемента
// //arr -- масив який перебираємо
// arr.forEach(function (item, idx, arr) {
//     arr[idx] = item * 2; // елемент масиву з таким індексом перевизначаємо на помножений на 2
// });
// console.log(arr);

//другий приклад
// const arr = [2, 6, 1, 7, 3];

// arr.forEach(function (item) {
//     console.log(`work with number ${item}`);
// });

//ще один приклад (якщо не потрібен айтем)
// const arr = [2, 6, 1, 7, 3];
// arr.forEach(function (_, idx) {
//     console.log(idx);
// });

///ЗАДАЧА 2 переписат на for each____________________________

// function logItems(arr) {
//     console.log(arr);
//     for (let i = 0; i < arr.length; i += 1) {
//         console.log(` ${i + 1} - ${arr[i]}`);
//     }
// }
// logItems(['mango', 'banana', 'orange']);
// logItems(['apple', 'plum', 'watermelon']);

///переписати for each + arrow

// const logItems = arr => arr.forEach((arr, idx) => console.log(` ${idx + 1} - ${arr}`));

// logItems(['mango', 'banana', 'orange']);
// logItems(['apple', 'plum', 'watermelon']);

///ЗАДАЧА 3 переписат на for each + arrow____________________________

// function calculateAverage(...arg) {
//     let total = 0;
//     for (let i = 0; i < arg.length; i++) {
//         total += arg[i];
//     }
//     return total / arg.length;
// }

// console.log(calculateAverage(1, 2, 3, 4, 5, 6));

//перепис
// const calculateAverage = (...arr) => {
//     console.log(arr);
//     let total = 0;
//     arr.forEach(item => (total += item));
//     return total / arr.length;
// };

// console.log(calculateAverage(1, 2, 3, 4, 5, 6));
// console.log(calculateAverage(1, 2, 3));

// ЗАДАЧА 4 ченінг подвоїти значення елементів а потім отримати тільки більше 10 і відсортувати їх по збільшенню_________________________

// const numbers = [20, 1, 5, 15, 2, 4, 3, 8, 9, 19, 13, 1, 3, 2];

// // const getLowSixth = numbers.filter(item => item >= 10);
// // console.log(getLowSixth);

// // const multBuTwo = getLowSixth.map(item => item * 2);
// // console.log(multBuTwo); // помножили на два

// // const sortFromTopToBottom = getLowSixth.sort((pr, next) => next - pr);
// // console.log(sortFromTopToBottom);

// ////ченінг
// const result = numbers
//     .filter(item => item >= 10)
//     .map(item => item * 2)
//     .sort((a, b) => b - a);

// console.log(result);

//ЗАДАЧА 5 ченінг з початку вільтруємо тих хто онлайн а потім сортуємо по рангу_______________________________________

// const players = [
//     {
//         id: 'player-1',
//         name: 'Poly',
//         timePlayed: 310,

//         online: false,
//     },
//     {
//         id: 'player-2',
//         name: 'Mango',
//         timePlayed: 470,

//         online: true,
//     },
//     {
//         id: 'player-3',
//         name: 'Aiwi',
//         timePlayed: 230,

//         online: true,
//     },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,

//         online: false,
//     },
//     {
//         id: 'player-5',
//         name: 'Chelsy',
//         timePlayed: 80,

//         online: true,
//     },
// ];
// const result = players
//     .filter(item => !item.online)
//     .sort((pr, next) => next.timePlayed - pr.timePlayed);
// console.log(result);

//ЗАДАЧА 6 якщо число парне помножити на 2 (map) ______________

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = arr.map(item => {
//     if (!(item % 2)) {
//         return item * 2;
//     }
//     return item;
// });

//неявне повернення + тернарний
// const result = arr.map(item => (!(item % 2) ? item * 2 : item));
// console.log(result);

// -----map під капотом------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function customMap(arr, callback) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// }
// customMap(arr, foo);

// function foo(item) {
//     if (!(item % 2)) {
//         return item * 2;
//     }
//     return item;
// }
// console.log(customMap(arr, foo));

///flatMap

// const user = [
//     {
//         name: 'Bred',
//         skills: ['html', 'css'],
//     },
//     {
//         name: 'Kayle',
//         skills: ['js', 'react'],
//     },
//     {
//         name: 'Ajax',
//         skills: ['angular', 'vue'],
//     },
// ];

//через map
// const result = user.map(item => item.skills.map(skill => skill));
// console.log(result);

// через flat
// const result = user.flatMap(skill => skill.skiils);
// console.log(result);

//find з масива user
// const result = user.find(item => item.skills.includes('js')).name;
// console.log(result);

//findIndext
// const result = user.findIndex(item => item.skills.includes('vue'));
// console.log(result);

//filter
//відібрати непарні елементи // + ченінг

// const arr = [2, 5, 3, 8, 46, 1, 22, 3, 5, 0];
// const result = arr
//     .filter(item => item % 2)
//     .map((item, _, arr) => {
//         console.log(arr); // результат виконання фільтра
//         return item * 2;
//     });
// console.log(result);

//SORT===========================================================

// const user = [
//     {
//         name: 'Bred',
//         skills: ['html', 'css'],
//     },
//     {
//         name: 'Kayle',
//         skills: ['js', 'react'],
//     },
//     {
//         name: 'Ajax',
//         skills: ['angular', 'vue'],
//     },
// ];

// сортування рядків -- не вказуємо умову
// const arr = ['s', 'a', 'f', 'A', 'B', 'S'];
// // const result = arr.sort();
// const result = arr.sort((a, b) => a.localeCompare(b));
// console.log(result);
// const result = [...user].sort((pr, next) => pr.name.localeCompare(next.name));
// console.log(result);

/////ЗАДАЧІ АРТЕМА//////////////////

// const cars = [
//     {
//         make: 'Honda',
//         model: 'CR-V',
//         type: 'suv',
//         amount: 14,
//         price: 24045,
//         onSale: true,
//     },
//     {
//         make: 'Honda',
//         model: 'Accord',
//         type: 'sedan',
//         amount: 2,
//         price: 22455,
//         onSale: true,
//     },
//     {
//         make: 'Mazda',
//         model: 'Mazda 6',
//         type: 'sedan',
//         amount: 8,
//         price: 24195,
//         onSale: false,
//     },
//     {
//         make: 'Mazda',
//         model: 'CX-9',
//         type: 'suv',
//         amount: 7,
//         price: 31520,
//         onSale: true,
//     },
//     {
//         make: 'Toyota',
//         model: '4Runner',
//         type: 'suv',
//         amount: 19,
//         price: 34210,
//         onSale: false,
//     },
//     {
//         make: 'Toyota',
//         model: 'Sequoia',
//         type: 'suv',
//         amount: 16,
//         price: 45560,
//         onSale: false,
//     },
//     {
//         make: 'Toyota',
//         model: 'Tacoma',
//         type: 'truck',
//         amount: 4,
//         price: 24320,
//         onSale: true,
//     },
//     {
//         make: 'Ford',
//         model: 'F-150',
//         type: 'truck',
//         amount: 11,
//         price: 27110,
//         onSale: true,
//     },
//     {
//         make: 'Ford',
//         model: 'Fusion',
//         type: 'sedan',
//         amount: 13,
//         price: 22120,
//         onSale: true,
//     },
//     {
//         make: 'Ford',
//         model: 'Explorer',
//         type: 'suv',
//         amount: 6,
//         price: 31660,
//         onSale: false,
//     },
// ];

// //ЗАДАЧА 1 (map) повертає масив моделей усіх авто______________________
// const getModels = cars.map(car => car.model);
// console.log(getModels);

// //ЗАДАЧА 2 зміна прайсу // ціни в залежності від знижки_______
// const returnTotalSum = (cars, discount) => {
//     return cars.map(item => ({
//         ...item,
//         price: item.price * (1 - discount),
//     })); //100 - disc
// };
// console.log(returnTotalSum(cars, 0.2));
// console.log(returnTotalSum(cars, 0.4));

// //ЗАДАЧА 3 відфільтрувати щоб ціна була менше параметра
// const filtredByPrice = (cars, threshold) => {
//     return cars.filter(({ price }) => price < threshold);
// };
// console.log(filtredByPrice(cars, 30000));
// console.log(filtredByPrice(cars, 25000));

//ЗАДАЧА 4 відібрати машини які на розпродажі onSale - true ____________________________

// const getOnSaleCars = cars => cars.filter(({ onSale }) => onSale);
// console.log(getOnSaleCars(cars));

///ЗАДАЧА 4 знайти по машину по типу який цікавить________________

// const getcarsWithType = (cars, type) => cars.filter(({ type: carType }) => carType === type);

// console.log(getcarsWithType(cars, 'suv'));
// console.log(getcarsWithType(cars, 'sedan'));

//ЗАДАЧА 5 потрібно знайти Хонди які коштують менше 25 тисяч ________________

// const getHonda = (cars, carPrice, carName) =>
//     cars.filter(({ make, price }) => price < carPrice && make === carName);

// console.log(getHonda(cars, 25000, 'Honda'));

//ЗАДАЧА 6 метод повертає відсортований масив по сумі + деструкт __________________
// const getRangePrice = cars => [...cars].sort(({ price: a }, { price: b }) => a - b);

// console.log(getRangePrice(cars));
// console.log(getRangePrice);

//ЗАДАЧА відсортувати масив в алфавітному порядку та зворотньому в залежності від значення order____________________________________

// const sortByModel = (cars, order) =>
//     [...cars].sort(({ model: a }, { model: b }) =>
//         order === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
//     );
// //old variant
// // if (order === 'asc') {
// //     return [...cars].sort((a, b) => a.model.localeCompare(b.model));
// // } else {
// //     return [...cars].sort((a, b) => b.model.localeCompare(a.model));
// // }

// console.log(sortByModel(cars, 'asc')); //з першої до останньої
// console.log(sortByModel(cars, 'desc')); // з останньої до першої

//ЗАДАЧА порахувати скільки всього є автомобілів________________________

// const getTotalAmount = cars => cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

//через total

// function get(cars) {
//     let total = 0;
//     for (const { amount } of cars) {
//         total += amount;
//     }
//     return total;
// }
// console.log(get(cars));

//ЗАДАЧА відібрати машини які на розпродажі, і повернути їх моделі______________________ filter + map марка + модель

// const getModelsOnSale = cars =>
//     cars.filter(({ onSale }) => onSale).map(({ make, model }) => `${make} ${model}`);
// console.log(getModelsOnSale(cars));

//ЗАДАЧА повернення масиву onSale: true відсортованих за зростанням ціни

// const rangeCars = cars => {
//     return cars.filter(({ onSale }) => onSale).sort(({ price: a }, { price: b }) => a - b);
// }; //оскільки ми сортували на фільтрі то спред не потрібен, оскільки фільтр повертає новий масив
// console.log(rangeCars(cars));
// console.log(cars);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = ['mango', 'kiwi', 'apple', 'plum'];
// console.table(arr);

//array.lenght = 0 --- очищення масиву//очистити масив

//псевдомасив

// function arg() {
//     console.log(arguments); //псевдомасив
//     const args = Array.from(arguments); // перетворюємо псевдомасив в масив

//     console.log(args);
// }

//справжній масив якщо різна кількість параметрів

// function arg(...args) {
//     console.log(args);
// }

// arg(1, 2, 3);
// arg(1, 2, 3, 4, 5);
// arg(1, 2, 3, 4, 5, 6, 7, 8, 9);

///// розбираємо вкладений масив ///фор

// const arr = [1, 'hello', null, true, [1, 2, 3]];

// for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i];
//     if (Array.isArray(item)) {
//         for (let j = 0; j < item.length; j += 1) {
//             console.log(item[j]);
//         }
//         continue;
//     }
//     console.log(arr[i]);
// }

// ///перебрати масив через вайл

// const arr = [1, 'hello', null, true, [1, 2, 3]];
// let i = 0;
// while (i < arr.length) {
//     if (typeof arr[i] === 'string') {
//         arr[i] = false;
//     }
//     i += 1;
// }
// console.log(arr);

// const lastIndex = arr.length - 1;
// console.log(lastIndex); //3

// console.log(arr[2]); // aple

// arr[0] = 'first'; // перезапись первого елемента масива
// console.log(arr);

// console.log([1, 2, 3] === [1, 2, 3]); // false

//for перебрати масив

// const arr = ['max', 'igor', 'oleg', 'dima'];
// console.table(arr);

// for (let i = 0; i < arr.length; i += 1) {
//     arr[i] += '-name';
// }
// console.table(arr);

// for of // перебрати масив

// const names = ['max', 'igor', 'oleg', 'dima'];

// for (const name of names) {
//     console.log(name);
// }

//ЗАДАЧА 1 порахувати суму покупок в магазині_____________________
//--------------алгоритм---------
//1 перебрати масив
//2 написати змінну де буде зберігатися сума
//3 кожен елемент додати до тотал

// const cart = [54, 28, 105, 70, 92, 17, 120];

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log('total :', total);

/// переписать на фор оф

// for (const element of cart) {
//     total += element;
// }
// console.log('total :', total);

//добавить 10% налога

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);

// ЗАДАЧА 2 Сума всіх парниx чисел_______________________

//алгоритм  //змінна тотал // перебрать масив і якщо парне то додати до тотал

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];
// let total = 0;

// for (const number of numbers) {
//     if (!(number % 2)) {
//         total += number;
//     }
// }
// console.log(total);

/// перепис на фор

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i]; // щоб не писати numbers[i] для зручності ств іншу змінну
//     // console.log(numbers[i]); // перебір масиву

//     if (!(number % 2)) {
//         console.log(`${number} - pair`);
//         total += number;
//     }
// }
// console.log('total :', total);

//зворотня логіка (більш вірне написання)_________________________

// for (const num of numbers) {
//     if (num % 2) {
//         // console.log('This iteration skip', num); // непарні числа // пропускаємо
//         continue;
//     }
//     // console.log(num);
//     total += num;
// }
// console.log(total);

//ЗАДАЧА 3 Пошук логіна________________________________________

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';

// let message = `User ${loginToFind} not found`; // пишемо значення для більшості

///1.варіант репети

// const message = logins.includes(loginToFind) ? 'user found' : 'user not found';
// console.log(message);

//2.через цикл фор

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (loginToFind.includes(login)) {
//         message = `User ${loginToFind} found`;
//         break;
//     }
// }
// console.log(message);

///3.варінт репети (якщо дорівнює то брейк, якщо не дорівнює то контінью)

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = 'user found';
//         break; //якщо знайдено то цикл переривається
//     }
// }
// console.log(message);

///4.через фор оф //for of

// for (const login of logins) {
//     if (loginToFind.includes(login)) {
//         message = `User ${loginToFind} found`;
//         break;
//     }
// }
// console.log(message);

//ЗАДАЧА 4 пошук найменшого числа в масиві_______________________________________

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const num of numbers) {
//     if (num < smallestNumber) {
//         smallestNumber = num;
//     }
// }
// console.log('smallestNumber :', smallestNumber);

//ЗАДАЧА 5 Поєднати / з'єднати елементи масива в строку__________________________

// const friends = ['Mango', 'Poly', 'Kiwi', 'Alex'];

// // олдскульний варіант

// let str = '';
// for (const friend of friends) {
//     str += friend + ',';
// }
// str = str.slice(0, str.length - 1);
// console.log(str);

// //правильний варіант

// const str = friends.join(', '); // масив перетворює в строку
// console.log(str);

//ЗАДАЧА 6 змінити регістр // інверсія букв______________________________

// const str = 'JavaScript';

// //олдскульний варіант

// const letters = str.split(''); // перетворюємо в масив
// console.log(letters);
// let newCase = '';

// for (const letter of letters) {
//     // console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Lower case - ', letter);

//     //     newCase += letter.toUpperCase();
//     // } else {
//     //     console.log('Upper case -', letter);
//     //     newCase += letter.toLowerCase();
//     // }

//     //тернарний (більш правильний варіант)

//     const isEqual = letter === letter.toLowerCase();
//     newCase += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(newCase);

//ЗАДАЧА 7 скрипт рахує суму елементів двух масивів__________________________

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2, [90, 70]);

// for (const num of numbers) {
//     total += num;
// }
// console.log(total);

//ЗАДАЧА 8 Добавляємо і удаляємо карточки__________________________________

// const cards = ['card - 1', 'card - 2', 'card - 3', 'card - 4', 'card - 5'];

// console.table(cards);

//видалення по індексу
// const cardToRemove = 'card - 3';
// const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.table(cards);

//додавання елемента
// const cardToInsert = 'card - 6';
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

//обновлення елемента
// const cardToUpdate = 'card - 4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, 'new action');
// console.log(cards);

////////////////////////////////////////////////////////

// let arr = ['1', '2', '3', 'p'];
// const lastIndx = arr.length - 1; // 3 індекс ост елемента
// const lastElement = arr[lastIndx]; //сам останній елемент
// console.log(lastElement);
// // console.log(Array.isArray(arr));

// const arr = ['hello', null, true, 15];

// for (let i = 0; i < arr.length; i += 1) {
//     // let item = arr[i];

//     if (arr[i] === 15) {
//         arr[i] = 'love'; // заміна елемента масива
//     }
// }
// console.log(arr);

//ЗАДАЧА 9 Знайти всі співпадіння в масиві _________________________________

// const arr = ['a', 'b', 'c', 'b'];
// let counter = 0;

// for (const item of arr) {
//     if (item === 'b') {
//         counter += 1;
//     }
// }
// console.log(counter);

//ЗАДАЧА 10 видалити з масиву елементи що не є типом даних number________________________________________________________

// const arr = [3, 'hello', null, 42, false];

// if (isNaN(arr[i])) {
//     console.log(arr[i]);
// } // IsNaN приводить null і false до числа

// for (let i = 0; i < arr.length; i += 1) {
//     if (typeof arr[i] !== 'number') {
//         console.log(arr[i]);
//         arr.splice(i, 1); //реіндексація // авт зміна індексів
//         i -= 1; // пропустили null тому вертаємося щоб його прибрати
//     }
// }
// console.log(arr);

//якщо потрібно перевірити та видаляти якісь елементи з масиву то краще починати перебір з кінця, щоб не писати потім i-=1

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//     if (typeof arr[i] !== 'number') {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

//ЗАДАЧА 13 зворотній порядок літер_______________________________________

// const str = 'Welcome to the future';
// const SEPARATOR = '';
// const result = str.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(result);

//ЗАДАЧА 14 замінити числа в порядку зростання____________________________________

// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//     const currentEl = numbers[i];
//     const prevEl = numbers[i - 1]; // попередній елемент менше на 1
//     if (currentEl - prevEl !== 1) {
//         numbers[i] = prevEl + 1;
//     }
//     //якщо не по порядку
//     // if (currentEl <= prevEl) {
//     //     numbers[i] = prevEl + 1;
//     // }
// }
// console.log(numbers);

/////////////////////////

// const str = 'hello world';
// console.log(str.toLowerCase().replaceAll('', '-')); //-h-e-l-l-o- -w-o-r-l-d-
// console.log(str.toLowerCase().split('').join('-')); //h-e-l-l-o- -w-o-r-l-d

//ЗАДАЧА 15 перебрати масив та порядковий номер______________________

// const arr = ['first', 'second', 'third', 'four', 'five'];
// for (let i = 0, n = 1; i < arr.length; i += 1, n += 1) {
//     console.log(`${n} - ${arr[i]}`);
// }

//ЗАДАЧА 16 подвійна умова  в циклі вивести номер тел на імя користувача__________________________________________________

// let names = 'jacob, alex, olleg, ivan, thtyyhy';
// let numbers = '111111111, 000000000, 222222222, 333333333';
// names = names.split(',');
// numbers = numbers.split(',');
// // console.log(names);
// // console.log(numbers);

// for (let i = 0; i < names.length, i < numbers.length; i += 1) {
//     console.log(`${names[i]} - ${numbers[i]}`);
// }

//ЗАДАЧА 17 відсортувати в алфавітному порядку__________________________________

// const langs = ['c++', 'python', 'bjava', 'ahaskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
//     if (langs[0] > langs[i]) {
//         const result = langs.splice(i, 1)[0]; //якщо умова тру то вирізаємо слово
//         //щоб достати слово з масиву використовуємо індекс [0]
//         langs.unshift(result); //і пушимо на перед
//     }
// }
// console.log(langs);

//ЗАДАЧА 18 знайти найдовше слово в рядку або відібрати декілька найдовших_________________________________

// function findLongestWord(string) {
//     const str = string.split(' ');
//     let biggestWord = str[0];
//     const allWords = [];

//     for (const item of str) {
//         if (item.length > biggestWord.length) {
//             biggestWord = item;
//         }
//     }

//     for (const item of str) {
//         if (item.length === biggestWord.length) {
//             allWords.push(item);
//         }
//     }
//     return allWords;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog swimmi'));
// // console.log(findLongestWord('Google do a roll'));
// // console.log(findLongestWord('May the force be with you'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///у стрелочной функції немає змінної  arguments можна лише через рест (...rest)
//використовують в основному для колбеків
//викликаються лише після оголошення
//неявне повернення -- без return і без {}
//якщо у стрілочної функції неявне поверненя і немає {} то return  підставляється автоматично // якщо будемо приписувати я return вручну без {} буде помилка
//this в стрілкових функціях посилається на глобальний об'єкт window
//коли повертаємо об'єкт то вказуємо обов'язково return оскільки () використовуються для подвійних тернарних виразів
//інлайн стрілочні функції записується в агрументах

// function add(a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// }
// console.log(add(2, 3, 4));

// //arr
// const arrow = (...arg) => {
//     console.log(arg);
//     // return a + b + c;
// };
// console.log(arrow(8, 6, 2));
//короткий синтаксис
// const arrow = (a, b, c) => a + b + c;

//повернення об'єктів

// const fnA = function () {
//     return {
//         a: 5,
//     };
// };
// console.log(fnA());

// //arrow
// const arrowFn = () => ({ a: 5 });
// //() - вираженіє
// console.log(arrowFn());
// Change code below this line

//this -- у стрілках немає свого this

// const showthis = () => {
//     console.log('this in showThis:', this);
// };
// showthis(); // underfined

//////АРТЕМ/////

//рефакторинг

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
// const add = (first, second) => first + second;
// const sub = (first, second) => first - second;

// // function add(first, second) {
// //     return first + second;
// // }

// // function sub(first, second) {
// //     return first - second;
// // }

// console.log(each(arr, add)); //add - це наш другий параметр - колбек
// console.log(each(arr, sub));

//arow + this = underfined

// const user = {
//     userName: 'test user',
//     say() {
//         console.log(`Hello ${this.userName}`);
//     },
//     sayHello: () => {
//         console.log(`Hello ${this}`);
//     },
// };
// user.say();
// user.sayHello();

////////////////////ЗАДАЧІ

//ЗАДАЧА 1 ПЕРЕПИС НА СТРІЛКУ _________________________________

// // const createProduct = (obj, callback) => {
// //     const product = {
// //         id: Date.now(),
// //         ...obj,
// //     };
// //     callback(product);
// // };

// //перепис на універсальний варіантт

// const createProduct = (obj, callback) =>
//     callback({
//         id: Date.now(),
//         ...obj,
//     });

// // function logProduct(obj) {
// //     console.log(`Product ${obj.name}`);
// // }
// // function logTotalPrice({ price, quantity }) {
// //     //деструкт
// //     console.log(`Total price: ${price * quantity}`);
// // }
// ///////перепис
// const logProduct = product => console.log(product.name);

// const logTotalPrice = ({ price, quantity }) => console.log(`Total price: ${price * quantity}`);

// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'peach', price: 40, quantity: 5 }, logTotalPrice);

//ЗАДАЧА 2 перепис на стрілку ____________________________________

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

// const handleSuccess = message => console.log(`Success! ${message}`);

// const handleError = message => console.log(`Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

///Задача 3 інлайн стілочні функції переписать________________________________

// function each(array, callback) {
//     const newArr = [];
//     for (const item of array) {
//         newArr.push(callback(item));
//     }
//     return newArr;
// }

// console.log(each([2, 3, 4], item => item - 10));
// console.log(each([2, 3, 4], item => item * 2));
// console.log(each([2, 3, 4], item => item + 10));
// console.log(each([2.5, 3.2, 4.1], item => Math.ceil(item)));
// console.log(each([2.9, 3.5, 4.2], item => Math.floor(item)));

//задача 4 переписати на for each + arrow______________________________

// const logItems = arr => arr.forEach((arr, idx) => console.log(` ${idx + 1} - ${arr}`));

// logItems(['mango', 'banana', 'orange']);
// logItems(['apple', 'plum', 'watermelon']);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.Взаємодія з інпутом // отримання посилання з кнопки_____________________________

// const btnAdd = document.querySelector('button[data-add]'); // отримання доступу по тегу
// // btnAdd.textContent = 'change'; // зміна назви кнопки
// const resetBtn = document.querySelector('button[data-reset]');

// const valueInput = document.querySelector('input[data-value]');
// const outPutEl = document.querySelector('.js-output span');

// let total = 0;
// btnAdd.addEventListener('click', function () {
//     console.log('click age');
//     const value = Number(valueInput.value);
//     console.log(value);

//     total += value;
//     outPutEl.textContent = total;
//     valueInput.value = '';
// });

// resetBtn.addEventListener('click', function () {
//     total = 0;
//     outPutEl.textContent = total;
// });

//2. Назва URL__________________________________

// const title = 'Top 10 benefits of React framework';

// const toLower = title.toLowerCase();
// console.log(toLower);

// const words = toLower.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

//the better

// const normalizedWords = title.toLowerCase().split(' ').join('-'); // ченінг
// console.log(normalizedWords);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ЗА ДОПОМОГОЮ ЦИКЛА ФОР  - перебираються числа, рядки перебираються за допомогою FOR OF здебільшого

//ЦИКЛИ ВИКОРИСТОВУЮТЬСЯ ДЛЯ МАСИВА

// for (let i = 0; i <= 5; i += 1) {
//     console.log(i);
// }
// console.log('з низу вверх');

// ////

// for (let i = 10; i >= 0; i -= 1) {
//     console.log(i);
// }
// console.log('з верху вниз');

//1. ВИВІД НЕПАРНИХ ЧИСЕЛ_____________________________________

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i); // 1, 3, 5, 7, 9
// }

//2. Підрахунок/ сума загальної суми зарплати працівників // зарплата це рандомне число від 500 - 5000_______________________________________________

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

//     salary = +salary; // приведення до намбер

//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSalary += salary;
//     // console.log('totalSalary:', totalSalary); // покаже зп після кожної ітерації
// }
// console.log('totalSalary:', totalSalary); // одну загальну

//3. Напиши суму всіх парних чисел, які входять у відрізок від мін до макс // тобто якщо діапазон 0-5 то сума парних = 6(2+4)______________________________

//парне число те яке у відсотку від ділення дає нуль, тобто повністью влізає (4 % 2)

// const min = 5;
// const max = 14;
// let total = 0;

// ///спочатку перевіряємо поганий кейс // непарні числа, і йдемо далі // зворотнья логіка
// for (let i = min; i <= max; i += 1) {
//     // і +=2 не можна бо число спочатку може бути не парне
//     if (i % 2 !== 0) {
//         console.log('Не четное: ', i);
//         continue; // пропускає//йде далі//тобто якщо число не чотне -- пропусти
//     }
//     console.log('четное:', i);
//     total += i;
// }
// console.log('total: ', total);

// ЗАДАЧА 4 Сума всіх парниx чисел
//алгоритм  //змінна тотал // перебрать масив і якщо парне то додати до тотал

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//     if (!(number % 2)) {
//         total += number;
//     }
// }
// console.log(total);

/// перепис на фор
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i]; // щоб не писати numbers[i] для зручності ств іншу змінну
//     console.log(numbers[i]); // перебір масиву

//     if (!(number % 2)) {
//         total += number;
//     }
// }
// console.log('total :', total);

//ЗАДАЧА 3 Пошук логіна

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message;

// for (let i = 0; i < logins.length; i += 1) {
//     if (loginToFind.includes(logins[i])) {
//         message = `User ${loginToFind} found`;
//         break;
//     } else {
//         message = `User ${loginToFind} not found`;
//     }
// }
// console.log(message);

///через фор оф //for of

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message;

// for (const login of logins) {
//     if (loginToFind.includes(login)) {
//         message = `User ${loginToFind} found`;
//         break;
//     } else {
//         message = `User ${loginToFind} not found`;
//     }
// }
// console.log(message);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//параметри функції = function add (text) -- це як змінна лет
//аргументи функції це те що пишемо під час виклику add('hello')

//function expression - функція яка присвоюється в змінну // можемо викликати лише після оголошення
//function declaration - функція без змінної (поведінка хойстинг - можливість викликати функцію перед написанням)

//рекурсія // в пустий масив додати числа в порядку зростання______________________________________

// function countUp(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countUp(n - 1);
//         countArray.push(n); //повертаємо по колстеку // тобто той який був самий останній буде першим( тобто 5 - 1 = 4, пушемо 5 першою а повернеться останньою, останнім у нас буде один, при знятті з колстеку він буде першим)
//         return countArray;
//     }
// }
// console.log(countUp(5));

//ОБЛАСТІ видимості

//// 1.
//let someValue = 4;
// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

//// console.log(someValue); //error

//2.
// let someValue = 4;
// if (true) {
//     someValue = 11;
// }
// console.log(someValue); //11

////3
// let someValue = 4;
// if (true) {
//     let someValue = 11
// }
// console.log(someValue); //4

////4
// let someValue = 2;
// function checkScope(someValue) {
//     someValue = 45;
//     return someValue;
// }
// checkScope(someValue);
// console.log(someValue); //2

////5
// let someValue = 2;
// function checkScope() {
//     someValue = 45;
//     return someValue;
// }
// checkScope(someValue);
// console.log(someValue);

////6 в даному випадку сторюються два масиви і ми змінюємо один але інший залишається незмінний

// let someValue = ['hello', 'my', 'name', 'scope'];
// function check(arr) {
//     arr = Array.from(arr);
//     arr.splice(0, 3);
// }
// check(someValue);
// console.log(someValue);

//ЗАДАЧА 1  ЗАГАДКА________________________________________________________________________________

// function check(text, answer) {
//     let message = prompt(text);
//     if (message) {
//         // якщо меседж це тру то пишемо просто так -- (message)//приводимо до одного регістру
//         message = message.toLowerCase();
//     }
//     console.log(message);
//     return message === answer;
// }

// console.log(check('Хоч не літак, а крилатий, без крил не може працювати', 'вітряк'));
// console.log(check('Через воду він проходить, а сам з місця вік не сходить', 'міст'));

//ЗАДАЧА 2 Порахувати кількість голосних літер у реченні_____________________________________

// function countVowel(str) {
//     const vowels = 'aeiou';
//     let result = 0;
//     str = str.toLowerCase(); //завжди рядки приводимо до нижнього регістру

//     for (let i = 0; i < str.length; i += 1) {
//         if (vowels.includes(str[i])) {
//             result += 1;
//         }
//     }
//     return result;
// }
// console.time('fn');
// console.log(countVowel('HELLO WORLD'));
// console.log(countVowel('Junior web developer'));
// console.timeEnd('fn');

//ЗАДАЧА 3 лайки користувачів_________________________________________

// function createStr(arr) {
//     let result = '';
//     switch (arr.length) {
//         case 0:
//             result = 'no one likes you';
//             break;
//         case 1:
//             result = `${arr[0]} likes you`;
//             break;
//         case 2:
//             result = `${arr[0]} and ${arr[1]} like this`;
//             break;
//         case 3:
//             result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//             break;
//         default:
//             result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//     }
//     return result;
// }

// console.log(createStr([])); //no one likes you
// console.log(createStr(['Peter'])); // peter likes you
// console.log(createStr(['Jacob', 'Alex'])); // jacob and alex like this
// console.log(createStr(['Max', 'John', 'Mark'])); // max , john and Mark like this
// console.log(createStr(['Alex', 'Jacob', 'Mark', 'Max', 'Oleg'])); //alex, jacob and 2 others like this

//ЗАДАЧА 4 за допомогою функції відібрати ті елементи які дублюються / повторюються в масиві___________________________________________

// function getCommonElements(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) {
//             //                               i + 1 - означає перевір після мене / наступного
//             if (!result.includes(arr[i])) {
//                 result.push(arr[i]);
//             } //уникаємо повторень // якщо елемент не включається в новий масив то додай його
//         }
//     }
//     return result;
// }
// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 17, 19, 1, 1, 1]));

//ЗАДАЧА 5  функція повинна відібрати з масиву лише жіночі імена і повернути їх______________________________________

// const users = ['artem', 'anna', 'larisa', 'maksim', 'svetlana', 'david', 'roman', 'olga'];
// const men = ['artem', 'maksim', 'david', 'roman'];

// function getWomen(users, men) {
//     const women = [];
//     for (const user of users) {
//         if (!men.includes(user)) {
//             women.push(user);
//         }
//     }
//     return women;
// }

// console.log(getWomen(users, men));

//ЗАДАЧА 6 порахувати суму покупок в магазині__________________________________

// const calculatePtice = function (items) {
//     let total = 0;
//     for (const value of items) {
//         total += value;
//     }
//     return total;
// };
// console.log(calculatePtice([1, 2, 3]));
// console.log(calculatePtice([5, 10, 15, 20]));
// console.log(calculatePtice([2, 5, 7]));

//ЗАДАЧА 7 функція для перебору масиву___________________________________

// function logItems(array) {
//     for (const arr of array) {
//         console.log(arr);
//     }
// }
// logItems(['mango', 'kiwi', 'poly', 'ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавіатура', 'наушники', 'часи']);

//ЗАДАЧА 8 ЗНАЙТИ ЛОГІН_____________________________________________

// const logins = ['mango', 'peach', 'apple'];

// // function findLogin(allLogins, loginsToFind) {
// //     for (const login of allLogins) {
// //         if (login === loginsToFind) {
// //             return 'found'; // при першому збігу завершай функцію
// //         }
// //     }
// //     return 'not found'; //можна писати навіть без змінних
// // }

// ///через тернарний

// function findLogin(allLogins, loginsToFind) {
//     return allLogins.includes(loginsToFind) ? 'found' : 'not found';
// }

// console.log(findLogin(logins, 'avacoda'));
// console.log(findLogin(logins, 'peach'));
// console.log(findLogin(logins, 'apple'));

//ЗАДАЧА 10 знайти найменше число________________________________________

// function findSmallestNum(numbers) {
//     let smallNum = numbers[0];
//     for (const num of numbers) {
//         if (num < smallNum) {
//             smallNum = num;
//         }
//     }
//     return smallNum;
// }
// console.log(getSmallestNum([5, 10, 20, 6, 8, 1]));
// console.log(getSmallestNum([5, 10, 0, 6, -2, 1]));

//ЗАДАЧА 11 змінить регістр ___________________________________

// function ChangeCase(str) {
//     // const letters = str.split('');
//     let invertStr = '';

//     for (const letters of str) {
//         // if (letters === letters.toLowerCase()) {
//         //     invertStr += letters.toUpperCase();
//         //     console.log(letters);
//         // } else {
//         //     invertStr += letters.toLowerCase();
//         // }

//         //через тернарний
//         invertStr +=
//             letters === letters.toLowerCase() ? letters.toUpperCase() : letters.toLowerCase();
//     }

//     return invertStr;
// }
// console.log(ChangeCase('QdedrJIM'));

//ЗАДАЧА 12 рядок розділений по тире (повернення через ретерн)____________________

// function slugiFy(str) {
//     return str.toLowerCase().split(' ').join('-');
// }
// console.log(slugiFy('Hello my aborable woRld'));

//ЗАДАЧА 12 аргументи (дадавання)______________________________________

// function add(...arg) {
//     console.log(arg);

//     let total = 0;
//     for (const num of arg) {
//         total += num;
//     }
//     return total;
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

//ЗАДАЧА 13 повернути числа які співпадають у двох масивах_______________________

// function filterNum(array, ...arg) {
//     const newArr = [];

//     for (const element of array) {
//         if (arg.includes(element)) {
//             newArr.push(element);
//             // console.log(`${element} - is everywhere `);
//         }
//     }
//     return newArr;
// }
// console.log(filterNum([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNum([10, 15, 25, 30], 23, 30, 18, 15));

//ЗАДАЧА 14 порівняти чи більше кожне число елементу масиву з вказаним числом______________________________________

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//     for (const item of arr) {
//         if (item <= target) {
//             return 'Fail';
//         }
//     }

//     return 'Success';
// }
// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

//ЗАДАЧА 15 функція повинна розбивати масив на певну кількість елементів в ньому // створити масив в масиві з певною кількістю елементів в ньому//порізати масив//відбирати елементи в масиві за допомогою slice________________________________________

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += count) {
//         const combination = arr.slice(i, i + count);
//         result.push(combination);
//     }
//     return result;
// }

// console.log(getCombination(data, 2));
// console.log(getCombination(data, 3));

//ЗАДАЧА 16 площа прямокутника______________________________________

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');
//     return Number(dimensions[0]) * +dimensions[1]; // +dimensions = приведення до числа
// }
// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));

//ЗАДАЧА 17 функція для роботи з курсами / видаляє / додає / змінює__________________________________________

// const courses = ['html', 'css', 'javascript', 'react', 'postgreSQL'];

//додавання курсу

// function addCourse(name) {
//     if (courses.includes(name)) {
//         alert('Ви вже маєте такий курс');
//         // return 'Ви вже маєте такий курс';
//     } else {
//         courses.push(name);
//     }
// }
// addCourse('Express');
// console.log(courses);
// console.log(addCourse('css'));

// видалення курсу(мій варіант)

// function removeCourse(name) {
//     if (!courses.includes(name)) {
//         return 'Ви не маєте такого курсу';
//     } else {
//         courses.splice(courses.indexOf(name), 1);
//     }
// }

//варіант артема(швидший // бо якщо буде багато методів тормозитиме код)

// function removeCourse(name) {
//     const idx = courses.indexOf(name);
//     if (idx === -1) {
//         return 'Ви не маєте такого курсу';
//     }
//     courses.splice(idx, 1);
// }

// removeCourse('react');
// console.log(courses);
// console.log(removeCourse('vue'));

//оновлення курсу

// function updateCourse(oldName, newName) {
//     const idx = courses.indexOf(oldName);
//     const inCourses = courses.includes(newName);

//     if (idx !== -1 && !inCourses) {
//         courses[idx] = newName; // швидше працюватиме
//         // courses.splice(idx, 1, newName);
//     } else if (inCourses) {
//         return 'ви вже вивчаєте цей курс';
//     } else {
//         return 'такого курсу не знайдено';
//     }
// }
// updateCourse('html', 'nestJS');
// console.log(updateCourse('qwerty', 'nestJS'));
// console.log(courses);

//ЗАДАЧА 18 індекс маси тіла____________________________________________

// const bmi = calcBMI('88,3', '1.75');

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));

//     // return Number((weight / Math.pow(height, 2)).toFixed(1));
//     return Number((weight / height ** 2).toFixed(1));
// }

// console.log(bmi);

//ЗАДАЧА 19 найменше число через псевдомасив_____________________________________

// function min(...arg) {
//     let smallestNumber = arg[0];
//     for (let i = 0; i < arg.length; i += 1) {
//         if (arg[i] < smallestNumber) {
//             smallestNumber = arg[i];
//         }
//     }
//     return smallestNumber;
// }
// console.log(min(5, 2, 8));
// console.log(min(5, -5));
// console.log(min(0, 5, 3, -9, 5, 6, -45));

//ЗАДАЧА 20 -- вивід елемента по порядковому номеру___________________________

// function num(items) {
//     for (let i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }
// num(['first', 'second', 'third', 'four', 'five', 'six', 'seven']);

//ЗАДАЧА 21 знайти найбільше число в рядку з різною кількістю елементів (псевдомасив)__________________________________________________

// function findLargestNumber() {
//     // const arr = Array.from(arguments)
//     const arr = [...arguments];
//     let largestNum = arr[0];
//     for (const item of arr) {
//         if (item > largestNum) {
//             largestNum = item;
//         }
//     }
//     return largestNum;
// }
// console.log(findLargestNumber(2, 17, 94, 265));
// console.log(findLargestNumber(49, 4, 7, 86, 12, 26));

// знайти найбільше число коли масив в масиві (приклад рекурсії) (відео м2 у2 1:52:00)_____________________________________________

// function findLargestNumber() {
//     let largestNum;

//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             largestNum = num;
//             break;
//         }
//     }
//     //шукаємо перше найбільше число не в масиві це 19 і призначаємо в largestNum

//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             if (num > largestNum) {
//                 largestNum = num;
//             }
//             //потім перебираємо решту чисел и перевизначаємо 19 на найбільше якщо є
//         } else {
//             largestNum = findLargestNumber(...num);
//             // розпилення масиву прибирає одні дужки [[1, 556], 9, 95] => [1, 556], 9, 95 потім знову розпилили і маємо 1, 556...
//         }
//     }

//     return largestNum;
// }

// console.log(findLargestNumber(2, 17, 94, 265));
// console.log(findLargestNumber(49, 4, 7, 86, 12, 26));
// console.log(findLargestNumber([[1, 556], 9, 95], 19, 4, 7, 12, 26));

//ЗАДАЧА 22 середнє значення неоднакова кількість елементів псевдомасив________________________________________

// function calAverage() {
//     console.log(arguments);
//     let total = 0;
//     for (const item of arguments) {
//         total += item;
//     }
//     return total / arguments.length;
// }
// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

//ЗАДАЧА 23 функція для переведення хвилин у години_________________________________

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const min = Math.floor(minutes % 60);

//     return `${hours.toString().padStart(2, 0)}:${min.toString().padStart(2, 0)}`;
// }
// console.log(formatTime(70));
// console.log(formatTime(1444));

//////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////

// console.log(3 > 2 > 1); // false бо 3>2 = true = 1 1>1 ---false

//_______________МЕТОДИ________________

//метод trim -- видаляє пропуски
//PadStart(2, '0') -- додає нуль на початок
// const remainder = 25;
// console.log(String(remainder).padStart(5, '0'));

//==============ЗАДАЧІ=======================

//1 Ввід назви через  пром та алерт _______________________

// let userInput = prompt('Яка назва JavaScript?').trim();
// console.log(userInput);
// if (userInput === 'ESMAScript') {
//     alert('Right!');
// } else {
//     alert('Не знаєте EsmaScript');
// }

//2. рядок який виводить години та хвилини в консоль як на годиннику / ГОДИННИК______________________________

// const time = 70;
// const hours = Math.floor(time / 60);
// const modifyHour = String(hours).padStart(2, 0);
// const minutes = time % 60;
// const modifyMinutes = String(minutes).padStart(2, 0);
// console.log(`${modifyHour}:${modifyMinutes}`);

///// або
//console.log(`${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}`);
/////

// 3 вивід всіх парних чисел // з більшого до меншого_________________________

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//     if (!(i % 2)) {
//         console.log(i);
//     }
// }

// непарні // з меншого до більшого

// const max = 50;
// const min = 23;

// for (let i = min; i <= max; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

//4. за допомогою цикла фора додайте всі парні цифри він мін до макс_______________

// const min = 10;
// const max = 50;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (!(i % 2)) {
//         total += i;
//     }
// }
// console.log(total);

//5. вхід по паролю_____________________________________________________

// const login = prompt('Введіть логін');

// if (login === 'admin') {
//     let key = prompt('Enter you password');
//     if (!key) {
//         console.log('cancel');
//     } else {
//         key === 'i admin' ? alert('hello') : alert('wrong pasword');
//     }
// } else {
//     alert('Я вас не знаю');
// }

//6. числа додаються поки не натисните кенсел /cancel // зациклення робить за допомогою do while_________________________________________________

// let inputValue = prompt('Enter number');
// let check = false;
// let total = 0;

// do {
//     if (inputValue) {
//         check = true;
//         inputValue = prompt('Enter number');
//         total += Number(inputValue);
//     } else {
//         check = false;
//         alert(`Total summ = ${total}`);
//     }
// } while (check);

//7 дефолтне значення______________________________________

//7.1

// const incomingValue = 2;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue; //якщо ввдене значення буде null undefined то виведеться введене значення а в іншому випадку виведеться дефолтне
// console.log(value);

//7.2

// const incomingValue = Number('25o');
// const defaultValue = 10;
// const value = incomingValue || defaultValue; //якщо ввдене значення буде якесь фолсі значення то виведеться дефолтне
// console.log(value);

//8 зробити першу літеру великою / заглавною_________________________________

// const str = 'string not starting';
// const largestStr = str[0].toUpperCase();
// console.log(largestStr);
// const total = largestStr + str.slice(1);
// console.log(total);

//9 приклад канкатенації з рядками________________________________

// const age = 25;
// const name = 'oleg';
// console.log('hello my name is ' + name + ' I`m ' + age + ' years old'); //конкатенація

//10 обрахунки зп витрат та премії

// let value = Number(prompt('what is your salary?'));
// let total = value * 1.15;
// alert(`Ваша зп: ${total}`);
// total *= 0.9;
// alert(`після сплати податків залишилось ${total}`);
// total -= 190;
// alert(`after shops left cash ${total}`);
// total /= 2;
// alert(`you give cash wife and left ${total}`);

//11 створит функцію та підрахувати суму зарплат співробітників в об'єкті____________________________________

// const salary = {
//     mango: 100,
//     poly: 160,
//     ajax: 1470,
// };
// function totalSumm(salaries) {
//     let total = 0;
//     for (const value of Object.values(salaries)) {
//         total += value;
//     }
//     return total;
// }
// console.log(totalSumm(salary));

//12 створити об'єкт з 3 методами один перемножає, інший рахує суму, інший приймає властивості об'єкта____________________________________________

// const calculator = {
//     read(a, b) {
//         this.val1 = a;
//         this.val2 = b;
//     },
//     multiply() {
//         return this.val1 * this.val2;
//     },
//     sum() {
//         return this.val1 + this.val2;
//     },
// };
// calculator.read(2, 4);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.multiply());

//13 операції з масивом (ченінг)_____________________________________

// const arr = ['best', 'the', 'foo', 'ts', 'js'];
// arr.splice(arr.indexOf('foo'), 1);

// const result = arr.reverse().join(' ');
// console.log(result);

//14 порахувати елементи в об'єкті і вивести їх назву та кількість__________________________________________________

//алгоритм 1 об'єднати всі об'єкти в один

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react', 'nodejs'] },
// ];
// const allTags = tweets.flatMap(tweet => tweet.tags); //поєднали всі теги
// console.log(allTags);

// const stats = allTags.reduce(
//     (acc, item) => {
//         return {
//             ...acc,
//             [item]: acc[item] ? acc[item] + 1 : 1,
//         };
//     },
//     {} //== acc сховище = reduce
// );
// console.log(stats);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//зправа від =  це літерал об'єкта {}
//ключ: свойство -- всегда строки

//якщо ім'я ключа починається з _ (нижнього підкреслення) то таке імя не можна змінювати напряму а лише через set / get  -- відео заняття 5 -  48:41

//object.freeze справцювує лише на об'єктах // не заморожує вкладені об'єкти// щоб їх заморозити необхідно звернутися до нього через .

//деструктуризація для функції - обов'язково робимо  = {}

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//---------------------------------------------------------------------------------

/// 1.ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ ТА ОПЕРАТОР НУЛЬОВОГО ЗЛИТТЯ  (??)
//1.1
// const incomingValue = 5;
// const result = incomingValue + Number('qwerty'); // NaN
// console.log(result);
// const defaultValue = 10;
// const value = result || defaultValue;
// console.log(value); //10

//1.2 ??
// const incomingValue = 5;
// let test = 0;

// const value = test ?? 'some'; // коли потрібно повернути нуль ?? працює з  null і undefined
// console.log(value);

//1.3 ||
// const incomingValue = 5;
// let test = 0;

// const value = test || 'some'; // 0 // бо || працює з нулем і ще 5 значеннями фолс
// console.log(value);

///2.

// let weight = '88,3';
// let height = '1.75';
// weight = Number(weight.replace(',', '.')); // ченінг - метод на методі
// height = +height; // приводить до числа // унарний плюс
// // const bmi = weight / Math.pow(height, 2);
// const bmi = Number((weight / height ** 2).toFixed(1)); // піднесення до степеня
// console.log(bmi); // 28.8

///promt

// const message = 'введите число';
// let quantity = Number(prompt(message)); // промт повертає рядок
// // quantity = Number(quantity); // перетворюємо в число результат промта
// console.log(quantity);
// console.log(typeof quantity);

//

//parceInt - parseFloat
// let years = '25yers';
// let result = Number.parseInt(years);
// console.log(result);
// /////
// let weight = '25.3kg';
// let conseqvent = Number.parseFloat(weight);
// console.log(conseqvent);

// //// toFixed

// const salary = 125.6185444;
// let fin = Number(salary.toFixed(0)); //126 // повертає рядок
// // fin = Number(fin); // привели до числа
// console.log(fin);

//Nan

// let quantity = '30';
// let value = 'its just a text';
// console.log(Number(value));

//Math

// const base = 2;
// const power = 5;
// // const result = Math.pow(base, power);
// console.log(base ** power);
// console.log(Number(Math.sqrt(200).toFixed(2))); // Math.sqrt - квадратний корінь

/* ЗАДАЧА 1. Написати скрипт який просить внести число і степень, а потім вираховує його і результат виводить в консоль*/

// let base = prompt('Enter your number');
// base = Number(base);
// console.log(base);

// let power = prompt('Give me your power');
// power = Number(power);
// console.log(power);

// // const result = Math.pow(base, power);
// // console.log(result);

// const result = base ** power;
// console.log(result);

//випадкові числа

// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);
// // console.log(Math.round(result));
// console.log(result);

//випадкове значення з  масиву // рандомна зміна кольору боді

// const colors = ['blue', 'yellow', 'pink', 'green', 'purple', 'orange'];

// const max = colors.length - 1;
// const min = 0;
// const result = Math.round(Math.random() * (max - min) + min);
// const color = colors[result];
// console.log(color);

// document.body.style.backgroundColor = color;

//нормализация

// const brand = prompt('Enter your brand');
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

/// вариант 2

// let brand = 'saMSUnG';
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// поиск в строке // проверка на спам

// const block1 = 'spam';
// const block2 = 'sales';

// const str1 = 'gtjgrtijg grmkjg rgfkjrg spam';
// const str2 = 'gtjgrtijg grmkjg rgfkjrg SALES';
// const str3 = 'gtjgrtijg grmkjg rgfkjrg';

// console.log(str1.includes(block1));
// console.log(str1.includes(block2));

// console.log(str2.includes(block1));
// console.log(str2.toLowerCase().includes(block2)); //якщо великі літери

// console.log(str3.includes(block1));
// console.log(str3.includes(block2));

//ЗАДАЧі

//1. Скрипт входження числа в певний проміжок________________________

//до х1 //менше
//после х2 //більше
//от х1 до х2
//до х1 чи після х2

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок після ${x2}?`, number > x2);
// console.log(`Число ${number} попадает в отрезок від ${x1} до ${x2}?`, number > x1 && number < x2);
// console.log(
//     `Число ${number} попадает в отрезок до ${x1} чи після ${x2}?`,
//     number < x1 || number > x2
// );

//2. Напиши скрипт який провіряє можливість написати людині. Для цього користувач повинен бути другом/онлайн/без режиму не турбувати__________________________

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd; // не включений
// console.log('Можна відкрити чат?', canOpenChat);

//3 перевірити доступ по підписці до контенту , якщо vip / pro  - то доступ відкритий_______________________________

// const sub = 'free';

// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть ли доступ к контенту', canAccessContent);

///4.покупка в магазині // оплата і перевірка балансу________________________

//моє рішення

// let balance = 10000;
// const payment = 2000;
// let message;
// const result = balance - payment;

// if (payment <= balance) {
//     message = `Thank you for your purchase. You have ${result} credits yet`;
// } else {
//     message = `Not enought money, you have only ${balance} credits but you ordered for the amount ${payment}`;
// }
// console.log(message);

//репета

// console.log(`Общая стоимость заказа ${payment}`);
// if (payment <= balance) {
//     balance -= payment;
//     //balance = balance - payment
//     console.log('Все хорошо, снимаем деньги');
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('Не достаточно денег');
// }
// console.log('Операция завершена');

//5. Скрипт  витрачених грошей і вид підписки та знижка/скидка/ відсоток від суми__________________________________________

//від 100 - 1000 - бронза скидка 2 % = 0.02
//від 1000 - 5000 - серебряний партнер скидка  5% = 0.05
// якщо більше 50000 - золотий скидка 10% = 0.1
//менше 100 - не партнер скидки немає

// [1,5) = 1,2,3,4 - включно з 1 і без 5

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('бронза скидка 2 %');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('серебряний партнер скидка  5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('золотий скидка 10%');
//     discount = 0.1;
// } else {
//     console.log('скидки нема');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount; // скидка
// console.log(`Оформляем [заказ] на суму ${payment} со скидкой ${discount * 100}%`); //[] - динамическое значение
// totalSpent += payment;
// console.log(`Общая сума потраченного в магазине ${totalSpent}`);

//7. Знайти найбільше та найменше число в масиві (не до кінця) ____________________

// function heightAndLow(str) {
//     const num = str.split(' ');

//     const max = Math.max(...num);
//     const min = Math.min(...num);

//     return `${max} and ${min}`;
// }
// console.log(heightAndLow(1, 7, 8, 20, 6));

// Change code below this line

// const str = 'hello world';
//___________________________________________________________________________________
//1. години та хвилини //якщо немає хвилин виводити одні години // minutes > 0 можна не ставити бо нуль і так дасть фолс__________________________

// const hours = 14;
// const minutes = 3;
// let timeStr;

// if (minutes) {
//     console.log(`${hours} g ${minutes} xv`);
// } else {
//     console.log(`${hours} g`);
// }
//2. Вивести нуль / додтнє число / негативне число // перевірка на нуль_________________________

// const userInput = Number(prompt('Введіть число'));
// if (!userInput) {
//     console.log('Це нуль');
// } else if (userInput > 0) {
//     console.log('Позитивне число');
// } else {
//     console.log('Негативне число');
// }

//// парні / непарні

// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2 === 0) {
//     console.log('парне');
// } else {
//     console.log('not');
// }

//// аналог

// const userInput = Number(prompt('Введіть число'));
// if (!(userInput % 2)) {
//     console.log('парне');
// } else {
//     console.log('not');
// }

//ще більше оптимізували

// const userInput = Number(prompt('Введіть число'));
// if (userInput % 2) {
//     console.log('not');
// } else {
//     console.log('парне');
// }

//тернарний
// const userInput = Number(prompt('Number'));
// console.log(userInput % 2 ? 'not' : 'yes');

///як обрати нуль // знайти нуль

//некоректний варіант

// if (0) {

// } else {
//     console.log('zero');
// }

// // вірний варіант

// if (!0) {
//     console.log('zero');
// }

//3. Порівняти числа і вивести в консоль найбільше число якщо вони більше 100 , і додати їх якщо менше ____________________________________________

// const a = 120;
// const b = -25;

// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }

///тернарний

// const a = 20;
// const b = 370;

// if (a > 100 && b > 100) {
//     console.log(a > b ? a : b);
// } else {
//     console.log(b + 512);
// }

////4.перевірка чи закінчується рядок цим символом, якщо ні, то потрібно його додати___________________________________

// let link = 'https://my-sites.com/about';
// if (!link.endsWith('/')) {
//     link += '/';
// }
// console.log(link);

///5, якщо немає такого символу на кінці то, то додай якщо рядок включає май сайт______________________________

//мій варіант

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//     if (!link.includes('my-site')) {
//         link += '/';
//     }
// }
// console.log(link);

//варіант артема

// let link = 'https://my-sites.com/about';

// if (!link.endsWith('/') && link.includes('com')) {
//     link += 'hello';
// }
// console.log(link);

///тернарний

// let link = 'https://my-sites.com/about';
// console.log(link.includes('com') && !link.endsWith('/') ? (link += '/') : link);

//6. скільки лишилось днів до дедлайну_________________________________________

// const daysUntilDeadline = 0;
// //якщо приходить нуль то опрацьовуємо інверсію
// if (!daysUntilDeadline) {
//     console.log('today');
// } else if (daysUntilDeadline === 1) {
//     console.log('tomorow');
// } else if (daysUntilDeadline === 2) {
//     console.log('the next day after tomorow');
// } else if (daysUntilDeadline >= 3) {
//     console.log('date in future');
// } else {
//     console.log('are you lost');
// }

//switch

// const dayUntilDeadline = -1;

// if (dayUntilDeadline >= 0) {
//     switch (dayUntilDeadline) {
//         case 0:
//             console.log('today');
//             break;
//         case 1:
//             console.log('tomorow');
//             break;
//         case 2:
//             console.log('the next day before');
//             break;
//         default:
//             console.log('date in future');
//     }
// } else {
//     console.log('are you lost');
// }

//7. виведи у консоль браузера число  від мін до макс яке кратне 5_________________

// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1) {
//     if (!(i % 5)) {
//         console.log(i);
//     }
// }

///щоб не писати і % 5 === 0 ми приводимо до інверсії!!!!!!

// if (!(i % 5))

///8. розгалудження та ввід пароля________________________________

// const login = prompt('Тут має бути логін');
// // console.log(login);
// // login === null ----- !login
// if (!login) {
//     console.log('cancel');
// } else if (login === 'admin') {
//     const password = prompt('Тут має бути пароль');
//     console.log(password === 'i admin' ? 'hello' : alert('wrong password'));
// } else {
//     alert('i dont know you');
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1. Патерн Об'єкт налаштувань
//Патерн «Об'єкт налаштувань» допомагає вирішити проблему, замінюючи набір параметрів всього одним - об'єктом з іменованими властивостями.
// function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
// //тіло // аргументи

// }
// //виклик // параметри
// doStuffWithBook({
//     title: 'Останнє королівство',
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     public: true,
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//щоб пропуститти якийсь елемент при дескруктирізації ----  _, або просто ,
//загалом використовують до 3 деструктирізацій, далі через крапку звертаються

// rest ----  збирає  зліва
// spread --- розпиляє  зправа

// const numbers = [1, 2, 3];
// const copy = [...numbers]; // spread = (1,2,3)

// const number = [1, 2, 3];
// const [first, ...arg] = number; // rest = [2,3] а якщо об'єкт  то {}
// console.log(arg);

//у функціях -- де параметри function foo(...props) // rest а там де агрументи foo(...numbers) // spread

//задача 1 знайти найменшу та найбільшу температуру____________________________________

// const temps = [18, 14, 12, 21, 17, 29, 24];
// const min = Math.min(...temps);
// const min = Math.max(...temps);
// console.log(min);

//example 2 з'єднати в один масив / spread______________________________

// const lastWeek = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];
// // const allTemps = lastWeek.concat(currentTemps, nextWeekTemps);
// // const allTemps = [...lastWeek, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

//example 2
// const profile = {
//     name: 'User Surname',
//     tag: 'user_88',
//     location: 'Venezuela',
//     avatar: 'kiwi',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//         a: {
//             b: 1,
//             c: 1,
//             d: 1,
//         },
//     },
// };
// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: {
//         followers: myFollowers = 5,
//         views,
//         likes,
//         a: { b, c, d },
//     }, //глубока деструктирізація
// } = profile;
// // const { followers, views, likes } = stats; //якщо вкладений елемент
// console.log(name, tag, location, avatar, myFollowers, views, likes, b, c, d);

//без деструктирізації було б так

// const followers = profile.stats.followers
// const name = profile.name

//example 3 деструктирізація масивів______________________________________

// const rgb = [255, 100, 80];

// const [red, , blue] = rgb; //пропуск якогось значення
// console.log(red, green, blue);

//example 4 знайти найбільший рейтинг_____________________________________

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

//1 знайшли лише рейтинг без імені
// const ratting = Object.values(authors);
// console.log(ratting);
// const max = Math.max(...ratting);
// console.log(max);

//2
// const entries = Object.entries(authors);
// for (const [name, ratting] of entries) {
//     // const name = entry[0]; //витягли з масиву по індексу
//     // const ratting = entry[1];

//     //або за допомогою деструктирізації
//     // const [name, ratting] = entry;

//     //або на пряму у for

//     console.log(name, ratting);
// }

// const { kiwi, poly, ajax, mango } = authors;

//example 5______________________________________________________________

// function showProfileInfo(userProfile) {
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;
//     console.log(name, tag, location, avatar, followers, views, likes);
// }

//або деструктирізація може бути як параметр функції + rest

// function showProfileInfo({ name, tag, location, avatar, ...restProps }) {
//     console.log(name, tag, location, avatar);
//     console.log(restProps);
// }

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
// showProfileInfo(profile);

//example 6 деструктуризація_____________________________________________

//array

// const arr = [1, 2, 3];
// const [one, _, third, nest, thi] = arr; // пишемо власну змінну // і звідки її беремо
// console.log(one);
// console.log(third);

//object

// const user = {
//     name: 'test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         react: false,
//         node: false,
//         cars: {
//             audi: {
//                 first: 'A6',
//             },
//             bmw: 'not',
//         },
//     },
// };
// const name = 'value';
// const { age, name: userName } = user; //100% назва ключа і вказуємо звідки,з чого деструкт.
// console.log(age);
// console.log(userName);
///
// const skills = 123;
// const {
//     name,
//     skills: { js: userJs }, // в такому випадку skills стає недоступною
// } = user;
// console.log(userJs);

///глибока деструктирізація

// const {
//     skills: {
//         html,
//         css,
//         js: vanillaJs,
//         cars: {
//             audi: { first },
//         },
//     },
// } = user;
// console.log(vanillaJs);

//деструктирізація з масиву об'єктів

// const user = {
//     name: 'test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         react: false,
//         node: false,
//         cars: {
//             audi: {
//                 first: 'A6',
//             },
//             bmw: 'not',
//         },
//     },
//     languages: [{ angular: true }, { php: false }],
// };
// const {
//     languages: [angularFree, php],
// } = user;
// const { angular } = angularFree;
// console.log(angular);
// console.log(php);

///////////перебір масиву

// const user = {
//     name: 'test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         react: false,
//         node: false,
//         cars: {
//             audi: {
//                 first: 'A6',
//             },
//             bmw: 'not',
//         },
//     },
//     languages: [{ angular: true }, { php: false }],
// };
// for (const language of user.languages) {
//     console.log(language);
// }

//// якщо були б однакові ключі можна було б зробити так
// for (const {angular} of user.languages) {
//     console.log(angular);
// }

///// деструктуризація коли однакові ключі
// const user = [
//     {
//         name: 'user1',
//         language: 'html',
//         car: {
//             audi: 'a6',
//             bmw: 'x5',
//         },
//     },
//     {
//         name: 'user2',
//         language: 'css',
//         car: {
//             audi: 'lahety',
//             bmw: 'x3',
//         },
//     },
//     {
//         name: 'user3',
//         language: 'js',
//         car: {
//             audi: 'csx3',
//         },
//     },
// ];
//example 1
// for (const {
//     name,
//     language,
//     car: { audi: car },
// } of user) {
//     console.log(name, language, car);
// }
//example 2
// for (const {
//     name,
//     car: { audi, bmw = 'None' },
// } of user) {
//     console.log(name, bmw);
// }

////деструкр  при функціях(дефолтні значення)

// function foo(obj) {
//     console.log(obj);
// }
//
// function foo({ name = 'unknown', car: { bmw = 'None' } = {} } = {}) {
//     //якщо немає кар то прийде пустий об'єкт з дефолтним значення None
//     console.log(name, bmw);
// }
// foo({
//     name: 'user',
//     language: 'html',
//     car: {
//         audi: 'a6',
//         bmw: 'x5',
//     },
// });
// foo({
//     name: 'user2',
//     language: 'html',
// }); //без кар
// foo(); // взагалі нічого не прийшло ={}

//spread and rest------- rest (збирає/зліва) = spread(розпиляє/зправа)

// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // const min = Math.min(...arr);
// // console.log(min);

// //спред створює незалежну копію

// const arr2 = [...arr1];
// // arr2.splice(0, 1);
// console.log(arr1 === arr2); //false

//ЗАДАЧА 1  перше значення помножене на наступне_______________________________

// const arr1 = [12, 22, 3, 14, 45, 16, 57];

// const [first, ...props] = arr1;
// // console.log(first, props);
// for (let i = 0; i < props.length; i += 1) {
//     props[i] *= first;
// }
// console.log(props);

//// rest in functions

// function foo(...args) {
//     console.log('rest', args);
// }
// foo(1, 2, 3, 4, 5, 6);

//ЗАДАЧА 2 Деструктирізація_______________________________________________

// //JS Doc //* */
// /**
//  * Розраховуємо індекс маси тіла
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */

// function calcBMI({ weight, height }) {
//     const numbericWeight = Number(weight.replace(',', '.'));
//     const numbericHeight = Number(height.replace(',', '.'));
//     return Number((numbericWeight / numbericHeight ** 2).toFixed(1));
// }
// console.log(calcBMI({ weight: '88,3', height: '1.75' })); // стало
// // console.log(calcBMI('88,3', '1.75')); //було

//ЗАДАЧА 2 Глибока деструктуризація (підхід об'єкт параментів) Переписати фінкцію щоб вона приймала один об'єкт параметрів замість арзкментів____________________________________

// function getBotReport({ companyName, repairBots, defenceBots }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({ companyName: 'Cybor system', repairBots: 150, defenceBots: 50 }));

//ЗАДАЧА 3 отримати імена всіх користувачів_____________________________

// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }, {}];
// const names = [];
// for (const { name = 'Name nor found' } of users) {
//     names.push(name);
// }
// console.log(names);

//ЗАДАЧА 4 деструктуризація____________________________________________

// const user = {
//     id: 1,
//     username: 'harry-potter',
//     profile: {
//         name: 'harry',
//         surname: 'Potter',
//         age: 25,
//     },
// };

// const {
//     profile,
//     profile: { name, surname },
//     username,
// } = user;
// console.log(profile);
// console.log(name);
// console.log(surname);
// console.log(username);

//ЗАДАЧА 5 деструктуризація для функції - обов'язково робимо  = {}____________________________

// const user = {
//     name: 'Yagor',
//     price: 2015,
//     category: 'veniche',
//     details: {
//         brand: 'Samsung',
//         color: 'Black',
//         weight: '15.5',
//     },
// };

// function displayProductInfo({
//     name,
//     price,
//     category,
//     details: { brand, color, weight } = {},
// } = {}) {
//     console.log(`назва товару: ${name}`);
//     console.log(`назва товару: ${price}`);
//     console.log(`назва товару: ${category}`);
//     console.log(`назва товару: ${brand}`);
//     console.log(`назва товару: ${color}`);
// }

// displayProductInfo(user);

//ЗАДАЧА 6 налаштування по замовчуванню___________________________________

// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

/// ЗАДАЧА 7 повернення об'єкту з новими та дефолтними властивостями____________________________________________

// function makeTask(data) {
//     return {
//         category: 'General',
//         priority: 'Normal',
//         completed: false,
//         ...data,
//     };
// }
// makeTask({});
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// console.log(makeTask({ text: 'Buy bread' }));

/// ЗАДАЧА 8 поразувати суму з неоднаковою кількістью аргументів______________________________________

// function add(...args) {
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

//ЗАДАЧА 9 порахувати суму елементів в тому випадку якщо вони більші за перше число__________________________________________

// function addOverNum(a, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > a) {
//             total += arg;
//         }
//     }
//     return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//ЗАДАЧА 10 перевірити на однакові числа в масиві і вивести в окремий масив______________________________________

// function findMatches(array, ...args) {
//     const matches = [];

//     for (let i = 0; i < array.length; i++) {
//         if (args.includes(array[i])) {
//             matches.push(array[i]);
//         }
//     }
//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16, 8, 11, 5, 29));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//світч працює лише з рядками і числами // виконується строге порівняння// не робимо ніяких математичних операцій
//рядок порівнюється з рядком або число з числом
//патерн  switch(true) -- не використовується бо він сповільнює сам цикл

//1. Напиши скрипт вибору готеля по кількості зірок____________________________
//1 - 20$
// 2 - 30$
// 3 - 50$
// 4 - 70$
// 5 - 120$

//якщо введено щось крім 1-5 то виведи такої кількості зірок немає

// const stars = 5;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }
// console.log(`You should pay ${price}$`);

////SWITCH () - сюди вставляється перемінна з якою необхідно порівнювати

// const stars = 5;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Не знайдено');
// }
// console.log(price);

//варіант 2 задачі 1 про готелі /// 1,2 = 20$ 3,4 = 30$; 5 = 120$

// const stars = 6;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }
// console.log(price);

///switch (якщо два значення кейса)

// const stars = 5;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Таких даних немає');
// }
// console.log(price);

//ЗАДАЧА 2 Вибір / варіант доставки

// 1 - самовивіз / 2 - кур'єр/ 3 - почта

// const option = "кур'єр"; // не зберігаємо змінні в рядках бо це не надежно

// const option = 1;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'ви можете забрати товар завтра з 12:00';
//         break;
//     case 2:
//         message = "кур'єр доставить товар завтра з 12:00";
//         break;
//     case 3:
//         message = 'товар відправлять завтра з 12:00';
//         break;
//     default:
//         message = 'вам зателефонує менеджер';
// }
// console.log(message);

/////ЗАДАЧА 3 світлофор // обробка null //налу //на  null не працює toLowerCase//буде помилка, якщо нал будемо приводити до нижнього регістру

// let message = prompt('What color');
// let action;

// if (message) {
//     message = message.toLowerCase(); // приведення до нижнього регістру
// }

// switch (message) {
//     case 'red':
//         action = 'action stop';
//         break;
//     case 'yellow':
//         action = 'action ready';
//         break;
//     case 'green':
//         action = 'action go';
//         break;
//     default:
//         action = 'action be carefull';
// }
// console.log(action);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//вайл зручний для - бекенду на фронті майже не використовується
//синтаксис вайлу
//while (i < message.length){ // умова при якій він виконується
//i += 1; // обовязково інакше може бути зациклення // логічний вихід з нього
//}

// ---------------------DO WHILE -- виконається хоть раз

//1.Пароль довше N-символів

// let password = '';
// do {
//   password = prompt('Введіть пароль довший 4-х символів', '');
// } while (password.length < 5); //тут повинно бути фолс, інакше буде нескінченний цикл
// console.log('Ввели пароль: ', password);

///////////////////////

// різниця між циклом while і for
// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
// }

// const str = 'hello world';
// let i = 0;
// while (i < str.length) {
//     if (str[i] === 'w') {
//         console.log('yes');
//         break;
//     }
//     console.log('no', str[i]);
//     i += 1;
// }

/////

// const str = 'hello world';
// let i = 0;
// do {
//     if (str[i] === 'w') {
//         console.log('yes');
//         break;
//     }
//     console.log('no');
//     i += 1;
// } while (i < str.length);

//ЗАДАЧА 2 РАВЛИК за день равлик проповзає на 7 м в гору а за ніч спускається на 2 метри вниз // за скільки він пройде 42 м , 17 м, 18 м

// function getDays(deps) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     let days = 0;

//     while (total < deps) {
//         // поки його шлях менший глибини він повзе === тру
//         total += daySpeed;
//         days += 1;
//         if (total < deps) {
//             total -= nightSpeed;
//         }
//     }
//     console.log(days);
// }

// getDays(42); //8
// getDays(17); //3
// getDays(18); //4

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////
