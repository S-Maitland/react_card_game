import React, {Component} from 'react';
import Request from '../helpers/Request';

class AddCharacterContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      heroes: [],
      name: "",
      health: 0,
      url: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleHealth = this.handleHealth.bind(this);


  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/heroes').then((data) => {
      this.setState({heroes: data._embedded.heroes})
    })
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleHealth(event){
    this.setState({health: event.target.value})
  }

  handleURL(event){
    this.setState({url: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newHero = {
      name: this.state.name,
      health: this.state.health
    }
    this.props.handleHeroPost(newHero);
  }

  render(){

    if (!this.state.heroes === 0){
      return <p>Loading....</p>
    }
    console.log(this.state.heroes);
    const heroOptions = this.state.heroes.map((hero, index) => {
      return <option key={index} value={hero._links.self.href}>{hero.name}</option>
    })

    return (
      <div>
      <form onSubmit={this.handleSubmit}>

        <input type="text" placeholder="name" name="name"
        onChange={this.handleName} value={this.state.name}/>

        <input type="number" placeholder="health" name="health" onChange={this.handleHealth} value={this.state.health}/>

        <input type="text" placeholder="url"
        name="url"
        onChange={this.handleURL}
        value={this.state.url}
        />

        <button type="submit">Save</button>

      </form>

      <li>{heroOptions}</li>
      </div>
    )
  }

}

export default AddCharacterContainer;
