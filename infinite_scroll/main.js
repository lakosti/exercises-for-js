// ////ЗА ДОПОМОГОЮ OBSERVER можна робити круті анімаці (розтягувати стягувати збільшувати зміншувати розмір слідкувати за таргетом, але потрібно багато працювати зі стилями)

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const ENDPOINT = 'trending/movie/day';
// const API_KEY = '345007f9ab440e5b86cef51be6397df1';

// const list = document.querySelector('.js-list');
// const target = document.querySelector('.js-guard');
// let currentPage = 1;
// let options = {
//     root: null, // null -- слідкуємо за всим вьюпортом
//     rootMargin: '300px', // за скільки пікселів до цільового елемента спрацює
//     threshold: 1.0,
// };

// let observer = new IntersectionObserver(onLoad, options);
// function onLoad(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             currentPage += 1;
//             getTrending(currentPage)
//                 .then(data => {
//                     const arr = data.results;
//                     list.insertAdjacentHTML('beforeend', createMarkup(arr));
//                     //якщо остання сторінка то перестаємо слідкувати
//                     if (data.page === data.total_pages) {
//                         observer.unobserve(target);
//                         // observer.disconnect(target); // відключає всі обзервери
//                     }
//                 })
//                 .catch(err => console.log(err));
//         }
//     });
// }

// //запит на бекенд
// function getTrending(page = 1) {
//     return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}&page=${page}`).then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return resp.json();
//     });
// }
// //обробка запитів феча
// getTrending()
//     .then(data => {
//         const arr = data.results;
//         list.insertAdjacentHTML('beforeend', createMarkup(arr));
//         //лише після того як відмалювали розмітку починаємо слідити
//         //після першого запиту обсерв починає слідкувати за таргет елементом
//         observer.observe(target);
//         // if(observer.)
//     })
//     .catch(err => console.log(err));

// function createMarkup(arr) {
//     return arr
//         .map(
//             ({ title, poster_path }) => `        <li>
//            <img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" >
//             <h2 class='title'>${title}</h2>
//         </li>`
//         )
//         .join('');
// }
