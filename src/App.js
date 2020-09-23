import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/rooms" component={ Rooms } />
        <Route exact path="/rooms/:slug" component={ SingleRoom } />
        <Route exact path="*" component={ ErrorPage } />
      </Switch>
    </Router>
  );
};

export default App;
