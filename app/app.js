require("angular");
require("angular-ui-router");
require("angular-route");

import config from './app.config.js';
import AppController from './controllers/app.js';
import GifPlayerDirective from './directives/gifplayer.js';

var app = angular.module('app', ['ui.router', 'ngRoute']);

app.config(config);
app.directive('gifplayer', GifPlayerDirective);
app.controller('AppController', AppController);
