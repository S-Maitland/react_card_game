import React, {Component} from 'react';
import GameScreen from '../components/GameScreen';

class HomeScreen extends Component{
  constructor(){
    super();

    this.state = {
      startGame: false,
      playerName: "",
      characterSelect: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({playerName: event.target.value});
  }

  handleSelect(event) {
    this.setState({characterSelect: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({newGame: true});
  }

  render(){
    if (this.state.startGame === true){
      return (
        <GameScreen />)
      } else {
        return(
          <div>
            <span className="title">Code Clashers</span>
            <span className="enterName">
              <form onSubmit={this.handleSubmit}>
                <input className="form-input" type="text" value={this.state.playerName} onChange={this.handleChange} placeholder="Enter Your Name..." required/>
                <br/>
                <button className="form-btn">Start Fight</button>
              </form></span>
            </div>
          );
        }
      }
    }

    export default HomeScreen;
