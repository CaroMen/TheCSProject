import React from 'react';
import BubbleVis from './components/OptionsSelector/BubbleVis';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route to={`/bubble-sort`}>
          <BubbleVis />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
