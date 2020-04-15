import React from 'react';
import './css/App.css';
import {Switch, Route} from 'react-router-dom';

import Main from './pages';
import Login from './pages';

function App() {
  return (
   <Switch>
      <Route path="/" component={Main}/>
      <Route path="/login" component={Login}/>
   </Switch>
  );
}

export default App;
