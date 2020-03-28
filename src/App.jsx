import React, { Component } from 'react';

import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import Styles from './App.module.css';

import { Screens, UiComponents } from './config/import_paths';

const Layout = UiComponents.Layout();

const Home = Screens.Home();

class App extends Component {
  _renderRoutes = () => {
    const routes = (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );

    return routes;
  }

  render() {
    const { location } = this.props;
    return (
      <div className={Styles.root}>
        <Layout location={location} />
        {this._renderRoutes()}
      </div>
    );
  }
}

export default withRouter(App);
