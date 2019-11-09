import React, { Component } from 'react';
import { Input, Menu, Button } from 'semantic-ui-react';
import './App.css';
import Main from './Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'about-me'
    }
  }

  handleItemClick = (e, { name }) => this.ListeningStateChangedEvent({ activeItem: name });
  
  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <Menu secondary className="header-menu">
            <Menu.Item
              name='About Me'
              active={activeItem === 'about-me'}
              onClick={this.handleItemClick}
            />         
            <Menu.Item
              name='Experience'
              active={activeItem === 'experience'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Contact Me'
              active={activeItem === 'contact-me'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
        <Header size="huge" className="name-container">Hello, I'm Amy Liu</Header>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
