/* eslint-disable global-require */
export const Screens = {
  Home: () => require('../screens/home/home').default,
};

export const Config = {
  Constants: () => require('./constants'),
};

export const UiComponents = {
  Toolbar: () => require('../ui_components/toolbar/toolbar').default,
  NavigationItems: () => require('../ui_components/navigation_items/navigation_items').default,
  SideDrawer: () => require('../ui_components/side_drawer/side_drawer').default,
  Layout: () => require('../ui_components/layout/layout').default,
};
