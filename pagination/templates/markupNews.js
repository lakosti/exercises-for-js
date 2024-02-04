// export default function createMarkup(articles, list) {
//     const markup = articles
//         .map(
//             ({ url, urlToImage, title, author, description }) => `
//      <li>
//        <a href="${url}" target="_blank" rel="noopener noreferrer">
//          <article>
//            <img src="${urlToImage}" alt="" width="480">
//            <h2>${title}</h2>
//            <p>Posted by: ${author}</p>
//            <p>${description}</p>
//          </article>
//        </a>
//      </li>`
//         )
//         .join('');

//     list.insertAdjacentHTML('beforeend', markup);
// }

//list передаємо як змінну шоб вона була доступна в осн коді і щоб не експортувати передавати її окремо
