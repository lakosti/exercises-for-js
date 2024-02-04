//////https://newsapi.org/v2/everything?q=bitcoin&apiKey=6974704f595045a6bf725b937b9327b9

import createMarkup from './templates/markupNews.js'; //ОБОВЯЗКВОВО ПИШЕМО розширення файла(js)
import { getNewsFromApi } from './services/getNews.js';

const searchForm = document.querySelector('.search-form'); // форма з інпутом
const list = document.querySelector('.articles'); // ul
const loadMore = document.querySelector('[data-action="load-more"]'); // btn load-more
let page = 1;
let query = '';

searchForm.addEventListener('submit', onSubmit);

async function onSubmit(evt) {
    evt.preventDefault();

    list.innerHTML = '';
    page = 1;
    const form = evt.currentTarget;
    query = form.elements.query.value.trim();

    if (!query) {
        alert('Please enter something');
        return;
    }

    try {
        const { articles, totalResults } = await getNewsFromApi(query); //замість THEN => AWAIT ===> дані які містить проміс - ми їх розпакували з data
        createMarkup(articles, list); //list ми передали для імпорту (інакше прийщлось би передавати змінну)

        if (articles.length > 0) {
            loadMore.classList.remove('is-hidden');
            //коли робимо кнопку видимою тоді і додаємо прослуховувач
            loadMore.addEventListener('click', onLoad);
        } else {
            loadMore.classList.add('is-hidden');
            console.log('Sorry, no news for your search');
        }
    } catch (err) {
        console.log(`${err}`);
    } finally {
        form.reset();
    }
}

async function onLoad(evt) {
    page += 1;
    const { articles, totalResults } = await getNewsFromApi(query);
    createMarkup(articles, list);
}
