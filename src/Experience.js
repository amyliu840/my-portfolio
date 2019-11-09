import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './Main.css';

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
      <div>
        <Card>
          <Card.Content header='Pfizer' />
          <Card.Content description={description} />
          <Card.Content extra>
            <Icon name='user' />4 Friends
          </Card.Content>
        </Card>  
        <Card>
          <Card.Content header='Voya Financial' />
          <Card.Content description={description} />
          <Card.Content extra>
            <Icon name='user' />4 Friends
          </Card.Content>
        </Card>     
        <Card>
          <Card.Content header='Northwestern Mutual' />
          <Card.Content description={description} />
          <Card.Content extra>
            <Icon name='user' />4 Friends
          </Card.Content>
        </Card> 
      </div>
    );
  }

}

export default Experience;