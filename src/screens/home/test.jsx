import React, { Component } from 'react';
//

import { Icon } from 'react-icons-kit';
import { angleDoubleRight } from 'react-icons-kit/fa/angleDoubleRight';
import whatsapp from '../../whatsapp.svg';
import Styles from './home.module.css';
import clsx from 'clsx';
const score = 'score';


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
    const textToShare = `${encodeURI(`I scored - ${String(currentScore)}/${this.props.totalQuestions}`)} Let's see how much can you score !! \n Click the link to test your knowledge.` + ' https://covid19quiz.netlify.com/';
    return (
      <div>
        <div className = {clsx(Styles.question, Styles.glow, Styles.result)}>
          Your Final Score is : {String(currentScore)} / {this.props.totalQuestions} <br />
          <div className = {Styles.shareContainer}>
            <div style = {{ marginRight: 7}}>Share your Result :</div>
            
            <a className = {Styles.whatsapp} target = "_blank" href = {`https://web.whatsapp.com/send?l=en&text=${textToShare}`}>
              <img src = {whatsapp} alt = "Whatsapp" />
            </a>
            <a className = {Styles.whatsappMobile} href = {`https://wa.me/?text=${textToShare}`} data-action = "share/whatsapp/share">
              <img src = {whatsapp} alt = "Whatsapp" />
            </a>
            
          </div>
        </div>
      </div>

    );
  }
}
