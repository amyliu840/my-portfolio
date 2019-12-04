import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import './project.css';

function Project() {
  const description = 'Car Dealer App';

  return (
    <div id="project" className="project-container">
      <h3>Projects</h3>
        <Card>
          <Card.Content>
            <Card.Header>Car Dealer App</Card.Header>
            <Card.Description>{description}</Card.Description>
            <a></a>
          </Card.Content>
        </Card>
    </div>
  );
}

export default Project;