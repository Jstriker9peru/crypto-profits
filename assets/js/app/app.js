import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';
import Results from './Results.js';

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      location: 'home',
      selectedDay: undefined,
    }
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  routingSystem() {
    switch(this.state.location) {
      case 'home':
        return <Home handleDayChange={this.handleDayChange} globalState={this.state} />
        break;
      case 'results':
        return <Results />
        break;
      default:
        return <Home /> 
    }
  }

  render () {
    return (
      <div className='home'>
        <div className="container">
          <header>
            <div className="logo">
              Crypto Profits
            </div>
            
            <nav className="menu">
              <a href="#" className="main-btn">Register</a>
            </nav>
          </header>
          {this.routingSystem()}
        </div>
        
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
