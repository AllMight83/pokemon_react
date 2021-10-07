import React from 'react';
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
