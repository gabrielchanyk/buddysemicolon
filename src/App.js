import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Home from './components/pages/HomePage/Home';
import Signin from './components/Signin/Signin';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/sign-in' component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
