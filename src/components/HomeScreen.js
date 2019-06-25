import React, {Component} from 'react';
import GameScreen from '../components/GameScreen';
import Title from './Title'
import Venom from './fighters/Venom'
import Ghimli from './fighters/Ghimli'
import PaladinKnight from './fighters/PaladinKnight'

class HomeScreen extends Component{
  constructor(){
    super();

    this.state = {
      startGame: false,
      playerName: "",
      characterSelect: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCharacterSelect = this.handleCharacterSelect.bind(this);
  }

  handleNameChange(event) {
    this.setState({playerName: event.target.value});
  }

  handleCharacterSelect(event) {
    this.setState({characterSelect: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({startGame: true});
  }

  render(){
    if (this.state.startGame === true){
      return (
        <GameScreen />)
      } else {
        return(
          <div>
            <span className="title">{<Title/>}</span>
            <span className="enterName">
              <form onSubmit={this.handleSubmit}>
                <input className="form-input" type="text" value={this.state.playerName} onChange={this.handleNameChange} placeholder="Enter Your Name..." required/>
                <br/>

                <Venom className="fighter" onClick="handleCharacterSelect"/>
                <Ghimli className="fighter" onClick="handleCharacterSelect"/>
                <PaladinKnight className="fighter" onClick="handleCharacterSelect"/>
                
                <button className="form-btn">Start Fight</button>
              </form>
            </span>
          </div>
        );
      }
    }
  }

  export default HomeScreen;
