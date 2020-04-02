import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../contains/Home';
import Login from '../contains/Login';
import Register from '../contains/Register';
import NotFound from '../contains/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
