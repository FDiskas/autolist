// @flow

import * as React from 'react';
import { Route } from 'react-router4-with-layouts';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.scss';

import { LandingLayout } from './layouts/Landing/LandingLayout';
import { LandingPage } from './pages/Landing/LandingPage';
import { ListingLayout } from './layouts/Listing/ListingLayout';
import { ListingPage } from './pages/Listing/ListingPage';
import { ErrorPage } from './pages/Error/ErrorPage';
import { EmptyLayout } from './layouts/Empty/EmptyLayout';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} layout={LandingLayout} />
      <Route exact path="/list" component={ListingPage} layout={ListingLayout} />
      <Route component={ErrorPage} layout={EmptyLayout} />
    </Switch>
  </Router>
);
