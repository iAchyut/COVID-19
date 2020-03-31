import React, { Component } from 'react';
import { func } from 'prop-types';
import Styles1 from './toggle_menu.module.css';
import Styles from './toolbar.module.css';


import { UiComponents, Config } from '../../config/import_paths';
import whatsapp from '../../whatsapp.svg';
const textToShare = encodeURI('https://covid19quiz.netlify.com/ Spread this message for the sake of your loved ones. Be the responsible one.');
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
          
         <div className={Styles.logo}> 
         
            <a className = {Styles.whatsapp} target = "_blank" href = {`https://web.whatsapp.com/send?l=en&text=${textToShare}`}> 
              <img src = {whatsapp} alt = "Whatsapp" />
            </a>
            <a className = {Styles.whatsappMobile} href = {`https://wa.me/?text=${textToShare}`} data-action = "share/whatsapp/share">
              <img src = {whatsapp} alt = "Whatsapp" />
            </a>
          </div>
          
         
        {/* <div className={Styles1.DrawerToggle} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div> */}
        
      </header>
    );
  }
}
