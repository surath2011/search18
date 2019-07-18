$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Search product in flipkaart",
  "description": "",
  "id": "application-login;search-product-in-flipkaart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@flipsearch"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Navigate to flipkart",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "search for \u003cprod\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "hit enter",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "goes to prod details",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "application-login;search-product-in-flipkaart;",
  "rows": [
    {
      "cells": [
        "prod"
      ],
      "line": 38,
      "id": "application-login;search-product-in-flipkaart;;1"
    },
    {
      "cells": [
        "honor-9n"
      ],
      "line": 39,
      "id": "application-login;search-product-in-flipkaart;;2"
    },
    {
      "cells": [
        "iphone-7"
      ],
      "line": 40,
      "id": "application-login;search-product-in-flipkaart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Search product in flipkaart",
  "description": "",
  "id": "application-login;search-product-in-flipkaart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@flipsearch"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Navigate to flipkart",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "search for honor-9n",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "hit enter",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "goes to prod details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.navigate_to_flipkart()"
});
formatter.result({
  "duration": 16404955200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "honor-9n",
      "offset": 11
    }
  ],
  "location": "stepdefination.search_for_honor_n(String)"
});
formatter.result({
  "duration": 250062200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.hit_enter()"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.goes_to_prod_details()"
});
formatter.result({
  "duration": 3463099600,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search product in flipkaart",
  "description": "",
  "id": "application-login;search-product-in-flipkaart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@flipsearch"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Navigate to flipkart",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "search for iphone-7",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "hit enter",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "goes to prod details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.navigate_to_flipkart()"
});
formatter.result({
  "duration": 12872663100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone-7",
      "offset": 11
    }
  ],
  "location": "stepdefination.search_for_honor_n(String)"
});
formatter.result({
  "duration": 237836200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.hit_enter()"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.goes_to_prod_details()"
});
formatter.result({
  "duration": 3408958500,
  "status": "passed"
});
});