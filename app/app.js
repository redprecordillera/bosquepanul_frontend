require("angular");
require("angular-ui-router");
require("angular-route");

import config from './app.config.js';
import AppController from './controllers/app.js';
import IndexController from './controllers/index.js';
import ForestController from './controllers/forest.js';

var app = angular.module('app', ['ui.router', 'ngRoute']);

app.config(config);
app.controller('AppController', AppController);
app.controller('IndexController', IndexController);
app.controller('ForestController', ForestController);
