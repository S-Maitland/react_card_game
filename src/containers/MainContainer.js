import React, {Component} from 'react';
import TitleScreen from '../components/TitleScreen';
import HomeScreen from '../components/HomeScreen';
import AddCharacterContainer from './AddCharacterContainer';
import Request from '../helpers/Request';



class MainContainer extends Component{
  constructor(){
    super();

    this.state = {
      enter: 1,
      //1 title screen, 2 home screen, 3 addcharacter screen...
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAddCharacter = this.handleAddCharacter.bind(this);

  }

  componentDidMount(){
    window.addEventListener('keypress', this.handleKeyPress);
    document.addEventListener('onClick', this.handleAddCharacter);
  }

  handleKeyPress(e){
    if(e.keyCode === 13 || e.which === 13) {
      this.setState({enter: 2});
    }
  }

  handleAddCharacter(e){
    this.setState({enter: 3});
  }

  handlePost(hero){
    const request = new Request();
    request.post("/api/heroes", hero)
    }


  render(){
    if (this.state.enter === 2){
        return (
          <div>
            <HomeScreen />

          </div>
        )
      } else if (this.state.enter === 1) {
        return(
          <div>
            { <TitleScreen/> }
            <button onClick={this.handleAddCharacter}>Add Character</button>
          </div>
        );
      }
      else if (this.state.enter === 3){
        return (
          <div>
            {  <AddCharacterContainer handleHeroPost = {this.handlePost}/> }
          </div>
        )
      }
    }
}

export default MainContainer;
