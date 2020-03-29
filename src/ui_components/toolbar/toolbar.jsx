import React, { Component } from 'react';
import { func } from 'prop-types';
import Styles1 from './toggle_menu.module.css';
import Styles from './toolbar.module.css';

import { UiComponents, Config } from '../../config/import_paths';

const { Constants } = Config.Constants();

const { FRONTEND_VERSION } = Constants;

const NavigationItems = UiComponents.NavigationItems();

export default class Toolbar extends Component {
  static propTypes = {
    toggleMenu: func.isRequired,
  }

  render() {
    const { toggleMenu } = this.props;
    return (
      <header className={Styles.Toolbar}>
         <span className={Styles.website}>COVID-19 Quiz</span>
        {/* <div className={Styles1.DrawerToggle} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div> */}
        
      </header>
    );
  }
}
