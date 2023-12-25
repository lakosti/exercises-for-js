// const container = document.querySelector('.js-content');
// const winner = document.querySelector('.js-winner');

// //створюємо гравця // гра завжди починається з х
// let player = 'X';

// //потрібно запамятовувати куди ходив користувач // масив id
// let historyX = [];
// let historyO = [];

// //МАСИВ ВИГРАШНИХ КОМБІНАЦІЙ
// const wins = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
// ];
// function createMarkup() {
//     let createDiv = '';
//     // Дадати дів (item) до розмітки
//     for (let i = 1; i < 10; i += 1) {
//         createDiv += `<div class="item js-item" data-id = '${i}'></div>`;
//         //створився один дів а нам потрібно накопичити відовідно до значення фору
//     }
//     //в контейнер додаємо цей дів/розмітку // потрібно її змінювати при кожній грі
//     container.innerHTML = createDiv;
// }

// createMarkup();
// // виділяємо окремо кожен айтем //клік на кожен айтем
// container.addEventListener('click', onClick);

// function onClick(evt) {
//     //витягуємо таргет щоб не звертатися через крапку (evt.target)
//     const { target } = evt;
//     // ОБОВ'ЯЗКОВО контролюємо щоб користувач клачнув саме на вміст квадрата а не на його бордер || перевірка на вміст (якщо шось є то уже не можна клацнути)
//     if (!target.classList.contains('js-item') || target.textContent) {
//         return;
//     }

//     let result = false;
//     //деструкр з приведенням до типу НЕ ПРАЦЮЄ = undefined
//     const id = Number(target.dataset.id);
//     const isEndGame = historyO.length + historyX.length === 9; //???????
//     //пушемо клітинки  по яким ходили юзери
//     if (player === 'X') {
//         historyX.push(id);
//         //задаємо значення резалту (true/false)
//         result = isWinner(historyX);
//     } else {
//         historyO.push(id);
//         result = isWinner(historyO);
//     }

//     target.textContent = player;

//     //якщо резалт true то оголошуємо переможця і скидаємо гру
//     if (result) {
//         winner.textContent = `Winner is ${player}`;
//         resetGame();
//         return;
//         //коли ніхто не виграв
//     } else if (isEndGame) {
//         console.log(`Sorry! Try again`);
//         resetGame();
//         return;
//     }
//     //потім заново перевизначаємо гравця
//     player = player === 'X' ? 'O' : 'X';
// }

// //перевіряє історію ходів і чи вона = виграшним ходам // true false

// function isWinner(arr) {
//     //якщо хоч один із масивів тру то перевіряємо кожен елемент
//     return wins.some(item => item.every(id => arr.includes(id)));
// }

// function resetGame() {
//     createMarkup();
//     historyO = [];
//     historyX = [];
//     player = 'X';
// }
