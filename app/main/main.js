var client = new WindowsAzure.MobileServiceClient(
  "https://issuetracker.azure-mobile.net/",
  "OwIaGoXveiClXWOBJiCjtvhLVuEaEJ21"
);

function getIssues() {
  console.log('soon');
}

function addIssueState() {
  var state = {
      Value: "New"
  };
  client.getTable("IssueState").insert(state);
}

function addIssue() {
  var issue = {
      OpenedBy: "Rich Lundeen",
      AssignedTo: "Brigette Lundeen",
      Description: "Something goes here",
      Priority: 1
  };
  client.getTable("Issue").insert(issue);
}