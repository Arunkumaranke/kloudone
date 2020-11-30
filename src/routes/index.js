import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = lazy(() => import('../main'));
const Users = lazy(() => import('../components/users'));
const Routes = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users" component={Users}  exact />
      </Switch>
    </Router>
  );
  export default (Routes);
  