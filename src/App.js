import React from 'react';
import Selector from './components/OptionsSelector';
import Sorter from './components/Visualizer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route to={`/:algo`}>
          <Selector />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
