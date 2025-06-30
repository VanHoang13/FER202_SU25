import React, { Component } from "react";
import Question from "./Question"; 
import Score from "./Score"; 
import "bootstrap/dist/css/bootstrap.min.css";

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        { id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter",
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };
  }

  handleAnswer = (option) => {
    const { currentQuestion, questions, score } = this.state;
    const isCorrect = option === questions[currentQuestion].answer;

    this.setState(
      {score: isCorrect ? score + 1 : score,
        currentQuestion: currentQuestion + 1,
      },
      () => {
        if (this.state.currentQuestion >= this.state.questions.length) {
          this.setState({ quizEnd: true });
        }
      }
    );
  };

  handleReplay = () => {
    this.setState({ currentQuestion: 0,
                    score: 0,
                    quizEnd: false, });
  };

  handleShare = () => {
    alert( `Sharing your result: ${this.state.score} / ${this.state.questions.length}`);
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    if (quizEnd) {
      return (
        <Score score={score}
               totalQuestions={questions.length}
               onReplay={this.handleReplay}
               onShare={this.handleShare} />
      );
    }

    const currentQ = questions[currentQuestion] || {};

    if (!currentQ.question) {
      return <div>There was an issue loading the question.</div>;
    }

    return (
      <div>
        <Question question={currentQ.question}
                  options={currentQ.options}
                  onAnswerSelect={this.handleAnswer}
                  currentAnswer={""}  />
        <p> Question {currentQuestion + 1} of {questions.length} </p>
      </div>
    );
  }
}

export default QuizApp;
