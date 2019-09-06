import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

  render() {

    return (
      <div className="main">
        <div className="about-container">
          <h3>About Me</h3>
        </div>
        <div className="experience-container">
          <h3>Experience</h3>
        </div>
        <div className="contact-me-container">
          <h3>Contact Me</h3>
        </div>
      </div>
    );
  }

}

export default Main;