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
      controller: 'KanbanController',
      templateUrl: 'boards/kanban.html'
    })
    .state('details', {
      url: '/details',
      controller: 'KanbanController',
      templateUrl: 'issues/details.html'
    })
    .state('backlog', {
      url: '/backlog',
      controller: 'KanbanController',
      templateUrl: 'boards/backlog.html'
    });
});

myApp.factory('simpleFactory', function() {
  var factory = {},
      issues = [];

  factory.getIssues = function () {
    return [
      { title:'Authentication is not working', assignedTo:'Rich Lundeen', state: IssueState.New },
      { title:'XSS bug on the signup page', assignedTo:'Rich Lundeen', state: IssueState.Working },
      { title:'broken in ie8', assignedTo:'codepretty', state: IssueState.Working },
      { title:'new feature to add animation on load', assignedTo:'codepretty', state: IssueState.Design },
      { title:'Spike: Using MongoDB and Django', assignedTo:'Rich Lundeen', state: IssueState.Complete }
    ];
  }

  return factory;
});