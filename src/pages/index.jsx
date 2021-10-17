import React, {useState} from 'react';
// import Sidebar from '../components/Sidebar';
import { Calendar } from 'react-modern-calendar-datepicker';

const MainPage = () => {
  const [selectedDay, setSelectedDay] = useState([]);
  return (
    <div className="App">
<<<<<<< HEAD
=======
      
      <Sidebar />
>>>>>>> f520baf0e8a0753f134fda8857e578fddb3ad821
      <h3>Daily Check-in
        <br />
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

export default MainPage;