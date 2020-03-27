import React, { Component } from 'react';
import { bool, func } from 'prop-types';

import Styles from './side_drawer.module.css';

import { UiComponents } from '../../config/import_paths';

const NavigationItems = UiComponents.NavigationItems();

export default class SideDrawer extends Component {
  static propTypes = {
    isSideDrawerVisible: bool.isRequired,
    closeSideDrawer: func.isRequired,
  }

  render() {
    const { isSideDrawerVisible, closeSideDrawer } = this.props;
    let attachedClasses = [Styles.SideDrawer, Styles.Close];
    if (isSideDrawerVisible) {
      attachedClasses = [Styles.SideDrawer, Styles.Open];
    }
    return (
      <>
        <div className={attachedClasses.join(' ')} onClick={closeSideDrawer}>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </>
    );
  }
}
