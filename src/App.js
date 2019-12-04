import React, { Component } from 'react';
import { Input, Menu, Button, Header } from 'semantic-ui-react';
import AboutMe from './About-me';
import Experience from './Experience';
import Project from './project';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'about-me'
    }

    this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {
    this.ListeningStateChangedEvent({ activeItem: name.toLowerCase() });
  }


  ListeningStateChangedEvent = ({ activeItem }) => {
    const activeElement = document.querySelector(`#${activeItem}`);
    activeElement.animate({ scrollTop: activeElement.offsetTop }, 200);
  } 
  

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        <header>
          <Menu secondary className="header-menu">
            <Menu.Item
              name='about-me'
              active={activeItem === 'about-me'}
              onClick={this.handleItemClick}
              disabled
            />         
            <Menu.Item
              name='experience'
              active={activeItem === 'experience'}
              onClick={this.handleItemClick}
              disabled
            />
            <Menu.Item
              name='project'
              active={activeItem === 'project'}
              onClick={this.handleItemClick}
              disabled
            />
          </Menu>
        </header>
        <div class="name-container">
          <h1>Hello, I'm Amy Liu</h1>
          <h4>Senior Frontend Engineer</h4>
        </div>
        <AboutMe />
        <Experience />
        <Project />
        <footer>Powered By Pexels, Creat React App, Semantic UI</footer>
      </div>
    );
  }
}

export default App;
