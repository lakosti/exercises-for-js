const container = document.querySelector('.js-content');
//МАСИВ ВИГРАШНИХ КОМБІНАЦІЙ
const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];
// Дадати дів (item) до розмітки
let createDiv = '';
let player = 'X';

//потрібно запамятовувати куди ходив користувач
let historyX = [];
let historyO = [];

for (let i = 1; i < 10; i += 1) {
    createDiv += `<div class="item js-item" data-id = '${i}'></div>`;
}

container.innerHTML = createDiv;
// виділяємо окремо кожен айтем
container.addEventListener('click', onClick);

function onClick(evt) {
    //витягуємо таргет
    const { target } = evt;
    // ОБОВ'ЯЗКОВО контролюємо щоб користувач клачнув саме на вміст квадрата а не на його бордер || перевірка на вміст (якщо шось є то уже не можна клацнути)
    if (!target.classList.contains('js-item') || target.textContent) {
        return;
    }
    const { id } = target.dataset;
    if () {
        //
    } else {
        //
    }
    target.textContent = player;
    player = player === 'X' ? 'O' : 'X';
}
