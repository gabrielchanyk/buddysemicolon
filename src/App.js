import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/pages/HomePage/Home';
import Signin from './components/Signin/Signin';
import Login from './components/pages/Login';
import React, { Component, useState } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import MainPage from './pages';
import NotFoundPage from './pages/404';
import ProfilePage from './pages/profile';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />     
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' exact component={ProfilePage} />
            <Route path='/home' component={ProfilePage} />
            <Route path='/pet' component={Home} />
            <Route path='/sign-in' component={Signin} />
            <Route exact path="/calendar" component={MainPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404"/>
          </Switch>
        </Router>
    </div>
  );
}


export default App;
