import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import DemoApp from './layouts/DemoApp';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/demoStyle.css';
import './assets/icon/fontawesome-free-5.8.1-web/css/all.css';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist} >
        <Switch>
            <Route path="/demo" render={() => <DemoApp/>}/>
            <Redirect to="/demo/home" from="/"/>
        </Switch>
    </Router>

, document.querySelector("#root"));