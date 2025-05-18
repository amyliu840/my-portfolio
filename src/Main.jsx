import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  state = { activeItem: 'about-me' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <h1 size="huge" className="name-container">Hello, I'm Amy Liu</h1>
      </div>
    );
  }

}

export default Main;