import React, {Component} from 'react';
import GameScreen from '../components/GameScreen';
import Title from './Title'
import Request from '../helpers/Request';

class HomeScreen extends Component{
  constructor(){
    super();

    this.state = {
      startGame: false,
      heroes: [],
      playerName: "",
      characterSelect: "",
      enemies: [],
      enemySelect: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCharacterSelect = this.handleCharacterSelect.bind(this);
    this.handleEnemySelect = this.handleEnemySelect.bind(this);
  }

  componentDidMount(){
    const requestHeroes = new Request();
    requestHeroes.get('/api/heroes').then((heroData) => {
      this.setState({heroes: heroData._embedded.heroes})
    })
    const requestEnemies = new Request()
    requestEnemies.get('/api/enemies').then((enemyData) => {
      this.setState({enemies: enemyData._embedded.enemies})
    })
  }

  handleEnemySelect = () => {
    this.setState({enemySelect: this.state.enemies[Math.floor(Math.random() *
      this.state.enemies.length)]})
    }

    handleNameChange(event) {
      this.setState({playerName: event.target.value});
    }

    handleCharacterSelect(event) {
      const foundHero = this.state.heroes.find((hero) => {
        return hero.name === event.target.innerText;
      })
      this.setState({characterSelect: foundHero}
      );
      this.handleEnemySelect();
    }

      handleSubmit(event){
        event.preventDefault();
        this.setState({startGame: true});
      }

      render(){
        if(!this.state.heroes.length === 0){
          return <p>Loading..</p>
        }

        const heroOptions = this.state.heroes.map((hero, index) => {
          return <li key={index} onClick={this.handleCharacterSelect}>{hero.name}</li>
          })

          if (this.state.startGame === true){
            return (
              <GameScreen player={this.state.characterSelect} enemy={this.state.enemySelect}/>)
            } else {
              return(
                <div>
                  <span className="title">{<Title/>}</span>
                  <span className="enterName">

                    <ul>
                      {heroOptions}
                    </ul>

                    <form onSubmit={this.handleSubmit}>
                      <input className="form-input" type="text" value={this.state.playerName} onChange={this.handleNameChange} placeholder="Enter Your Name..." required/>
                      <br/>

                      <button className="form-btn">Start Fight</button>
                    </form>
                  </span>
                </div>
              );
            }
          }
        }

        export default HomeScreen;
