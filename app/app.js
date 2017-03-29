require("angular");
require("angular-ui-router");
require("angular-route");

import config from './app.config.js';
import AppController from './controllers/app.js';
import GifPlayerDirective from './directives/gifplayer.js';
import SpeciesComponent from './components/species.js';
import SpeciesCardComponent from './components/cards/species.js';
import TipsComponent from './components/tips.js';
import TipsCardComponent from './components/cards/tips.js';

var app = angular.module('app', ['ui.router', 'ngRoute']);

app.config(config);
app.directive('gifplayer', GifPlayerDirective);
app.component('species', SpeciesComponent);
app.component('speciesCard', SpeciesCardComponent);
app.component('tips', TipsComponent);
app.component('tipsCard', TipsCardComponent);
app.controller('AppController', AppController);
