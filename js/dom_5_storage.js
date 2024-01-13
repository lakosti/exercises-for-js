//localStarage -- не можемо передавати функції чи методи об'єкту лише рядки, зберігаються зміни між вкладками
//Session Storage -- більше секйюрні речі (емайл) не передається між вкладками, існує в межах однієї вкладки
//JSON.parse -- привести до того типу даних шо було (приводимо з рядка у JS формат (масив/об'єкт)) ПРИ ПАРСИНГУ РЯДКА БУДЕ ЕРОР
//JSON.stingify -- привести до рядка (якщо дані масив чи об'єкт)

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

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    //видалення повідомлення із сховища при сабміті
    localStorage.removeItem(STORAGE_KEY);
    //очистка форми
    evt.currentTarget.reset();
}

//отримати значення поля і записати в ЛС
textarea.addEventListener('input', onInput);

function onInput(evt) {
    const value = evt.target.value;
    localStorage.setItem(STORAGE_KEY, value);
}

function getInfoFromStorage() {
    // отримуємо дані зі сховища
    const data = localStorage.getItem(STORAGE_KEY);
    //якщо в локал сторадж щось є то записуємо в форму якщо немає то робимо по дефолту
    if (data) {
        // якщо шось є (тру)
        textarea.value = data;
    }
}

getInfoFromStorage();
