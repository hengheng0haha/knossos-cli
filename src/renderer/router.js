import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';


import CreateConsumer from "./routes/CreateConsumer.js";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/create_consumer" component={CreateConsumer} />
    </Router>
  );
}

export default RouterConfig;
