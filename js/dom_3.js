//ДЕЛЕГУВАННЯ ПОДІЙ --  коли додаємо прослуховувач на контейнер і слухаємо його дітей
//ДЕЛЕГУВАННЯ ПОДІЙ КРАЩЕ ОБРОБЛЯТИ ЧЕРЕЗ КЛАСИ

// evt.currentTarget --- ТОЙ ЯКИЙ ВИКЛИКАВ ПОДІЮ (батько)
//evt.target --- ТОЙ НА ЯКОМУ ПОДІЯ СПРАЦЮВАЛА (дитина)};

//ЗАДАЧА ПРИ КЛІЦІ ОТРИМАТИ КОЛІР (поганий приклад давати прослуховувача на всі кліки)

const container = document.querySelector('.container-lesson_3');
container.addEventListener('click', onClick);
// [...container.children].forEach(item => item.addEventListener('click', onClick));

function onClick(evt) {
    // console.dir(evt.currentTarget.dataset.color);

    if (!evt.target.classList.contains('js-box')) {
        return;
    }
    // console.log(evt.currentTarget); // ТОЙ ЯКИЙ ВИКЛИКАВ ПОДІЮ (батько)
    console.log(evt.target.dataset.color); // ТОЙ НА ЯКОМУ ПОДІЯ СПРАЦЮВАЛА (дитина)};
}
