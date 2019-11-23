import React, { Component } from 'react';
import { Card, Reveal } from 'semantic-ui-react';
import './Project.css';

class Project extends Component {
  state = { activeItem: 'about-me' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const description = 'Car Dealer App';

    return (
      <div id="experience" className="project-container">
        <h3>Projects</h3>
          <Card>
            <Card.Content>
              <Card.Header>Car Deal App</Card.Header>
              <Card.Description>{description}</Card.Description>
              <a></a>
            </Card.Content>
          </Card>
      </div>
    );
  }

}

export default Project;