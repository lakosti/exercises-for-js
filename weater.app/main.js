// import { form } from './helpers/common';

//в першій функції прийнято писати ОДИН then який опрацювує НЕГАТИВНИЙ сценарій та ПАРСИТЬ респонс
//в іншому then отримуємо його дані і через catch оброблюємо помилку

const form = document.querySelector('.js-form');
const list = document.querySelector('.js-list');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    //витягуємо поле інтут і селект з форми (evt)
    const { searh, days } = evt.currentTarget.elements;
    getWeather(searh.value, days.value)
        .then(obj => (list.innerHTML = createMarkup(obj.forecast.forecastday)))
        .catch(err => console.log(err));
}

function getWeather(city, days) {
    // http://api.weatherapi.com/v1/forecast.json?key=f652ad30535645538aa180322242701&q=Paris&days=5

    // ФОРМУЄМО ЮРЛ ЗАПИТ (запит на бекенд)
    const BASE_URL = 'http://api.weatherapi.com/v1';
    const API_KEY = 'f652ad30535645538aa180322242701';

    return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`).then(
        response => {
            //якщо ОК = false значить не знайдено
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            //якщо все добре парсимо json
            return response.json(); // = data // передає результат в інший then
        }
    );
}
function createMarkup(arr) {
    return arr
        .map(
            ({
                date,
                day: {
                    avgtemp_c,
                    condition: { icon, text },
                },
            }) => `        <li>
            <img src="${icon}" alt="" />
            <p>${text}</p>
            <h2>${date}</h2>
            <h3>${avgtemp_c}</h3>
        </li>`
        )
        .join('');
}
