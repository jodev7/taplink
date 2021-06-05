import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import './App.css'


ReactDOM.render((
    <HashRouter>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
    </HashRouter>
), document.getElementById('root'));
