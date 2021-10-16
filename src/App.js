import React, {useState} from 'react';
import './App.css';
import "react-date-range/dist/styles.css";
import 'react-date-range/dist/theme/default.css';
import Sidebar from './components/Sidebar';
import Calendar from "./components/Calendar"

function App() {

  return (
    <div className="App">
      <Sidebar />
      <Calendar />
    </div>
  );
}

export default App;
