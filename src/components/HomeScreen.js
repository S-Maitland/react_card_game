import React, {Component} from 'react';
import GameScreen from '../components/GameScreen';

class HomeScreen extends Component{
  constructor(){
    super();
    this.renderer = {};
    this.state = {
      newGame: false,
      playerName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({playerName: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({newGame: true});
  }

  render(){
    if (this.state.newGame === true){
      return (
        <GameScreen />)
      } else {
        return(
          <div>
            <span className="centerScreen title">Code Clashers</span>
            <span className="centerScreen pressSpace">
              <form onSubmit={this.handleSubmit}>
                <label className="form-label">
                  Sayeth the nameth of the one who shalt saveth us.
                </label>
                <br/>
                <input className="form-input" type="text" value={this.state.playerName} onChange={this.handleChange} placeholder="Enter Hero Name..." required/>
                <br/>
                <button className="form-btn">START QUEST</button>
              </form></span>
            </div>
          );
        }
      }
    }

    export default HomeScreen;
