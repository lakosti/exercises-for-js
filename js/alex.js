//ПЕРЕВІРКА НА ЧИСЛО // NaN  === isNaN
//typeof number не підходить бо NaN = number
//NaN == NaN // false -- єдине значення в джс яке не дорівнює саме собі
//.trim() -- видаляє зайві пробіли на початку і в кінці
//.flat(depth) -- метод який дістає вкладеність елемента
// отримати унікальні елементи ---- const uniqueEl = [...new Set(tags)]

//forEach -- нічого не повертає (буде underfined) і його не можна зупинити // не змінює масив лише перебирає
//map -- не змінює ориг масив // повертає масив такої ж довжини
//find -- знаходить перший унікальний елемент (один) // якщо нічого не знайдено повертає undefined
//filter -- знаходить декілька елементів які задовільняють умову // якщо нічого не знайдено повертають пустий масив, навіть якщо знайшло один елемент все рівно буде масив // НЕ МУТУЄ МАСИВ
//reduce -- приймає два параметра (callback, initialValue), callback(acc,i,el,arr) // інішуал велью -- початкове значення
//flatMap -- діє на один рівень вкладеності

// function getLastElementMeta(array) {
//     return [array.length - 1, array[array.length - 1]];
// }
// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana'])); // [3, 'banana]

//ПЕРЕВІРКА ЧИ КОРИСТУВАЧ ВВІВ ЧИСЛО__________________________________

// const userNum = Number(prompt('Enter a number'));
// if (!isNaN(userNum)) {
//     if (!(userNum % 2)) {
//         console.log(`It's ${userNum} is even`);
//     } else {
//         console.log(`It's ${userNum} is odd`);
//     }
// } else {
//     alert('Please enter number');
// }

//ЗАДАЧА години та хвилини

// const hours = 14;
// const minutes = 15;
// // let timeStr = minutes ? `${hours} г. ${minutes} хв.` : `${hours} г.`;
// let timeStr = `${hours} г. ${minutes ? `${minutes} хв. ` : ''}`; // пишемо один раз години
// console.log(timeStr.trim()); // видаляє зайві пробіли на початку і в кінці

//ПЕРЕВІРКА ДОСТУПУ

// const sub = 'free';
// const canAccess = sub === 'pro' || sub === 'vip';

//ВІДКРИТТЯ ЧАТУ

// const isOnline = true;
// const isFriend = true;
// const isDnd = true;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Can open chat:', canOpenChat);

////----------------------------------------------------------------map
//ЗАДАЧА перебрати і зробити знижку________________

// const allCars = [
//     { make: 'Honda', model: 'CR-V', amount: 14, price: 24045, onSale: false },
//     { make: 'Honda', model: 'Accord', amount: 2, price: 22455, onSale: true },
//     { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195, onSale: false },
//     { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520, onSale: true },
//     { make: 'Toyota', model: '4Runner', amount: 19, price: 34210, onSale: true },
//     { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560, onSale: false },
//     { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320, onSale: true },
//     { make: 'Ford', model: 'F-150', amount: 11, price: 27110, onSale: false },
//     { make: 'Ford', model: 'Fusion', amount: 13, price: 22120, onSale: true },
//     { make: 'Ford', model: 'Explorer', amount: 6, price: 31660, onSale: false },
// ];
// const carDiscount = (cars, discount) => {
//     return cars.map(car => ({ ...car, price: car.price * (1 - discount) }));
// }; // щоб не мутувати об'єкт ми його спочатку розпилили а потім уже відповідно до знижки змінювали ціну
// console.log(carDiscount(allCars, 0.2));
// console.log(carDiscount(allCars, 0.4));

//ЗАДАЧА змінити кількість годин по айді_____________________________

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playerIdToUpdate = 'player-3';

// const updatePlayer = players.map(player => {
//     if (player.id === playerIdToUpdate) {
//         return { ...player, timePlayed: player.timePlayed + 70 }; //робимо копію 3 гравця і змінюємо її потім повертаємо всі елементи
//     }
//     return player;
// });

// console.log(updatePlayer);

//----------------------------------------------filter--------------------

//ЗАДАЧА повернути парні числа _________________

// const numbers = [5, 10, 15, 20, 25];
// const filterNumbers = numbers.filter(el => !(el % 2));
// console.log(filterNumbers);
// console.log(numbers);

///ЗАДАЧА задача з машинами______________________________________

// const allCars = [
//     { make: 'Honda', model: 'CR-V', amount: 14, price: 24045, onSale: false, type: 'sedan' },
//     { make: 'Honda', model: 'Accord', amount: 2, price: 22455, onSale: true, type: 'cross' },
//     { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195, onSale: false, type: 'sedan' },
//     { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520, onSale: true, type: 'cross' },
//     { make: 'Toyota', model: '4Runner', amount: 19, price: 34210, onSale: true, type: 'sedan' },
//     { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560, onSale: false, type: 'sedan' },
//     { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320, onSale: true, type: 'cross' },
//     { make: 'Ford', model: 'F-150', amount: 11, price: 27110, onSale: false, type: 'sedan' },
//     { make: 'Ford', model: 'Fusion', amount: 13, price: 22120, onSale: true, type: 'sedan' },
//     { make: 'Ford', model: 'Explorer', amount: 6, price: 31660, onSale: false, type: 'cross' },
// ];
//1. повернути ті, ціна яких більше за вказане значення______________________

// const filterByPrice = (cars, threshold) => {
//     return cars.filter(({ price }) => price > threshold);
// };
// console.table(filterByPrice(allCars, 25000));
// console.table(filterByPrice(allCars, 30000));

//2. повернути ті що на знижці_________________

// const filterOnSale = allCars.filter(({ onSale }) => onSale);
// console.table(filterOnSale);

//3. повернути машини які збігаються із зазначеним типом______________

// const getCarsWithType = (cars, type) => {
//     return cars.filter(({ type: model }) => type === model);
// };
// console.table(getCarsWithType(allCars, 'cross'));
// console.table(getCarsWithType(allCars, 'sedan'));

//----------------------------------find

// const allCars = [
//     { make: 'Honda', model: 'CR-V', amount: 14, price: 24045, onSale: false, type: 'sedan' },
//     { make: 'Honda', model: 'Accord', amount: 2, price: 22455, onSale: true, type: 'cross' },
//     { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195, onSale: false, type: 'sedan' },
//     { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520, onSale: true, type: 'cross' },
//     { make: 'Toyota', model: '4Runner', amount: 19, price: 34210, onSale: true, type: 'sedan' },
//     { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560, onSale: false, type: 'sedan' },
//     { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320, onSale: true, type: 'cross' },
//     { make: 'Ford', model: 'F-150', amount: 11, price: 27110, onSale: false, type: 'sedan' },
//     { make: 'Ford', model: 'Fusion', amount: 13, price: 22120, onSale: true, type: 'sedan' },
//     { make: 'Ford', model: 'Explorer', amount: 6, price: 31660, onSale: false, type: 'cross' },
// ];

// //1. повернути об'єкт який збігається з встановленим типом

// const getCarByModel = (cars, model) => {
//     return cars.find(car => car.model === model);
// };
// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'Tacoma'));
// console.log(getCarByModel(allCars, 'Mazda 6'));
// console.log(getCarByModel(allCars, 'Cayenne'));

//--------------------------------every/some

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// // 1. перебрати чи всі онлайн______________
// const isAllOnline = players => {
//     return players.every(({ online }) => online);
// };
// console.log(isAllOnline(players)); //false  --- один не онлайн

// //2.
// const isOnline = players => {
//     return players.some(({ online }) => online);
// };
// console.log(isOnline(players)); // true --хоча б один онлайн

//--------------------------------reduce

// const numbers = [5, 10, 15, 20, 25];
// const getTotalSum = numbers.reduce((acc, n) => acc + n, 0);
// console.log(getTotalSum);

//ЗАДАЧА порахувати загальну зп користувачів___________________________

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// };
// const totalSalary = Object.values(salary).reduce((acc, n) => acc + n, 0);

// console.log(totalSalary);

//ЗАДАЧА рахуємо кількість годин________________________

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 10, points: 54, online: true },
//     { id: 'player-2', name: 'Poly', timePlayed: 70, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 30, points: 48, online: false },
//     { id: 'player-4', name: 'Ajax', timePlayed: 50, points: 71, online: true },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 40, points: 48, online: true },
// ];

// const totalTimePlayed = players.reduce((acc, { timePlayed }) => acc + timePlayed, 0);
// console.log(totalTimePlayed);

//////
