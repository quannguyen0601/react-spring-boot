import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
      message: ""
    }

  componentDidMount(){
        fetch("/api/message")
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
              {this.state.message}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
