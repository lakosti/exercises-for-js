//ПРИ КЛІЦІ ОТРИМАТИ КОЛІР

const boxes = document.querySelectorAll('.js-box');
boxes.forEach(box => box.addEventListener('click', onClick));
function onClick(evt) {
    console.dir(evt.target.dataset.color);
}
