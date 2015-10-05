var IssueState = {
  New: "New",
  Design: "Design",
  Working: "Working",
  Testing: "Testing",
  Complete: "Complete"
};

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('kanban', {
      url: '/',
      controller: 'kanbanController',
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