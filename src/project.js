import React, { Component } from 'react';

function Project() {
  const description = 'Car Dealer App';

  return (
    <div id="experience" className="project-container">
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