import React, {useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { Calendar } from 'react-modern-calendar-datepicker';
import "react-modern-calendar-datepicker/lib/DatePicker.css";

function App() {
  const [selectedDay, setSelectedDay] = useState([]);

  return (
    <div className="App">
      <Sidebar />
      <h3>Daily Check-in
        <br/> 
      </h3>
      <p>Good 😊 Normal 🙂 Sad 🤢</p> <hr />
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        calendarClassName="myCalendar"
        calendarTodayClassName="today"
        shouldHighlightWeekends
      />
    </div>
  );
}

export default App;
