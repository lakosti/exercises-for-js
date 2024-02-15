/**
 * Викоритовуй шаблон пагінації з файлу[pagination.html](./pagination.html) для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const list = document.querySelector('.js-pagination');
list.addEventListener('click', onClick);

function onClick({ target }) {
    if (target.dataset.type !== 'page') {
        return;
    }
    //видаляємо колір з усіх
    document.querySelectorAll('.js-pagination .active').forEach(element => {
        element.classList.remove('active');
    });

    // і потім при кліці додаємо лише на один вибраний
    target.classList.add('active');
}
