import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Today from './pages/forToday/forToday';
import Completed from './pages/completed/Completed';
import Later from './pages/forLater/forLater';
import './index.css';
import Layout from './pages/layout/components/Layout.js';

render(
  <Router history={browserHistory}>
   	  <Route path='/' component={Layout}>
   	    <IndexRoute component={Today} />
      <Route path='/today' component={Today}/>
      <Route path='/completed' component={Completed}/>
      <Route path='/later' component={Later} />
  	  </Route>
  </Router>,
  document.getElementById('root')
);