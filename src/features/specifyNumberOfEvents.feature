Feature: Specify number of events

  Scenario: When user hasn't specified a number, 32 is the default number
    Given the user opens the app
    When the user has not entered a specified number of events
    Then the user will be shown 32 events

  Scenario: User can change the number of events they want to see
    Given the user opens the app
    When the user types in the number of events they wish to see
    Then the user will be shown the number of events they specified