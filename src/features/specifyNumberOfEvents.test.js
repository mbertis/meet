import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import NumberOfEvents from "../NumberOfEvents";
import { mount } from "enzyme";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the user opens the app', () => {
    });

    let NumberOfEventsWrapper;
    when('the user has not entered a specified number of events', async () => {
      NumberOfEventsWrapper = await mount(<NumberOfEvents updateEvents={() => {}}/>);

    });
    
    then("the user will be shown 32 events", async () => {      
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
    });
});

test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the user opens the app', () => {

    });

    let NumberOfEventsWrapper;
    when('the user types in the number of events they wish to see', async () => {
      NumberOfEventsWrapper = await mount(<NumberOfEvents updateEvents={() => {}}/>);
      const eventObject = { target: { value: 10 } };
      NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    
    });

    then('the user will be shown the number of events they specified', () => {
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(10);
    });
});
});
