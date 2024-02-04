// // АВТОРИЗАЦІЯ ЗА ДОПОМОГОЮ БІАРЕР ТОКЕНА -- IO39UvhoTS5EmE-_ffa-  (https://the-one-api.dev/documentation)

// // const BASE_URL = 'https://the-one-api.dev/v2/';
// // const END_POINT = 'character';
// // const TOKEN = 'IO39UvhoTS5EmE-_ffa-';
// // function getCharacter() {
// //     const param = new URLSearchParams({
// //         limit: 30,
// //         page: 1,
// //     });

// //     const option = {
// //         method: 'GET',
// //         headers: {
// //             Authorization: `Bearer ${TOKEN}`,
// //         },
// //     };

// //     fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(resp => console.log(resp));
// // }
// // getCharacter();

// //////////////////////////// ПАГІНАЦІЯ LOAD MORE //////////////////////////

// const list = document.querySelector('.js-list');
// const load = document.querySelector('.js-load');
// //акум змінна для сторінки
// let currentPage = 1;

// const BASE_URL = 'https://api.themoviedb.org/3/';
// const ENDPOINT = 'trending/movie/day';
// const API_KEY = '345007f9ab440e5b86cef51be6397df1';

// load.addEventListener('click', handleSearch);
// //обробник кнопки
// function handleSearch() {
//     currentPage += 1;
//     getTrending(currentPage)
//         .then(data => {
//             const arr = data.results;
//             list.insertAdjacentHTML('beforeend', createMarkup(arr));
//             if (data.page === data.total_pages) {
//                 load.hidden = true;
//             }
//         })
//         .catch(err => console.log(err));
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
//         if (data.page !== data.total_pages) {
//             load.hidden = false;
//         }
//     })
//     .catch(err => console.log(err));

// //розмітка
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
