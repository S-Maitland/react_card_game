import React, {Component} from 'react';
import Title from './Title';

class TitleScreen extends Component{
  render(){
    return(
      <div>
        <span className="title">{<Title/>}</span>
        <span className="pressEnter">Punch Enter..</span>
      </div>
    )
  }
}

export default TitleScreen;
