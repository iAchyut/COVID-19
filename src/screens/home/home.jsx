import React, { Component, PureComponent } from 'react';


import { Icon } from 'react-icons-kit';
import { angleDoubleRight } from 'react-icons-kit/fa/angleDoubleRight';

import {
  object, string, bool, func,
} from 'prop-types';
import Styles from './home.module.css';
import Test from './test';
import List from './list';
import { questions } from './script';


const Questions = [...questions];
const QuestionsPerTest = 10;

const currentQID = 'current Question Id';
const score = 'score';
let timer;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      currentQuestionIndex: Number(localStorage.getItem(currentQID)) || 0,
      isResult: false,
      isAnswered: false,
      selectedOption: null,


    };

    this.baseState = {
      ...this.state,
    };
  }

  componentDidMount() {
    // TODO: fetch user data using id if url contains id
    if(this.state.currentQuestionIndex === 0){localStorage.setItem(score, 0);}
  }

  _changeQuestionId = () => {
    const { currentQuestionIndex } = this.state;

    if (currentQuestionIndex + 1 >= QuestionsPerTest) {
      this._onQuestionareComplete();
    } else {
      this.setState((prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        isAnswered: false,
      }));


      const userCurrentQID = Number(localStorage.getItem(currentQID)) || 0;
      localStorage.setItem(currentQID, userCurrentQID + 1);
    }
  }

  _onQuestionareComplete = () => {
    this.setState(this.baseState);
    localStorage.setItem(currentQID, 0);
    this.setState({ isResult: true });
    
  }

  _saveResult = (value, rightAnswer) => {
    this.setState({ selectedOption: value });
    // localStorage.clear()
    localStorage.setItem(this.state.currentQuestionIndex, value);
    this.setState({ isAnswered: true });
    if (value === rightAnswer) {
      const currentScore = localStorage.getItem(score) || 0;
      localStorage.setItem(score, Number(currentScore) + 1);
    }


    clearTimeout(timer);
    timer = setTimeout(() => (this.state.isAnswered ? this._changeQuestionId() : ''), 5000);
  }

  _isAnswered = () => {
    this.setState({ isAnswered: true });
  }

  _resetQuestioniare = () => {
    this.setState({ isResult: false });
    localStorage.setItem(score, 0);
  }


  _fetchUser = (id) => {
    // Fetch user data
  }

  setActive = (value) => {
    this.setState({ isActive: value });
  }

  _returnOptionButtonStyles = (option, answer) => {
    const { isAnswered, selectedOption } = this.state;
    if (isAnswered) {
      if (option === answer) return { borderColor: '#1abc9c', color: '#1abc9c' };
      if (selectedOption === option) return { borderColor: 'red', color: 'red' };
      return {};
    }

    return {};
  }

  render() {
    const { currentQuestionIndex, isResult, isAnswered } = this.state;
    if(currentQuestionIndex >= QuestionsPerTest){localStorage.setItem(currentQID, 0); this.setState({currentQuestionIndex: 0})}
    
    return (
      <div className = {Styles.root}>
        <List />
        <div className = {Styles.container}>
          {
            isResult ? (
              <div className = {Styles.questionAnswerContainer}>
                <Test />
                <div className = {Styles.optionButtonContainer}>
                        <OptionButton
                          onClick = {this._resetQuestioniare}
                          title = "Restart this test!!"
                        />
                      </div>
              </div>
            ) : (
              <div className = {Styles.questionAnswerContainer}>
                <span className = {Styles.question}>
                  {Questions[currentQuestionIndex].question}
                </span>
                <div>
                  <br />
                </div>
                <div className = {Styles.answerContainer}>
                  {
                    Questions[currentQuestionIndex].options.map((option) => (
                      <div className = {Styles.optionButtonContainer}>
                        <OptionButton
                          onClick = {() => this._saveResult(option, Questions[currentQuestionIndex].answer)}
                          title = {option}
                          disabled = {isAnswered}
                          frameStyles = {this._returnOptionButtonStyles(option, Questions[currentQuestionIndex].answer)}
                        />
                      </div>
                    ))
                    }
                </div>
                <div className = {Styles.skipButton}>
                  {
                    isAnswered
                      ? (
                        <div onClick = {this._changeQuestionId}>
                          <span className = {Styles.skip}>Next</span>
                          <Icon className = {Styles.skipIcon} size = {27} icon = {angleDoubleRight} />
                        </div>
                      )
                      : ''
                }
                </div>
              </div>
            )
      }
        </div>
      </div>

    );
  }
}


class OptionButton extends PureComponent {
  static propTypes = {
    title: string.isRequired,
    onClick: func.isRequired,
    disabled: bool,
    frameStyles: object,
  }

  static defaultProps = {
    disabled: false,
    frameStyles: {},
  }

  render() {
    const {
      title, onClick, disabled, frameStyles,
    } = this.props;
    return (
      <button
        className = {Styles.answerButton}
        type = "button"
        onClick = {onClick}
        disabled = {disabled}
        style = {frameStyles}
      >
        {title}
      </button>
    );
  }
}
