import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import { InfoAlert } from "./Alert";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import EventGenre from "./EventGenre";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        infoText: "You are offline. Data shown may be out-of-date.",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length; //Maps the locations and filters events by each location to get the length of the resulting array
      const city = location.split(",").shift(); //Splits location at every comma to only return city
      return { city, number };
    });
    return data;
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    const numberOfEvents = eventCount || this.state.numberOfEvents;
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const filteredEvents = locationEvents.slice(0, numberOfEvents);
      this.setState({
        events: filteredEvents,
        numberOfEvents: numberOfEvents,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Title">
          <h1>Meet</h1>
        </div>
        <InfoAlert text={this.state.infoText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <div className="data-vis-wrapper">
          <h4>Events by Genre:</h4>
          <EventGenre events={this.state.events} />
          <h4>Events in Each City:</h4>
          <div>
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis
                padding={{ left: 20 }}
                type="category"
                dataKey="city"
                name="City"
              />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="Number of Events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#903548" shape="star" />
            </ScatterChart>
          </ResponsiveContainer>
          </div>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
