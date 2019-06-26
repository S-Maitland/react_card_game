import React, {Component} from 'react';

class Question1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      answerCorrectly: false,
      questionNumber: 0
    }

    this.changeTrue = this.changeTrue.bind(this);
    this.changeFalse = this.changeFalse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  changeTrue(){
    this.setState({answerCorrectly: true})
  }

  changeFalse(){
    this.setState({answerCorrectly: false})
  }

  handleSubmit(event){
    const answer = {
      answer: this.state.answerCorrectly
    }
    this.props.handleModalSubmit(answer);
  }




renderQuestion() {
    switch(this.state.QuestionNumber) {
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return "Waiting for a question";
    }
}




  render(){
    if (this.state.questionNumber === 1){
    return (

      <div>
        <h3>Ye olde Javascript is designeth'd f'r following purposes</h3>
        <div>
          <input type="radio" name="radio" id="a1" onChange={this.changeTrue} value="question1"  /> to addeth int'ractivity to thy html pages
          <br></br>
        </div>
        <input type="radio" name="radio" id="a2" onChange={this.changeFalse} value="question1"  /> to executeth doth qu'ry did relate to db on serv'r
        <br></br>
        <input type="radio" name="radio" id="a3" onChange={this.changeFalse} value="question1"  /> to perf'rm serv'r side scripting op'tion
        <br></br>
        <input type="radio" name="radio" id="a4" onChange={this.changeFalse} value="question1"  /> to styleth thy html pages
        <br></br>
        <button onClick={this.handleSubmit}> Submit Thy Answ'r!</button>

      </div>
    )
  }
  else if (this.state.questionNumber === 2) {
    return(
      <div>
        <h3>Wherefore javascript is hath called as lightweight programming language?</h3>
        <div>
          <input type="radio" name="radio" id="b1" onChange={this.changeTrue} value="question1"  /> because thy can addeth thine programming methodologies within
          <br></br>
        </div>
        <input type="radio" name="radio" id="b2" onChange={this.changeFalse} value="question1"  /> thine beloved javascript doest not did cost any wage
        <br></br>
        <input type="radio" name="radio" id="b3" onChange={this.changeFalse} value="question1" /> o'h sweet javascript is client side scrip'ting
        <br></br>
        <input type="radio" name="radio" id="b4" onChange={this.changeFalse} value="question1"  /> most wondrous javascript can provideth programming functionality within but up to c'rtain point'eth.
        <br></br>
        <button onClick={this.handleSubmit}> Submit Thy Answ'r!</button>
      </div>















    )
  }
  }
}


export default Question1;
