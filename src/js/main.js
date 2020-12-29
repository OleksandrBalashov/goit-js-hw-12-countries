import debounce from 'lodash.debounce';
import service from './service';
import refs from './refs';
import updateRef from './component';
import { updateCountryMarkup } from './markup';



refs.input.addEventListener('input', debounce(fetchCountriesHandler, 500));
refs.country.addEventListener('click', fetchClickHandler);


function fetchCountriesHandler(event) {
    service.searchQuery = event.target.value;
    updateMarkup(); 
};

function fetchClickHandler(event) {
    event.preventDefault();

    if (event.target.localName === 'a') {
        service.searchQuery = event.target.textContent;
        updateMarkup();
    };
    
    return;  
};

function updateMarkup() {
    updateRef.resetRef();
    updateRef.updateRef();
    updateRef.spinnerOn();
    

    service.fetchCountry()
        .then(country => {
            updateCountryMarkup(country);
            updateRef.spinnerOff();
        })
        .catch(error => console.log(error));
};
