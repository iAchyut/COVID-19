import React, { Component } from 'react';
import { element } from 'prop-types';
import Styles from './layout.module.css';
import { UiComponents } from '../../config/import_paths';

const Toolbar = UiComponents.Toolbar();
const SideDrawer = UiComponents.SideDrawer();

class Layout extends Component {
  static propTypes = {
    children: element.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      sideDrawerVisible: false,
    };
  }

  _closeSideDrawer = () => {
    this.setState({ sideDrawerVisible: false });
  };

  _toggleMenuHandler = () => {
    this.setState((prevState) => ({ sideDrawerVisible: !prevState.sideDrawerVisible }));
  };

  render() {
    const { children } = this.props;
    const { sideDrawerVisible } = this.state;
    return (
      <>
        <Toolbar
          toggleMenu={this._toggleMenuHandler}
        />
        <SideDrawer
          sideDrawerVisible={sideDrawerVisible}
          closeSideDrawer={this._closeSideDrawer}
        />
        <main className={Styles.Content}>{children}</main>
      </>
    );
  }
}

export default Layout;
