import { Calendar } from 'react-date-range';

import React, { Component, useState } from 'react';
import '../App.css';

class CalendarComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
          date: ""
      };
  };

  handleSelect(date) {
      console.log(date);
  }

  render(){     
    return (
      <div className="Calendar">
          <h1>Daily Check-in <br /><br />
            <p>Good 😊 Normal 🙂 Sad 🤢 <hr /></p>
          </h1>
        <Calendar id="calendar"
            date={new Date()}
            onChange={this.handleSelect}
        /> 
      </div>
    );
  } 
}

export default CalendarComponent;