$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rasheed/workspace/bddsample/src/main/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM login scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is already on login page"
    },
    {
      "line": 7,
      "value": "#When title of login page is FreeCRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 9,
      "value": "#And user clicks on login button"
    },
    {
      "line": 10,
      "value": "#And user is on Home page"
    },
    {
      "line": 11,
      "value": "#Then close the browser"
    },
    {
      "line": 14,
      "value": "#With Examples Keyword"
    }
  ],
  "line": 15,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test@123"
      ],
      "line": 27,
      "id": "free-crm-login-feature;free-crm-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 19111220510,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 492056601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1291120515,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 11279851908,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_page()"
});
formatter.result({
  "duration": 24664832,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.close_the_browser()"
});
formatter.result({
  "duration": 822135862,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"tom\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 10580313483,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 459815370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 23
    }
  ],
  "location": "LoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 3593959897,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3818602095,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_page()"
});
formatter.result({
  "duration": 236206666,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat loginStepDef.LoginStepDef.user_is_on_Home_page(LoginStepDef.java:52)\r\n\tat ✽.And user is on Home page(C:/Users/Rasheed/workspace/bddsample/src/main/java/feature/login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});