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

refs.controlsBtn.addEventListener('click', onControlsBtnClick);
refs.savesBtn.addEventListener('click', onSaveBtnClick);

function onControlsBtnClick(evt) {
    //переводимо текстовий контент в числовий
    let currentCounter = Number(refs.displayEl.textContent);

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

    refs.displayEl.textContent = currentCounter;
}

function onSaveBtnClick(evt) {
    const clickBtn = evt.target.dataset.action;
    if (clickBtn === 'save') {
        localStorage.setItem('counter', currentCounter);
    }
}

//робота з localStorage
