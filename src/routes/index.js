import React from 'react';
import Main from './../containers/Main';
import Page from './../components/Page';
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Page} />
  </Route>
);

