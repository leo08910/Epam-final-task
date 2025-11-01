Feature: Login functionality

  Scenario: UC-1 - Login form with empty credentials
    Given I am on the login page
    When I enter any username and password
    And I clear both input fields
    And I click the login button
    Then I should see an error message saying "Epic sadface: Username is required"

  Scenario: UC-2 - Login form with empty password
    Given I am on the login page
    When I enter any username and password
    And I clear password input field
    And I click the login button
    Then I should see an error message saying "Epic sadface: Password is required"

  Scenario Outline: UC-3 Test Login form with accepted credentials
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see the page title "Swag Labs"

    Examples:
      | username                | password     
      | standard_user           | secret_sauce 
      | problem_user            | secret_sauce 
      | performance_glitch_user | secret_sauce 
      | error_user              | secret_sauce 
      | visual_user             | secret_sauce 







