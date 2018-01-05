import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/containers/Home';
import RaceResults from './pages/containers/RaceResults';
import NotFound from './pages/components/NotFound';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={RaceResults} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
