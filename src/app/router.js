import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import {history} from "./store.js";
import TaskDetailPage from "./TaskDetailPage";
import App from './App';
import LandingPage from './LandingPage';


const router = (
  <Router history={history}>
      <Route path="/" component={App}>
          <IndexRoute component={LandingPage}/>
          <Route path='task-detail/:taskId' component={TaskDetailPage}/>
      </Route>
  </Router>
 );


export {router};