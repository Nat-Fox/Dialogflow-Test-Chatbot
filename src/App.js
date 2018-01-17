import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: '59ae9170358a4222a3a79f2a797a8dbf'});

class App extends Component {
  state = {
    currentMessage : ''
  };

  // sendMessage = async () => {
  //   console.info('hallo the message is ', this.state.currentMessage);

  //   const response = await client
  //     .textRequest(this.state.currentMessage);

  //   console.info('the response is ->', response);
    
  //   this.setState({currentMessage: ''});
  // }


  sendMessage = () => {
    console.info('hallo the message is ', this.state.currentMessage);

    client.textRequest(this.state.currentMessage)
      .then(response => {
        console.info('Response de DF', response);
      })
      .catch(error => {
        console.info('error al enviar el mensaje a DF', error);
      });
    
    this.setState({currentMessage: ''});
  }

  handleInputOnMessage = evt => {
    this.setState({
      currentMessage : evt.target.value
    });
  }

  render() {
    return (
      <div style={{marginTop: '20px'}} className="App">
        <input type="text" value={this.state.currentMessage} onChange={this.handleInputOnMessage}/>
        <br />
        <button onClick={this.sendMessage}>Send</button>
      </div>
    );
  }
}

export default App;
