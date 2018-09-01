Feature: Free CRM login feature

Scenario: Free CRM login scenario

Given user is already on login page
When title of login page is FreeCRM
Then user enters username and password
And user clicks on login button
And user is on Home page
Then close the browser