//----------------------------Methods-----------------------------------
//в перебираючих методах масиву важливий порядок параметрів
//їх не можна break  or  continue

//1. for each як заміна форму
// повертає underfined тому не можна присвоїти у змінну
// перебирає елементи завжди з початку
// приймає в параметрах колбек функцію
// вказуємо в колбек функції такі параметри (сам елемент*, індекс, масив)
// не працює break та return
//мутує масив
//arr.forEach(function (_, idx) -- коли айтем не потрібен
//2. map ---- не змінює оригінальний масив, повертає масив такої самої довжини як оригінальний

//map =============

// const numbers = [5, 10, 15, 20, 25];

// const doubleNums = numbers.map(number => {
//     return number * 2;
// });

// console.log('numbers', numbers);
// console.log('doubleNums', doubleNums);

// map ============

const players = [
    {
        id: 'player-1',
        name: 'Poly',
        timePlayed: 310,
        points: 54,
        online: false,
    },
    {
        id: 'player-2',
        name: 'Mango',
        timePlayed: 470,
        points: 92,
        online: true,
    },
    {
        id: 'player-3',
        name: 'Kiwi',
        timePlayed: 230,
        points: 48,
        online: true,
    },
    {
        id: 'player-4',
        name: 'Ajax',
        timePlayed: 150,
        points: 71,
        online: false,
    },
    {
        id: 'player-5',
        name: 'Chelsy',
        timePlayed: 80,
        points: 48,
        online: true,
    },
];
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

const playerIdUpdated = 'player-3';

const changeOnePlayer = players.map(player => {
    console.log(player.id);
    return playerIdUpdated === player.id
        ? {
              ...player,
              timePlayed: player.timePlayed + 100,
          }
        : player;
});
console.table(changeOnePlayer);

////////ПРАКТИКА________________________________________________

//ЗАДАЧА 1 for each (перебирає елементи масиву завжди з початку)  не працює break____________________

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
