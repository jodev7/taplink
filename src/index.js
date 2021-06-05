import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import './App.css'


ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
    </BrowserRouter>
), document.getElementById('root'));
