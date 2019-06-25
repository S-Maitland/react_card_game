import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import './Game.css';

class GameScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      playerHealth: this.props.player.health,
      playerTurn: true,
      enemyHealth: this.props.enemy.health,
      enemyTurn: false
    }

    this.handlePlayerPunchAttack = this.handlePlayerPunchAttack.bind(this);
    this.handleEnemyAttack = this.handleEnemyAttack.bind(this);
    this.handlePlayerTurn = this.handlePlayerTurn.bind(this);
    this.handleEnemyTurn = this.handleEnemyTurn.bind(this);
  }

  handlePlayerTurn = () => {
    this.setState({playerTurn: false})
    this.setState({enemyTurn: true})
  }

  handleEnemyTurn = () => {
    this.setState({playerTurn: true})
    this.setState({enemyTurn: false})
  }

  handlePlayerPunchAttack = () => {
    if(this.state.playerTurn === true){
      this.setState({enemyHealth: (this.state.enemyHealth - 10)})
      this.handlePlayerTurn()
    }
  }

  handleEnemyAttack = () => {
    if(this.state.enemyTurn === true){
      this.setState({playerHealth: (this.state.playerHealth - 10)})
      this.handleEnemyTurn()
    }
  }

  render(){
    return(
      <div className= "gameScreenBackground">
        <div>
          <label> Player Name:{this.props.player.name}</label>
          <label> Player Health:{this.state.playerHealth}</label>
          <button onClick={this.handlePlayerPunchAttack}>
            <label>DRAGON PUNCH</label>
          </button>
        </div>
        <hr/>
        <div>
          <label>Enemy Name: {this.props.enemy.name}</label>
          <label>Enemy Health: {this.state.enemyHealth}</label>
          <button onClick={this.handleEnemyAttack}>
            <label>ATTACK</label>
          </button>
        </div>
      </div>
    );
  }
}

export default GameScreen;
