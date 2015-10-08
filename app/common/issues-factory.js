myApp
  .constant('ENDPOINT_URL', 'https://issuetracker.azure-mobile.net/tables')
  .factory('issuesFactory', function($q, $http, ENDPOINT_URL) {
    var factory = {},
        items = [
          { title:'Authentication is not working', assignedTo:'Rich Lundeen', state: IssueState.New },
          { title:'XSS bug on the signup page', assignedTo:'Rich Lundeen', state: IssueState.Working },
          { title:'broken in ie8', assignedTo:'codepretty', state: IssueState.Working },
          { title:'new feature to add animation on load', assignedTo:'codepretty', state: IssueState.Design },
          { title:'Spike: Using MongoDB and Django', assignedTo:'Rich Lundeen', state: IssueState.Complete }
        ];

    factory.getIssues = function () {
      return $http.get(ENDPOINT_URL + "/Issue");

      /*httpGetPromise.then(
        function (result) {
          console.log('success callback');
          console.log(result.data);
          return result.data;
        },
        function () {
          console.log('error callback');
          //how best to log error
          return;
        });*/
    }

    return factory;
  });