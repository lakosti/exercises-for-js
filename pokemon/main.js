//// currentTarget - доступний лише в момент виклику події, після неї він null

// /**
//  * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
//  */

// function fetchPokemon(pokemonId) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.toLowerCase()}/`).then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return resp.json();
//         //далі функцію обробляємо у місці виклику  (пишемо then)
//     });
// }

// const cardContainer = document.querySelector('.card-container');
// const searchForm = document.querySelector('.search-form');

// searchForm.addEventListener('submit', handleSearch);
// function handleSearch(evt) {
//     evt.preventDefault();
//     //отримуємо значення поля (використовуємо карент таргет шоб не звертатися до змінної за межею)
//     const form = evt.currentTarget;
//     const query = form.elements.query.value;

//     //передаємо наше айді яке будемо писати у поле вводу у функцію

//     fetchPokemon(query)
//         .then(renderPokemonCard) // data => renderPokemonCard(data)
//         .catch(onFetchError)
//         .finally(() => form.reset());
// }

// function renderPokemonCard({ name, sprites, weight, height, abilities }) {
//     const abilityListItems = abilities
//         .map(ability => `<li class="list-group-item">${ability.ability.name}</li>`)
//         .join('');
//     console.log(abilityListItems);

//     const markup = `<div class="card">
//    <div class="card-img-top">
//      <img src="${sprites.front_default}" alt="${name}">
//    </div>
//    <div class="card-body">
//      <h2 class="card-title">Ім'я: ${name}</h2>
//      <p class="card-text">Вага: ${weight} g</p>
//      <p class="card-text">Зростання: ${height} ft</p>

//      <p class="card-text"><b>Уміння</b></p>
//      <ul class="list-group">${abilityListItems}</ul>
//    </div>
// </div>`;
//     cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//     alert('Упс, щось пішло не так і ми не знайшли вашого покемона!');
//     console.error(error);
// }

//////////////////////////////////////// POKEMON API перепис на асинхрон ////////////////////////////////////

// import { fetchPokemon } from './services/pokemonApi.js'; // named import fetch fn
// import renderPokemonCard from './templates/pockemonMarkup.js'; // default export

// const cardContainer = document.querySelector('.card-container');
// const searchForm = document.querySelector('.search-form');

// searchForm.addEventListener('submit', handleSearch);

// async function handleSearch(evt) {
//     evt.preventDefault();

//     const form = evt.currentTarget;
//     const query = form.elements.query.value;

//     //перепис на async (огортаємо в try/catch шоб відловити помилки)
//     try {
//         const data = await fetchPokemon(query);
//         renderPokemonCard(data, cardContainer); // cardContainer -- для експорту шоб не ст додатковий файл куди виносимо всі змінні, бо оскільки вона створена тут в тому файлі вона недоступна і ми їх таким чином пов'язуємо
//     } catch {
//         onFetchError();
//     } finally {
//         form.reset();
//     }
// }

// function onFetchError() {
//     cardContainer.innerHTML = '';
//     alert('Упс, щось пішло не так і ми не знайшли вашого покемона!');
// }
