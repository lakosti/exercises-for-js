//ЗАДАЧА 1 кольори світлофора, + обробка фолсі (налу - коли нічого не введено) значення___________________________________
//АЛГОРИТМ
//1. Приведення до нижнього регістру
//2. Якщо нічого не введено - обробка фолсі значення
//3. через промт вводити дані користувача

// let message = prompt('Color?');

// if (message) {
//     message.toLowerCase();
// } // просто виведеться нал

// console.log(message);

//TASK 2 mystery, return true or false

// function check(text, answer) {
//     let input = prompt(text);
//     if (input) {
//         input = input.toLowerCase();
//     }
//     return input === answer;
// }
// console.log(check('Кругле та яскраве', 'sun'));
// console.log(check('Хоч не літак а крилатий', 'windmill'));

//TASK 3 LOOP while how many day`s the snail spend to get out______________________________

//42 m - 8 d
//17 m - 3 d
//18 m - 4 d

// function getDays(deps) {
//     let days = 0;
//     let total = 0; // пройдений шлях
//     const nightSpeed = 2;
//     const daySpeed = 7;

//     while (total < deps) {
//         total += daySpeed;
//         days += 1;
//         //дивимось чи равлик ще не порівнявся із землею, якщо ні то віднімаємо ніч
//         if (total < deps) {
//             total -= nightSpeed;
//         }
//     }
//     return days;
// }
// console.log(getDays(17));
// console.log(getDays(42));
// console.log(getDays(18));

//TASK 4 СКІЛЬКИ ГОЛОСНИХ В СЛОВІ_____________________________

// function countVowel(str) {
//     const vowels = 'aeiou'; // пишемо голосні котрі взагалі є
//     // let numOfVowes = [];
//     let counter = 0;
//     str = str.toLowerCase();
//     for (const letter of str) {
//         if (vowels.includes(letter)) {
//             // numOfVowes.push(letter);
//             counter += 1;
//         }
//     }
//     return counter;
//     // return numOfVowes.length
// }

// console.log(countVowel('HELLO WORLD')); // 3
// console.log(countVowel('Junior web developer')); //8

//TASK 5 якщо два числа більше 100, то вивести найбільше з них, якщо менше 100 то b + 512____________________________________________

// const a = 180;
// const b = 10;

// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// } else {
//     console.log(b + 512);
// }

// TASK 6 чи закнчієтсья рядок таким символом _________________________________

// let link = 'i miss you my';
// if (!link.endsWith('dear')) {
//     link += ' dear';
// }
// console.log(link);

//ЗАДАЧА 7 РОЗГАЛУЖЕННЯ адмін + пароль__________________________________

// const input = prompt('Who are you?');
// if (input === 'Admin'.toLowerCase()) {
//     let password = prompt('enter your password');
//     password === 'I admin'.toLowerCase() ? alert('Hello') : alert('Wrong password');
// } else if (!input) {
//     alert('Cancel');
// } else {
//     alert('I don`t who you are');
// }
