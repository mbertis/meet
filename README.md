# meet
The objective of this app is to build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

Key Features:
● Filter events by city.
● Show/hide event details.
● Specify number of events.
● Use the app when offline.
● Add an app shortcut to the home screen.
● View a chart showing the number of upcoming events by city.


User Stories

Feature 2: Show/Hide an Event’s Details
User Story: As a user, I should be able to expand or collapse an event’s details so that I may view more or less information about the event.

Feature 3: Specify Number of Events
User Story: As a user, I should be able to change the number of events that are shown to me so that I can view as many events as I wish.

Feature 4: Use the App When Offline
User Story: As a user, I should be able to use the app when I am offline, so that I can view any cached data I have for events that I am interested in.

Feature 5: Data Visualization
User Story: As a user, I should be able to view the number of events happening in a variety of cities so that I am able to compare how many events are happening in various locations.

Gherkin Scenarios

Feature 2 - Show/Hide an Event’s Details

Scenario 1: An event element is collapsed by default
Given the user opens the app
When the user scrolls through a list of events
Then the user will not see the details of each event

Scenario 2: User can expand an event to see its details
Given the user selected a specific event
When the user selects “Show Details” option in the app
Then the user will see the event details

Scenario 3: User can collapse an event to hide its details
Given the user has read an event’s details
When the user selects “Hide Details” option in the app
Then the event’s details will be hidden from the user

Feature 3 - Specify Number of Events

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user opens the app
When the user scrolls through a list of events
Then the user will be shown 32 events at a time

Scenario 2: User can change the number of events they want to see
Given the user opens the app
When the user types in the number of events they wish to see
Then the user will be shown the number of events they specified

Feature 4 - Use the App When Offline

Scenario 1: Show cached data when there’s no internet connection
Given the user is offline
When the user opens the app
Then the information about events they previously viewed will be shown to the user

Scenario 2: Show error when user changes the settings (city, time range)
Given the user is offline
When the user changes the settings (city, time range)
Then an error will be shown to the user

Feature 5 - Data Visualization

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user opens the app
When the user scrolls through a list of events without having filtered by city
Then a chart with the number of events happening in various cities will be shown to the user

