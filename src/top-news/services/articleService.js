import { API_KEY } from '../../config/constants';

export function getTopArticlesByCountry(country) {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
  );
}

export function getTopArticlesByCountryAndCategory(country, category) {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
  );
}

export function getTopArticlesByCountryAndQuery(country, query) {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&q=${query}&apiKey=${API_KEY}`
  );
}
