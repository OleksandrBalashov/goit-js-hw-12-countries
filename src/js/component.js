import refs from './refs';

export default {
    spinnerOn() {
        refs.spinner.classList.remove('is-hidden');
    },

    spinnerOff() {
        refs.spinner.classList.add('is-hidden')
    },

    resetRef() {
        refs.input.value = '';
    },

    updateRef() {
        refs.country.innerHTML = '';
    },
};

