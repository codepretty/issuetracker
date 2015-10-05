myApp.controller('KanbanController', function($scope, simpleFactory) {
  $scope.issues = simpleFactory.getIssues();
});