import React, { Component } from 'react';


import { Icon } from 'react-icons-kit';
import { angleDoubleRight } from 'react-icons-kit/fa/angleDoubleRight';

import Styles from './home.module.css';

export default class List extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // TODO: fetch user data using id if url contains id
  }

  _fetchUser = (id) => {
    // Fetch user data
  }

  render() {
    /**
     * TODO: separate UI components,
     * Create User
     * Questionaire doesn't exist: create questionaire
     * Questionaire exists: attempt questionaire
    * */
   const i =0
   const list = ['QUE 1', 'QUE 2', 'QUE 3'];
   var a = list[0];
   
   return ( 
    <p></p>
  );
  
  }
}
