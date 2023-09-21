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

const cars = [
    {
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true,
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22455,
        onSale: true,
    },
    {
        make: 'Mazda',
        model: 'Mazda 6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false,
    },
    {
        make: 'Mazda',
        model: 'CX-9',
        type: 'suv',
        amount: 7,
        price: 31520,
        onSale: true,
    },
    {
        make: 'Toyota',
        model: '4Runner',
        type: 'suv',
        amount: 19,
        price: 34210,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Sequoia',
        type: 'suv',
        amount: 16,
        price: 45560,
        onSale: false,
    },
    {
        make: 'Toyota',
        model: 'Tacoma',
        type: 'truck',
        amount: 4,
        price: 24320,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'F-150',
        type: 'truck',
        amount: 11,
        price: 27110,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Fusion',
        type: 'sedan',
        amount: 13,
        price: 22120,
        onSale: true,
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31660,
        onSale: false,
    },
];

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
