$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/BlacK_BearD/Chahna_workspace/Star_Wars_Project/src/main/java/Features/Star_War.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying the functionality of Swapi website.",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Checking all starwars characters valid data scenario",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.;checking-all-starwars-characters-valid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Positive_Test_1"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User should launch swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter valid service URL for all characters",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on the request button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "check final result",
  "keyword": "And "
});
formatter.match({
  "location": "StarWars_StepDefination.user_should_launch_swapi_dev()"
});
formatter.result({
  "duration": 7757660520,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.enter_valid_service_URL_for_all_characters()"
});
formatter.result({
  "duration": 151499361,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.click_on_the_request_button1()"
});
formatter.result({
  "duration": 311338365,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.check_final_result()"
});
formatter.result({
  "duration": 117383342,
  "status": "passed"
});
formatter.after({
  "duration": 1087745734,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Checking starwars all characters by using invalid data scenario",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.;checking-starwars-all-characters-by-using-invalid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Negative_Test"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User must open swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters invalid data in starwars characters",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "clicks on request button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "will check the displayed result",
  "keyword": "And "
});
formatter.match({
  "location": "StarWars_StepDefination.user_must_open_swapi_dev()"
});
formatter.result({
  "duration": 6430866330,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.user_enters_invalid_data_in_starwars_characters()"
});
formatter.result({
  "duration": 105115236,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.clicks_on_request_button()"
});
formatter.result({
  "duration": 281636364,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.will_check_the_displayed_result()"
});
formatter.result({
  "duration": 40108854,
  "status": "passed"
});
formatter.after({
  "duration": 1004246706,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Checking specific character output with valid data",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.;checking-specific-character-output-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Positive_Test"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User must be on swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "enter valid service_URL for starwars specific character",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "clicks on the request box",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Confirm the result",
  "keyword": "And "
});
formatter.match({
  "location": "StarWars_StepDefination.user_must_be_on_swapi_dev()"
});
formatter.result({
  "duration": 6469539628,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.enter_valid_service_URL_for_starwars_specific_character()"
});
formatter.result({
  "duration": 140118310,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.clicks_on_the_request_box()"
});
formatter.result({
  "duration": 248467522,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.confirm_the_result()"
});
formatter.result({
  "duration": 89926733,
  "status": "passed"
});
formatter.after({
  "duration": 950091117,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Checking starwars specific character using invalid service URL",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.;checking-starwars-specific-character-using-invalid-service-url",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Negative_Test"
    },
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User should launch the website",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "enter invalid service URL for specific character",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Click on the request button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Confirm if the end result displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StarWars_StepDefination.user_should_launch_the_website()"
});
formatter.result({
  "duration": 6545209343,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.enter_invalid_service_URL_for_specific_character()"
});
formatter.result({
  "duration": 166404044,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.click_on_the_request_button()"
});
formatter.result({
  "duration": 263322079,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.confirm_if_the_end_result_displayed()"
});
formatter.result({
  "duration": 64453992,
  "status": "passed"
});
formatter.after({
  "duration": 977245529,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Checking searching with valid data scenario",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.;checking-searching-with-valid-data-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Positive_Test"
    },
    {
      "line": 30,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User should open firefox and type swapi URL",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Enter valid planets/characters valid service URL",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Clicks on the request button",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Check the results",
  "keyword": "And "
});
formatter.match({
  "location": "StarWars_StepDefination.user_should_open_chrome_and_type_swapi_URL()"
});
formatter.result({
  "duration": 6456845042,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.enter_valid_planets_characters_valid_service_URL()"
});
formatter.result({
  "duration": 96055229,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.clicks_on_the_request_button()"
});
formatter.result({
  "duration": 274657263,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.check_the_results()"
});
formatter.result({
  "duration": 94777656,
  "status": "passed"
});
formatter.after({
  "duration": 970743506,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Searching with invalid data result scenario",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.;searching-with-invalid-data-result-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@Negative_Test"
    },
    {
      "line": 37,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User must be on homepage of swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "enter invalid service URL to search planets/characters",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks on request",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "checks if the final result is available",
  "keyword": "And "
});
formatter.match({
  "location": "StarWars_StepDefination.user_must_be_on_homepage_of_swapi_dev()"
});
formatter.result({
  "duration": 6875771050,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.enter_invalid_service_URL_to_search_planets_characters()"
});
formatter.result({
  "duration": 123752864,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.user_clicks_on_request()"
});
formatter.result({
  "duration": 258924050,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.checks_if_the_final_result_is_available()"
});
formatter.result({
  "duration": 81189229,
  "status": "passed"
});
formatter.after({
  "duration": 948856852,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Checking the blank input functionality scenario",
  "description": "",
  "id": "verifying-the-functionality-of-swapi-website.;checking-the-blank-input-functionality-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@Positive_Test"
    },
    {
      "line": 44,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "User should be on homepage of swapi.dev",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "keep service URL field blank",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "click on the request",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "check if the result is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StarWars_StepDefination.user_should_be_on_homepage_of_swapi_dev()"
});
formatter.result({
  "duration": 6865342823,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.keep_service_URL_field_blank()"
});
formatter.result({
  "duration": 78942800,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.click_on_the_request()"
});
formatter.result({
  "duration": 256134550,
  "status": "passed"
});
formatter.match({
  "location": "StarWars_StepDefination.check_if_the_result_is_displayed()"
});
formatter.result({
  "duration": 67819022,
  "status": "passed"
});
formatter.after({
  "duration": 1015422814,
  "status": "passed"
});
});