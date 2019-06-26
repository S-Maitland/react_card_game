import React, {Component} from 'react';

class Question1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      answerCorrectly: false
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

  render(){

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
}


export default Question1;
