import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import _ from 'lodash';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';
import Page4 from './page/page4';
import BreadCrumbs from './bread-crumbs';

const routeConfigs= [
  {
    path: "/page1",
    root: true,
    breadCrumbText: 'home',
    component: Page1
  },
  {
    path: "/page2/:id?/sub/:cid?",
    breadCrumbText: 'search',
    component: Page2
  },
  {
    path: "/page3",
    breadCrumbText: 'editor',
    component: Page3
  },
  {
    path: "/page4",
    root: true,
    breadCrumbText: 'dashboard',
    component: Page4
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <BreadCrumbs routeConfigs={routeConfigs.map(route => _.pick(route, ['path', 'root', 'breadCrumbText']))} />
          <Switch>
            {routeConfigs.map(route => <Route key={route.path} {..._.pick(route, ['path', 'component'])}></Route>)}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
