import React from 'react';
import BubbleVis from './components/OptionsSelector/BubbleVis';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="body-div">
        <NavBar />
        <Switch>
          <Route exact path="/bubble-sort">
            <BubbleVis />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
