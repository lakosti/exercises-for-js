//console.log('abc'.charCodeAt(0)) -- перевірка по юнікоду
//масив це підвид об'єкту
//  ----------------------------Methods-----------------------------------
//в перебираючих методах масиву важливий порядок параметрів
//їх не можна break  or  continue
//деструкт у функціях =  ({}) = (({online}) => online)

//1. for each  ----   як заміна форму
// нічого не повертає лише underfined тому не можна присвоїти у змінну
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
//acc + = всі попередні ітерації
//acc = return на кожній ітерації
//при роботі завжди повертаємо акамулятор reduce arr

//8. sort -- сортірує поілементно по зростанню, повільний але для фронта норм
//сортування рядків - const result = arr.sort(); -- не вказуємо умову
//ЗМІНЮЄ ориг масив!!!!!!
//тому робимо копію через сперд або слайс / краще спред [...spred]
//.sort(a,b) => b-a) -- з більшого до меншого
//.sort(a,b) => a-b) по дефолту з більшого до меншого
//сортування за алфавітом -- const result = arr.sort((a,b)=> a.localeCompare(b))
//спочатку завжди розпилюємо масив [...players].sort(())
//краще не робити деструктуризацію

//9. flat -- розглажування масива (arr.flat()) => arr.flat(2))
//коли є масив в масиві і необхідно зробити один
//не змінює старий масив
//повертає результат своєї робити
//розглажує лише на одну вкладеність по замовчуванні
//щоб розгладити решту вкладеності пишемо в параметрах (2), (3) ... і так далі

//10. flatMap -- якщо потрібно з'єднати кілька масивів в один, аналог reduce

//11. findIndex -- знаходить індекс в об'єкта

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

/////NEW NEW NEW NEW NEW NEW NEW NEW NEW//////

//ЗАДАЧА відбір унікальних елементів / неповторюваних___________________________

// const students = [
//     { name: 'Манго', courses: ['математика', 'фізика'] },
//     { name: 'Полі', courses: ['інформатика', 'математика'] },
//     { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

////виходить що індекс масива arr.index на математиці поверне 0, а фактичний індекс по масиву на разі 3
// const allCourses = students
//     .flatMap(course => course.courses)
//     .filter((item, idx, arr) => arr.indexOf(item) === idx);
// console.log(allCourses);
// // const uniqueCourses = allCourses.filter((item, idx, arr) => arr.indexOf(item) === idx);
// // console.log(uniqueCourses);

//ЗАДАЧА підрахунок повторюваних значень ___________________________
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// //пушемо в акамулятор розпилені значення всіх тегів і повертаємо цей акамулятор
// //огорнули у функцію для подальшого використання
// const getTags = tweets =>
//     tweets.reduce((acc, item) => {
//         acc.push(...item.tags);
//         return acc;
//     }, []);
// console.log(getTags(tweets));

// const tags = getTags(tweets);

// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     }
//     acc[tag] += 1;

//     return acc;
// };
// //передали колбек підрахунку і початкове значення
// const countTag = tags => tags.reduce(getTagStats, {});

// const tagCount = countTag(tags);
// console.log(tagCount);

//ЗАДАЧА середній бал кожного студента________________________________________

// const students = [
//     { name: 'John', grades: [80, 85, 90] }, //  { name: "John", average: 85 }
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [70, 80, 75] },
//     { name: 'Emily', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 90] },
// ];

// function getAverage(arr) {
//     const newArr = arr.map(({ name, grades }) => {
//         const sum = grades.reduce((acc, item) => (acc += item), 0);
//         return {
//             name,
//             average: Math.round(sum / grades.length),
//         };
//     });
//     return newArr;
// }
// console.log(getAverage(students));

//ЗАДАЧА  перевірити чи масив вкладений чи ні (дані з бекенду) - (лише рекурсія перевіряє чи масив вкладений) ВКЛАДЕНІСТЬ МАСИВУ____________

// const arr = [0, 1, 2, [3, [4, [45]]]];

// function findDepth(arr) {
//     let depth = 0;

//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             depth += 1;
//             depth += findDepth(item);
//         }
//     }
//     return depth;
// }
// console.log(findDepth(arr));

//ЗАДАЧА повернути імена тих хто старше 21_________________

// const users = [
//     { id: 1, name: 'John', age: 18, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 20, skills: ['JavaScript', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//     { id: 5, name: 'alice', age: 12, skills: ['Python', 'Data Analysis'] },
//     { id: 6, name: 'David', age: 22, skills: ['C++', 'C#'] },
// ];

// function getOlder(arr) {
//     return arr.filter(({ age }) => age > 21).map(({ name }) => name);
// }
// console.log(getOlder(users));

///ПЕРЕБІР УНІКАЛЬНИХ ЕЛЕМЕНТІВ

// const result = users
//     .flatMap(({ skills }) => skills)
//     .filter((item, idx, arr) => arr.indexOf(item) === idx);
// console.log(result);

//ЗАДАЧА 22 пошук книги за назвою, якщо не знайдено то Not found через або _____________________________

// const books = [
//     {
//         title: 'JavaScript: The Good Parts',
//         author: 'Douglas Crockford',
//         year: 2008,
//     },
//     {
//         title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
//         author: 'Robert C. Martin',
//         year: 2008,
//     },
//     {
//         title: 'The Pragmatic Programmer: Your Journey to Mastery',
//         author: 'Andrew Hunt, David Thomas',
//         year: 1999,
//     },
//     {
//         title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
//         author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
//         year: 1994,
//     },
//     {
//         title: 'Refactoring: Improving the Design of Existing Code',
//         author: 'Martin Fowler',
//         year: 1999,
//     },
// ];

// function getBook(arr, title) {
//     const result = arr.find(({ title: bookName }) => bookName === title);

//     return result || 'Not found';
// }
// console.log(getBook(books, 'Hello'));
// console.log(getBook(books, 'Refactoring: Improving the Design of Existing Code'));

//ЗАДАЧА 23 знайти суму ________________________________

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 }, // 20 * 3 = 60
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 },
// ];
// function getTotal(arr) {
//     return arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
// }
// console.log(getTotal(products));

//мій варіант
// function getTotal(arr) {
//     const result = arr.reduce((acc, { price, quantity }) => {
//         const sum = price * quantity;
//         return (acc + sum); // без =
//     }, 0);
//     return result;
// }
// console.log(getTotal(products));

//ЗАДАЧА 24.

// const books = [
//     {
//         title: 'JavaScript: The Good Parts',
//         author: 'Douglas Crockford',
//         year: 2008,
//     },
//     {
//         title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
//         author: 'Robert C. Martin',
//         year: 2008,
//     },
//     {
//         title: 'The Pragmatic Programmer: Your Journey to Mastery',
//         author: 'Andrew Hunt, David Thomas',
//         year: 1999,
//     },
//     {
//         title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
//         author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
//         year: 1994,
//     },
//     {
//         title: 'Refactoring: Improving the Design of Existing Code',
//         author: 'Martin Fowler',
//         year: 1999,
//     },
// ];

// function getSortArrToYear(arr) {
//     return [...arr].sort((a, b) => b.year - a.year);
// }
// console.log(getSortArrToYear(books));

//ЗАДАЧА  25 відсортувати за ціною менше 2 дол і вивести в алфавітному порядку + порядковий номер і перенос рядка, якщо не знайдено то нот фаунд______________________________________________________________

// const products = [
//     { id: 2, name: 'Banana', price: 0.99 }, //
//     { id: 1, name: 'Apple', price: 1.99 }, //
//     { id: 3, name: 'Orange', price: 2.49 }, //
//     { id: 4, name: 'Grapes', price: 3.99 }, //
// ];

// function getProduct(arr) {
//     const products = arr
//         .filter(({ price }) => price < 0.2)
//         .map(({ name }) => name)
//         .sort((a, b) => a.localeCompare(b));

//     return products.reduce(
//         (acc, item, idx) => acc + `${idx + 1} - ${item}\n`,
//         products.length ? 'Product list:\n' : 'Not found'
//         //якщо елементи є то       тру         фолс
//     );
// }
// console.log(getProduct(products));

// //ЗАДАЧА 26 Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа________________________________________________________________________

// const str = 'avavgrjgherafevrv';

// // const obj = {};
// // for (let i = 0; i < str.length; i++) {
// //     console.log(str[i]);
// //     if (str[i] in obj) {
// //         // перевірити чи є ключ в об'єкті / якщо є то додаємо 1 / якщо немає то ми просто ств такий ключ і ставимо йому 1
// //         obj[str[i]] += 1;
// //     } else {
// //         obj[str[i]] = 1;
// //     } // щоб не писати else можна  зробити continue
// // }
// // console.log(obj);

// /// 2 варіант

// const result = str.split('').reduce((acc, item) => {
//     item in acc ? (acc[item] += 1) : (acc[item] = 1);
//     return acc;
// }, {});
// console.log(result);
