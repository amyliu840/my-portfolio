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
              <h3>Pfizer</h3>
              <p>{description}</p>
          </Carousel.Item>

          <Carousel.Item>
              <h3>Voya Financial</h3>
              <p>{description}</p>
          </Carousel.Item>  

          <Carousel.Item>
              <h3>Northwestern Mutual</h3>
              <p>{description}</p>
          </Carousel.Item> 
        </Carousel>
      </div>
    );
  }

}

export default Experience;