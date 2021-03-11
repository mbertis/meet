import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  updateNumber = (event) => {
    const value = event.target.value;
    if (value <= 0 || value > 32 || value === "") {
      this.setState({
        numberOfEvents: value,
        errorText:
          "You have entered an invalid number of events. Please enter a number between 1 and 32.",
      });
    } else {
      this.props.updateEvents("all", value);
      return this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <h4 className="number-title">Number of Events:</h4>
        <input
          type="text"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.updateNumber}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
