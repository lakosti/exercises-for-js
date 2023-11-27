//ПЕРЕВІРКА НА ЧИСЛО // NaN  === isNaN
//typeof number не підходить бо NaN = number
//NaN == NaN // false -- єдине значення в джс яке не дорівнює саме собі
//.trim() -- видаляє зайві пробіли на початку і в кінці

//forEach -- нічого не повертає (буде underfined) і його не можна зупинити // не змінює масив лише перебирає
//map -- не змінює ориг масив // повертає масив такої ж довжини

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

const allCars = [
    { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
    { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
    { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
    { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
    { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
    { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
    { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
    { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
    { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
    { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];
const carDiscount = (cars, discount) => {
    return cars.map(el => ({ ...el, price: el.price * (1 - discount) }));
}; // щоб не мутувати об'єкт ми його спочатку розпилили а потім уже відповідно до знижки змінювали ціну
console.log(carDiscount(allCars, 0.2));
console.log(carDiscount(allCars, 0.4));

//
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
