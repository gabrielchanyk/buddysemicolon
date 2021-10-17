import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
