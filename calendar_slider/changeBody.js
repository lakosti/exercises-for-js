import refs from './refs.js';
const { bodyEl } = refs;

// export const images = [
//     'url("https://picsum.photos/id/1015/1920/1080")',
//     'url("https://picsum.photos/id/1018/1920/1080")',
//     'url("https://picsum.photos/id/1025/1920/1080")',
// ];

// let currentIdx = 0;
// //спочатку показуємо останню щоб 2 секунду не було білого фону
// bodyEl.style.backgroundImage = images[images.length - 1];

// function changeBg() {
//     bodyEl.style.transition = 'background-image 1s ease';
//     bodyEl.style.backgroundImage = images[currentIdx];
//     currentIdx += 1;

//     //якщо такого індекса картинки немає починай з початку
//     if (images[currentIdx] === undefined) {
//         currentIdx = 0;
//     }
// }
// setInterval(changeBg, 5000);
