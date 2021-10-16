import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link,  withRouter } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';

const Main = () => {
  return (
      <Router>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
                <Route exact path='/' component={withRouter(Login)} />
                <Route path="/sign-in" component={withRouter(Login)} />
                <Route path="/sign-up" exact component={withRouter(Signup)} />
        </Switch>
    </Router>
  );
}

export default Main;