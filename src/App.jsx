import React, { Component } from "react";
import AboutMe from "./About-me";
import Experience from "./Experience.jsx";
import Project from "./Project";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "about-me",
    };

    this.handleItemClick.bind(this);
  }

  handleItemClick = ({ name }) => {
    this.ListeningStateChangedEvent({ activeItem: name.toLowerCase() });
  };

  ListeningStateChangedEvent = ({ activeItem }) => {
    const activeElement = document.querySelector(`#${activeItem}`);
    activeElement.animate({ scrollTop: activeElement.offsetTop }, 200);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="App">
        <nav>
          <ul className="header-menu">
            <a href="#about-me">
              <li
                // active={activeItem === 'about-me'}
                onClick={() => this.handleItemClick({ name: "about-me" })}
              >
                About Me
              </li>
            </a>
            <a href="#experience">
              <li
                // active={activeItem === 'experience'}
                onClick={() => this.handleItemClick({ name: "experience" })}
              >
                Experience
              </li>
            </a>
            <a href="#project">
              <li
                // active={activeItem === 'project'}
                onClick={() => this.handleItemClick({ name: "project" })}
              >
                Project
              </li>
            </a>
          </ul>
        </nav>
        <div className="name-container">
          <h1>Hello, this is Amy Liu</h1>
          <h3>Senior Frontend Engineer</h3>
        </div>
        <AboutMe />
        <Experience />
        <Project />
        <footer>
          Powered By{" "}
          <a href="https://www.pexels.com" target="_blank">
            Pexels
          </a>
          ,{" "}
          <a href="https://create-react-app.dev/" target="_blank">
            Creat React App
          </a>{" "}
          &copy; 2019-2025 Amy Liu
        </footer>
      </div>
    );
  }
}

export default App;
