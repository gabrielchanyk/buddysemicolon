import './App.css';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
=======
import Sidebar from './components/Sidebar';
>>>>>>> f520baf0e8a0753f134fda8857e578fddb3ad821
import Home from './components/pages/HomePage/Home';
import Signin from './components/Signin/Signin';
import Login from './components/pages/Login';
import React, { Component, useState } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
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
<<<<<<< HEAD
            <Route path='/home' component={Home} />
=======
            <Route path='/dashboard' exact component={ProfilePage} />
            <Route path='/home' component={ProfilePage} />
            <Route path='/pet' component={Home} />
>>>>>>> f520baf0e8a0753f134fda8857e578fddb3ad821
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
