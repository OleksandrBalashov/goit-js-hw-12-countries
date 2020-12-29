import { error } from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.delay = 1500;

function errorEnter() {
    error({
        title: 'Too many matches found!',
        text: 'Please enter a more specific query!'
    });
};

function wrongQuery() {
    error({
        title: "Sorry, county not found!",
        text: "Try again"
    });
};

export { errorEnter, wrongQuery };