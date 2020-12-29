import { errorEnter, wrongQuery } from './notification';
import { countryList } from './markup';

export default {
    searchQuery: '',

    fetchCountry() {
        return fetch(`https://restcountries.eu/rest/v2/name/${this.searchQuery}`)
            .then(resp => resp.json())
            .then(country => {

                if (country.length > 10) {
                    return errorEnter();
                };

                if (country.status === 404) {
                    return wrongQuery();
                };

                if (country.length > 1 && country.length <= 10) {
                    return countryList(country);
                };

                return country;
            })
            .catch(error => console.log(error));
    },
};


