config.$inject = ['$stateProvider', '$urlRouterProvider', '$routeProvider'];

function config($stateProvider, $urlRouterProvider, $routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'app/templates/index.html',
    controller 	: 'IndexController'
  })
  .when('/contact', {
    templateUrl : 'app/templates/contact.html',
    controller 	: 'ContactController'
  })
  .otherwise({
    redirectTo: '/'
  });

  $urlRouterProvider.otherwise('/');
}

export default config;
