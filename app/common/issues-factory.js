myApp.factory('issuesFactory', function() {
  var factory = {};

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