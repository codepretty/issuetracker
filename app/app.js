var IssueState = {
  New: "New",
  Design: "Design",
  Working: "Working",
  Testing: "Testing",
  Complete: "Complete"
};

var myApp = angular.module('myApp', ['ui.router', 'myApp.directives']);

myApp
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common["X-ZUMO-APPLICATION"] = "OwIaGoXveiClXWOBJiCjtvhLVuEaEJ21";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('kanban', {
        url: '/',
        controller: 'kanbanController',
        controllerAs: 'kanban',
        templateUrl: 'boards/kanban.html'
      })
      .state('details', {
        url: '/details',
        controller: 'kanbanController',
        templateUrl: 'issues/details.html'
      })
      .state('backlog', {
        url: '/backlog',
        controller: 'kanbanController',
        templateUrl: 'boards/backlog.html'
      });
  });