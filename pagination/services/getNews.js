// const BASE_URL = 'https://newsapi.org';
// const API_KEY = '6974704f595045a6bf725b937b9327b9';
// const ENDPOINT = 'v2/everything';

// //дані які приходять к аксіосу - це проміс і всі дані у ньому зберігаються у data, тому її потрібно розпакувати
// async function getNewsFromApi(query, pageSize = 4) {
//     return axios
//         .get(`${BASE_URL}/${ENDPOINT}`, {
//             params: {
//                 apiKey: API_KEY,
//                 q: query,
//                 language: 'en',
//                 pageSize,
//                 page: 1,
//             },
//         })
//         .then(({ data }) => data);
// }

// export { getNewsFromApi };
