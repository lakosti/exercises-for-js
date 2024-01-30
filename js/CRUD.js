// // ДЛЯ ТОГО щоб скористатися можливостями CRUD (C - create = POST(http methods), R - read = GET U - update = POST / PATCH D - delete = DELATE) потрібно створити окремий апі сервер (mockapi.io
//ENDPOINT --- ТЕ КУДИ РОБИМО ЗАПИТ (кінцева точка)

// //CORS --- заборона робити щось на сервері (origin )

// const BASE_URL = 'https://65b92b93b71048505a8a59bf.mockapi.io';
// const ENDPOINT = 'books';

// // function checkResponse(res) {
// //
// // }

// /**
//  * Read (GET) -- ЗЧИТУЄМО / ОТРИМУЄМО
//  */
// //перевірка резпонсу
// function checkResponse(resp) {
//     if (!resp.ok) {
//         throw new Error(resp.statusText);
//     }
//     return resp.json();
// }

// function fetchBooks() {
//     return fetch(`${BASE_URL}/${ENDPOINT}`).then(checkResponse);
// }

// //по айді отримуємо книжку
// function fetchBookById(bookId) {
//     return fetch(`${BASE_URL}/${ENDPOINT}/${bookId}`).then(checkResponse);
// }

// // fetchBooks().then(console.log).catch(console.log);
// // fetchBookById(2).then(console.log).catch(console.log);
// // fetchBookById(4).then(console.log).catch(console.log);

// /**
//  * Create (POST) --- ДОДАЄМО НОВІ ДАНІ В БД / СЕРВЕР
//  */

// function addBook(book) {
//     return fetch(`${BASE_URL}/${ENDPOINT}`, {
//         method: 'POST', // вказуємо метод
//         body: JSON.stringify(book), // вказуємо що саме потрібно передати і приводимо до json формату
//         headers: {
//             'Content-Type': 'application/json', // MIME-type
//         }, // буде працювати і без йього але це полегшує роботу браузера, оскільки відразу вказуємо що за тип даних передаємо
//     }).then(checkResponse);
// }

// // addBook({
// //     title: 'Тестова книга з CSS',
// //     author: 'Я',
// //     genres: ['CSS'],
// //     rating: 9,
// // })
// //     .then(book => {
// //         console.log('Прийшла відповідь від бекенда можна малювати');
// //         console.log(book);
// //     })
// //     .catch(error => console.log(error));

// // addBook({
// //     title: 'Тестова книга з HTML',
// //     author: 'Я',
// //     genres: ['HTML'],
// //     rating: 7,
// // }).then(book => {
// //     console.log('Прийшла відповідь від бекенда можна малювати');
// //     console.log(book);
// // });

// /**
//  * Update (PUT/PATCH)  --- ОНОВЛЕННЯ ДАНИХ (ПОТРІБНО ВСЕ ЧИТАТИ В ДОКУМЕНТАЦІЇ) --- ОБОВ'ЯЗКОВО ВКАЗУЄМО АЙДІ
//  */

// /*

// PUT - повне оновлення ресурсу
// {
//   title: "title 1",
//   rating: 5,
//   author: "author 1"
// }

// PUT -> body: { rating: 7 }

// result: { rating: 7 }

// PATCH - часткове оновлення ресурсу
// {
//   title: "title 1",
//   rating: 5,
//   author: "author 1"
// }

// PATCH -> body: { rating: 7 }

// DB: {
//   title: "title 1",
//   rating: 7,
//   author: "author 1"
//     }
// */

// function updateBookById(update, bookId) {
//     return fetch(`${BASE_URL}/${ENDPOINT}/${bookId}`, {
//         method: 'PUT',
//         body: JSON.stringify(update),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }).then(checkResponse);
// }

// //then пишемо щоб побачити результат в консолі
// updateBookById({ title: 'Велика нова книга по NODEJS' }, 19).then(res => {
//     console.log('title успішно оновлений!');
//     console.log(res);
// });

// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: 'Anime' }, 3);

// /**
//  * Delete (DELETE) -- видалення (також вказуємо айді)
//  */

// function removeBook(bookId) {
//     return fetch(`${BASE_URL}/${ENDPOINT}/${bookId}`, {
//         method: 'DELETE',
//     }).then(checkResponse);
// }

// //якщо викликати ще раз 4 айді буде помилка бо книги уже не існує
// removeBook(4);

//////////////////////////////// WEATHER ////////////////////////////////////

// const API_KEY = '577fe37f71db4f17a2f203238243001';
// const BASE_URL = 'http://api.weatherapi.com/v1';
// const ENDPOINT = 'forecast.json';

// const refs = {
//     form: document.getElementById('form'),
//     weatherList: document.getElementById('weather-list'),
// };

// refs.form.addEventListener('submit', handleSearch);

// function handleSearch(evt) {
//     evt.preventDefault();
//     //витягуємо значення форми
//     const form = evt.currentTarget;
//     //значення даних інпута (введене місто)
//     const city = form.elements.city.value;

//     searchWeatherByCity(city)
//         .then(data => {
//             //отримуємо масив температур цього міста
//             const forecast = data.forecast.forecastday;
//             let markup = '';
//             for (const day of forecast) {
//                 markup += createWeatherCardMarkup(day);
//             }
//             refs.weatherList.innerHTML = markup;
//         })
//         .catch(err => console.log(err))
//         .finally(() => form.reset());
// }

// function searchWeatherByCity(city) {
//     //параметри об'єктів
//     const urlPArams = new URLSearchParams({
//         key: API_KEY,
//         q: city,
//         days: 3,
//     });
//     return fetch(`${BASE_URL}/${ENDPOINT}?${urlPArams}`).then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         //ОБОВ'ЯЗКОВО РОБИМО RETURN
//         return resp.json();
//     });
// }
// function createWeatherCardMarkup({
//     date,
//     day: {
//         avgtemp_c,
//         condition: { text },
//     },
// }) {
//     return `
//   <div>
//     <h2>${date}</h2>
//     <p>${text}</p>
//     <p>Av temp: ${avgtemp_c} C</p>
//   </div>`;
// }
