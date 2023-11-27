//ПЕРЕВІРКА НА ЧИСЛО // NaN  === isNaN
//typeof number не підходить бо NaN = number
//NaN == NaN // false -- єдине значення в джс яке не дорівнює саме собі
//.trim() -- видаляє зайві пробіли на початку і в кінці
//forEach -- нічого не повертає (буде андефінед) і його не можна зупинити

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
