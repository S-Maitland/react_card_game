import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import './Game.css';

class GameScreen extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  render(){
    return(
      <div className= "gameScreenBackground">
        <p>{this.props.player.name}</p>
        <p>{this.props.enemy.name}</p>
      </div>
    );
  }
}

export default GameScreen;
