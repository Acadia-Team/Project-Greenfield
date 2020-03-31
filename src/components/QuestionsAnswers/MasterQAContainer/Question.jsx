import React from "react";
import Answers from "./Answers";
import Helpful from "./Helpful";
import Axios from "axios";
import { render } from "@testing-library/react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: null,
      answers: []
    };
    this.setAnswers = this.setAnswers.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
  }

  expandComponent() {
    let newHeight = window.innerHeight * 0.5;
    let newStyles = {
      maxHeight: `${newHeight}px`,
      overflowY: "scroll"
    };
    this.setState({ style: newStyles });
  }

  getAnswers(id) {
    return Axios.get(`http://3.134.102.30/qa/${id}/answers`);
  }

  setAnswers() {
    this.getAnswers(this.props.q.question_id).then(res => {
      let sortedAnswers = this.sortAnswers(res.data.results);
      this.setState({ answers: sortedAnswers });
    });
  }

  componentDidMount() {
    this.setAnswers();
  }

  sortAnswers(array) {
    let answers = array.slice(0);
    answers.sort((a, b) => (a.helpfulness > b.helpfulness ? -1 : 1));
    return answers;
  }

  render() {
    let questionID = this.props.q.question_id;
    return (
      <div style={this.state.style} id="QuestionAnswerSet">
        <table>
        <tbody>
          <tr>
            <td>Q:</td>
            <td>{this.props.q.question_body}</td>
            <td>
              <div className="helpfulContainer">
                <Helpful
                  className="helpfulContainer"
                  questionID={questionID}
                  helpful={this.props.q.question_helpfulness}
                  type="question"
                  setAnswers={this.setAnswers}
                  question={this.props.q}
                />
              </div>
            </td>
          </tr>

          <Answers
            expandHandler={() => {
              this.expandComponent();
            }}
            answers={this.state.answers}
            key={questionID}
            setAnswers={this.setAnswers}
          />
        </tbody>
        </table>
      </div>
    );
  }
}

export default Question;
