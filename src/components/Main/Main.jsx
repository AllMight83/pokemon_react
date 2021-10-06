import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from '../Home';
import Card from '../Card';
import Header from "../Header";

const Main = () => {
  return (
      <main>
        <Switch>
        <Route path='/' component={Home} exact/>
          <Route path='/home' component={Home}/>
          <Route path='/pokemon' component={Card} />
        </Switch>
      </main>
  )
};

export default Main;
