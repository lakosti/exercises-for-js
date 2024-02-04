// //////https://newsapi.org/v2/everything?q=bitcoin&apiKey=6974704f595045a6bf725b937b9327b9

// import buttonControls from './services/buttonControls.js';
// import createMarkup from './templates/markupNews.js'; //ОБОВЯЗКВОВО ПИШЕМО розширення файла(js)
// import { getNewsFromApi } from './services/getNews.js';

// const searchForm = document.querySelector('.search-form'); // форма з інпутом
// const list = document.querySelector('.articles'); // ul
// const loadMore = document.querySelector('[data-action="load-more"]'); // btn load-more
// const loader = document.getElementById('preloader');

// let page = 1;
// let pageSize = 5;
// let query = '';
// let maxPage = 0;

// searchForm.addEventListener('submit', onSubmit);

// async function onSubmit(evt) {
//     evt.preventDefault();

//     list.innerHTML = '';
//     //новий запит = 1 сторінка
//     page = 1;

//     const form = evt.currentTarget;
//     query = form.elements.query.value.trim();

//     if (!query) {
//         alert('Please enter something');
//         return;
//     }

//     try {
//         const { articles, totalResults } = await getNewsFromApi(query); //замість THEN => AWAIT ===> дані які містить проміс - ми їх розпакували з data
//         maxPage = Math.ceil(totalResults / pageSize);

//         createMarkup(articles, list); //list ми передали для імпорту (інакше прийщлось би передавати змінну)

//         //якщо при першому запиті знайдено менше зображень ніж необхідно для відображення кнопки або maxPage = 1 тоді кнопку також не малюємо
//         if (articles.length > 0 && articles.length !== totalResults) {
//             // loadMore.classList.remove('is-hidden');
//             buttonControls.show(loadMore);
//             //коли робимо кнопку видимою тоді і додаємо прослуховувач
//             loadMore.addEventListener('click', onLoad);
//         } else {
//             buttonControls.hide(loadMore);
//             // loadMore.classList.add('is-hidden');
//             console.log('Sorry, no news for your search');
//         }
//     } catch (err) {
//         console.log(`${err}`);
//     } finally {
//         form.reset();
//     }
// }

// async function onLoad() {
//     page += 1;
//     //перед початком запиту на сервер робимо кнопку неактивною щоб користувач не міг на неї натиснути під час запиту
//     buttonControls.disabled(loadMore, loader);
//     // maxPage = Math.ceil(totalResults / pageSize);

//     //ЗАПИТ НА СЕРВЕР
//     try {
//         const { articles } = await getNewsFromApi(query, page); // вказуємо що новий запит робимо по новій сторінці
//         createMarkup(articles, list);
//     } catch (err) {
//         console.log(`${err}`);
//     } finally {
//         //після запиту на сервер робимо кнопку активною щоб користувач міг на неї натиснути
//         buttonControls.enabled(loadMore, loader);
//         if (page === maxPage) {
//             buttonControls.hide(loadMore);
//             loadMore.removeEventListener('click', onLoad);
//         }
//     }
// }
