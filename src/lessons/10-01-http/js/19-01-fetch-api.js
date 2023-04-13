//  * - HTTP-запросы в браузере
//  *  - Fetch API
//  *  - Владка Network
//  *  - HTTP-методы
//  *  - Заголовки
//  *  - MIME-типы
//  *  - Параметры запроса
//  * - Документация REST API
//  * - Обработка 404 с fetch
//  * - Аутентификация
//  * - Библиотеки-обёртки
//  * - https://pokeapi.co/

import '../css/common.css';
// import pokemonCardTpl from '../js/templates/pokemon-card.hbs'; // розмітка
import API from '../js/19-api-service'; // робота з бекендом
import getRefs from '../js/19-get-refs'; // отримання рефів

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const searchQuery = form.elements.query.value; // elements.query тому що у властивостях інпуту є name="query"

  API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// ! =========================================

const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
  headers: {
    Authorization: '4330ebfabc654a6992c2aa792f3173a3',
  },
};

fetch(url, options)
  .then(r => r.json())
  .then(console.log);
