import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
