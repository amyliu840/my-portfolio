import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './Main.css';

class Main extends Component {
  state = { activeItem: 'about-me' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Header size="huge" className="name-container">Hello, I'm Amy Liu</Header>
      </div>
    );
  }

}

export default Main;