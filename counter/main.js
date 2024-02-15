// ## 1. Counter
// - Створи файли html і js (./counter.html, ./counter.js)
// - Отримай всі кнопки з атрибутом data-action
// - До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
// - При кліку на кнопку data-action="save" зберігай значення counter у local storage
// - При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
// - При кліку на кнопку data-action="decrease" зменшуй counter на 1
// - При кліку на кнопку data-action="increase" збільшуй counter на 1
// - При кліку на кнопку data-action="reset" роби counter = 0

import { refs } from './refs.js';
const { controlsBtn, savesBtn, displayEl } = refs;

controlsBtn.addEventListener('click', onControlsBtnClick);
savesBtn.addEventListener('click', onSaveBtnClick);
document.addEventListener('DOMContentLoaded', renderPage);
//DOMContentLoaded -- коли все загрузилось запускається вона

//переводимо текстовий контент (0) в числовий
let currentCounter = Number(displayEl.textContent);
const LS_KEY = 'counter';

function onControlsBtnClick(evt) {
    //витягуємо значення кнопки по дата атрибуту
    const clickBtn = evt.target.dataset.action;

    if (clickBtn === 'decrease') {
        currentCounter -= 1;
    }
    if (clickBtn === 'increase') {
        currentCounter += 1;
    }
    if (clickBtn === 'reset') {
        currentCounter = 0;
    }

    //відмалювуємо в розмітці
    updateDisplay();
}

//зберігаємо дані в localStorage
function onSaveBtnClick(evt) {
    const clickBtn = evt.target.dataset.action;
    if (clickBtn === 'save') {
        return localStorage.setItem(LS_KEY, currentCounter);
    }
    //очищаємо локал
    localStorage.removeItem(LS_KEY);
}

//забираємо дані з localStorage
function renderPage() {
    const dataFromLocalStorage = localStorage.getItem(LS_KEY);
    //якщо в локал сторадж щось є, то записуємо на дісплей
    if (dataFromLocalStorage) {
        currentCounter = Number(dataFromLocalStorage);

        updateDisplay();
    }
}

function updateDisplay() {
    displayEl.textContent = currentCounter;
}
