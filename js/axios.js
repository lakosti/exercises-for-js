// //https://65b92b93b71048505a8a59bf.mockapi.io/

// //по дефолту юрл приміняється до всіх у запитах вказуємо лише  ЕНДПОІНТИ
// axios.defaults.baseURL = 'https://65b92b93b71048505a8a59bf.mockapi.io';

// /**
//  * Read (GET)
//  */

// function fetchBooks() {
//     return axios.get('books').then(({ data }) => data);
//     //дані в axios зберігається в data тому їх потрібно додатково витягувати
// }

// function fetchBookById(bookId) {
//     // return fetch(`/books/${bookId}`).then((res) => res.json());
//     return axios.get(`books/${bookId}`).then(({ data }) => data);
// }

// fetchBooks().then(console.log);
// fetchBookById(2).then(console.log);
// fetchBookById(4).then(console.log);

// /**
//  * Create (POST)
//  */

// function addBook(book) {
//     // const options = {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(book),
//     // };

//     // return fetch(`${BASE_URL}/books`, options).then((res) => res.json());

//     return axios.post('books', book).then(({ data }) => data);
// }

// addBook({
//     title: 'Тестова книга з CSS',
//     author: 'Я',
//     genres: ['CSS'],
//     Rating: 9,
// })
//     .then(book => {
//         console.log('Прийшла відповідь від бекенда можна малювати');
//         console.log(book);
//     })
//     .catch(error => console.log(error));

// addBook({
//     title: 'Тестова книга з HTML',
//     author: 'Я',
//     genres: ['HTML'],
//     Rating: 7,
// }).then(book => {
//     console.log('Прийшла відповідь від бекенда можна малювати');
//     console.log(book);
// });

// /**
//  * Update (PUT/PATCH)
//  */

// function updateBookById(update, bookId) {
//     // const options = {
//     //   метод: "PUT",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(update),
//     // };

//     // return fetch(`/books/${bookId}`, options).then((res) => res.json());

//     return axios.put(`books/${bookId}`, update).then(({ data }) => data);
// }

// updateBookById({ title: 'Велика нова книга по NODEJS' }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: 'Манго' }, 17);

// /**
//  * Delete (DELETE)
//  */

// function removeBook(bookId) {
//     // const options = {
//     //   method: "DELETE",
//     // };

//     // return fetch(`/books/${bookId}`, options).then((res) => res.json());

//     return axios.delete(`books/${bookId}`);
// }

// removeBook(29).then(({ data }) => {
//     console.log(data);
//     console.log('Успішно видалено');
// });
// removeBook(37).then(({ data }) => {
//     console.log(data);
//     console.log('Успішно видалено');
// });
