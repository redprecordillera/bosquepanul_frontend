config.$inject = ['$stateProvider', '$urlRouterProvider', '$routeProvider', '$compileProvider'];

function config($stateProvider, $urlRouterProvider, $routeProvider, $compileProvider){
  $compileProvider.debugInfoEnabled(false);
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
}

export default config;
