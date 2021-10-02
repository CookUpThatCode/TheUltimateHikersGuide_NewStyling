import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import NewHome from './pages/NewHome/NewHome'

import './App.scss';

const App = (props) => (
   <BrowserRouter>
      <Switch>
         <Route exact path='/' component={NewHome} />
         {/* <Route exact path='/' component={Home} /> */}
         {/* <Route exact path='/traildetail/:id' component={TrailDetail} />
         <Route exact path='/auth' component={Authorization} />
         <Route exact path='/profile' component={Profile} />
         <Route exact path='/test' component={TestPage} /> */}
      </Switch>
   </BrowserRouter>
);

export default App;
