import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignUp from './signup_page/signup_container';
import MainBody from './main_page/main_body';

const App = () => (
  <Switch>
    <AuthRoute exact path="/signup" component={SignUp} />
    <AuthRoute exact path="/" component={MainBody} />
  </Switch>
);

export default App;