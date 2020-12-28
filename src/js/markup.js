import template from '../templates/tempate.hbs';
import templList from '../templates/templ-list.hbs';
import refs from './refs';


function updateCountryMarkup(country) {
    const markup = template(country);
    refs.country.insertAdjacentHTML('beforeend', markup);
};


function countryList(list) {
    const markup = templList(list);
    refs.country.insertAdjacentHTML('beforeend', markup);
};


export { updateCountryMarkup, countryList };