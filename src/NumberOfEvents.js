import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  updateNumber = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <h4 className="number-title">Number of Events:</h4>
        <input
          type="number"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.updateNumber}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
