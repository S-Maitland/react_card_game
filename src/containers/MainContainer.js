import React, {Component} from 'react';
import TitleScreen from '../components/TitleScreen';
import HomeScreen from '../components/HomeScreen';

class MainContainer extends Component{
  constructor(){
    super();
    this.state = {
      enter: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    window.addEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(e){
    if(e.keyCode === 13 || e.which === 13) {
      this.setState({enter: true});
    }
  }

  render(){
    if (this.state.enter === true){
      return (
        <div>
          <HomeScreen />
        </div>
      )
    } else {
      return(
        <div>
          <TitleScreen />
        </div>
      );
    }
  }
}

export default MainContainer;
