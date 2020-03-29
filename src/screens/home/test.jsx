import React, { Component } from 'react';
//

import { Icon } from 'react-icons-kit';
import { angleDoubleRight } from 'react-icons-kit/fa/angleDoubleRight';
import whatsapp from '../../whatsapp.svg';
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
    const textToShare = encodeURI('I scored - ' + String(currentScore)+'/'+this.props.totalQuestions) + " Let's see how much can you score !! \n Click the link to test your knowledge."+' https://covid19quiz.netlify.com/';
    return (
      <div >
                <span className = {Styles.question}>
                  Your Final Score is : {String(currentScore)} / {this.props.totalQuestions} <br></br>
                  <div style = {{backgroundColor: 'red', flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <div style = {{ flexWrap: 'wrap' }}>Share your Result :</div>
                  <div>
                  <a style = {{ whiteSpace: "pre" }} className={Styles.whatsapp} target="_blank" href={`https://web.whatsapp.com/send?l=en&text=${textToShare}`}>
            <img src = {whatsapp} alt = "Whatsapp" />
          </a>
          </div>
          <a style = {{ whiteSpace: "pre" }} className={Styles.whatsappMobile} href={`https://wa.me/?text=${textToShare}`} data-action="share/whatsapp/share">
            <img src = {whatsapp} alt = "Whatsapp" />
          </a> </div>
                </span>
                </div>
      
    );  
  }
}
