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

//11
