//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[accordion.html](./accordion.html) та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const list = document.querySelector('.js-accordion-list');
list.addEventListener('click', evt => {
    //evt.target === currentTarget
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    // nextElementSibling -- наступий сусід
    evt.target.nextElementSibling.classList.toggle('active');
});
