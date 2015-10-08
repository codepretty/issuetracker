myApp.controller('kanbanController', function($scope, issuesFactory) {
  issuesFactory.getIssues()
    .then(function(issues) {
      $scope.issues = issues;
    })
    .catch(function() {
      $scope.errorMsg = "Some error";
    })
    .finally(function() {
      $scope.informMsg = "Issue loading promise is done!";
    });
});