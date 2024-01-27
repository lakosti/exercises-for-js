//в першій функції прийнято писати ОДИН then який опрацювує НЕГАТИВНИЙ сценарій та ПАРСИТЬ респонс
//в іншому then отримуємо його дані і через catch оброблюємо помилку

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
            return response.json();
        }
    );
}

getWeather('Paris', 5)
    .then(obj => console.log(obj))
    .catch(err => console.log(err));
