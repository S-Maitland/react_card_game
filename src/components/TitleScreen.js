import React, {Component} from 'react';

class TitleScreen extends Component{
  render(){
    return(
      <div>
        <span className="centerScreen title">Code Clashers</span>
        <span className="centerScreen pressSpace">Press Enter to start the game if ye be brave enough?</span>
      </div>
    )
  }
}

export default TitleScreen;
