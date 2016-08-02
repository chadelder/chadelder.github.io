var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'views/home.html',
    controller  : 'HomeController'
  })

  .when('/about', {
    templateUrl : 'views/about.html',
    controller  : 'AboutController'
  })

  .when('/engineered', {
    templateUrl : 'views/engineered.html',
    controller  : 'EngineeredController'
  })
  .when('/pi', {
    templateUrl : 'views/pi.html',
    controller  : 'PiController'
  })
  .otherwise({redirectTo: '/'});
});
