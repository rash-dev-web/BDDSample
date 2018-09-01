$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rasheed/workspace/bddsample/src/main/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 19884941777,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 49724146,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_username_and_password()"
});
formatter.result({
  "duration": 246584051,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 11927273021,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_page()"
});
formatter.result({
  "duration": 7424024,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.close_the_browser()"
});
formatter.result({
  "duration": 621784223,
  "status": "passed"
});
});