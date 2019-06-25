import React, {Component} from 'react';
import TitleScreen from '../components/TitleScreen';
import HomeScreen from '../components/HomeScreen';

const width = 800;
const height = 600;

class MainContainer extends Component{
  constructor(){
    super();
    this.renderer = {};
    this.state = {
      enter: false,
      screen: {
        width: width,
        height: height
      }
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
