myApp.controller('kanbanController', function($scope, issuesFactory) {
  var kanban = this;
  kanban
  issuesFactory.getIssues()
    .then(function(result) {
      kanban.issues = result.data;
    })
    .catch(function(errorMessage) {
      kanban.errorMsg = errorMessage;
    })
    .finally(function() {
      kanban.informMsg = "Issue loading promise is done!";
    });

  kanban.showAddIssueForm = function() {
    console.log('CLICKED: Add Issue show form');

    
  }

  kanban.AddIssue = function() {
    console.log('SUBMIT: Add Issue form submit');

    console.log(kanban.title);

    /*var issue = {
      Title: 'Some title',
      AssignedTo: 'codepretty',
      Description: 'There is a new bug found for the header in Firefox',
      OpenedBy: 'mopey'
    }

    issuesFactory.addIssue(issue)
      .then(function(result) {
        console.log('addIssue Promise is done!')
        console.dir(result);
      })
      .catch(function(errorMessage) {
        kanban.errorMsg = errorMessage;
      })
      .finally(function() {
        kanban.informMsg = "Issue added!";
      });*/
  }
});