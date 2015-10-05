myApp.controller('kanbanController', function($scope, issuesFactory) {
  $scope.issues = issuesFactory.getIssues();
});