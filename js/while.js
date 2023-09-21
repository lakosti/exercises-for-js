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
