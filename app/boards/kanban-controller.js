myApp.controller('kanbanController', function($scope, issuesFactory) {
  issuesFactory.getIssues()
    .then(function(result) {
      $scope.issues = result.data;
    })
    .catch(function(errorMessage) {
      $scope.errorMsg = errorMessage;
    })
    .finally(function() {
      $scope.informMsg = "Issue loading promise is done!";
    });
});