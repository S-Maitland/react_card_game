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
         <div class="player" img src="../assets/hero1.png"></div>
          <div class="leftcontainer">
            <div class="thecard">
              <div class="thefront" img src="../assets/cardfront.jpg">
                <h1>
                  <label>{this.props.player.name}</label>
                </h1>
              <label>HP: {this.state.playerHealth}</label>
              <br />
              <button onClick={this.handlePlayerPunchAttack}>
                <label>DRAGON PUNCH</label>
              </button>
            </div>
            <div class="theback" img src="../assets/card-back1.jpg" >
          </div>
        </div>
      </div>

      <div class="rightcontainer">
        <div class="thecard">
          <div class="thefront">
            <h1>
              <label>{this.props.enemy.name}</label>
            </h1>
            <label>{this.state.enemyHealth}</label>
            <button onClick={this.handleEnemyAttack}>
              <label>ATTACK</label>
            </button>
          </div>
          <div class="theback" img src="../assets/card-back1.jpg" >
        </div>
      </div>
    </div>
    </div>
  );
  }
  }

  export default GameScreen;
