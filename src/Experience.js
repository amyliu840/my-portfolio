import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Experience.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
        <AutoPlaySwipeableViews>
            <Card>
              <Card.Content>
                <Card.Header>Pfizer</Card.Header>
                <Card.Meta>March 2017 - January 2019</Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Voya Financial</Card.Header>
                <Card.Meta>July 2016 - January 2017</Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <Card.Header>Northwestern Mutual</Card.Header>
                <Card.Meta>June 2015 - June 2016</Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>
        </AutoPlaySwipeableViews>
      </div>
    );
  }

}

export default Experience;