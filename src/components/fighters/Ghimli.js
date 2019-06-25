import React from 'react';
import ghimli from '../../assets/images/ghimli.png';

const Ghimli = () => {
constructor(){
  super();
  this.state{
    name: "Ghimli"
  }
}

    return(
      {this.state.name}
      <img src={ghimli} alt="ghimli" style={{width: 150, height: 150}}/>
    );
}

export default Ghimli;
