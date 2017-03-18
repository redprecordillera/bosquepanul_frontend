config.$inject = ['$stateProvider', '$urlRouterProvider', '$routeProvider'];

function config($stateProvider, $urlRouterProvider, $routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : 'app/templates/index.html'
  })
  .when('/bosque', {
    templateUrl : 'app/templates/forest.html'
  })
  .when('/beneficios', {
    templateUrl : 'app/templates/benefits.html'
  })
  .when('/flora_y_fauna', {
    templateUrl : 'app/templates/flora.html'
  })
  .when('/ubicacion', {
    templateUrl : 'app/templates/placement.html'
  })
  .when('/recomendaciones', {
    templateUrl : 'app/templates/recommendations.html'
  })
  .when('/compartir', {
    templateUrl : 'app/templates/share.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}

export default config;
