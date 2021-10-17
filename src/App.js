import React, { Component, useState } from 'react';
import './App.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import MainPage from './pages';
import NotFoundPage from './pages/404';
import ProfilePage from './pages/profile';

class App extends Component  {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404"/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
