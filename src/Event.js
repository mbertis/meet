import React, { Component } from "react";

class Event extends Component {
  state = {
    isExpanded: false, //Event details are collapsed by default
  };

  //Toggles show/hide details
  handleButtonClick = () => {
    if (this.state.isExpanded === false) {
      this.setState({
        isExpanded: true,
      });
    } else
      this.setState({
        isExpanded: false,
      });
  };

  showExpandedDetails = () => {
    const { event } = this.props;
    if (this.state.isExpanded === true) {
      return (
        <div className="expanded-event-details">
          <h1>About This Event:</h1>
          <a className="event-link" href={event.htmlLink}>See Details on Google Calendar</a>
          <p className="description">{event.description}</p>
        </div>
      );
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>
        <div>
          <p className="startDate">{event.start.dateTime}</p>
          <p className="timeZone">{event.start.timeZone}</p>
          <h3 className="location">{event.location}</h3>
          <div>{this.showExpandedDetails()}</div>
          <button className="showDetails" onClick={this.handleButtonClick}>
            Show Details
          </button>
        </div>
      </div>
    );
  }
}

export default Event;
