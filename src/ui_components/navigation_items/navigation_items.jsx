import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './navigation_items.module.css';

export default class NavigationItems extends Component {
  render() {
    return (
      <ul className={Styles.NavigationItems}>
        <li className={Styles.NavigationItem}>
          <NavLink activeClassName={Styles.active} exact to={'/home' || '/'}>
            Home
          </NavLink>
          <NavLink activeClassName={Styles.active} exact to="/about">
            About
          </NavLink>
        </li>
      </ul>
    );
  }
}
