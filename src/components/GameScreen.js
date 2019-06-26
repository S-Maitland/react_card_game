import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import './Game.css';
import GameOver from '../components/GameOver'
import GameWon from '../components/GameWon';
import Modal from 'react-modal';
import Question1 from './Questions/Question1';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class GameScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      playerHealth: this.props.player.health,
      playerTurn: true,
      enemyHealth: this.props.enemy.health,
      enemyTurn: false,
      gameOver:  false,
      gameWon: false,
      modalIsOpen: false,
      answerCorrectly: false
    }

    this.changeTrue = this.changeTrue.bind(this);
    this.changeFalse = this.changeFalse.bind(this);

    this.handlePlayerPunchAttack = this.handlePlayerPunchAttack.bind(this);
    this.handleEnemyPunchAttack = this.handleEnemyPunchAttack.bind(this);
    this.handlePlayerTurn = this.handlePlayerTurn.bind(this);
    this.handleEnemyTurn = this.handleEnemyTurn.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
    this.handleGameWon = this.handleGameWon.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.callQuestion = this.callQuestion.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  leftCardFlip(){
    const leftCard = document.querySelector('.leftcontainer');
    leftCard.classList.toggle('cardIsFlipped')
  }

  changeTrue(){
    this.setState({answerCorrectly: true})
  }

  changeFalse(){
    this.setState({answerCorrectly: false})
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    if(this.state.answerCorrectly === false){
      this.handlePlayerTurn();
      this.leftCardFlip();
    }
  }

  handleGameOver(){
    if (this.state.playerHealth <= 0){
      this.setState({gameOver: true})
    }
  }

  handleGameWon(){
    if (this.state.enemyHealth <= 0){
      this.setState({gameWon: true})
    }
  }

  handlePlayerTurn = () => {
    this.handleGameOver()
    this.setState({playerTurn: false})
    this.setState({enemyTurn: true})
  }

  handleEnemyTurn = () => {
    this.setState({enemyTurn: false})
    this.setState({playerTurn: true}, this.callQuestion)
  }

  callQuestion(){
    this.openModal()
  }

  handlePlayerPunchAttack = () => {
    if(this.state.playerTurn === true){
      this.setState({enemyHealth: (this.state.enemyHealth - 90)}, this.handleGameWon)
      this.handlePlayerTurn()
    }
  }

  handleEnemyPunchAttack = () => {
    if(this.state.enemyTurn === true){
      this.setState({playerHealth: (this.state.playerHealth - 90)}, this.handleGameOver)
      this.handleEnemyTurn()
    }
  }

  handleModalSubmit(answerState){
    this.setState({answerCorrectly: answerState})
    this.closeModal();
  }

  render(){
    if (this.state.gameWon === true){
      return (
        <GameWon/>
      )
    } else if (this.state.gameOver === true){
      return (
        <GameOver/>
      )
    } else{
      return(
        <div className= "gameScreenBackground">
          <div class="player" img src="../assets/hero1.png"></div>
          <div className="leftcontainer">
            <div className="thecard">
              <div className="thefront">

                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal">
                  <div> <Question1 handleModalSubmit = {this.handleModalSubmit}/> </div>
                </Modal>
                <h1>
                  <label>{this.props.player.name}</label>
                </h1>
                <label>HP: {this.state.playerHealth}</label>
                <br />
                <button className="moveButton" onClick={this.handlePlayerPunchAttack}>
                  <label>DRAGON PUNCH</label>
                </button>
                <button className="moveButton" onClick={this.handlePlayerPunchAttack}>
                  <label>DRAGON KICK</label>
                </button>
                <button className="moveButton" onClick={this.handlePlayerPunchAttack}>
                  <label>DRAGON SLASH</label>
                </button>
                <button className="moveButton" onClick={this.handlePlayerPunchAttack}>
                  <label>DRAGON CHOP</label>
                </button>
              </div>
              <div className="theback" img src="./assets/images/card-back1.jpg">
              </div>
            </div>
          </div>

        <div class="rightcontainer">
          <div class="thecard">
            <div className="thefront">
              <h1>
                <label>{this.props.enemy.name}</label>
              </h1>
              <label>{this.state.enemyHealth}</label>
              <button className="moveButton" onClick={this.handleEnemyPunchAttack}>
                <label>LIGHTNING PUNCH</label>
              </button>
              <button className="moveButton" onClick={this.handleEnemyPunchAttack}>
                <label>LIGHTNING PUNCH</label>
              </button>
              <button className="moveButton" onClick={this.handleEnemyPunchAttack}>
                <label>LIGHTNING PUNCH</label>
              </button>
              <button className="moveButton" onClick={this.handleEnemyPunchAttack}>
                <label>LIGHTNING PUNCH</label>
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

}

export default GameScreen;
