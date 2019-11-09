import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './About.css';

class About extends Component {
  state = { activeItem: 'about-me' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <ul>
          <li>Diverse experience in software development (web and mobile applications)</li>
          <li>Expertise in user interaction design; user experience oriented</li>
          <li>Data analytics for large scale dataset; data visualization focused</li>
        </ul>
      </div>
    );
  }

}

export default About;