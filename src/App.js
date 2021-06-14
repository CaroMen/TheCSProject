import React from 'react';
import BubbleVis from './components/OptionsSelector/BubbleVis';
import InsertionVis from './components/OptionsSelector/InsertionVis';
import SelectionVis from './components/OptionsSelector/SelectionVis';
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
          <Route exact path="/insertion-sort">
            <InsertionVis />
          </Route>
          <Route exact path="/selection-sort">
            <SelectionVis />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
