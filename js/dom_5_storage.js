//localStarage -- не можемо передавати функції чи методи об'єкту лише рядки, зберігаються зміни між вкладками
//Session Storage -- більше секйюрні речі (емайл) не передається між вкладками, існує в межах однієї вкладки
//JSON.parse -- привести до того типу даних шо було (приводимо з рядка у JS формат (масив/об'єкт))
//JSON.stingify -- привести до рядка

// localStorage.setItem('key', 'value') -- зберегти значення  одне
// localStorage.getItem('key'); -- отримати значення одне
// localStorage.removeItem(); -- видалити шось одне
// localStorage.clear(); -- очистити все

// localStorage.setItem('TEST', JSON.stringify([1, 2, 3, 4]));
// console.log(JSON.parse(localStorage.getItem('TEST')));

// const data = JSON.parse('Welcome to the'); // error -- json очікує на об'єкт
// console.log(data);

/////////////////ALEX////////////////////

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// const TEST_1 = 'key';
// const info = 'value';

// // збереження в localStorage
// localStorage.setItem(LS_KEY, JSON.stringify(names));

// // читання localStorage
// const namesArr = JSON.parse(localStorage.getItem(LS_KEY));
// console.log(namesArr);

// // видалення localStorage
// localStorage.removeItem(TEST_1);

////// WORK WITH FORM  /////////

const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.fedback-form');
const textarea = form.querySelector('textarea');
