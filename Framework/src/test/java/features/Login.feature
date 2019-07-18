Feature: Application Login

Scenario: Home page login
Given User on login page
When enter valid creds
Then navigated to dashboard

Scenario: Home page login
Given User on login page
When enter valid creds as "user1" and "pass1"
Then navigated to dashboard

Scenario: Home page login
Given User on login page
When enter following details
|surath|samaddar|29|kolkata|
Then navigated to dashboard

@Regtest
Scenario Outline: Home page login
Given User on login page
When enter valid creds as <username> and password <password>
Then navigated to dashboard
And userprofile displayed

Examples:
|username|password|
|abc123|12345|

@flipsearch
Scenario Outline: Search product in flipkaart
Given Navigate to flipkart
When search for <prod>
And hit enter
Then goes to prod details

Examples:
|prod|
|honor-9n|
|iphone-7|