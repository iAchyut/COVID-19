import React, { Component } from 'react';
//

import { Icon } from 'react-icons-kit';
import { angleDoubleRight } from 'react-icons-kit/fa/angleDoubleRight';

import Styles from './home.module.css';
const score = "score";
export default class Test extends Component {
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

    const { isActive } = this.props;
    console.log(this.props, 'this is prop');
    console.log(isActive);
    const currentScore = localStorage.getItem(score) || 0;
    return (
      <div >
                <span className = {Styles.question}>
                  Your Final Score is : {String(currentScore)} / {this.props.totalQuestions}
                </span>
                </div>
      
    );  
  }
}
