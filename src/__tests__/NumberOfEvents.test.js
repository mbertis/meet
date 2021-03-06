import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
  });
  test("render textbox", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });
  test("should show 32 events by default", () => {
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });
  test("renders number input correctly", () => {
    const value = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number").prop("value")).toBe(value);
  });
  test("change number of events shown when input changes", () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(10);
  });
});
