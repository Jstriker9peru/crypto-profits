import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Home from './Home.js';
import Results from './Results.js';

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      location: 'home',
      selectedDay: undefined,
      data: '',
    }
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  apiCall() {
    axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1513285669&extraParams=crypto_profits_cp')
      .then((response) => {
        this.setState({
          data: response.data.BTC,
        }, () => {
          console.log(this.state);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
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
            <div className="logo" onClick={this.apiCall}>
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
