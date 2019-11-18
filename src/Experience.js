import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Carousel } from 'react-bootstrap';
import './Experience.css';

class Experience extends Component {
  state = { activeItem: 'about-me' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const description = [
      'Designed, implemented, tested and softly released the web applications based on React, Redux, Webpack and Semantic UI',
      'Architecture Level Improvement: Marionette Events System, Component-based architecture, FLUX unidirectional architecture and data flow, BEM-based SASS architecture including layout, patterns, and helpers and customized SASS, Modern App View Layers',
      'Implemented Google Maps JavaScript API and d3 map API to visually showing data on the map: markers, bubbles, polygons, polylines, data layers and spontaneous response to user interaction'
    ];

    return (
      <div id="experience" className="experience-container">
        <Carousel>
          <Carousel.Item>
            <Card>
              <Card.Content>
                <Card.Header>Pfizer</Card.Header>
                <Card.Meta>March 2017 - January 2019</Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card>
              <Card.Content>
                <Card.Header>Voya Financial</Card.Header>
                <Card.Meta>July 2016 - January 2017</Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>
          </Carousel.Item>  

          <Carousel.Item>
            <Card>
              <Card.Content>
                <Card.Header>Northwestern Mutual</Card.Header>
                <Card.Meta>June 2015 - June 2016</Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>
          </Carousel.Item> 
        </Carousel>
      </div>
    );
  }

}

export default Experience;