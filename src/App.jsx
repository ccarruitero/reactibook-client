import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/'>
            <Auth>
              <Dashboard />
            </Auth>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
