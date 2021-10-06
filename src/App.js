import React from 'react';
import Card from './components/Card/Card';
import One from './components/One/One';
import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles/styles.scss'

function App() {
  return (
<div>
   
    <BrowserRouter>
    <Main />

    </BrowserRouter>

</div>
  );
}

export default App;
