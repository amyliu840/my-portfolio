import React, { Component } from 'react';
import './App.css';
import Main from './Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Main />
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
