import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
    } 
  }
  
  render () {
    return (
      <section id='home'>
        <div className="container">
          <div className="col-md-6">
            <img src="/img/bitcoin-logo.png" className="bitcoin-logo" />
          </div>
          <div className="col-md-6">
            <h2>Enter Transaction</h2>
            <label>Crypto Amount</label>
            <input type="text" name="amount"></input>
            
            <label>Date</label>
            <DayPickerInput onDayChange={this.props.handleDayChange} selected={this.props.globalState.selectedDay} />
    
            <button type="submit">Check Profits</button>
          </div>
        </div>
        
      </section>
    )
  }
}

