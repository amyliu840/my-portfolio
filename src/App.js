import React, { Component } from 'react';
import { Input, Menu, Button, Header } from 'semantic-ui-react';
import AboutMe from './About-me';
import Experience from './Experience';
import $ from 'jquery';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'about-me'
    }

    this.handleItemClick.bind(this);
  }

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }


  handleItemClick = ({ name }) => {
        console.log('on clicked', name);
    this.ListeningStateChangedEvent({ activeItem: name });
  }


  ListeningStateChangedEvent = ({ name }) => {
    console.log('clicked change', name);
    // $('html,body'.animate({ scrollTop: document.querySelector(`#${name}`).offsetTop }, 200));
  } 
  

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        <header>
          <Menu secondary className="header-menu">
            <Menu.Item
              name='About Me'
              active={activeItem === 'about-me'}
              onClick={this.handleItemClick.bind({ name: 'about-me' })}
            />         
            <Menu.Item
              name='Experience'
              active={activeItem === 'experience'}
              onClick={this.handleItemClick.bind({ name: 'experience' })}
            />
            <Menu.Item
              name='Contact Me'
              active={activeItem === 'contact-me'}
              onClick={this.handleItemClick.bind({ name: 'contact-me' })}
            />
          </Menu>
        </header>
        <div class="name-container">
          <h1>Hello, I'm Amy Liu</h1>
        </div>
        <AboutMe />
        <Experience />
        <footer>Powered By Pexels, Creat React App, Semantic UI</footer>
      </div>
    );
  }
}

export default App;
